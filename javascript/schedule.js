$(document).ready(function() {

$('#submit').on('click', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var destination = $('#destination').val();
    var firstTrain = $('#firstTrain').val();
    var frequency = $('#frequency').val();
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

})

});