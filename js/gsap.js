gsap.registerPlugin(ScrollTrigger);
// Skew For the images

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".photo", "skewY", "deg"),
  clamp = gsap.utils.clamp(-20, 20);

ScrollTrigger.create({
  scrub: true,
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);

    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

gsap.set(".photo", { transformOrigin: "right center", force3D: true });

// Other simple gsap animation
const steps = gsap.utils.toArray(".step_card");
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".steps_section",
    start: "top 30%",
    end: "+=500",
    toggleActions: "restart pause reverse reset",
    scrub: 1,
  },
});
steps.forEach((step, index) => {
  if ([2, 3].includes(index)) {
    tl.from(step, {
      x: -150,
      y: 150,
      duration: 2.5,
    });
  } else {
    tl.from(step, {
      x: 200,
      y: 150,
      duration: 3,
    });
  }
});

const items = document.querySelectorAll(".price_section_card_header h3 span");

gsap.from(items, {
  scrollTrigger: {
    trigger: ".price_section",
    toggleActions: "restart pause none reset",
  },
  textContent: 0,
  duration: 4,
  ease: Power1.easeIn,
  snap: { textContent: 1 },
  stagger: 1,
});

// <!-- Header nav -->

let tl2 = gsap.timeline();

tl2
  .from(".logo_img", {
    duration: 0.2,
    opacity: 0,
    scales: 2,
    ease: "back",
  })
  .from(".nav li", {
    duration: 0.3,
    opacity: 0,
    y: "random(-200,200)",
    stagger: 0.25,
  })
  .from(".header_contact a", {
    duration: 0.2,
    opacity: 0,
    y: 100,
    stagger: 0.15,
  });

gsap.from(".section__work_slider .swiper", {
  scrollTrigger: {
    trigger: "#portfolio",
    toggleActions: "restart pause resume reset",
    start: "top 70%",
  },

  opacity: 0.2,
  duration: 2,
  y: 200,
});

const map = {
  scrollTrigger: {
    trigger: ".comments_section_swiper",
    toggleActions: "restart none none none",
    start: "top 40%",
  },

  duration: 0.5,
};

gsap.from(".map_section_map", {
  ...map,
  x: -100,
});
gsap.from(".map_section_right_content", {
  ...map,
  x: 100,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer_container",
    toggleActions: "restart none none none",
  },
});

tl3
  .from(".footer_container ul li", {
    duration: 0.1,
    opacity: 0,
    y: 100,
    stagger: 0.25,
  })
  .from(".footer_social h2", {
    x: -100,
    opacity: 0,
    duration: 0.1,
  })
  .from(".footer_social i", {
    x: 100,
    duration: 0.1,
    y: 50,
    stagger: 0.25,
    opacity: 0,
  });

const priceSectionObj = {
  scrollTrigger: {
    trigger: "#price",
    toggleActions: "restart none none none",
    start: "top center",
  },

  duration: 0.6,
};

gsap.from(".price_section_card_first", {
  ...priceSectionObj,
  y: 20,
});
gsap.from(".price_section_card_second", {
  ...priceSectionObj,
  y: -20,
});
gsap.from(".price_section_card_third", {
  ...priceSectionObj,
  y: 20,
});

AOS.init();
