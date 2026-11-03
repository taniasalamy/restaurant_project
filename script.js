
const restaurantPhone = "961XXXXXXXX";

function orderFood(foodName) {

    const message = "Hello Salamy Restaurant! I would like to order: "
                    + foodName;

    const whatsappURL =
        "https://wa.me/" + restaurantPhone
        + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}



const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

   
    event.preventDefault();

    const name = document.getElementById("customerName").value;

    const email = document.getElementById("customerEmail").value;

    const message = document.getElementById("customerMessage").value;

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please complete all fields.";

    } else {

        formMessage.textContent =
            "Thank you, " + name + "! Your message is ready.";

        contactForm.reset();

    }

});
