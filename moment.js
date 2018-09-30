// var tFrequency = 3;

   
    // var firstTime = "012:00";

    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));




 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB5TVlBIc6g9rnEQdcD5SXS4TD2O3rxEbw",
  authDomain: "train-84c6a.firebaseapp.com",
  databaseURL: "https://train-84c6a.firebaseio.com",
  projectId: "train-84c6a",
  storageBucket: "train-84c6a.appspot.com",
  messagingSenderId: "920458011322"
};

// firebase.initializeApp(config);

firebase.database(trainNames).val()
console.log(traneNames)

firebase.database("train");