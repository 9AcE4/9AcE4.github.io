const mouseGlow =
  document.querySelector(".mouse-glow");

const clickGlow =
  document.querySelector(".click-glow");

/* =========================================================
   MAUSBEWEGUNG
   ========================================================= */

window.addEventListener(
  "pointermove",
  function(event){

    if(!mouseGlow){
      return;
    }

    mouseGlow.style.left =
      event.clientX + "px";

    mouseGlow.style.top =
      event.clientY + "px";

    mouseGlow.style.opacity =
      "1";

  }
);

/* =========================================================
   MAUS VERLÄSST SEITE
   ========================================================= */

document.documentElement.addEventListener(
  "mouseleave",
  function(){

    if(!mouseGlow){
      return;
    }

    mouseGlow.style.opacity =
      "0";

  }
);

/* =========================================================
   KLICK
   ========================================================= */

window.addEventListener(
  "pointerdown",
  function(event){

    if(!clickGlow){
      return;
    }

    clickGlow.style.left =
      event.clientX + "px";

    clickGlow.style.top =
      event.clientY + "px";

    clickGlow.classList.remove(
      "active"
    );

    void clickGlow.offsetWidth;

    clickGlow.classList.add(
      "active"
    );
  }
);
