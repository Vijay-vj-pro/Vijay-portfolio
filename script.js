//Just for verification
console.log('JavaScript file connected successfully!');
//To start Animate on scroll event
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});
//Only works other than mobile
if (window.matchMedia("(min-width: 768px)").matches) {
    //Function to show "View Project" on hover
    function showProjectName(projectName) {
        projectName.innerHTML = "View Project 👀";
    }
    //Function to hide "View Project" on hover
    function hideProjectName(projectName) {
        projectName.innerHTML = projectName.getAttribute("data-original-text");
    }
}
//Function to scroll to home
function scrollToHome() {
    document.getElementById("Home").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
//Function to scroll to Education section
function scrollToEducation() {
    document.getElementById("Education").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
//Function to scroll to About section
function scrollToAbout() {
    document.getElementById("About").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
//Function to scroll to Skills section
function scrollToSkills() {
    document.getElementById("Skills").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
//Function to scroll to Projects section
function scrollToProjects() {
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
//Function to scroll to Certifications section
function scrollToCertifications() {
    document.getElementById("Certifications").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
//Function to scroll to Contacts section
function scrollToContact() {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth", block: "start" });
    closeNavbar();
}
// Function to show the color image
function showBgImage() {
    document.getElementById("vj-img").src = "Images/color.png";
}
// Function to show the black and white image
function hideBgImage() {
    document.getElementById("vj-img").src = "Images/bw.png";
}
// Function to show the blurry background in project box
function showHoverBox(hoverBox) {
    hoverBox.style.display = "flex"; // Make the hover box visible
}
// Function to remove the blurry background in project box
function hideHoverBox(hoverBox) {
    hoverBox.style.display = "none"; // Hide the hover box
}
//Function to show side bar
function showNavbar() {
    document.getElementById('nav-list').style.right = "0px";
}
//Function to hide side bar
function closeNavbar() {
    document.getElementById('nav-list').style.right = '-100%';
}
// Show or hide the button based on scroll position
const scrollUpButton = document.getElementById("scroll-up-btn");
//Function to hide scroll button at top and show after scroll
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "flex"; // Show button
    } else {
        scrollUpButton.style.display = "none"; // Hide button
    }
};
//Function to scroll to top button
function scrollUp() {
    document.getElementById("container").scrollIntoView({ behavior: "smooth", block: "start" });
}
// Function to send emails in contacts section
function sendEmail() {
    const nameField = document.getElementById('Name-field').value;
    const emailField = document.getElementById('Email-field').value;
    const messageField = document.getElementById('Message-field').value;

    (function () {
        emailjs.init("pTTDULpc8deNaOo9s"); //please encrypted user id for malicious attacks
    })();

    var templateParams = {
        from_name: nameField,
        email: emailField,
        message: messageField
    };
    emailjs.send("service_x9ms1t9", "template_mx0rjnb", templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
//Function to refresh page on clicking the website logo
function refreshThePage() {
    window.location.reload();
}
//Heart blinking functionality at footer
setInterval(() => {
    document.getElementById('heart').innerText = "🖤";
    setTimeout(() => {
        document.getElementById('heart').innerText = "🤍";
    }, 500);
}, 5000);