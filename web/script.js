$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
});

function showCards(eventType) {
    const techEvents = document.getElementById('technicalEvents');
    const nonTechEvents = document.getElementById('nonTechnicalEvents');

    if (eventType === 'tech') {
        techEvents.style.display = 'flex';
        nonTechEvents.style.display = 'none';
        
    } 
    else if(eventType=='nonTech'){
        nonTechEvents.style.display = 'flex';
        techEvents.style.display = 'none';
    }

}

document.addEventListener('DOMContentLoaded', () => {
        showCards('tech');
});

document.getElementById('contact-mail').onclick = function () {
    const email = "anirudhalevooru3114@gmail.com";
    const subject = "Inquiry about AMPLE 2024";
    const body = "Hello, I would like to know more about AMPLE 2024.";
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=anirudhalevooru3114@gmail.com&su=Inquiry%20about%20AMPLE%202024&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20AMPLE%202024.";

    window.open(gmailUrl, '_blank');
};