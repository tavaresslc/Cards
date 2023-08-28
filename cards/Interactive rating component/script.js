document.addEventListener("DOMContentLoaded", function() {
    const ratingState = document.getElementById("rating-state");
    const thankyouState = document.getElementById("thankyou-state");
    const ratingButtons = document.querySelectorAll(".rating-button");
    const selectedRating = document.getElementById("selected-rating");
    const submitButton = document.getElementById("submit-button");
  
    ratingButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const rating = button.value;
        selectedRating.textContent = rating;
      });
    });
  
    submitButton.addEventListener("click", function() {
      ratingState.style.display = "none";
      thankyouState.style.display = "flex";
    });
});
  
  