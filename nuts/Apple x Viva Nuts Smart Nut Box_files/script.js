const productCards = [
  {
    title: "Minimal aluminum alloy exterior",
    body: "A softly machined shell gives the Smart Nut Box a cool, durable, premium feel in hand.",
    image: "./assets/product-closeup.webp",
    alt: "Close-up of Smart Nut Box aluminum exterior with Apple x Viva Nuts mark",
    badge: "Apple x Viva Nuts"
  },
  {
    title: "Lid display with daily guidance",
    body: "The circular LED display gives precise portions at a glance before each snack moment.",
    image: "./assets/watch-tap.webp",
    alt: "Finger touching Smart Nut Box lid display beside an Apple Watch",
    badge: "Recommended Intake: 5 Almonds + 3 Walnuts"
  },
  {
    title: "Retail-ready collaborative identity",
    body: "Dual-brand presentation carries through the product, table display, and Viva Nuts packaging.",
    image: "./assets/retail-display.webp",
    alt: "Retail display showing Apple x Viva Nuts Smart Nut Box and packaging",
    badge: "Apple x Viva Nuts"
  }
];

const setupSteps = [
  {
    title: "Pair with Apple Watch",
    body: "Open the companion flow and bring Apple Watch close to the Smart Nut Box for quick wireless pairing."
  },
  {
    title: "Tap the sensing ring",
    body: "Touch the illuminated lid ring to confirm the serving and activate the micro weighing sensor array."
  },
  {
    title: "Start daily intake tracking",
    body: "Each serving syncs to Health-style summaries for intake, calories, Omega-3 progress, and sharpness trends."
  }
];

const healthMetrics = [
  { label: "Nut intake tracking", value: "18g logged" },
  { label: "Daily Omega-3 goals", value: "72%" },
  { label: "Calorie calculations", value: "124 kcal" },
  { label: "Mental sharpness assessment", value: "Focused" }
];

const components = [
  {
    title: "Aluminum alloy shell",
    body: "A lightweight exterior protects the internal compartment while keeping the silhouette minimal."
  },
  {
    title: "Micro weighing sensor array",
    body: "Precision sensors calculate portion changes and translate serving weight into nutrition signals."
  },
  {
    title: "Apple-designed W2 chip",
    body: "Wireless connectivity and local data analysis support fast pairing, sync, and low-power operation."
  },
  {
    title: "Removable nut compartment",
    body: "The inner container lifts out for cleaning, refilling, and ingredient changes throughout the week."
  }
];

const testimonials = [
  {
    quote: "It changed my snack routine from guessing to knowing.",
    name: "Maya Chen",
    detail: "Early Smart Nut Box customer",
    video: "./assets/testimonial-0610.mp4"
  }
];

const colors = [
  {
    name: "Space Gray",
    body: "A graphite finish for work desks, gym bags, and everyday carry.",
    swatch: "linear-gradient(145deg, #22252a, #6d7177)"
  },
  {
    name: "Silver",
    body: "A bright aluminum expression that reflects the clean Apple-inspired exterior.",
    swatch: "linear-gradient(145deg, #f8f8f7, #b9bec4)"
  },
  {
    name: "Rose Gold",
    body: "A warm collaborative finish paired with Viva Nuts retail packaging.",
    swatch: "linear-gradient(145deg, #f6d0c7, #b9887e)"
  }
];

const byId = (id) => document.getElementById(id);

function renderProductCards() {
  byId("productCards").innerHTML = productCards
    .map(
      (card) => `
        <article class="product-card reveal">
          <img src="${card.image}" alt="${card.alt}" loading="lazy" decoding="async" width="432" height="243">
          <div class="card-body">
            <h3>${card.title}</h3>
            <p>${card.body}</p>
            <span class="design-display">${card.badge}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSteps() {
  byId("setupSteps").innerHTML = setupSteps
    .map(
      (step, index) => `
        <article class="step-card reveal">
          <span class="step-number">${index + 1}</span>
          <h3>${step.title}</h3>
          <p>${step.body}</p>
        </article>
      `
    )
    .join("");
}

function renderHealthMetrics() {
  byId("healthMetrics").innerHTML = healthMetrics
    .map(
      (metric) => `
        <article class="metric-card">
          <p>${metric.label}</p>
          <span class="metric-value">${metric.value}</span>
        </article>
      `
    )
    .join("");
}

function renderComponents() {
  byId("componentList").innerHTML = components
    .map(
      (component) => `
        <article class="component-card reveal">
          <h3>${component.title}</h3>
          <p>${component.body}</p>
        </article>
      `
    )
    .join("");
}

function renderTestimonials() {
  byId("testimonialTrack").innerHTML = testimonials
    .map(
      (story) => `
        <article class="testimonial-card">
          <video controls preload="metadata" playsinline aria-label="Customer testimonial video from ${story.name}">
            <source src="${story.video}" type="video/mp4">
          </video>
          <div class="testimonial-copy">
            <p class="quote">“${story.quote}”</p>
            <h3>${story.name}</h3>
            <p>${story.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderColors() {
  byId("colorGrid").innerHTML = colors
    .map(
      (color) => `
        <article class="color-card reveal">
          <span class="swatch" style="background: ${color.swatch}" aria-hidden="true"></span>
          <h3>${color.name}</h3>
          <p>${color.body}</p>
        </article>
      `
    )
    .join("");
}

function setupReveal() {
  const reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((element) => observer.observe(element));
}

function setupCarousel() {
  const track = byId("testimonialTrack");
  const controls = document.querySelectorAll("[data-carousel]");

  controls.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.carousel === "next" ? 1 : -1;
      const slideWidth = track.clientWidth;
      track.querySelectorAll("video").forEach((video) => video.pause());
      track.scrollBy({ left: direction * slideWidth, behavior: "smooth" });
    });
  });
}

function init() {
  renderProductCards();
  renderSteps();
  renderHealthMetrics();
  renderComponents();
  renderTestimonials();
  renderColors();
  setupReveal();
  setupCarousel();
}

document.addEventListener("DOMContentLoaded", init);
