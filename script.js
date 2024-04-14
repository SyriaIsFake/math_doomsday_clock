
  
  function updateCountdown() {
    const targetDate = "2024-05-15T09:00:00"; 
  

    const timeRemaining = getTimeRemaining(targetDate);
  

    const countdownElement = document.getElementById("clock");
    countdownElement.innerHTML = `${timeRemaining.days} Days, ${timeRemaining.hours} Hours, ${timeRemaining.minutes} Minutes, ${timeRemaining.seconds} Seconds.`;
  

    if (timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "EXPIRED!";
    }
  }


function getTimeRemaining(targetDate) {

    const now = new Date();

    const targetTime = new Date(targetDate).getTime();
  

    const distance = targetTime - now.getTime();
      if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(distance / oneDay);
    const hours = Math.floor((distance % oneDay) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }
  
  updateCountdown();
  
  const countdownInterval = setInterval(updateCountdown, 1000);
  
