function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".toggle-icon");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.textContent = "+";
  } else {
    answer.style.display = "block";
    icon.textContent = "-";
  }

  // Optional: Close other open FAQ items
  const allQuestions = document.querySelectorAll('.faq-question');
  allQuestions.forEach((question) => {
    if (question !== element) {
      question.nextElementSibling.style.display = "none";
      question.querySelector(".toggle-icon").textContent = "+";
    }
  });

  element.classList.toggle("active");
}

function openNav() {
  document.querySelector('.sidebar').style.width = "auto"
}

function closeNav() {
  document.querySelector('.sidebar').style.width = "0"
}
