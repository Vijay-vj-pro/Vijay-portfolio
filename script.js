console.log('JavaScript file connected successfully!');
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
  });
  
function showBgImage(){   
    document.getElementById("vj-img").src = "Images/color.png";
}
function hideBgImage(){
    document.getElementById("vj-img").src= "Images/bw.png";
}
function showHoverBox(hoverBox) {
    hoverBox.style.display = "flex"; // Make the hover box visible
}
function hideHoverBox(hoverBox) {
    hoverBox.style.display = "none"; // Hide the hover box
}
if(window.matchMedia("(min-width: 768px)").matches){
    
    function showProjectName(projectName) {
        projectName.innerHTML = "View Project 👀";
    }
    function hideProjectName(projectName) {
        projectName.innerHTML = projectName.getAttribute("data-original-text");
    }
}
// Show or hide the button based on scroll position
const scrollUpButton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "flex"; // Show button
    } else {
        scrollUpButton.style.display = "none"; // Hide button
    }
};
function scrollUp() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}
function scrollToHome(){
    document.getElementById("Home").scrollIntoView({ behavior: "smooth", block: "start" })
}
function scrollToEducation(){
    document.getElementById("Education").scrollIntoView({ behavior: "smooth", block: "start" })
}
function scrollToAbout(){
    document.getElementById("About").scrollIntoView({ behavior: "smooth", block: "start" })
}
function scrollToSkills(){
    document.getElementById("Skills").scrollIntoView({ behavior: "smooth", block: "start" })
}
function scrollToProjects(){
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth", block: "start" })
}
function scrollToCertifications(){
    document.getElementById("Certifications").scrollIntoView({ behavior: "smooth", block: "start" })
}
function scrollToContact(){
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth", block: "start" })
}
// Function to send emails in contacts section

function sendEmail(){
const nameField = document.getElementById('Name-field').value;
const emailField = document.getElementById('Email-field').value;
const messageField = document.getElementById('Message-field').value;
console.log(nameField);

(function() {
    emailjs.init("pTTDULpc8deNaOo9s"); //please encrypted user id for malicious attacks
  })();

  var templateParams = {
    from_name: nameField,
    email: emailField,
    message: messageField
  };

  emailjs.send("service_x9ms1t9","template_mx0rjnb", templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });

}

function refreshThePage(){
    window.location.reload();
}

function showNavbar(){
    document.getElementById('nav-list').style.display = "flex";
}

function closeNavbar(){
    document.getElementById('nav-list').style.display = "none";
}

setInterval(() => {
    document.getElementById('heart').innerText = "🖤";
    setTimeout(() => {
        document.getElementById('heart').innerText = "🤍";
    }, 500);
}, 5000);