import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlGetFormateurs = baseURL+"/ListedesFormateurs";
let urlGetFormateurByCin = baseURL+"/getFormateurByCin";
let urlDeleteFormateur = baseURL+"/SupprimerFormateur";
let urlModifierFormateurs = baseURL+"/UpdateFormateur";


export const getUsers=()=>{
    return axios.get(urlGetFormateurs);
}

export const getFormateurByCin=(cin)=>{
    return axios.get(urlGetFormateurByCin+"/"+cin);
}


export const removeFormateurByCin=(cin)=>{
    return axios.delete(urlDeleteFormateur+"/"+cin);
}

export const modifierFormateurByCin=(cin,formateur)=>{
    return axios.put(urlModifierFormateurs+"/"+cin,formateur);
}