const words = ["Frontend Developer",  "Web Designer"];

let i = 0;

setInterval(() => {
    document.getElementById("typing").textContent = words[i];
    i = (i + 1) % words.length;
}, 2000);

const modeBtn = document.getElementById("modeBtn");

modeBtn.onclick = () => {
    document.body.classList.toggle("dark");

    modeBtn.innerHTML =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});

const sections = {
    home: "#dbeafe",
    about: "#e3f2fd",
    skills: "#e8f5e9",
    projects: "#fff3cd",
    contact: "#f8d7da"
};

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        const id = this.getAttribute("href").substring(1);
        document.body.style.backgroundColor = sections[id];
    });
});