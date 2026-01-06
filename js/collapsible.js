// ===============================
// Exercise collapsibles
// ===============================
document.addEventListener("click", function (e) {
  const exerciseBtn = e.target.closest(".collapsible");
  if (!exerciseBtn) return;

  exerciseBtn.classList.toggle("active");

  const content = exerciseBtn.nextElementSibling;
  if (!content) return;

  content.style.display =
    content.style.display === "block" ? "none" : "block";
});

// ===============================
// Sidebar accordion navigation
// ===============================
document.addEventListener("click", function (e) {
  const navHeader = e.target.closest(".nav-header");
  if (!navHeader) return;

  const section = navHeader.parentElement;
  const sectionId = section.dataset.section;

  section.classList.toggle("open");

  localStorage.setItem(
    "nav-section-" + sectionId,
    section.classList.contains("open")
  );
});


