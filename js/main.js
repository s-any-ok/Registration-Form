const $showHideBtn = document.querySelector(".showHidePass");
const $form = document.querySelector("form");

const $emailLable = document.querySelector(".email");
const $fullNameLable = document.querySelector(".fname");
const $passwordLable = document.querySelector(".password");

const $email = document.querySelector("#email");
const $fullName = document.querySelector("#fname");
const $password = document.querySelector("#password");
const $passwordContainer = document.querySelector(".password-container");
$showHideBtn.addEventListener("click", function () {
  if ($password.type === "password") {
    $password.type = "text";
    $password.style.borderStyle = "none";
    $password.style.height = "35px";
    $password.style.width = "96%";
  } else {
    $password.type = "password";
  }
});

$form.addEventListener("submit", function (e) {
  e.preventDefault();
  if ($email.value === "") errField($emailLable, $email, "requiredEmail");
  if ($password.value === "")
    errField($passwordLable, $passwordContainer, "requiredPassword");
  if ($fullName.value === "")
    errField($fullNameLable, $fullName, "requiredName");
});

const errField = (
  lable,
  field,
  ErrClass,
  borderStyle = "1px solid #ea4989"
) => {
  lable.classList.add(ErrClass);
  field.style.border = borderStyle;
};
