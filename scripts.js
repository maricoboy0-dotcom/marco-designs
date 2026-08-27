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