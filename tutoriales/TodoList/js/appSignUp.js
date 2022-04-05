import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection,doc, setDoc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
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
  const auth= getAuth();
  const db= getFirestore(app);
//Selectors
  const usuario= document.getElementById("nombre");
  const correo= document.getElementById("Correo");
  const pass= document.getElementById("contraseña");
  const botonCrear= document.getElementById("botonCrearCuenta");
  const formulario= document.querySelector("form");
  //Listeners
  botonCrear.addEventListener("click", (e)=>{
    createUserWithEmailAndPassword(auth,correo.value,pass.value).then( Credential => {
      console.log(Credential);
      console.log(Credential.user.uid);
      var datosUsuario={
        nombre:usuario.value,
        email:Credential.user.email,
        uid:Credential.user.uid
      }
     setDoc(doc(db,"Usuarios", Credential.user.uid),datosUsuario);
     formulario.reset();
     window.alert('¡Muchas gracias ${Credential.user.name} por registrarte!');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    if(errorCode=="auth/weak-password"){
      window.alert("La contraseña debe contener al menos 6 caracteres");
    }
    else{
      window.alert("Usuario ya registrado");
    }
    // ..
  });
  });

  //Functions

  function guardarUsuario(user) {
    
}