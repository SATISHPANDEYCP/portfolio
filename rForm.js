document.getElementById('hire-me-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function () {
            alert('Thank you for your message. We will get back to you soon.');
        }, function (error) {
            alert('Sorry, something went wrong. Please try again.');
        });
});



// rolling
var typed = new Typed('.role', {
    strings: [
        "Thank you for your interest!<br><br>" +
        "Dear Recruiter,<br><br>" +
        "Thank you for reaching out and considering me for this opportunity. After your submission is received successfully,<br><br>" +
        "I will review the details and get back to you as soon as possible. If you have any further questions or need additional information, please feel free to contact me.<br><br>" +
        "Best regards,<br>" +
        "Satish Pandey<br><br>" +
        "I look forward to the possibility of working together and contributing to your team!"
    ],
    loop: false,
    typeSpeed: 50,
    backSpeed: 60,
    backDelay: 1000,
});
