 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA_BgR4X1PT7nR1orfScg8NL6344aJV2O8",
    authDomain: "lets-chat-5be7b.firebaseapp.com",
    databaseURL: "https://lets-chat-5be7b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5be7b",
    storageBucket: "lets-chat-5be7b.appspot.com",
    messagingSenderId: "191233050455",
    appId: "1:191233050455:web:6ceceeffd40f2439262012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");   

function Send_message() {
        msg = document.getElementById("Type_message").value;
        firebase.database().ref(room_name).push({
              name : user_name,
              message : msg,
              like : 0
        });
        document.getElementById("Type_message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
