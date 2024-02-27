const checkPassword = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const errorMessage = document.getElementById("error");

function validatePassword(event) {
    console.log("Validating password..."); 
    console.log("Password:", checkPassword.value, "Confirm Password:", confirmPassword.value); 

    if (checkPassword.value !== confirmPassword.value) {
        console.log("Passwords do not match."); 
        errorMessage.style.display = "flex";
        event.preventDefault(); 
    } else {
        console.log("Passwords match."); 
        errorMessage.style.display = "none";
    }
}

document.getElementById('peliForm').addEventListener('submit', function(event) {
    validatePassword(event); 
});
