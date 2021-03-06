import {baseURL} from '../Global/Const';
const axios = require("axios").default;
let urlAddFormations = baseURL+"/AjoutFormation";
let urlGetFormations = baseURL+"/ListedesFormations";
let urlGetFormationById = baseURL+"/getFormationById";
let urlDeleteFormationById = baseURL+"/SupprimerFormation";
let urlDeleteFormations= baseURL+"/SupprimerFormations";
let urlModifierFormation = baseURL+"/UpdateFormation";
let urlUploadImage = baseURL+"/api/imageFormation";
let urlGetImage = baseURL+"/image";

export const  ajouterFormation=(formation)=>{
    return axios.post(urlAddFormations,formation);
}

export const  getFormations=()=>{
    return axios.get(urlGetFormations);
}

export const  getFormationById=(id)=>{
    return axios.get(urlGetFormationById+"/"+id);
}
export const  getImage=(id)=>{
    return axios.get(urlGetImage+"/"+id);
}


export const  removeFormationById=(id)=>{
    return axios.delete(urlDeleteFormationById+"/"+id);
}

export const  modifierFormationById=(id,formation)=>{
    return axios.put(urlModifierFormation+"/"+id,formation);
}

export const  uploadeImage=(image,id)=>{
    return axios.put(urlUploadImage+"/"+id,image);
}