function validateForm() {
    var username = document.forms["Formfill"]["user"].value;
    var email = document.forms["Formfill"]["Email"].value;
    var password = document.forms["Formfill"]["Password"].value;
    var confirmPassword = document.forms["Formfill"]["cpassword"].value;

    if (password !== confirmPassword) {
        document.getElementById("alertBox").style.display = "block";
        return false;
    }

    // Store user information in local storage
    var userInfo = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    alert("Thank You, Registration successful!");
    return true;
}