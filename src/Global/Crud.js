import axios from 'axios'
const  api = axios.create({
    baseURL:''
  });

//constructor(){}

 async function add(path,data)
    {
       return await axios.post(path,data);
    }

    async function Update(path,data)
    {
       return await axios.put(path,data);
    }  
 async function getData(path)
    {

        return axios.get(path);
    }

    


export  {add,getData,Update};