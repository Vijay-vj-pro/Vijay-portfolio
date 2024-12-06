console.log("JavaScript file connected successfully!");

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
function showProjectName(projectName) {
    projectName.innerHTML = "View Project 👀";
}
function hideProjectName(projectName) {
    projectName.innerHTML = projectName.getAttribute("data-original-text");
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
