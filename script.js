const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.getElementById("bookBtn").onclick = function () {
  document.getElementById("rt").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("openMenuBtn").onclick = function () {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("reserveForm").onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var persons = document.getElementById("persons").value;

  // clear previous errors
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("dateError").innerHTML = "";
  document.getElementById("personsError").innerHTML = "";
  document.getElementById("successMsg").innerHTML = "";

  var ok = true;

  // name validation
  if (name == "" || name.length < 3) {
    document.getElementById("nameError").innerHTML =
      "Name must be at least 3 letters";
    ok = false;
  }

  // phone validation
  if (phone == "" || phone.length != 10) {
    document.getElementById("phoneError").innerHTML = "Phone must be 10 digits";
    ok = false;
  }

  // date validation
  if (date == "") {
    document.getElementById("dateError").innerHTML = "Please select a date";
    ok = false;
  }

  // persons validation
  if (persons == "") {
    document.getElementById("personsError").innerHTML =
      "Please select number of persons";
    ok = false;
  }

  // success
  if (ok == true) {
    document.getElementById("successMsg").innerHTML =
      "✅ Online Reservation Successful!";
    document.getElementById("reserveForm").reset();
  }
};
