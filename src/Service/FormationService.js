import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlGetFormations = baseURL+"/ListedesFormations";
let urlGetFormationByID = baseURL+"/getFormationById";
let urlDeleteFormation = baseURL+"/SupprimerFormation";
let urlModifierFormation = baseURL+"/UpdateFormation";


export const getFormations=()=>{
    return axios.get(urlGetFormations);
}

export const getFormationById=(id)=>{
    return axios.get(urlGetFormationByID+"/"+id);
}


export const removeFormationById=(id)=>{
    return axios.delete(urlDeleteFormation+"/"+id);
}

export const modifierFormationById=(id,formation)=>{
    return axios.put(urlModifierFormation+"/"+id,formation);
}