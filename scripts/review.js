const reviewCountElement = document.querySelector("#review-count");
const confirmationTitle = document.querySelector("#confirmation-title");
const confirmationMessage = document.querySelector("#confirmation-message");
const yearElement = document.querySelector("#current-year");
const submittedFlag = "wdd131-review-submitted";

yearElement.textContent = new Date().getFullYear();

if (sessionStorage.getItem(submittedFlag) === "true") {
  const previousCount = Number.parseInt(localStorage.getItem("wdd131-review-count") || "0", 10);
  const reviewCount = Number.isFinite(previousCount) && previousCount >= 0 ? previousCount + 1 : 1;

  localStorage.setItem("wdd131-review-count", String(reviewCount));
  sessionStorage.removeItem(submittedFlag);
  reviewCountElement.textContent = String(reviewCount);
} else {
  const savedCount = Number.parseInt(localStorage.getItem("wdd131-review-count") || "0", 10);
  const reviewCount = Number.isFinite(savedCount) && savedCount >= 0 ? savedCount : 0;

  reviewCountElement.textContent = String(reviewCount);
  confirmationTitle.textContent = "Product review";
  confirmationMessage.textContent = "This page was opened directly, so no new review has been counted.";
}