document.getElementById("resultBtn").addEventListener("click", function () {
  // ===== Get the selected blood group from the dropdown =====
  let bloodGroup = document.querySelector("select").value;

  // ===== Check blood group and assign values =====
  if (bloodGroup === "O-") {
    donateTo = "All (Universal Donor)";
    receiveFrom = "O-";
  } else if (bloodGroup === "O+") {
    donateTo = "O+, A+, B+, AB+";
    receiveFrom = "O-, O+";
  } else if (bloodGroup === "A-") {
    donateTo = "A-, A+, AB-, AB+";
    receiveFrom = "O-, A-";
  } else if (bloodGroup === "A+") {
    donateTo = "A+, AB+";
    receiveFrom = "O-, O+, A-, A+";
  } else if (bloodGroup === "B-") {
    donateTo = "B-, B+, AB-, AB+";
    receiveFrom = "O-, B-";
  } else if (bloodGroup === "B+") {
    donateTo = "B+, AB+";
    receiveFrom = "O-, O+, B-, B+";
  } else if (bloodGroup === "AB-") {
    donateTo = "AB-, AB+";
    receiveFrom = "O-, A-, B-, AB-";
  } else if (bloodGroup === "AB+") {
    donateTo = "AB+";
    receiveFrom = "You Can Take From Everyone";
  } else{
    donateTo = "Please Select Your Blood Group";
    receiveFrom = "Please Select Your Blood Group";
  }

  // ===== Show the results in the input fields =====
  document.getElementById("donateTo").value = donateTo;
  document.getElementById("receiveFrom").value = receiveFrom;
});

// ===== RESET BUTTON =====
document.getElementById("resetBtn").addEventListener("click", function () {
  document.querySelector("select").selectedIndex = 0;
  document.getElementById("donateTo").value = "";
  document.getElementById("receiveFrom").value = "";
});