// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBWCLPdCrosyLSNhlTWa363nEhMrz9IeRY",
    authDomain: "train-a0858.firebaseapp.com",
    databaseURL: "https://train-a0858.firebaseio.com",
    projectId: "train-a0858",
    storageBucket: "train-a0858.appspot.com",
    messagingSenderId: "743255998855",
    appId: "1:743255998855:web:e9879b9099bef766ea1322"
};

firebase.initializeApp(firebaseConfig);

// Storing firebase table in variable
var trainDB = firebase.database();

// Created initial table in database (name:, destination:, trainTime:, frequency:)

// Create button to submit user train data
$("#add-button").on("click", function (event) {

    event.preventDefault();

    // Store user train input in variables
    var trainName = $("#train-name-input").val().trim();

    var destination = $("#destination-input").val().trim();

    var trainTime = $("#first-train-input").val().trim();

    var frequency = $("#frequency-input").val().trim();

    // Creates object of user input data
    var userTrain = {
        name: trainName,
        destination: destination,
        trainTime: trainTime,
        frequency: frequency
    };

    // Send userTrain data to database
    trainDB.ref().push(userTrain);
    console.log(userTrain.name);
    console.log(userTrain.destination);
    console.log(userTrain.trainTime);
    console.log(userTrain.frequency);

    // Alert
    alert("You added a new train!");