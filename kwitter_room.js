var firebaseConfig = {
  apiKey: "AIzaSyAr00BFkjE_3jPyjnGrICFYktqpv2OxVa8",
  authDomain: "project-214f6.firebaseapp.com",
  databaseURL: "https://project-214f6-default-rtdb.firebaseio.com",
  projectId: "project-214f6",
  storageBucket: "project-214f6.appspot.com",
  messagingSenderId: "524691712839",
  appId: "1:524691712839:web:7e8f9db302ca68d6173a62",
  measurementId: "G-052QXTSYGQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

