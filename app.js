// Js for Text section
var typed = new Typed('.role', {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "Coder",
        "Backend Developer",
        "Frontend developer"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});




// Project role
var typed = new Typed('.project-role-1', {
    strings: [
        "Explore my creative journey through web development. From sleek and responsive designs to dynamic, user-centric applications, this portfolio showcases my expertise in HTML, CSS, JavaScript, and more. Dive into my projects to see how I blend aesthetics with functionality to deliver outstanding user experiences."
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

var typed = new Typed('.project-role-2', {
    strings: [
        "Embark on a nostalgic journey with the 'Simon Says' game. Test your memory and reflexes as you follow the pattern of colored lights and sounds. This classic game, built using HTML, CSS, and JavaScript, challenges your ability to replicate increasingly complex sequences. Dive in and experience the fusion of entertainment and brain training!"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

var typed = new Typed('.project-role-3', {
    strings: [
        "Embark on a heartwarming journey through our pet adoption page. Meet adorable furry companions waiting for their forever homes. From playful kittens to loyal dogs, each pet has a unique story to tell. Discover their personalities, quirks, and the love they're ready to share. Join us in creating happy endings—one adoption at a time!"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});







//js for about section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// For hamberger button
var sidemenu = document.getElementById("side-menu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


// Script for the form
const scriptURL = 'https://script.google.com/macros/s/AKfycbz-dj3QMu04GjbFj5Jefz7K4-X23URnjENcR7ztUGJl1P1kkjC8tVVdfYh24BqZDZTi/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const startTime = Date.now();
    console.log("Form submission started");

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            const endTime = Date.now();
            console.log(`Form submission completed in ${endTime - startTime}ms`);
            
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            msg.innerHTML = `Error: ${error.message}`;
            console.error('Error!', error.message);
        });
});




