const bcrypt = require("bcrypt");
// model
const user = require("../model/user.model");
const contactusModel = require("../model/contactus.model");
const newsletter = require("../model/subscribe.model");
const { default: axios } = require("axios");
const { findOne } = require("../model/products.model");

// usuario login

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
              message: "La contraseña es incorrecta.",
            });
          }
          return res.send({
            status : true,
            message : 'Usuario verificado con éxito.',
            data : userRes,
          })
          }).catch((err)=>{
            res.status(403).send(err)
          })
      } else {
        return res.status(403).send({
          status: false,
          message: "El email es incorrecto.",
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
        message : 'Ya existe un usuario con este email.'
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
          message : 'Usuario registrado correctamente.',
          data : isUserSaved
        })
      }
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: 'Error, algo ha ido mal. Por favor, vuelve a probar.'
    })
  }
}

const contactUs = async (req,res) => {
  try {
    const contact = await contactusModel(req.body).save();
    if(contact){
      res.status(200).send({
        status: true,
        message: 'Tu mensaje ha sido correctamente enviado. Nos pondremos en contacto con usted.'
      })
    } else {
      res.status(200).send({
        status: false,
        message: 'Error, algo ha ido mal. Por favor, vuelve a probar.'
      })
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: 'Error, algo ha ido mal. Por favor, vuelve a probar.'
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
        message : 'ciudad no encontrada'
      })
    }
  } catch (error) {
    res.status(200).send({
      status: false,
      message: 'Error, algo ha ido mal. Por favor, vuelve a probar.'
    })
  }
}

const subscribe = async (req,res) => {
  try {
    const {email} = req.body;
    const isExist = await newsletter.findOne({email : email}).exec();
    if(isExist) {
      return res.send({
        status :false,
        message: 'Ya estás subscrito a nuestra newsletter',
        data : isExist
      })
    } else {
      const response = await newsletter(req.body).save();
      if(response) {
        return res.send({
          status :true,
          message: '¡Gracias! Recibirás las últimas novedades próximamente.',
          data : response
        })
      }
    }

  } catch (error) {
    console.log(error)
    res.status(200).send({
      status: false,
      message: 'Error, algo ha ido mal. Por favor, vuelve a probar.'
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