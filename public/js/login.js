$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  
  $(document).on("submit", "#login-form", handleLoginFormSubmit);
  
  // A function to handle what happens when the form is submitted to login.
  function handleLoginFormSubmit(event) {
  	var studentID = $("#student-id").val().trim();
  	var password = $("#password").val().trim();

  	var loginInfo = {
  		studentID: studentID,
  		password: password
  	}
  }

  $.get("/api/students" + studentID, loginInfo)
    .done(function(data) {

        console.log("consoling newSeller data from newSeller.js " + data);
   		student = data;

   		if(!student) {
   			incorrectLogin();
   		} else {
   			
   			$.get("/api/transactions" + student.studentId, function(data) {
   				console.log("transactions ", data);
   				transactions = data;
   				if(!transactions || !transactions.length) {
   					displayEmpty(student.studentId)
   				} else {
   					intializeRows()
   				}
   			})
   		}
    });
    // handles appending constructed transaction to div.
    function intializeRows() {
    	transactionContainer.empty();
	    var postsToAdd = [];
	    for (var i = 0; i < posts.length; i++) {
	      postsToAdd.push(createNewRow(posts[i]));
	    }
	    blogContainer.append(postsToAdd);
    }
    function incorrectLogin {
      var loginDiv = $("<div>");
      loginDiv.addClass("alert alert-danger");
      loginDiv.attr("role", "alert");
      

    }
}