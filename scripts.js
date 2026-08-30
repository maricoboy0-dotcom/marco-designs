function toggleMenu() {
    const navigation = document.getElementById("navigation");
    const menuButton = document.querySelector(".menu-button");

    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
}
document.querySelectorAll("#navigation a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navigation").classList.remove("active");

        document.querySelector(".menu-button").innerHTML = "☰";

    });

});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


function sendToWhatsApp() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "255700000000";

    const text =
        "Hello Marco Designs,%0A%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Subject: " + subject + "%0A%0A" +
        "Message: " + message;

    const whatsappURL =
        "https://wa.me/" + phoneNumber + "?text=" + text;

    window.open(whatsappURL, "_blank");
}


function openImage(image) {

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImage.src = image.src;
}


function closeImage() {

    const modal = document.getElementById("imageModal");

    modal.style.display = "none";
}


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector("button");

        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formStatus.innerHTML =
                    "✅ Message sent successfully! We will contact you soon.";

                formStatus.style.color = "green";

                contactForm.reset();

                submitButton.disabled = false;
                submitButton.innerHTML = "Send Message →";

            } else {

                formStatus.innerHTML =
                    "❌ Something went wrong. Please try again.";

                formStatus.style.color = "red";

                submitButton.disabled = false;
                submitButton.innerHTML = "Send Message →";
            }

        } catch (error) {

            formStatus.innerHTML =
                "❌ Unable to send message. Please try again.";

            formStatus.style.color = "red";

            submitButton.disabled = false;
            submitButton.innerHTML = "Send Message →";
        }

    });

}
