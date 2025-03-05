import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import './PerfilUsuario.css'; // Importa el archivo CSS personalizado

function PerfilUsuario() {
    const [tusername, setusername] = useState('SkarNoi');
    const [tnombre, setnombre] = useState('Bryan');
    const [tapellido, setapellido] = useState('Pardo');
    const [temail, setemail] = useState('bpardo844@gmail.com');
    const [tcontra, setcontra] = useState('');
    const [timagen, setimagen] = useState(null);
    const [tfechaNacimiento, setfechaNacimiento] = useState('1999-11-05');
    const [preview, setPreview] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        // Cargar datos del usuario (puedes descomentar la llamada a la API si es necesario)
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setimagen(file);
        setPreview(file ? URL.createObjectURL(file) : null);
    };

    function sentDatos(e) {
        e.preventDefault();

        const FrmData = new FormData();
        FrmData.append("user", tusername);
        FrmData.append("name", tnombre);
        FrmData.append("apellido", tapellido);
        FrmData.append("email", temail);
        FrmData.append("passw", tcontra);
        FrmData.append("ImgFile", timagen);
        FrmData.append("fechaNacimiento", tfechaNacimiento);

        axios.post("http://localhost:3001/update", FrmData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((resp) => {
            if (resp.data.msg === "Perfil Actualizado") {
                alert("Información actualizada correctamente");
                nav('/Imagenes');
            } else {
                alert("Error al actualizar el perfil");
            }
        }).catch((error) => {
            console.log("error", error);
        });
    }

    return (
        <>
        <Navbar></Navbar>
            <div className="perfil-usuario-container">
                <h1>Editar Perfil</h1>
                <div className="separator"></div>

                <div className="perfil-content">
                    <div className="avatar-container">
                        <img src={preview || "/Recursos/icon_user.png"} alt="Avatar" className="avatar" />
                        <input type="file" className="form-control" onChange={handleImageChange} />
                    </div>
                    <form onSubmit={sentDatos} className="formulario-perfil">
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Nombre(s)</label>
                                <input type="text" className="form-control" value={tnombre} onChange={(e) => setnombre(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Apellido(s)</label>
                                <input type="text" className="form-control" value={tapellido} onChange={(e) => setnombre(e.target.value)} />
                            </div>
                            
                            <div className="form-group">
                                <label>Fecha de Nacimiento</label>
                                <input type="date" className="form-control" value={tfechaNacimiento} onChange={(e) => setfechaNacimiento(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" value={temail} onChange={(e) => setemail(e.target.value)} />
                            </div>
                            <div className="form-group full-width">
                                <label>Contraseña</label>
                                <input type="password" className="form-control" value={tcontra} onChange={(e) => setcontra(e.target.value)} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary full-width">Actualizar</button>

                        <Link to="/" className="no-account-link">
                            Volver al inicio
                        </Link>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PerfilUsuario;