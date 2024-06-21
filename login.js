// var loggedE = document.querySelector("#loggedE");
// var loggedP = document.querySelector("#loggedP");
// var logInBtn = document.querySelector("#logInBtn");
// var impMessage = document.querySelector('impMessage');

// logInBtn.addEventListener("click", function () {
//   if (loggedP.value.trim() !== "") {
//     loginFun();
//     clear();
//   } else {
//     impMessage.innerHTML = `<p style="color:red;">All input is required</p>`;
//   }
// });

// function loginFun() {
//   var enteredEmail = loggedE.value.trim();
//   var enteredPassword = loggedP.value.trim();

//   // Assuming User data is stored in localStorage under key "User"
//   var User = JSON.parse(localStorage.getItem("User")) || []; 
//   var foundUser = User.find(user => user.email === enteredEmail && user.password === enteredPassword);

//   if (foundUser) {
//     alert(`Welcome ${foundUser.name}!`); // Or any preferred welcome message
//     setTimeout(function () {
//       window.location.href = "home.html";
//     }, 1500);
//     localStorage.setItem("User", JSON.stringify(foundUser)); // Update localStorage with logged in user
//   } else {
//     impMessage.innerHTML = `<p style="color:red;">Invalid email or password. Please try again.</p>`;
//   }

//   if (User.length === 0) {
//     impMessage.innerHTML = `<p style="color:red;">No users registered yet. Please sign up first.</p>`;
//   }
// }

// function clear() {
//   loggedP.value = ""; // Clear only password field after successful login
// }

var loggedE = document.querySelector("#loggedE");  // Use querySelector for efficiency
var loggedP = document.querySelector("#loggedP");
var logInBtn = document.querySelector("#logInBtn");
var impMessage = document.querySelector('impMessage');

logInBtn.addEventListener("click", function () {
  if (loggedP.value.trim() !== "") { // Check if password is not empty
    loginFun();
    clear();
  } else {
    impMessage.innerHTML = `<p style="color:red;">Please enter your password.</p>`;
  }
});

function loginFun() {
  var enteredEmail = loggedE.value.trim();
  var enteredPassword = loggedP.value.trim();

  // Assuming User data is stored in localStorage under key "User"
  var User = JSON.parse(localStorage.getItem("User")) || [];
  var foundUser = User.find(user => user.email === enteredEmail && user.password === enteredPassword);

  if (foundUser) {
    alert(`Welcome ${foundUser.name}!`); // Or any preferred welcome message
    setTimeout(function () {
      window.location.href = "home.html"; // Redirect to home page after successful login
    }, 1500);
    localStorage.setItem("User", JSON.stringify(foundUser)); // Update localStorage with logged in user (optional)
  } else {
    impMessage.innerHTML = `<p style="color:red;">Invalid email or password. Please try again.</p>`;
  }

  if (User.length === 0) {
    impMessage.innerHTML = `<p style="color:red;">No users registered yet. Please sign up first.</p>`;
  }
}

function clear() {
  loggedP.value = ""; // Clear only password field after successful login
}

