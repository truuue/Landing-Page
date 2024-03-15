// Fonction pour afficher ou masquer le contenu complet des sections
function toggleContent(sectionId, moreLinkId) {
  var section = document.getElementById(sectionId);
  var moreLink = document.getElementById(moreLinkId);

  if (section.style.display === "none") {
    section.style.display = "block";
    moreLink.textContent = "Réduire"; // Changer le texte du lien si le contenu est étendu
  } else {
    section.style.display = "none";
    moreLink.textContent = "En savoir plus"; // Changer le texte du lien si le contenu est réduit
  }
}

// Écouteurs d'événements pour les liens "En savoir plus"
document
  .getElementById("services-more")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Empêcher le lien de déclencher une action de navigation
    toggleContent("services-full", "services-more");
  });

document
  .getElementById("about-more")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Empêcher le lien de déclencher une action de navigation
    toggleContent("about-full", "about-more");
  });
