/*	-----------------------------------------------------------------------------
  GLOBAL FUNCTIONS
--------------------------------------------------------------------------------- */

// Smooth Scroll
(function () {
  function smoothScroll() {
    const lenis = new Lenis({
      //
    });

    window.lenis = lenis;

    lenis.on("scroll", (e) => {
      ScrollTrigger.update;
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
  document.addEventListener("DOMContentLoaded", function () {
    smoothScroll();
  });
})();

// Navigation
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    ScrollTrigger.create({
      trigger: document.body,
      start: "5px top",
      end: "101% bottom",
      toggleClass: { targets: ".navigation", className: "scrolled" },
    });

    document.querySelectorAll(".navigation a").forEach((link) => {
      link.addEventListener("click", function () {
        document.body.classList.remove("init__nav");
      });
    });
  });
})();

// Slider
(function () {
  window.addEventListener("load", function () {
    const customLabels = [
      "Pool Deck",
      "Gym",
      "Courtyard",
      "Co-Working Space",
      "Arcade and Gaming",
      "Children's Room",
    ];
    const swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + customLabels[index] + "</span>"
          );
        },
      },
    });

    const text = document.querySelectorAll(
      ".swiper-slide-active .amenities__slide-text"
    );

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".amenities__pin",
        start: "top top",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onLeave: (self) => {
          let scrollTop = lenis.scroll - (self.end - self.start);
          self.kill();
          lenis.scrollTo(scrollTop, {
            immediate: true,
          });
          self.animation.progress(1);
          ScrollTrigger.refresh();
          document.body.classList.add("init__pin");
        },
      },
    });

    tl.from(".amenities__pin-inner", {
      scale: 0.45,
    });
    tl.to(
      text[0],
      {
        opacity: 0,
        scale: 1,
      },
      "<"
    );
    tl.to(
      text[1],
      {
        opacity: 0,
        scale: 1,
      },
      "<"
    );
  });
})();

// Marquee
(function () {
  window.addEventListener("load", function () {
    const marquees = document.querySelectorAll(".marquee");

    if (marquees) {
      marquees.forEach((marquee) => {
        const marqueeInner = marquee.querySelector(".marquee__inner"),
          marqueeContent = marquee.querySelector(".marquee__content");
        let marqueeWidth = 0;
        let animation;

        const calculateMarqueeWidth = () => {
          marqueeWidth = marqueeContent.offsetWidth;
          marqueeInner.style.width = `${marqueeWidth}px`;
        };

        const startMarqueeAnimation = () => {
          if (animation) {
            animation.kill();
          }
          gsap.set(marqueeInner, { x: 0 });
          animation = gsap.to(marqueeInner, {
            x: () => -marqueeWidth,
            duration: 20,
            repeat: -1,
            ease: "none",
          });
        };

        calculateMarqueeWidth();
        startMarqueeAnimation();

        window.addEventListener("resize", () => {
          calculateMarqueeWidth();
          startMarqueeAnimation();
        });
      });
    }
  });
})();

