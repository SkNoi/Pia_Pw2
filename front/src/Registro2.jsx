import 'bootstrap/dist/css/bootstrap.css';
import axios from'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css';
import Footer from './Footer';



function Registro(){
    
    const[tusername,setusername]=useState('');
    const[tnombre,setnombre]=useState('');
    const[tapellido,setapellido]=useState('');
    const[temail,setemail]=useState('');
    const[tcontra,setcontra]=useState('');
    const[trol,setrol]=useState('');
    const[timagen,setimagen]=useState(null);
    const [tfechaNacimiento, setfechaNacimiento] = useState('');
    const [preview, setPreview] = useState(null);
    const nav = useNavigate();

      // Manejar previsualización de imagen
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setimagen(file);
        setPreview(file ? URL.createObjectURL(file) : null);
    };
   
    function sentDatos(e){
        e.preventDefault();
        
        const FrmData = new FormData

        FrmData.append("user", tusername);
        FrmData.append("name", tnombre)
        FrmData.append("apellido", tapellido)
        FrmData.append("email",temail);
        FrmData.append("passw",tcontra);
        FrmData.append("rol",trol);
        FrmData.append("ImgFile", timagen);
        FrmData.append("fechaNacimiento", tfechaNacimiento);
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

    return (
      <>

      <div className="registro-container">
          <h1>Registro</h1>
          <div className="separator"></div>

          <div className="avatar-container">
          <img src={preview || "/Recursos/icon_user.png"} alt="Avatar" className="avatar" />
          </div>
          <form onSubmit={sentDatos} className="form-group-container">
    <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" value={tnombre} onChange={(e) => setnombre(e.target.value)} />
    </div>
    <div className="form-group">
        <label>Apellido</label>
        <input type="text" className="form-control" value={tapellido} onChange={(e) => setapellido(e.target.value)} />
    </div>
    <div className="form-group">
        <label>Username</label>
        <input type="text" className="form-control" value={tusername} onChange={(e) => setusername(e.target.value)} />
    </div>
    <div className="form-group">
        <label>Correo</label>
        <input type="email" className="form-control" value={temail} onChange={(e) => setemail(e.target.value)} />
    </div>
    <div className="form-group">
        <label>Contraseña</label>
        <input type="password" className="form-control" value={tcontra} onChange={(e) => setcontra(e.target.value)} />
    </div>
    <div className="form-group">
        <label>Rol</label>
        <select className="form-control" value={trol} onChange={(e) => setrol(e.target.value)}>
            <option value="1">Usuario</option>
            <option value="2">Admin</option>
        </select>
    </div>
    <div className="form-group full-width">
        <label>Avatar</label>
        <input type="file" className="form-control" onChange={handleImageChange} />
    </div>
    <div className="form-group full-width">
        <label>Fecha de Nacimiento</label>
        <input type="date" className="form-control" value={tfechaNacimiento} onChange={(e) => setfechaNacimiento(e.target.value)} />
    </div>
    <button type="submit" className="btn btn-primary full-width">Registrarse</button>
    
    <Link to="/" className="no-account-link">
    Ya tienes una cuenta? <strong>  Inicia Session</strong>
  </Link>
</form>


      </div>

      <Footer /> {}
      </>
      
  );
}
export default Registro;