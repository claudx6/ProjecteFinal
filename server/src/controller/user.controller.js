const bcrypt = require("bcrypt");
// model
const user = require("../model/user.model");
const contactusModel = require("../model/contactus.model");
const newslater = require("../model/subsrice.model");
const { default: axios } = require("axios");
const { findOne } = require("../model/products.model");

// user login

const auth = async (req,res) => {
  try {
    const {email, password} = req.body;
    user.findOne({email:email}).then(async(userRes)=>{
      if(userRes){
        const validPass = bcrypt.compare(password, userRes.password);
        validPass.then(async (result) => {
          if (!result) {
            return res.status(403).send({
              status: false,
              message: "Your password is incorrect.",
            });
          }
          return res.send({
            status : true,
            message : 'User verified successfully.',
            data : userRes,
          })
          }).catch((err)=>{
            res.status(403).send(err)
          })
      } else {
        return res.status(403).send({
          status: false,
          message: "Your email is incorrect.",
        });
      }
    }).catch((err)=>{
      res.status(403).send(err)
    })
  } catch (error) {
    res.status(403).send(error)
  }
}

const register = async (req,res) => {
  try {
    const {email,name,password,phone,surname} = req.body;
    const isUser = await user.findOne({email:email});
    if(isUser) {
      return res.send({
        status : false,
        message : 'User already exist with this email.'
      })
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const isUserSaved = await user({
        name : name,
        surname : surname,
        phone : phone,
        email : email,
        password : hashedPassword
      }).save();
      if(isUserSaved) {
        return res.send({
          status : true,
          message : 'User register successfully.',
          data : isUserSaved
        })
      }
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: 'Sorry, something went wrong. Please try again later.'
    })
  }
}

const contactUs = async (req,res) => {
  try {
    const contact = await contactusModel(req.body).save();
    if(contact){
      res.status(200).send({
        status: true,
        message: 'Your message has been successfully sent. We will get back to you soon.'
      })
    } else {
      res.status(200).send({
        status: false,
        message: 'Sorry, something went wrong. Please try again later.'
      })
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: 'Sorry, something went wrong. Please try again later.'
    })
  }
}

const getWeatherByCity = async (req,res) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cityName}&appid=64f60853740a1ee3ba20d0fb595c97d5`);
    if(response.data) {
      return res.send({
        status :true,
        data : response.data
      })
    } else {
      return res.send({
        status : false,
        message : 'city not found'
      })
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: 'Sorry, something went wrong. Please try again later.'
    })
  }
}

const subscribe = async (req,res) => {
  try {
    const {email} = req.body;
    const isExist = await newslater.findOne({email : email}).exec();
    if(isExist) {
      return res.send({
        status :false,
        message: 'Your Already subscribe our newslatter',
        data : isExist
      })
    } else {
      const response = await newslater(req.body).save();
      if(response) {
        return res.send({
          status :true,
          message: 'Thankyou! you will receive the latest news',
          data : response
        })
      }
    }

  } catch (error) {
    console.log(error)
    res.status(200).send({
      status: false,
      message: 'Sorry, something went wrong. Please try again later.'
    })
  }
}

module.exports = {
    auth,
    register,
    contactUs,
    getWeatherByCity,
    subscribe
}