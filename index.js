
const showButton = document.getElementById("show-button");
const hideButton = document.getElementById("hide-button");
const imageContainer = document.getElementById("image-container");

showButton.addEventListener("click", function () {
    
    const images = imageContainer.querySelectorAll("img");
    images.forEach(image => {
        image.style.display = "block";
    });
});

hideButton.addEventListener("click", function () {
    
    const images = imageContainer.querySelectorAll("img");
    images.forEach(image => {
        image.style.display = "none";
    });
});

function downloadResume() {
  const resumeUrl = 'https://example.com/path/to/Pran_Res.pdf'; 
  const downloadButton = document.getElementById("download-button");
  downloadButton.style.backgroundColor = "#00FF00"; 
  downloadButton.style.color = "#FFFFFF";
  const downloadLink = document.createElement('a');
  downloadLink.href = resumeUrl;
  downloadLink.download = 'resume.pdf';
  downloadLink.click();
  
  setTimeout(function() {
    downloadButton.style.backgroundColor = "orangered"; // Original button color
    downloadButton.style.color = "#FFFFFF"; // Original text color
  }, 1000); // Change back after 1 second (adjust the delay as needed)
}

const follower = document.querySelector('.follower');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    follower.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill in all fields.");
    event.preventDefault();
  }
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function() {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
});
