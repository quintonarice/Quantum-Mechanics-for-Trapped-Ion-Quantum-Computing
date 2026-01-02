
document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  for (let c of coll) {
    c.addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  }
});
