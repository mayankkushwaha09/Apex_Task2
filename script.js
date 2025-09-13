// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  // Email validation regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.innerText = "All fields are required!";
  } else if (!email.match(emailPattern)) {
    formMessage.style.color = "red";
    formMessage.innerText = "Enter a valid email!";
  } else {
    formMessage.style.color = "green";
    formMessage.innerText = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

// To-Do List Functionality
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskValue} <button onclick="removeTask(this)">X</button>`;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}