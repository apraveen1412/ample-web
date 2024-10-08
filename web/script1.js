document.getElementById('contact-mail').onclick = function () {
    const email = "anirudhalevooru3114@gmail.com";
    const subject = "Inquiry about AMPLE 2024";
    const body = "Hello, I would like to know more about AMPLE 2024.";
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}";

    window.open(gmailUrl, '_blank');
};
function openGmail()
{
    const email = "anirudhalevooru3114@gmail.com";
    const subject = "Inquiry about AMPLE 2024";
    const body = "Hello, I would like to know more about AMPLE 2024.";
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}";

    window.open(gmailUrl, '_blank'); 
};