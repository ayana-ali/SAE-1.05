document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("enterSite");
  const hero = document.querySelector(".hero");
  const site = document.getElementById("site-content");

  btn.addEventListener("click", () => {
    hero.style.display = "none";
    site.style.display = "block";
    site.scrollIntoView({ behavior: "smooth" });
  });
  const track = document.querySelector(".track");
  let position = 0;

  setInterval(() => {
    position -= 300;
    track.style.transform = `translateX(${position}px)`;
  }, 2000);

const text = "Wisteria Lane";
const h2 = document.getElementById("wisteria");
let index = 0;

function type() {
  if (index < text.length) {
    h2.textContent += text[index];
    index++;
    setTimeout(type, 200);
  } else {
    setTimeout(() => {
      h2.textContent = "";
      index = 0;
      type();
  }, 1000);
 }
}
const img = document.querySelector(".panorama-img");

img.addEventListener("mousemove", (e) => {
  const rect = img.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = "scale(1.5)";
});

img.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center center";
});

const bubble = document.getElementById("secret-bubble");
const points = document.querySelectorAll(".secret-point");

points.forEach(point => {
  point.addEventListener("mouseenter", () => {
    bubble.style.display = "block";
    bubble.textContent = point.dataset.secret;


    const parentRect = point.parentElement.getBoundingClientRect();
    const pointRect = point.getBoundingClientRect();

    bubble.style.left = `${pointRect.left - parentRect.left + pointRect.width/2}px`;
    bubble.style.top = `${pointRect.top - parentRect.top - 10}px`;
  });

  point.addEventListener("mouseleave", () => {
    bubble.style.display = "none";
  });
});
const btnSecrets = document.getElementById("toggleSecrets");
const secrets = document.getElementById("secretsContent");

btnSecrets.addEventListener("click", () => {
  const visible = secrets.style.display === "block";

  secrets.style.display = visible ? "none" : "block";
  btnSecrets.textContent = visible
    ? "👁️ Appuyer pour découvrir leurs secrets"
    : "🙈 Cacher les secrets";
});
const applesContainer = document.querySelector(".apples"); 
for (let i = 0; i < 20; i++) { const apple = document.createElement("div"); 
  
  apple.className = "apple"; 
  apple.textContent = "🍎"; 
  apple.style.left = Math.random() * 100 + "vw"; 
  apple.style.animationDuration = 15 + Math.random() * 15 + "s"; 
  apple.style.animationDelay = Math.random() * 10 + "s"; 
  applesContainer.appendChild(apple); }

const claps = document.querySelectorAll(".clap-card");
let current = 0;

function showClap(index) {
    claps.forEach((c, i) => {
      c.style.display = i === index ? "block" : "none";
      const inner = c.querySelector(".clap-inner");
      if(inner) inner.style.transform = "rotateY(0deg)";
      const feedback = c.querySelector(".feedback");
      if(feedback) feedback.textContent = ""; 
    });
  }

  showClap(current);

 claps.forEach((clap, index) => {
  const buttons = clap.querySelectorAll(".choice");
  const inner = clap.querySelector(".clap-inner");
  const feedback = clap.querySelector(".feedback");
  const nextBtn = clap.querySelector(".next-clap");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isCorrect = btn.dataset.answer === "true";
      feedback.textContent = isCorrect ? "Bonne réponse ✅" : "Mauvaise réponse ❌";
      inner.style.transform = "rotateY(180deg)";
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      current++;
      if (current < claps.length) {
        showClap(current);
      } else {
        alert("Tu as fini toutes les anecdotes !");
      }
    });
  }
});

const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

const sections = [...document.querySelectorAll("h1[id], h2[id]")];

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestions.innerHTML = "";
  if (!value) return;

  sections.forEach(sec => {
    if (sec.textContent.toLowerCase().includes(value)) {
      const div = document.createElement("div");
      div.textContent = sec.textContent;
      div.addEventListener("click", () => {
        sec.scrollIntoView({ behavior: "smooth" });
        suggestions.innerHTML = "";
        input.value = "";
      });
      suggestions.appendChild(div);
    }
  });
});

const openBtn = document.getElementById("openMentions");
const modal = document.getElementById("mentionsModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const zoomables = document.querySelectorAll(".zoomable");
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const zoomClose = document.querySelector(".zoom-close");

zoomables.forEach(img => {
  img.addEventListener("click", () => {
    zoomImg.src = img.dataset.full;
    zoomModal.style.display = "flex";
  });
});

zoomClose.addEventListener("click", () => {
  zoomModal.style.display = "none";
});

zoomModal.addEventListener("click", (e) => {
  if (e.target === zoomModal) {
    zoomModal.style.display = "none";
  }
});

const anecdoteForm = document.getElementById('anecdoteForm');
const feedback = document.querySelector('.form-feedback');

anecdoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  feedback.textContent = "Merci ! Ton anecdote a été envoyée.";
  anecdoteForm.reset();
});


type();
});