import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyASFt39eKmfviZKUqWLpOf9OlNnG0I7ZGo",
  authDomain: "laptop-db.firebaseapp.com",
  databaseURL: "https://laptop-db-default-rtdb.firebaseio.com",
  projectId: "laptop-db",
  storageBucket: "laptop-db.appspot.com",
  messagingSenderId: "22176773052",
  appId: "1:22176773052:web:1260c8f88fc63aa097f1b9",
  measurementId: "G-M5P32GCCM6"
};

let app = Firebase.initializeApp(config)
export const db = app.database();