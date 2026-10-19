const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  });
});

const phone = "5562982881000";
const whatsappLinks = document.querySelectorAll("[data-message]");

whatsappLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const message = link.dataset.message;
    if (message) {
      link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      link.target = "_blank";
      link.rel = "noreferrer";
    }
  });
});

document.querySelectorAll(".topic-card").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;
    const message = `Olá! Gostaria de conversar sobre ${topic}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const professionalCards = document.querySelectorAll("[data-professional]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("is-active", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });
    professionalCards.forEach((card) => {
      card.hidden = filter !== "todos" && card.dataset.professional !== filter;
    });
  });
});
