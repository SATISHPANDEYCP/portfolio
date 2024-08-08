// document.addEventListener("DOMContentLoaded", function () {
//     // Initialize EmailJS with your user ID
//     emailjs.init("xhGTlLcy76cQX-h0U"); // Replace with your EmailJS user ID

//     // Get the form element
//     const form = document.getElementById("hire-me-form");

//     // Listen for form submission
//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get form values
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const company = document.getElementById("company").value;
//         const position = document.getElementById("position").value;
//         const jobDescription = document.getElementById("job-description").value;
//         const salaryRange = document.getElementById("salary-range").value;
//         const mobile = document.getElementById("mobile").value;

//         // Set up the template parameters
//         const templateParams = {
//             from_name: name,
//             from_email: email,
//             mobile: mobile,
//             company_name: company,
//             position_name: position,
//             job_description: jobDescription,
//             salary_range: salaryRange
//         };

//         // Send the email using EmailJS
//         emailjs.send("service_a26z92e", "template_9mjymp7", templateParams)
//             .then(function (response) {
//                 console.log("SUCCESS!", response.status, response.text);
//                 alert("Your message has been sent successfully!");
//                 form.reset(); // Reset the form fields after successful submission
//             }, function (error) {
//                 console.log("FAILED...", error);
//                 alert("Oops! Something went wrong. Please try again later.");
//             });
//     });
// });











document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    emailjs.init("xhGTlLcy76cQX-h0U");

    const form = document.getElementById("hire-me-form");

    // Input validation for numeric fields
    const numericFields = ['#salary-range', '#mobile'];

    numericFields.forEach(selector => {
        const input = document.querySelector(selector);

        input.addEventListener('input', function () {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Basic validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const company = document.getElementById("company").value.trim();
        const position = document.getElementById("position").value.trim();
        const jobDescription = document.getElementById("job-description").value.trim();
        const salaryRange = document.getElementById("salary-range").value.trim();

        if (!name || !email || !mobile || !company || !position || !jobDescription || !salaryRange) {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            mobile: mobile,
            company_name: company,
            position_name: position,
            job_description: jobDescription,
            salary_range: salaryRange
        };

        emailjs.send("service_a26z92e", "template_9mjymp7", templateParams)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                form.reset();
            }, function (error) {
                console.error("FAILED...", error);
                alert("Oops! Something went wrong. Please try again later.");
            });
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
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
