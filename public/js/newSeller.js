$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  
  $(document).on("submit", "#seller-form", handleStudentFormSubmit);
  

  // A function to handle what happens when the form is submitted to create a new Author
  function handleStudentFormSubmit(event) {
    event.preventDefault();
    
    var newSeller = {
      name: $("#student-name").val().trim(),
      userType: "seller",
      swipePrice: $("#sellPrice").val().trim(), 
      studentID: $("#student-id").val().trim(),
      amountMoney: $("#amount-money").val().trim(),
      numSwipes: $("#numberSwipes").val().trim(),
      password: $("#password").val().trim()
      
    };

    console.log(newSeller);

    $.post("/api/newSeller",newSeller)
    .done(function(data) {

        console.log("consoling newSeller data from newSeller.js " + data);
    });

    $("#name").val("");
    $("#studentID").val("");
    $("#password").val("");
    $("#numberSwipes").val("");
    $("#sellPrice").val("");
     
  }

     
});
