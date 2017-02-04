$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  
  $(document).on("submit", "#seller-form", handleStudentFormSubmit);
  

  // A function to handle what happens when the form is submitted to create a new Author
  function handleStudentFormSubmit(event) {
    event.prev entDefault();

    var name = $("#student-name").val().trim();
    var studentID = $("#student-id").val().trim();
    var amountMoney = $("#amount-money").val().trim();
    var numSwipes = $("#numberSwipes").val().trim();
    var password = $("#password").val().trim();

    var inputs = [name, studentID, amountMoney, numSwipes, password];

    // check for blanks.
    var check = checkBlank(inputs);

    if(check) {
      return;
    }
    
    var newStudent = {
      name: $("#student-name").val().trim(), 
      studentID: $("#student-id").val().trim(),
      amountMoney: $("#amount-money").val().trim(),
      numSwipes: $("#numberSwipes").val().trim(),
      password: $("#password").val().trim()
    };

    $.get("/api/students",newStudent)
    .done(function(data) {

        console.log("consoling newSeller data from newSeller.js " + data);
    });

    $("#name").val("");
    $("#studentID").val("");
    $("#password").val("");
    $("#numberSwipes").val("");
    $("#sellPrice").val("");
     
  }

  function checkBlank(arr) {
    for(var i = 0; i < arr.length; i++) {
      if(!arr[i]) {
        return true;
      }
    }
    return false;
  }

     
});
