const express= require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');

app.use(cors());
app.use(express.json());

app.listen(3001,
  console.log("escuchando el servidor")

)

const db = mysql.createConnection(
    {host:"localhost", user:"root", password:"",database:"registro", port:3306

    }

)

const fileFlt = (req,file, cb) => {
    const formatos = ['image/png','image/jpeg','image/jpg'];

   if(formatos.includes(file.mimetype)) {

     cb(null, true);


   }else{

   return cb(new Error('Archivo no aceptado'));

   }

 }
const strg = multer.memoryStorage();
const archivo = multer(
    {
         storage: strg,
        fileFilter: fileFlt

    }
)
app.post("/create",archivo.single('ImgFile'),
   (req,resp)=>{
    const usuario= req.body.user;
    const correo= req.body.email;
    const contra= req.body.passw;
    const img64 = req.file.buffer.toString('base64');
   

    db.query('INSERT INTO datos(Nombre, email, password,Foto) VALUES(?,?,?,?)',    
    [usuario,correo,contra,img64],(err,data)=>{ 
        if(err)
        {
            console.log(err)

            resp.json({
              "msg":"Error"

            })
        } else {
        console.log("informacion guardada ");

        resp.json({

            "msg":"Registrado"
        })
     }   
 
    }
)
   
   }

)

app.post("/Login",
    (req,resp)=>{
     db.query("SELECT * FROM datos WHERE email=? AND password=?",
        [req.body.email,  req.body.passw],

        (err, data)=>{

            if(err){

                console.log(err);
            }
            else {
                if(data.length > 0){
                 resp.json({
                 "message": "Encontrado",
                 "usuario": data[0].nombre
                 })

                }
                else {

                    console.log(data);
                    resp.json({
                        "message": "No encontrado",
                        })
                }

            }
        }  

     )

    }
)

app.get("/getUsers",(req,resp)=>{

    db.query("SELECT Nombre,Foto FROM datos",
    (err,data)=>{
      if(err){
        resp.json({
    
        "msg": "Error"
    
        })
        console.log("error");
    }else if(data.length > 0){

      resp.json(data);
      console.log(data);
    }else{

        resp.json({

       "msg":"No info"     
        })
        console.log("No info");
    }

    }


    )
})