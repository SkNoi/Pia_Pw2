import 'bootstrap/dist/css/bootstrap.css';
import axios from'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Registro(){
    
    const[tnombre,setnombre]=useState('');
    const[temail,setemail]=useState('');
    const[tcontra,setcontra]=useState('');
    const[timagen,setimagen]=useState(null);
    const nav = useNavigate();

   
    function sentDatos(e){
        e.preventDefault();
        
        const FrmData = new FormData

        FrmData.append("user", tnombre);
        FrmData.append("email",temail);
        FrmData.append("passw",tcontra);
        FrmData.append("ImgFile", timagen);
      axios.post("http://localhost:3001/create",FrmData,
        {
          headers:{'Content-Type': 'multipart/form-data'}
        }
        
      ).then (
        (resp)=>{
          if(resp.data.msg === "Registrado"){
           
            alert("informacion enviada correctamente")
           nav('/Imagenes');
          }else{
           if(resp.data.msg === "Error"){

            alert("Error al registrar");
           }
            
          }

          }

      ).catch((error)=>{console.log("error");})
      
    }

 return(
    <form>
      <h1 Registro></h1>
          <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input onChange={(e)=>setnombre(e.target.value)}  type="name" class="form-control" id="exampleInputName" aria-describedby="NameHelp"></input>
    <div id="NameHelp" class="form-text">We'll never share your name with anyone else.</div>
        </div>
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input onChange={(e)=>setcontra(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div class="mb-3">
    <label for="exampleInputfoto" class="form-label">imagen</label>
    <input onChange={(e)=>setimagen(e.target.files[0])} type="file" class="form-control" id="exampleInputfoto"></input>
        </div>
   
    <button onClick={sentDatos} type="submit" class="btn btn-primary">Submit</button>
    <Link to="/Login" class="btin btn-outliner-primary">Inicio de sesion </Link>
    </form>
 );
}
export default Registro;