function saveData() {
  let name, email, password;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // console.log(name+email+password)

  // localStorage.setItem("name",name)
  // localStorage.setItem("email",email)
  // localStorage.setItem("password",password)

  let userdata = new Array();
  userdata = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    userdata.some((a) => {
      return a.email == email;
    })
  ) {
    alert("This Email Has Been Already Registered");
  } else {
    userdata.push({
      name: name,
      email: email,
      password: password,
      totalAmount: 0,
    });
    localStorage.setItem("users", JSON.stringify(userdata));
    // JSON.stringify(localStorage.setItem("users", userdata)) || [];
  }
}

//log in form

function logInInfo() {
  var email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  let userdata = new Array();

  //here we can get item which has been stored in our local storage with conditional statement

  userdata = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    //here userData password of signup page becomes equal to the password of login page
    userdata.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    // const image=document.getElementById("myimage");
    // image.style.display="block";
    // setTimeout(()=>{
    //   image.style.display="none";
    // },3000);
      alert("login success");
    
    var previousUser = userdata.filter((v) => {
      return v.email == email && v.password == password;
    })[0];
    //items set which has been got from local storage
    localStorage.setItem("name", previousUser.name);
    localStorage.setItem("email", previousUser.email);
    localStorage.setItem("totalAmount", previousUser.totalAmount);
    //after login it will goes on dashboard
    window.location.href = "dashboard.html";
  } else {
     alert("login has been Failed");
  }
}

//logout function where local storage items has been removed and new user can login again
function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  //here we can go back to our login page
  window.location.href = "login.html";
}

//function for cash in

function addCash() {
  const cashIn = parseFloat(document.getElementById('cashIn').value);
  const totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
  var newTotal = totalAmount + cashIn;
  localStorage.setItem('totalAmount', newTotal);
  document.getElementById('totalAmount').innerText = newTotal;
  // updateBalance(balance)
}

// Function to subtract cash from the total amount
function subtractCash() {
  const cashOut = parseFloat(document.getElementById('cashOut').value);
  const totalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
  var newTotal = totalAmount - cashOut;
  localStorage.setItem('totalAmount', newTotal);
  document.getElementById('totalAmount').innerText = newTotal;
  // updateBalance(balance);
}


 document.getElementById('totalAmount').innerText = (parseFloat(localStorage.getItem('totalAmount')) || 0);
