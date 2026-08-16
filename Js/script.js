function togglePassword() {

    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (password.type === "password") {

        password.type = "text";

        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");

    } else {

        password.type = "password";

        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");

    }

}
document.addEventListener("DOMContentLoaded", function () {

    const signupForm = document.querySelector("form");

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmpassword");

    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (signupForm && password && confirmPassword) {

        signupForm.addEventListener("submit", function (event) {

            let valid = true;

            // Clear previous errors
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";

            // Special character check
            const specialCharacter = /[!@#$%^&*(),.?":{}|<>_\-\\[\]\/;'`~+=]/;

            if (!specialCharacter.test(password.value)) {

                passwordError.textContent =
                    "Password must contain at least one special character.";

                valid = false;
            }

            // Password match check
            if (password.value !== confirmPassword.value) {

                confirmPasswordError.textContent =
                    "Password and Confirm Password do not match.";

                valid = false;
            }

            // Stop form if invalid
            if (!valid) {
                event.preventDefault();
            }

        });

    }

});