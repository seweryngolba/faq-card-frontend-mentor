const answer = document.querySelectorAll(".question-answer");
const questionBox = document.querySelectorAll(".question-slide");
const arrowIcon = document.querySelectorAll(".arrow-icon");
const question = document.querySelectorAll(".question-title");

questionBox.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (
      answer[index].style.display === "none" ||
      answer[index].style.display === ""
    ) {
      answer[index].style.display = "block";
      arrowIcon[index].classList.add("arrow-icon-up");
      box.parentElement.style.height = "80px";
      question[index].style.fontWeight = "700";
    } else {
      answer[index].style.display = "none";
      arrowIcon[index].classList.remove("arrow-icon-up");
      box.parentElement.style.height = "50px";
      question[index].style.fontWeight = "400";
    }
  });
});
