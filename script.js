const play = document.querySelectorAll(".cards .play");
//aa  badha play button select kare che j card ni andar hoy che and aek node list  return kare che
play.forEach((btn) => {
  //array of object return kare che like a list ena upar foreach loop lagave che aadpde
  //btn thi aapde alag alag card na btn ne handle kari sakiae che

  const card = btn.closest(".cards");
  //closet function che dom method che
  //aa method current element na uparno div check kare che and pela .card divs na parent ne return kare che
  //play button j card ma hyo te div made
  const audio = card.querySelector("audio");
  //aa audio ae card na andar nu pehlu audio element select kare che
  //button press kare toh aej card nu song play thasee

  if (!audio) return;
  //jo ae card ma audio na hoy to skip

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      audio.pause();
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });
});

const Container = document.querySelector(".card");
const rightBtn = document.querySelector(".arrow-right button");
const leftBtn = document.querySelector(".arrow-left button");

leftBtn.addEventListener("click", () => {
  Container.scrollBy({ left: -200, behavior: "smooth" });
});
rightBtn.addEventListener("click", () => {
  Container.scrollBy({ left: 400, behavior: "smooth" });
});
