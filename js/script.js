const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

//Functionality on clicking on Eye symbol

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

//SHIFT FROM SIGNUP TO LOGIN

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();  //preventing from submit
        forms.classList.toggle("show-signup");
    })
})

// button click messages

function registrationSuccesslogin() {
    alert("You have succesfully logged in!");
}
function registrationSuccesssignup() {
    alert("Congratulations🎉! Your account has been created!");
}