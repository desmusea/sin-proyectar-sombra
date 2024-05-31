
class Slider {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.slides = this.container.getElementsByClassName("slide");
    this.slideIndex = 0;
    this.showSlide(this.slideIndex);

    const nextBtn = this.container.querySelector(".next");
    const prevBtn = this.container.querySelector(".prev");

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", () => this.nextSlide());
      prevBtn.addEventListener("click", () => this.prevSlide());
    }
  }

  showSlide(n) {
    if (n >= this.slides.length) {
      this.slideIndex = 0;
    } else if (n < 0) {
      this.slideIndex = this.slides.length - 1;
    } else {
      this.slideIndex = n;
    }

    Array.from(this.slides).forEach(slide => {
      slide.style.display = "none";
    });

    this.slides[this.slideIndex].style.display = "block";
  }

  nextSlide() {
    this.showSlide(this.slideIndex + 1);
  }

  prevSlide() {
    this.showSlide(this.slideIndex - 1);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const slider1 = new Slider("slider1");
  const slider2 = new Slider("slider2");
  const slider3 = new Slider("slider3");
  const slider4 = new Slider("slider4");
  const slider5 = new Slider("slider5");
  const slider6 = new Slider("slider6");
  const slider7 = new Slider("slider7");
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
