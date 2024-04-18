
  
  function updateCountdown() {
    const targetDate = "2024-04-29T09:00:00"; 
  
    // Get the time remaining
    const timeRemaining = getTimeRemaining(targetDate);
  
    // Update the countdown display (you can modify this part to format the output)
    const countdownElement = document.getElementById("clock");
    countdownElement.innerHTML = `${timeRemaining.days} Days, ${timeRemaining.hours} Hours, ${timeRemaining.minutes} Minutes, ${timeRemaining.seconds} Seconds.`;
  
    // Check if the countdown is over
    if (timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = "EXPIRED!";
    }
  }


function getTimeRemaining(targetDate) {
    // Get the current date and time
    const now = new Date();
  
    // Convert the target date to milliseconds
    const targetTime = new Date(targetDate).getTime();
  
    // Calculate the time difference between now and the target date
    const distance = targetTime - now.getTime();
  
    // Check if the countdown is over
    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    // Calculate days, hours, minutes, and seconds remaining
    const oneDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(distance / oneDay);
    const hours = Math.floor((distance % oneDay) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }
  
  // Call the updateCountdown function initially to display the countdown on page load
  updateCountdown();
  
  // Call updateCountdown every second to update the timer dynamically
  const countdownInterval = setInterval(updateCountdown, 1000);
  
