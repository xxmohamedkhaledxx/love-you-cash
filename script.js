const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Toggle the text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  // Check the current state of the button text to toggle
  if (yesBtn.innerHTML === "Yes 😍") {
    yesBtn.innerHTML = "Love Test Again"; // Change text
    gif.src = "GIFs/happy.gif"; // Change gif to happy
  } else {
    yesBtn.innerHTML = "Yes 😍"; // Reset text to Yes
    gif.src = "GIFs/sad.gif"; // Reset gif to sad
  }
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
