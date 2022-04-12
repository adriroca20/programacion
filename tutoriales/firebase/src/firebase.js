require('dotenv').config();
const {getFirestore} =require("firebase-admin/firestore");
const{initializeApp, applicationDefault} = require("firebase-admin/app");

initializeApp({
    //Coge la variable de entorno GOOGLE_APPLICATION_CREDENTIALS
    credential: applicationDefault()
});
const db = getFirestore();

module.exports ={
    db
}

