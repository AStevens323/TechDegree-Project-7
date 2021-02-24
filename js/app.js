const alertBanner = document.getElementById("alert");
const userSearch = document.getElementById("user-Field");
const userMessage = document.getElementById("messageField");
const sendButton = document.getElementById("send");


// // JS Alert Banner --------------------------------------------------------------------------------/
alertBanner.innerHTML =

`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

// // END JS Alert Banner --------------------------------------------------------------------------------/

// Messaging Widget Alerts ------------------------------------------------------------------------------/

sendButton.addEventListener('click', () => {
    if (userSearch.value === "" || userMessage.value === "") {
        alert("Both input fields must be filled out in order to send.")
    } else {
        alert("Your message has been successfully sent!")
    }

});