// Scroll animations
(function () {
  // Zoom Images
  document.addEventListener("DOMContentLoaded", function () {
    const zoomImages = document.querySelectorAll(".scroll__image--zoom img"),
      parallaxImages = document.querySelectorAll(".scroll__image--parallax"),
      loadImages = document.querySelectorAll(".scroll__image--load"),
      fullImages = document.querySelectorAll(".scroll__image--full");

    if (zoomImages) {
      zoomImages.forEach((image) => {
        gsap.to(image, {
          scale: 1.2,
          ease: easeNone,
          scrollTrigger: {
            trigger: image,
            start: startScrub,
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    if (parallaxImages) {
      parallaxImages.forEach((image) => {
        gsap.to(image, {
          yPercent: -20,
          ease: easeNone,
          scrollTrigger: {
            trigger: image,
            start: startScrub,
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }

    if (loadImages) {
      loadImages.forEach((image) => {
        const origin = image.getAttribute("data-attribute-origin");

        gsap.from(image, {
          scale: 0,
          duration: durationSlow,
          ease: easeInOut,
          transformOrigin: origin,
          scrollTrigger: {
            trigger: image,
            start: startScrub,
          },
        });
      });
    }

    if (fullImages) {
      fullImages.forEach((container) => {
        const items = container.querySelectorAll(".scroll__image--full-item"),
          images = container.querySelectorAll(
            ".scroll__image--full-item-image"
          );
        var fullImageTl = gsap.timeline({
          ease: easeNone,
          scrollTrigger: {
            trigger: container,
            start: startPin,
            end: "+=200%",
            scrub: true,
            pin: true,
          },
        });

        items.forEach((item, i) => {
          if (items[i + 1]) {
            fullImageTl.to(items[i + 1], {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: easeNone,
            });
          }
        });

        const totalDuration = fullImageTl.duration();

        fullImageTl.to(
          images,
          {
            yPercent: -30,
            duration: totalDuration,
            ease: easeNone,
          },
          0
        );
      });
    }
  });
})();

// MODAL

(function () {
  document.querySelectorAll(".open-modal").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("init__modal");
    });
  });

  document.querySelector("#modal").addEventListener("click", function (e) {
    if (e.target.id == "modal") {
      document.body.classList.remove("init__modal");
    }
  });

  document
    .querySelector("#modal .close")
    .addEventListener("click", function () {
      document.body.classList.remove("init__modal");
    });
})();
/*	-----------------------------------------------------------------------------
  SECTION FUNCTIONS
--------------------------------------------------------------------------------- */

// Hero
(function () {
  window.addEventListener("load", function () {
    window.scrollTo(0, 0);
    const sections = document.querySelectorAll(".hero");

    if (sections) {
      sections.forEach((section) => {
        const images = section.querySelectorAll(".hero__image"),
          titles = section.querySelectorAll(".hero__title"),
          preTitle = section.querySelector(".hero__pre-title"),
          button = section.querySelector(".hero__button"),
          navigation = document.querySelector(".navigation"),
          lastImage = images[images.length - 1].querySelector("img"),
          lastImageOverlay =
            images[images.length - 1].querySelector(".overlay"),
          colors = ["#2D3434", "#999D84", "#bb533a"];

        var tl = gsap.timeline({
          onStart: function () {
            lenis.stop();
          },
          onComplete: function () {
            document.body.classList.remove("loading");
            lenis.start();
          },
        });

        tl.from(preTitle, {
          opacity: 0,
          ease: easeInOut,
        });
        images.forEach((image, i) => {
          tl.from(image, {
            scale: 0,
            duration: durationSlow,
            ease: easeInOut,
          });
          tl.to(
            titles[i],
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: durationSlow,
              ease: easeInOut,
            },
            "<"
          );
          tl.to(
            section,
            {
              backgroundColor: colors[i],
              duration: durationSlow,
              ease: easeInOut,
            },
            "<"
          );
          tl.to(
            titles,
            {
              backgroundColor: colors[i],
              duration: durationSlow,
              ease: easeInOut,
            },
            "<"
          );
          tl.add(() => {
            if (titles[i - 1]) {
              titles[i - 1].remove();
            }

            if (i === images.length - 1) {
              gsap.to(titles[i], {
                backgroundColor: "#bb543a00",
              });
            }
          });
        });

        tl.to(images[2], {
          scale: 1,
          duration: durationSlow,
          ease: easeInOut,
        });
        tl.to(
          lastImage,
          {
            scale: 1,
            duration: durationSlow,
            ease: easeInOut,
          },
          "<"
        );
        tl.to(
          lastImageOverlay,
          {
            opacity: 1,
            duration: durationSlow,
            ease: easeInOut,
          },
          "<"
        );

        tl.from(navigation, {
          opacity: 0,
          ease: easeInOut,
        });
        tl.from(
          button,
          {
            opacity: 0,
            ease: easeInOut,
          },
          "<"
        );
      });
    }
  });
})();

// Pricing
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var pricingToggles = document.querySelectorAll(".legend-toggles li"),
      pricingTables = document.querySelectorAll(".pricing__charts--images img");

    pricingToggles.forEach((toggle, i) => {
      toggle.addEventListener("click", function () {
        pricingToggles.forEach((toggle) => {
          toggle.classList.remove("active");
        });
        pricingTables.forEach((table) => {
          table.classList.remove("active");
        });
        pricingTables[i].classList.add("active");
        toggle.classList.add("active");
      });
    });
    var fpToggle = document.querySelectorAll(".fp-toggle");

    fpToggle.forEach((toggle, i) => {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        let nextElement = toggle.closest(".unit").nextElementSibling;

        while (nextElement) {
          if (nextElement.classList.contains("floor-plan")) {
            break;
          }
          nextElement = nextElement.nextElementSibling;
        }
        nextElement.classList.toggle("active");
      });
    });
    const fpSwiper = new Swiper(".fp-swiper", {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,

      navigation: {
        nextEl: ".arrow.next",
        prevEl: ".arrow.prev",
      },
    });
  });
})();

// Neighborhood
(function () {
  const neighborhoodPin = document.querySelector(
    ".neighborhood__pin-container"
  );

  window.addEventListener("load", function () {
    if (neighborhoodPin) {
      const imageSet = document.querySelectorAll(".neighborhood__pin-image"),
        content = document.querySelectorAll(".neighborhood__pin-content-inner");
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: neighborhoodPin,
          start: "top top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      imageSet.forEach((set, i) => {
        const images = set.querySelectorAll("img");
        if (i === 0) return;
        tl.to(set, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: easeNone,
        });
        tl.from(
          images[0],
          {
            scale: 1.2,
            ease: easeNone,
          },
          "<"
        );
        tl.from(
          images[1],
          {
            scale: 1.2,
            ease: easeNone,
          },
          "<"
        );
        tl.to(
          content[i],
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: easeNone,
          },
          "<"
        );
      });
    }
  });
})();
/*	-----------------------------------------------------------------------------
  LOAD FUNCTIONS
--------------------------------------------------------------------------------- */

(function () {
  window.addEventListener("load", function () {
    document.body.classList.remove("loading");
  });
})();
