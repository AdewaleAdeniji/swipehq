 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDoHlvQm6D3pusNqioo_hZ_KgTuN96fRIo",
    authDomain: "swipebase-c9051.firebaseapp.com",
    databaseURL: "https://swipebase-c9051.firebaseio.com",
    projectId: "swipebase-c9051",
    storageBucket: "swipebase-c9051.appspot.com",
    messagingSenderId: "989196686963",
    appId: "1:989196686963:web:51a8c428e1f1ebc1f93c06",
    measurementId: "G-52GJY3WPEY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//  console.log(firebase);

const dbRef = firebase.database().ref();
$('#myform').submit(function(e){
e.preventDefault();
const usersRef = dbRef.child('messages');
var user = {
    "message":document.getElementById('message').value,
    "email": document.getElementById('email').value,
    "name": document.getElementById('name').value
};
document.getElementById('msg').innerHTML="Sending your message ...";
document.getElementById('mybtn').innerHTML='<i class="fa fa-spinner fa-spin"></i>';
document.getElementById('mybtn').disabled=true;
usersRef.push(user, function () {
    document.getElementById('mybtn').disabled=false;
document.getElementById('msg').innerHTML="Message sent successfully";
document.getElementById('mybtn').innerHTML='Send Message';
})
})