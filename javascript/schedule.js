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
    var trainName = val.name;
    var Traindestination = val.destination;
    var Trainfrequency = val.frequency;
    var ThefirstTrain = val.firstTrain;
    var arrival = "12:00";
    var minutes = "1800";

    

    var row = $('<tr>');
    row.append('<td>' + trainName + '</td>');
    row.append('<td>' + Traindestination + '</td>');
    row.append('<td>' + Trainfrequency + '</td>');
    row.append('<td>' + ThefirstTrain + '</td>');
    row.append('<td>' + minutes + '</td>');

    $('tbody').append(row);
});

})
