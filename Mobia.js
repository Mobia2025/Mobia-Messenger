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

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "Mobia_room.html";
}