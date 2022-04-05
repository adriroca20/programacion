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
  const botonCrear= document.getElementById("botonCrearCuenta");
  //Listeners
  botonCrear.addEventListener("click", (e)=>{
    createUserWithEmailAndPassword(auth,correo.value,"contraseña").then( Credential=> {
      console.log(Credential.email);
    let user ={
      Nombre: usuario.value,
      Uid: Credential.uid,
      Email: Credential.email
    };
    console.log(Credential.uid);
    console.log(user);
    console.log("Funciona");
    // setDoc(doc(db,"Usuarios", "userCredential.uid"),user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
  });

  //Functions

  function guardarUsuario(user) {
    
}