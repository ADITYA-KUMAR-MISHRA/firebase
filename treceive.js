var firebase = require('firebase')    //import firebase module
//firebaes configuration 
var firebaseConfig = {            
    /********************************************************************************* 
    Paste your firebase configuration from general tab of overview/project settings
  *********************************************************************************/
    apiKey: "AIzaSyCEBY3s1a5SFFK69EqrXNXa2fTn75n9MGU",
    authDomain: "tutorial-6b467.firebaseapp.com",
    projectId: "tutorial-6b467",
    storageBucket: "tutorial-6b467.appspot.com",
    messagingSenderId: "416697847102",
    appId: "1:416697847102:web:210bcbd46addbe237db06f",
    measurementId: "G-BF2WVB9DW7"
  };
  //initialize the firebase app
firebase.initializeApp(firebaseConfig);
var firebaseDB = firebase.database();
firebaseDB.ref().get().then((snapshot) => {
    if(snapshot.exists()) {
        console.clear();
        console.log(snapshot.val())
        return snapshot.val();
    }
    else console.log("No data available");
})
//set data to 'Testing' child/key