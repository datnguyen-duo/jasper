/*	-----------------------------------------------------------------------------
  GLOBAL VARIABLES
--------------------------------------------------------------------------------- */

const easeInOut = "power4.inOut",
  easeOut = "power1.out",
  easeIn = "power1.in",
  easeNone = "none",
  duration = 0.7,
  durationSlow = 1.5,
  durationFast = 0.3,
  start = "top 80%",
  startScrub = "top bottom",
  startPin = "top top",
  scale = 1.5;
gsap.registerPlugin(ScrollTrigger);

/*	-----------------------------------------------------------------------------
  SMOOTH SCROLL
--------------------------------------------------------------------------------- */

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

/*	-----------------------------------------------------------------------------
    SLIDER
--------------------------------------------------------------------------------- */

(function () {
  window.addEventListener("load", function () {
    const customLabels = [
      "Pool",
      "Gym",
      "Kid’s Playroom",
      "Garden Lounge",
      "Co-Working Space",
      "Outdoor Terrace",
    ];
    const swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            ' text__size-5">' +
            customLabels[index] +
            "</span>"
          );
        },
      },
      on: {
        init: function () {
          const swiperInstance = this;
          document
            .querySelector(".swiper-button-next")
            .addEventListener("click", function () {
              swiperInstance.autoplay.stop();
            });
          document
            .querySelector(".swiper-button-prev")
            .addEventListener("click", function () {
              swiperInstance.autoplay.stop();
            });
        },
      },
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

/*	-----------------------------------------------------------------------------
    PINS
--------------------------------------------------------------------------------- */

// Full Images
(function () {
  window.addEventListener("load", function () {
    const fullImages = document.querySelectorAll(".scroll__image--full");
    if (window.innerWidth > 768) {
      if (fullImages) {
        fullImages.forEach((container) => {
          // const items = container.querySelectorAll(".scroll__image--full-item"),
          //   images = container.querySelectorAll(
          //     ".scroll__image--full-item-image"
          //   );
          // var fullImageTl = gsap.timeline({
          //   ease: easeNone,
          //   scrollTrigger: {
          //     trigger: container,
          //     start: startPin,
          //     end: "+=200%",
          //     scrub: true,
          //     pin: true,
          //   },
          // });
          // items.forEach((item, i) => {
          //   if (items[i + 1]) {
          //     fullImageTl.to(items[i + 1], {
          //       clipPath: "inset(0% 0% 0% 0%)",
          //       ease: easeNone,
          //     });
          //   }
          // });
          // const totalDuration = fullImageTl.duration();
          // fullImageTl.to(
          //   images,
          //   {
          //     yPercent: -30,
          //     duration: totalDuration,
          //     ease: easeNone,
          //   },
          //   0
          // );
        });
      }
    }
  });
})();

// Neighborhood
// (function () {
//   window.addEventListener("load", function () {
//     const neighborhoodPin = document.querySelector(
//       ".neighborhood__pin-container"
//     );
//     if (neighborhoodPin) {
//       const imageSet = document.querySelectorAll(".neighborhood__pin-image"),
//         content = document.querySelectorAll(".neighborhood__pin-content-inner");
//       var tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: neighborhoodPin,
//           start: "top top",
//           end: window.innerWidth > 768 ? "+=200%" : "+=100%",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       imageSet.forEach((set, i) => {
//         const images = set.querySelectorAll("img");
//         if (i === 0) return;
//         tl.to(set, {
//           clipPath: "inset(0% 0% 0% 0%)",
//           ease: easeNone,
//         });
//         tl.from(
//           images[0],
//           {
//             scale: 1.2,
//             ease: easeNone,
//           },
//           "<"
//         );
//         tl.from(
//           images[1],
//           {
//             scale: 1.2,
//             ease: easeNone,
//           },
//           "<"
//         );
//         tl.to(
//           content[i],
//           {
//             opacity: 1,
//             duration: 0.2,
//           },
//           "<50%"
//         );
//       });
//     }
//   });
// })();

// Amenities
(function () {
  window.addEventListener("load", function () {
    // if (window.innerWidth > 768) {
    //   const text = document.querySelectorAll(
    //     ".swiper-slide-active .amenities__slide-text"
    //   );
    //   var tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".amenities__pin",
    //       start: "top top",
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1,
    //       onLeave: (self) => {
    //         let scrollTop = lenis.scroll - (self.end - self.start);
    //         self.kill();
    //         lenis.scrollTo(scrollTop, {
    //           immediate: true,
    //         });
    //         self.animation.progress(1);
    //         ScrollTrigger.refresh();
    //         document.body.classList.add("init__pin");
    //       },
    //     },
    //   });
    //   tl.from(".amenities__pin-inner", {
    //     scale: window.innerWidth > 768 ? 0.45 : 0.8,
    //   });
    //   tl.to(
    //     text[0],
    //     {
    //       opacity: 0,
    //       scale: 1,
    //     },
    //     "<"
    //   );
    //   tl.to(
    //     text[1],
    //     {
    //       opacity: 0,
    //       scale: 1,
    //     },
    //     "<"
    //   );
    // } else {
    //   document.body.classList.add("init__pin");
    // }
  });
})();

/*	-----------------------------------------------------------------------------
    SCROLL ANIMATIONS
--------------------------------------------------------------------------------- */

(function () {
  // Zoom Images
  window.addEventListener("load", function () {
    window.scrollTo(0, 0);
    const zoomImages = gsap.utils.toArray(".scroll__image--zoom img"),
      parallaxImages = gsap.utils.toArray(".scroll__image--parallax"),
      loadImages = gsap.utils.toArray(".scroll__image--load"),
      loadHeadline = gsap.utils.toArray(".scroll__headline--load"),
      loadText = gsap.utils.toArray(".scroll__text--load");

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
          yPercent: image.classList.contains("--down") ? 20 : -20,
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

    if (loadHeadline) {
      loadHeadline.forEach((headline) => {
        var splitInner = new SplitText(headline, {
          type: "lines",
          linesClass: "line__inner",
        });
        var splitOuter = new SplitText(headline, {
          type: "lines",
          linesClass: "line__outer no-overflow",
        });

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: headline,
            start: "top 100%",
          },
        });
        tl.from(splitInner.lines, {
          duration: 1.7,
          yPercent: 100,
          ease: "expo.inOut",
          stagger: 0.05,
        });
      });
    }

    if (loadText) {
      loadText.forEach((text) => {
        gsap.from(text, {
          duration: 1,
          opacity: 0,
          ease: "power4.inOut",

          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          },
        });
      });
    }
  });
})();

