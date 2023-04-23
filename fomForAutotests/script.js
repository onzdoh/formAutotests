const captchaImages = [
  { src: "captcha-image-1.jpg", alt: "1234" },
  { src: "captcha-image-2.jpg", alt: "5678" },
  { src: "captcha-image-3.png", alt: "abcd" },
  { src: "captcha-image-4.png", alt: "efgh" },
  { src: "captcha-image-5.png", alt: "ijkl" },
];

function refreshCaptcha() {
  const captchaImage = document.getElementById("captcha-image");
  const randomIndex = Math.floor(Math.random() * captchaImages.length);
  const newCaptcha = captchaImages[randomIndex];

  captchaImage.src = newCaptcha.src;
  captchaImage.alt = newCaptcha.alt;
}

function validateForm() {
  const email = document.getElementById("email");
  const comment = document.getElementById("comment");
  const captcha = document.getElementById("captcha");
  const captchaImage = document.getElementById("captcha-image");

  let valid = true;

  if (!email.value) {
    document.getElementById("email-error").hidden = false;
    valid = false;
  } else {
    document.getElementById("email-error").hidden = true;
  }

  if (!comment.value) {
    document.getElementById("comment-error").hidden = false;
    valid = false;
  } else {
    document.getElementById("comment-error").hidden = true;
  }

  if (!captcha.value || captcha.value.toLowerCase() !== captchaImage.alt.toLowerCase()) {
    document.getElementById("captcha-error").hidden = false;
    valid = false;
  } else {
    document.getElementById("captcha-error").hidden = true;
  }

  return valid;
}

refreshCaptcha(); // Set an initial captcha when the page loads.
