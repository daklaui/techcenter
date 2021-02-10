import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlAddSession = baseURL+"/AjoutSession";
let urlGetSessions = baseURL+"/ListedesSessions";
let urlGetSessionById = baseURL+"/getSessionById";
let urlGetSessionByIdFormation = baseURL+"/getSessionByIdFormation";
let urlGetSessionByIdFormateur = baseURL+"/getFormationById";
let urlGetSessionByIdEtudiant = baseURL+"/getFormationById";
let urlDeleteSessionById = baseURL+"/SupprimerSession";
let urlDeleteSessions= baseURL+"/SupprimerFormations";
let urlModifierSession = baseURL+"/UpdateSession";

export const  ajouterSession=(session)=>{
    return axios.post(urlAddSession,session);
}

export const  getSessionByIdFormation=(id)=>{
    return axios.get(urlGetSessionByIdFormation+"/"+id);
}



export const  getSessionById=(id)=>{
    return axios.get(urlGetSessionById+"/"+id);
}


export const  modifierSessionById=(id,session)=>{
    return axios.put(urlModifierSession+"/"+id,session);
}



export const  removeSessionById=(id,index)=>{
    return axios.delete(urlDeleteSessionById+"/"+id+"/"+index);
}