/*	-----------------------------------------------------------------------------
    SECTION ANIMATIONS
--------------------------------------------------------------------------------- */
// Hero
(function () {
  window.addEventListener("load", function () {
    window.scrollTo(0, 0);
    const sections = document.querySelectorAll(".hero");

    if (sections) {
      sections.forEach((section) => {
        const images = section.querySelectorAll(".hero__image"),
          title = section.querySelector(".hero__title"),
          preTitle = section.querySelector(".hero__pre-title"),
          subTitle = section.querySelector(".hero__sub-title"),
          description = section.querySelector(".hero__description"),
          disclaimer = section.querySelector(".hero__disclaimer"),
          button = section.querySelector(".hero__button"),
          footer = section.querySelector(".hero__footer"),
          navigation = document.querySelector(".navigation"),
          announcementBar = document.querySelector(".announcement-bar"),
          lastImage = images[images.length - 1].querySelector("img"),
          lastImageOverlay =
            images[images.length - 1].querySelector(".overlay"),
          colors = ["#162C53", "#1B413E", "#a13a32"];

        var tl = gsap.timeline({
          onStart: function () {
            lenis.stop();
          },
          onComplete: function () {
            document.body.classList.remove("loading");
            lenis.start();
          },
        });

        // images.forEach((image, i) => {
        //   if (i === 0) return;
        //   tl.from(image, {
        //     scale: 0,
        //     duration: durationSlow,
        //     ease: easeInOut,
        //     delay: i === 1 ? 0.7 : 0,
        //   });
        //   tl.to(
        //     titles[i],
        //     {
        //       clipPath: "inset(0% 0% 0% 0%)",
        //       duration: durationSlow,
        //       ease: easeInOut,
        //     },
        //     "<"
        //   );
        //   tl.to(
        //     section,
        //     {
        //       backgroundColor: colors[i],
        //       duration: durationSlow,
        //       ease: easeInOut,
        //     },
        //     "<"
        //   );
        //   tl.to(
        //     titles,
        //     {
        //       backgroundColor: colors[i],
        //       duration: durationSlow,
        //       ease: easeInOut,
        //     },
        //     "<"
        //   );
        //   tl.add(() => {
        //     if (titles[i - 1]) {
        //       titles[i - 1].remove();
        //     }

        //     if (i === images.length - 1) {
        //       gsap.to(titles[i], {
        //         backgroundColor: "#a13a3200",
        //       });
        //     }
        //   });
        // });

        tl.to(images[0], {
          scale: 1,
          duration: durationSlow,
          ease: "expo.inOut",
          delay: 1,
        });
        tl.to(
          lastImage,
          {
            scale: 1,
            duration: durationSlow,
            ease: "expo.inOut",
          },
          "<"
        );
        tl.to(
          lastImageOverlay,
          {
            opacity: 1,
            duration: durationSlow,
            ease: "expo.inOut",
          },
          "<"
        );

        tl.from(navigation, {
          opacity: 0,
          ease: easeInOut,
        });
        tl.from(
          announcementBar,
          {
            opacity: 0,
            ease: easeInOut,
          },
          "<"
        );
        tl.from(
          button,
          {
            opacity: 0,
            ease: easeInOut,
          },
          "<"
        );
        tl.from(
          footer,
          {
            opacity: 0,
            ease: easeInOut,
          },
          "<"
        );
        tl.from(
          subTitle,
          {
            opacity: 0,
            ease: easeInOut,
          },
          "<"
        );
        tl.from(
          description,
          {
            opacity: 0,
            ease: easeInOut,
          },
          "<"
        );
        tl.from(
          disclaimer,
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
  window.addEventListener("load", function () {
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

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      });
    });
  });
})();

// Modal

(function () {
  document.addEventListener("DOMContentLoaded", function () {
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
  });
})();

// FAQ
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("faq")) {
      gsap.from(".faq__container-item > .inner", {
        opacity: 0,
        ease: easeInOut,
        delay: 2,
      });

      document.querySelectorAll(".q-group .inner h4").forEach((toggle) => {
        toggle.addEventListener("click", function () {
          toggle.closest(".inner").classList.toggle("active");
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 450);
        });
      });

      document.querySelectorAll(".q-group").forEach((group, i) => {
        var target = document.querySelectorAll(".--cat a")[i];
        ScrollTrigger.create({
          trigger: group,
          start: "top 30%",
          end: "bottom 30%",
          toggleClass: { targets: target, className: "active" },
        });
      });
    }
  });
})();

/*	-----------------------------------------------------------------------------
  NAVIGATION
--------------------------------------------------------------------------------- */

(function () {
  window.addEventListener("load", function () {
    const navLinks = document.querySelectorAll(".navigation__link");

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("data-attribute-anchor");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        ScrollTrigger.create({
          trigger: targetSection,
          start: "top center",
          end: "bottom center",
          toggleClass: { targets: link, className: "active" },
        });
      }
    });
    ScrollTrigger.create({
      trigger: document.body,
      start: "5px top",
      end: "+=100000",
      toggleClass: { targets: ".navigation", className: "scrolled" },
    });
    document.querySelectorAll(".navigation a").forEach((link) => {
      link.addEventListener("click", function () {
        document.body.classList.remove("init__nav");
      });
    });
    document
      .querySelector(".navigation__toggle")
      .addEventListener("click", function () {
        document.body.classList.toggle("init__nav");
      });
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
