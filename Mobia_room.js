// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA19BXg0wpQHlvdFlD0ASGg0JaV8J6mA6g",
    authDomain: "mobia-2-0.firebaseapp.com",
    databaseURL: "https://mobia-2-0-default-rtdb.firebaseio.com",
    projectId: "mobia-2-0",
    storageBucket: "mobia-2-0.appspot.com",
    messagingSenderId: "881219381953",
    appId: "1:881219381953:web:fc201a058216b3cda14240"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //FIREBASE LINKS on top
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

    localStorage.setItem("room_name", room_name);

    window.location = "Mobia_page.html";
}    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    console.log("Room Name - "+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "Mobia_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html"
}
