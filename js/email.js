
    // Event listener for form submission
const valider = async (event) => {
    //event.preventDefault(); // Prevent form from submitting automatically
    console.log("yesss 111111");

    const validateForm = () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
        if (!name || !email || !subject || !message) {
            Swal.fire({
                title: "Error!",
                text: "Please fill out all fields.",
                icon: "error",
            });
            return false;
        }
        return true;
    }

    if (validateForm()) {
        console.log("yesss 222222");
        
        // Prepare the parameters for EmailJS
        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        console.log("Form is valid, sending email..."); // Debugging log

        // Send the email using EmailJS
        await emailjs.send("service_4e1tv0v", "template_7l531yn", params)
            .then((response) => {
                console.log("EmailJS response:", response); // Debugging log

                if (response.status === 200) {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Unable to find the mail",
                        icon: "error",
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: "Internet connection lost Failed to send the message.",
                    icon: "error",
                });
                console.error("Failed to send email:", error);
            });
    }
};


