import { url } from "../api/api";
import axios from "axios";

const signUp = async(json) => {
    let URL = `${url}/user/register`
    return await axios.post(URL,json)
 }

const signIn = async(json) => {
    let URL = `${url}/user/login`
    return await axios.post(URL,json)
 }
const getProducts = async(json) => {
   let URL = `${url}/product`
   return await axios.post(URL,json)
}
const getProductById = async(json) => {
   let URL = `${url}/product/${json}`
   return await axios.get(URL)
}
const contactUs = async(json) => {
   let URL = `${url}/user/contact-us`
   return await axios.post(URL,json)
}
const getWeatherByCityName = async(json) => {
   let URL = `${url}/user/weather?cityName=${json}`
   return await axios.get(URL)
}
const subscribe = async(json) => {
   let URL = `${url}/user/subscribe`
   return await axios.post(URL,json)
}


export {
   signUp,
   signIn,
   getProducts,
   contactUs,
   getWeatherByCityName,
   getProductById,
   subscribe
}