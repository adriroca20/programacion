import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth , GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
//Listeners
inicioGoogle.addEventListener("click",iniciarSesionGoogle);

//Functions
function iniciarSesionGoogle(event){
    signInWithRedirect(auth,provider);
    
   getRedirectResult(auth)
     .then((result) => {
       // This gives you a Google Access Token. You can use it to access Google APIs.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;

       // The signed-in user info.
       const user = result.user;

     }).catch((error) => {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
});
}

