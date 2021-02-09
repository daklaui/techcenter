import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlGetSpécialités = baseURL+"/ListedesSpécialités";
let urlDeleteSpécialité = baseURL+"/SupprimerSpécialité";


export const  getSpécialités=()=>{
    return axios.get(urlGetSpécialités);
}

export const  removeSpécialitéById=(id)=>{
    return axios.delete(urlDeleteSpécialité+"/"+id);
}


