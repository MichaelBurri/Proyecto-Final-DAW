import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage';
import 'firebase/auth'
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyA__mYkBrMcrFw2D8zkBVOcXwHXv7pYdAk",
    authDomain: "web-builder-c7d6e.firebaseapp.com",
    projectId: "web-builder-c7d6e",
    storageBucket: "web-builder-c7d6e.appspot.com",
    messagingSenderId: "421564450293",
    appId: "1:421564450293:web:bb64bb9a6dfcad47f3ccbc",
    measurementId: "G-BS9T5QJC3W"
  };
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
export const storage = firebase.storage();
export default{
    data(){
        return{
            coleccion:''
    }
},

auth: firebase.auth(),
  crearEmail(email, contrasenia) {
      firebase.auth().createUserWithEmailAndPassword(email, contrasenia)
          .then((userCredential) => {
              console.log(userCredential);
              let user = userCredential.user;
              console.log(user);
          })
          .catch((error) => {
              console.warn("Error " + error.code + ": "+ error.message);
              this.errror=error.code;
          });
        return (this.errror)  
  },
  loginEmail(email, contrasenia) {
      firebase.auth().signInWithEmailAndPassword(email, contrasenia)
          .then((userCredential) => {              
              console.log(userCredential);
              let user = userCredential.user;
              console.log(user);
          })
          .catch((error) => {
              console.warn("Error " + error.code + ": "+ error.message);
          });
  },
  logout() {
      firebase.auth().signOut()
          .then(function () {
              console.log("Log out");
          })
          .catch(function (error) {
              console.log(error);
          });
  },
  crearColeccion(coleccion,documento,datos){
    console.log(coleccion,documento)
    db.collection(coleccion).doc(documento).set(datos)
    .then(() => {
        console.log("Subido con éxito");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  },
  comprobarColeccion(coleccion,documento){
    var docRef=db.collection(coleccion).doc(documento);
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

};

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })