function orderSchedule () {
// Select the parent div
const scheduleCardDiv = document.getElementById('scheduleCardDiv');

// Convert the NodeList of scheduleCard elements to an array
const scheduleCards = Array.from(scheduleCardDiv.getElementsByClassName('scheduleCard'));

// Sort the scheduleCards based on the date in the <p> element
scheduleCards.sort((a, b) => {
  const dateA = new Date(a.querySelector('p').innerText.split(' - ')[0]);
  const dateB = new Date(b.querySelector('p').innerText.split(' - ')[0]);
  return dateA - dateB;
});

// Append the sorted scheduleCards back to the scheduleCardDiv
scheduleCards.forEach((scheduleCard) => {
  scheduleCardDiv.appendChild(scheduleCard);
});
}

export {orderSchedule}