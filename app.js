
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyASLu6j461Kt3EM0RXRf-lC-3yjBJJx7jI",
    authDomain: "brewfinder-1516467359328.firebaseapp.com",
    databaseURL: "https://brewfinder-1516467359328.firebaseio.com",
    projectId: "brewfinder-1516467359328",
    storageBucket: "",
    messagingSenderId: "478743922483"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// --------------------------------------------------------------
// Whenever a user clicks the click button
$("#add-employee").on("click", function(event) {
  event.preventDefault();

  // Get the input values

  var beerName = $("#beer-name").val().trim();
  var location = $("#location").val().trim();
  var thoughts = $("#your-thoughts").val().trim();

  // Log the Bidder and Price (Even if not the highest)
/*  console.log(employeeName);
  console.log(role);
  console.log(startDate);
  console.log(monthlyRate);
*/

  database.ref().push({
        beerName: beerName,
        location: location,
        thoughts: thoughts,
  });
});


/*var dateB = moment();
var dateC = moment('2014-10-11');
console.log('Difference is ', dateB.diff(dateC, 'months'), 'months');*/

/*console.log(moment().format("DD/MM/YY hh:mm A"));
console.log(moment(new Date()).format("DD/MM/YY hh:mm A"));*/

 database.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot


/*    console.log(childSnapshot.val().employeeName);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);
    console.log(childSnapshot.val().dateAdded);*/


    // full list of items to the well
    $("#employee-list").append(
      "<div class='row'><div class='col-lg-12'>"
      + childSnapshot.val().beerName
      + "</div><div class='col-lg-3'>"
      + childSnapshot.val().location
      + "</div><div class = 'col-lg-3'>"
      + childSnapshot.val().thoughts
      + "</div><div class = 'col-lg-6'></div>")

  // Handle the errors
  }, function(errorObject) {
});