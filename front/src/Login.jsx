import 'bootstrap/dist/css/bootstrap.css';
import axios from'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Footer from './Footer';


function Login(){
  
   
    const[temail,setemail]=useState('');
    const[tcontra,setcontra]=useState('');
    const nav = useNavigate();
    function login(e){
        e.preventDefault();
        axios.post("http://localhost:3001/Login",
          {
            email:temail,
            passw:tcontra
          }
        ).then (
          (resp)=>{
            if(resp.data.message === "Encontrado"){
              console.log(resp);
              alert("Usuario encontrado");
              nav("/Home");
            }else if(resp.data.message === "No encontrado"){
             alert("Usuario no encontrado");
            }

          }
        ).catch((error)=>{console.log("error");})


    }
   

 return(

  <>
  <div className="header">
    <div className="logo">LA BUTACA CRITICA</div>
</div>

  <div className="login-container">
    <form>
        <h1>Inicio de sesion</h1>   
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
        <div className="separator"></div>
        <Link to="/Registro" className="no-account-link">
    NO tienes cuenta? <strong>Registrate</strong>
  </Link>
    </form>

    </div>

    <Footer /> {}
    </>
    
 );
}
export default Login;