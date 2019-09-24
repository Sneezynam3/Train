// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxq3aGL4DN8D7jvWUsiZYMZu3_Q1sp9DY",
    authDomain: "train-conductor.firebaseapp.com",
    databaseURL: "https://train-conductor.firebaseio.com",
    projectId: "train-conductor",
    storageBucket: "",
    messagingSenderId: "768965909493",
    appId: "1:768965909493:web:0a6f66e7d66a4b594c9ebc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var trainName = "";
var destination = "";
var frequency = "";
var nextArrival = "";

$("#addTrain").on("click", function () {
    trainName = $("#trainNameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    nextArrival = $("#nextArrivalInput").val().trim();

    firebase.database().ref().set({
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival
    })
})