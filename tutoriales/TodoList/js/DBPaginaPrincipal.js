import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth ,signInWithEmailAndPassword, sendPasswordResetEmail,GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection,doc, setDoc,getDoc} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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
  
  const firebase= getFirestore(app);
  var Documento= doc(firebase,"Usuarios","sBnDW7OEnpRqBQ1ORFTiCqsAuPD3");
  const datosDoc = await getDoc(Documento);
//Selectors
const botonAux= document.getElementById("prueba");
const BotonCerrarSesion = document.getElementById("cerrarSesion");
//Listeners
window.onload=cargarDatos;
BotonCerrarSesion.addEventListener("click", cerrarSesion);
botonAux.addEventListener("click", ()=>{
  console.log(auth.currentUser.uid);
});
//Functions

function cargarDatos(event){
  
  if (datosDoc.exists()) {
    console.log("Document data:", datosDoc.data());
  } else {
    console.log("No such document!");
  }
}

function cerrarSesion(event){
  auth.signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}