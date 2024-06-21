// var AddName = document.getElementById('AddName');
// var AddEmail = document.getElementById('AddEmail');
// var AddPass = document.getElementById('AddPass');
// var SignUpBtn = document.getElementById('SignUpBtn');
// var logInBtn = document.getElementById('logInBtn');
// var impMessage = document.getElementById('impMessage');
// var nameApp = document.getElementById('nameApp');
// var User = JSON.parse(localStorage.getItem('User')) || [];

// SignUpBtn.onclick = function () {
//   if (!validateInputs()) {
//     return; // Prevent further execution if validation fails
//   }

//   addUser();
// };

// function validateInputs() {
//   var isValid = true;
//   impMessage.innerHTML = "";


//   var namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/; // Name with at least two words
//   var emailPattern = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/; // Email format

//   // Check name
//   if (!namePattern.test(AddName.value)) {
//     impMessage.innerHTML += "<p class='text-danger'>Please enter a valid name (at least two words).</p>";
//     isValid = false;
//   }

//   // Check email
//   if (!emailPattern.test(AddEmail.value)) {
//     impMessage.innerHTML += "<p class='text-danger'>Please enter a valid email address.</p>";
//     isValid = false;
//   }

//   // Check password 
//   if (AddPass.value.length < 8) {
//     impMessage.innerHTML += "<p class='text-danger'>Password must be at least 8 characters long.</p>";
//     isValid = false;
//   }

//   return isValid;
// }

// function addUser() {
//   var UserN = AddName.value;
//   var UserE = AddEmail.value;
//   var UserP = AddPass.value;

//   var newUser = { name: UserN, email: UserE, password: UserP };
//   User.push(newUser);
//   localStorage.setItem('User', JSON.stringify(User));
//   clear();
//   // display();


//   console.log(User)

//   impMessage.innerHTML = "";
//   var Message = `<p class="text-success">Success</p>`
//   impMessage.innerHTML = Message;
// }

// function clear() {
//   AddName.value = "";
//   AddEmail.value = "";
//   AddPass.value = "";
// }

// var AddName = document.getElementById('AddName');
// var AddEmail = document.getElementById('AddEmail');
// var AddPass = document.getElementById('AddPass');
// var SignUpBtn = document.getElementById('SignUpBtn');
// var impMessage = document.getElementById('impMessage');
// var User = JSON.parse(localStorage.getItem('User')) || [];

// SignUpBtn.onclick = function () {
//   if (!validateInputs()) {
//     return; // Prevent further execution if validation fails
//   }

//   addUser();
// };

// function validateInputs() {
//   var isValid = true;
//   impMessage.innerHTML = "";

//   var namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/; // Name with at least two words
//   var emailPattern = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/; // Email format

//   // Check name
//   if (!namePattern.test(AddName.value)) {
//     impMessage.innerHTML += "<p class='text-danger'>Please enter a valid name (at least two words).</p>";
//     isValid = false;
//   }

//   // Check email
//   if (!emailPattern.test(AddEmail.value)) {
//     impMessage.innerHTML += "<p class='text-danger'>Please enter a valid email address.</p>";
//     isValid = false;
//   }

//   // Check password 
//   if (AddPass.value.length < 8) {
//     impMessage.innerHTML += "<p class='text-danger'>Password must be at least 8 characters long.</p>";
//     isValid = false;
//   }

//   return isValid;
// }

// function addUser() {
//   var name = AddName.value;
//   var email = AddEmail.value;
//   var password = AddPass.value;

//   var newUser = { name: name, email: email, password: password };
//   User.push(newUser);
//   localStorage.setItem('User', JSON.stringify(User));
//   clear();

//   console.log(User);

//   impMessage.innerHTML = "";
//   var message = `<p class="text-success">Sign Up Successful!</p>`;
//   impMessage.innerHTML = message;
// }

// function clear() {
//   AddName.value = "";
//   AddEmail.value = "";
//   AddPass.value = "";
// }

// Ensure script placement after relevant HTML elements
window.addEventListener("DOMContentLoaded", function () {

  var AddName = document.getElementById('AddName');
  var AddEmail = document.getElementById('AddEmail');
  var AddPass = document.getElementById('AddPass');
  var SignUpBtn = document.getElementById('SignUpBtn');
  var impMessage = document.getElementById('impMessage');
  var User = JSON.parse(localStorage.getItem('User')) || [];

  SignUpBtn.onclick = function () {
    if (!validateInputs()) {
      return; // Prevent further execution if validation fails
    }

    addUser();
  };

  function validateInputs() {
    var isValid = true;
    impMessage.innerHTML = "";

    var namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/; // Name with at least two words
    var emailPattern = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/; // Email format

    // Check name
    if (!namePattern.test(AddName.value)) {
      impMessage.innerHTML += "<p class='text-danger'>Please enter a valid name (at least two words).</p>";
      isValid = false;
    }

    // Check email
    if (!emailPattern.test(AddEmail.value)) {
      impMessage.innerHTML += "<p class='text-danger'>Please enter a valid email address.</p>";
      isValid = false;
    }

    // Check password
    if (AddPass.value.length < 8) {
      impMessage.innerHTML += "<p class='text-danger'>Password must be at least 8 characters long.</p>";
      isValid = false;
    }

    return isValid;
  }

  function addUser() {
    var UserN = AddName.value;
    var UserE = AddEmail.value;
    var UserP = AddPass.value;

    var newUser = { name: UserN, email: UserE, password: UserP };
    User.push(newUser);
    localStorage.setItem('User', JSON.stringify(User));
    clear();

    console.log(User);

    impMessage.innerHTML = "";
    var message = `<p class="text-success">Sign Up Successful!</p>`;
    impMessage.innerHTML = message;
  }

  function clear() {
    AddName.value = "";
    AddEmail.value = "";
    AddPass.value = "";
  }
});
