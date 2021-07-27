var firebaseConfig = {
    apiKey: "AIzaSyC-0uP7gdpc7t5YqqCKm0BHplKV0W1S5V4",
    authDomain: "project-93-a01ac.firebaseapp.com",
    projectId: "project-93-a01ac",
    storageBucket: "project-93-a01ac.appspot.com",
    messagingSenderId: "926818101534",
    appId: "1:926818101534:web:30092beb7fbcb904e9810f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var user_name=localStorage.getItem("user_name");
  var room_name=localStorage.getItem("room_name");
  function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
    }
    document.getElementById("msg").value="";



     console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;






var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name +"!";

function addRoom() {
       room_name  = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({purpose:"adding a room name"});
       localStorage.setItem("room_name",room_name);
       window.location="chat_page.html";


          
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("roomname -"+ Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


