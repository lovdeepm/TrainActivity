$(document).ready(function() {


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcPeJe3nHQtSemzjSqFW8VX9Dc9s1rHsY",
    authDomain: "firstproject-79074.firebaseapp.com",
    databaseURL: "https://firstproject-79074.firebaseio.com",
    projectId: "firstproject-79074",
    storageBucket: "firstproject-79074.appspot.com",
    messagingSenderId: "79949790577"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('#submit').on('click', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var destination = $('#destination').val();
    var firstTrain = $('#firstTrain').val();
    var frequency = $('#frequency').val();


    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    });





})

database.ref().on('child_added', function(snapshot){
    console.log(snapshot.val());
    var val = snapshot.val();
    var name = val.name;
    var destination = val.destination;
    var firstTrain = val.firstTrain;
    var frequency = val.frequency;
    var arrival = "";
    var minutes = "";

    var row = $('<tr>');
    row.append('<td>' + name + '</td>');
    row.append('<td>' + destination + '</td>');
    row.append('<td>' + firstTrain + '</td>');
    row.append('<td>' + frequency + '</td>');
    row.append('<td>' + arrival + '</td>');
    row.append('<td>' + minutes + '</td>');

    $('tbody').append(row);
});
})