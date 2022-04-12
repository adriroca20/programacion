const {db} = require("../firebase");
const {Router} = require("express");

const router= Router(); 

router.get("/", async (req,res)=>{
    const querySnapshot= await db.collection("contacts").get();

    const contacts=querySnapshot.docs.map(doc => ({
        id: doc.id,
        //Por si quieres tarerte datos concretos de la coleccion
        // firstname: doc.data().firstname,
        // lastname: doc.data().lastname,
        // phone:doc.data().phone

        //Para todos los datos, tienes que copiar lo que hay en data
        ...doc.data()
    }));

    //Carga el index.hbs
    res.render("index",{contacts});
});

router.post("/new-contact", async (req,res)=>{
    const {firstname,lastname,email,phone} = req.body;

    await db.collection("contacts").add({
        firstname,
        lastname,
        email,
        phone
    });
    //Redirecciona a la pagina principal
    res.redirect("/");

    //Aparece una pagina con el mensaje
    //res.send("Nuevo contacto creado");
});

router.get("/edit-contact/:id", async (req,res)=>{
    //Coge el id del parametro id de la url
    const documento= await db.collection("contacts").doc(req.params.id).get();
    res.render("index",{contact: {
        id:documento.id,
        ...documento.data()
    }});

    //Aparece una pagina con el mensaje
    // res.send("Editar contacto");
   
});

router.get("/delete-contact/:id", async(req,res)=>{
    const documento= await db.collection("contacts").doc(req.params.id).delete();

    res.redirect("/");
    // res.send("Contacto eliminado");
});

router.post("/update-contact/:id", async(req,res)=>{
    const documento= await db.collection("contacts").doc(req.params.id).update(req.body);

    res.redirect("/");
    // res.send("Contacto actualizado");
});

module.exports=router;