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

function scrollToBottom(){
    window.scrollTo({
      top:6000,
      behaviour:'smooth'
      });
    }
  function scrollTodown(){
      window.scrollTo({
        top:800,
        behaviour:'smooth'
      });
    }


