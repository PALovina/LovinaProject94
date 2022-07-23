
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTvHPadsn0NWbU06WigyAeN9xQ-uLdziA",
  authDomain: "twitter-43dc3.firebaseapp.com",
  databaseURL: "https://twitter-43dc3-default-rtdb.firebaseio.com",
  projectId: "twitter-43dc3",
  storageBucket: "twitter-43dc3.appspot.com",
  messagingSenderId: "859320649940",
  appId: "1:859320649940:web:73e63a68bd235cfe241341"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

}