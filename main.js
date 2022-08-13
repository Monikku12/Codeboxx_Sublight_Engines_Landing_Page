// ↓↓↓↓↓ HAMBURGER MENU ↓↓↓↓↓
const navigation = document.getElementById("navbar");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navigation.style.setProperty("--childrenNumber", navigation.children.length);

  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
// ↑↑↑↑↑ HAMBURGER MENU ↑↑↑↑↑


// ↓↓↓↓↓ CONTACT US FORM EMAIL ↓↓↓↓↓
$(function() {
    function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $("#submit").click (function() {

    console.log('form submit');

    var nameMissing = "";
    var emailMissing = "";
    var emailErrorMessage = "";
    var phoneErrorMessage = "";
  
    // Checking email validation
    if ($("#email").val() == "") {
      emailMissing = "Email address is empty!";
      $("#emailMissing").html(emailMissing);
    }
  
    if (validateEmail($("#email").val()) == false) {
      emailErrorMessage = "Please enter a valid email address.";
        $("#emailError").html(emailErrorMessage);
    }
    
    //  Displaying email Error messages
    if (emailMissing != "") {
      $("#emailError").hide();
      $("#emailMissing").show();
    } else if (emailErrorMessage != "") {
      $("#emailError").show();
      $("#emailMissing").hide();
    } else{
      $("#emailError").hide();
      $("#emailMissing").hide();
    }
    
    // Name validation
    if ($("#full_name").val() == "") {
      nameMissing = "Please enter your full name!";
      $("#nameMissing").html(nameMissing);
    }

    // Display name error message
    if (nameMissing != "") {
      $("#nameMissing").show();
    } else {
      $("#nameMissing").hide();
    }

    // Phone number validation
    if ($.isNumeric($("#phone").val()) == false) {
      phoneErrorMessage = "Please enter a valid phone number."
      $("#phoneError").html(phoneErrorMessage);
    }
    
    // Display phone error message
    if (phoneMissing != "") {
      $("#phoneError").show();
    } else {
      $("#phoneError").hide();
    }

    // Display success message if there is no error
    if (emailErrorMessage == "" && phoneErrorMessage == "") {
      $("#successMessage").show();
      $("#errorMessage").hide();
    } else {
      $("#successMessage").hide();
      $("#errorMessage").show();
    }

  });
});











// ↑↑↑↑↑ CONTACT US FORM EMAIL ↑↑↑↑↑
