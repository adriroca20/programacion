import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth , GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const textBoxUsuario= document.getElementById("NombreUsuario");
const textBoxContraseña=document.getElementById("contraseña");
//Listeners
inicioGoogle.addEventListener("click",iniciarSesionGoogle);

//Functions
function iniciarSesionGoogle(event){
    signInWithRedirect(auth,provider);
    
   getRedirectResult(auth)
     .then((result) => {
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;

       const user = result.user;

       set(ref())

     }).catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       const email = error.email;
       const credential = GoogleAuthProvider.credentialFromError(error);
});
}




