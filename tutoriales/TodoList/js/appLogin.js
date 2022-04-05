import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth ,signInWithEmailAndPassword, sendPasswordResetEmail,GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
var requirejs = require('requirejs');
var file = require('file-system');

  const firebaseConfig = {
    apiKey: "AIzaSyBTG9ZDprSVA7euWOG1trQFPKYKou1Armo",
    authDomain: "todo-list-b5681.firebaseapp.com",
    projectId: "todo-list-b5681",
    storageBucket: "todo-list-b5681.appspot.com",
    messagingSenderId: "386055002259",
    appId: "1:386055002259:web:f90eb501b4bdc6975f1566",
    measurementId: "G-JHP9BNCXY1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();
  const auth= getAuth();


//Selectors
const botonInicioSesion= document.querySelector(".botonInicioSesion");
const inicioGoogle =  document.getElementById("iniciarSesionGoogle");
const checkBoxPass =  document.getElementById("checkBoxPass");
const textBoxCorreo= document.getElementById("CorreoElectronico");
const textBoxContraseña=document.getElementById("contraseña");
const BotonRecordarContraseña= document.querySelector(".pass");

//Listeners
inicioGoogle.addEventListener("click",iniciarSesionGoogle);
botonInicioSesion.addEventListener("click",iniciarSesion);
checkBoxPass.addEventListener("click",cambiarContra2Texto);
BotonRecordarContraseña.addEventListener("click",recordarContraseña);
//Functions
function iniciarSesionGoogle(event){
    signInWithRedirect(auth,provider);
    
    getRedirectResult(auth)
     .then((result) => {
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       fs.writeFile("./",token);
      //  var datosUsuario={
      //   nombre:token.user
      //   email:result.user.email,
      //   uid:result.user.uid
      // }
      // setDoc(doc(db,"Usuarios", result.user.uid),datosUsuario);
      
      window.location.href("../paginaPrincipal.html");
     }).catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       const email = error.email;
       const credential = GoogleAuthProvider.credentialFromError(error);
});
}
function iniciarSesion(event){
  signInWithEmailAndPassword(auth,textBoxCorreo.value,textBoxContraseña.value).then((userCredential) => {
    const user = userCredential.user;
    console.log("Sesion iniciada con: " + user.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert('Correo o contraseña incorrecta');
  });
}

function cambiarContra2Texto() {
  if (textBoxContraseña.type === "password") {
    textBoxContraseña.type = "text";
  } else {
    textBoxContraseña.type = "password";
  }
}

function recordarContraseña(event){
  console.log("funciono");
  auth.sendPasswordResetEmail(textBoxCorreo.value).then(()=> {
    window.alert("Se ha enviado un correo de recuperacion a: " + textBoxCorreo.value);
  }).catch(function(error) {
    window.alert("Usuario no registrado");
  });
  }





