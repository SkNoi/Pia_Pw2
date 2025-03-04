import {useEffect,useState} from "react";
import axios from'axios';

function Imagenes(){
const [userData, setUserData]= useState([]);  
const[valor, setvalor]= useState(true);
useEffect(
  () => {
     //ejecutar
   axios.get("http://localhost:3001/getUsers",{

   }).then(
    (resp)=>{

        if(resp.data.msg === "Error"){


            alert("Error al obtener la informacion")
        }else if(resp.data.msg === "No info"){

            alert("No hay usuarios registrados");
        }else {
            setUserData(resp.data);
        }
    }
   )
  }, []);

  return(
    userData.map(

        (user,key)=>{
            return (   <div className="card" style ={{width: "18rem"}}>
                <img src={'data:image/png;base64,'+user.Foto} classname="card-img-top"/>
                <div className = "card-body">
                 <h5 className = "card-title">{user.Nombre}</h5>
                 </div>
                 </div>)
         

            //foreach(usuario in usuarios)
         }
    )
    
  
    
  )
 
}
export default Imagenes;


