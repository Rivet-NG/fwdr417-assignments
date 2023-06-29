let truliaCards = document.getElementsByClassName("trulia-grid-item");

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();
  document.querySelector(".trulia-nav-toggle").addEventListener("click", function() {
    let truliaNavs = document.querySelectorAll(".trulia-nav ul");
    for (let i = 0; i < truliaNavs.length; i++) {
      truliaNavs[i].classList.toggle("trulia-nav-mobilehide");
    }
  });
  for (let i = 0; i < truliaCards.length; i++) {
    truliaCards[i].addEventListener("click", function() {
      for (let i = 0; i < truliaCards.length; i++) {
        truliaCards[i].classList.remove("trulia-featured-grid-item");
      }
      this.classList.add("trulia-featured-grid-item");
    });
  }
});