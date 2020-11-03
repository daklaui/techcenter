import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlGetEtudiants = baseURL+"/ListedesEtudiants";
let urlGetEtudiantByCin = baseURL+"/getEtudiantByCin";
let urlDeleteEtudiants = baseURL+"/SupprimerEtudiant";
let urlModifierEtudiants = baseURL+"/UpdateEtudiant";
export const  getUsers=()=>{
    return axios.get(urlGetEtudiants);
}

export const  getEtudaintByCin=(cin)=>{
    return axios.get(urlGetEtudiantByCin+"/"+cin);
}


export const  removeEtudiantByCin=(cin)=>{
    return axios.delete(urlDeleteEtudiants+"/"+cin);
}

export const  modifierEtudiantByCin=(cin,etudiant)=>{
    return axios.put(urlModifierEtudiants+"/"+cin,etudiant);
}