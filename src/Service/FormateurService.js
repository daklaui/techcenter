import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlGetEtudiants = baseURL+"/ListedesFormateurs";
let urlGetEtudiantByCin = baseURL+"/getFormateurByCin";
let urlDeleteEtudiants = baseURL+"/SupprimerFormateur";
let urlModifierEtudiants = baseURL+"/UpdateFormateur";
export const  getUsers=()=>{
    return axios.get(urlGetEtudiants);
}

export const  getFormateurByCin=(cin)=>{
    return axios.get(urlGetEtudiantByCin+"/"+cin);
}


export const  removeFormateurByCin=(cin)=>{
    return axios.delete(urlDeleteEtudiants+"/"+cin);
}

export const  modifierFormateurByCin=(cin,etudiant)=>{
    return axios.put(urlModifierEtudiants+"/"+cin,etudiant);
}