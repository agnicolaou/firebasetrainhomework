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