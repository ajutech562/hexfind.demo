/* ========================
   Global Reset
======================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #0a0f1c;
  color: #fff;
}

/* ========================
   Header
======================== */
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #00aaff;
}

nav a {
  margin-left: 25px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

nav a:hover {
  color: #00aaff;
}

/* ========================
   Hero
======================== */
.hero {
  height: 100vh;
  background: linear-gradient(135deg, #000, #001f3f);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 46px;
}

/* ========================
   Sections
======================== */
section {
  padding: 90px 10%;
}

h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #00aaff;
}

/* ========================
   About
======================== */
.about-boxes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* Card */
.about-box {
  background: linear-gradient(145deg, #001f3f, #221c38);
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Image */
.about-box img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

/* Text */
.about-box h3 {
  margin-top: 15px;
  color: #00aaff;
}

.about-box p {
  padding: 0 15px 20px;
  color: #ccc;
  font-size: 15px;
}

/* Hover Animations */
.about-box:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 170, 255, 0.25);
}

.about-box:hover img {
  transform: scale(1.08);
}



/* ========================
   Why Choose Hexfind
======================== */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
}

.why-card {
  background: linear-gradient(145deg, #001f3f, #221c38);
  padding: 30px;
  border-radius: 18px;
  text-align: center;
  transition: 0.3s;
}

.why-card h3 {
  color: #00aaff;
  margin-bottom: 12px;
}

.why-card p {
  color: #ccc;
  font-size: 15px;
}

.why-card:hover {
  transform: translateY(-8px);
}

/* ========================
   Services
======================== */
/* ========================
   Our Services
======================== */
/* ========================
   Services Grid
======================== */
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 × 2 layout */
  gap: 25px;
}

/* Service Button */
.service-card {
  height: 200px;
  border-radius: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Dark overlay */
.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
}

.service-card span,
.service-card {
  z-index: 1;
}

/* Hover effect */
.service-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 170, 255, 0.3);
}

/* ========================
   Background Images
======================== */
/* ========================
   Services Section
======================== */
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.service-card {
  position: relative;
  height: 260px;
  border-radius: 18px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Dark overlay */
.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3));
}

.service-card h3,
.service-card p {
  position: relative;
  z-index: 1;
}

.service-card h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.service-card p {
  font-size: 14px;
  color: #ddd;
  line-height: 1.4;
}

/* Hover animation */
.service-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 170, 255, 0.35);
}

/* ========================
   Background Images
======================== */
.dm { background-image: url("https://images.unsplash.com/photo-1557838923-2985c318be48"); }
.gd { background-image: url("https://images.unsplash.com/photo-1545235617-9465d2a55698"); }
.wd { background-image: url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d"); }
.ad { background-image: url("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"); }
.cctv { background-image: url("data:image/jpeg;base64,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"); }
.ha { background-image: url("https://images.unsplash.com/photo-1581090700227-1e37b190418e"); }
.mep { background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tgo31A2LTl_gosr6Uy3Fpf9UxutGfy7N7Q&s"); }
.id { background-image: url("https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"); }


/* ========================
   How We Do It
======================== */
.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.process-card {
  background: linear-gradient(145deg, #001f3f, #221c38);
  padding: 30px;
  border-radius: 18px;
  text-align: center;
  transition: 0.3s;
}

.process-card h3 {
  color: #00aaff;
  margin-bottom: 12px;
}

.process-card p {
  color: #ccc;
  font-size: 15px;
}

.process-card:hover {
  transform: translateY(-8px);
}

/* ========================
   Gallery Slider
======================== */
.gallery {
  text-align: center;
}

.gallery-slider {
  position: relative;
  max-width: 900px;
  height: 380px;
  margin: auto;
  overflow: hidden;
}

.gallery-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 1s ease, transform 1s ease;
}

.gallery-slide.active {
  opacity: 1;
  transform: translateX(0);
}

/* Dots */
.dots {
  margin-top: 20px;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 6px;
  background: #555;
  border-radius: 50%;
  display: inline-block;
  transition: 0.3s;
}

.dot.active {
  background: #00aaff;
}

/* ========================
   Contact
======================== */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-left p {
  color: #ccc;
}

.md {
  margin-top: 25px;
}

.contact-right form {
  display: flex;
  flex-direction: column;
}

.contact-right input,
.contact-right textarea {
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: none;
}

.contact-right button {
  padding: 12px;
  background: #00aaff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

/* ========================
   Footer
======================== */
footer {
  background: #000;
  padding: 20px;
  text-align: center;
}

/* ========================
   Floating Buttons
======================== */
.mail-btn {
  position: fixed;
  left: 15px;
  bottom: 50%;
  background: #00aaff;
  padding: 12px;
  border-radius: 50%;
  color: #000;
}

#topBtn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: none;
  padding: 12px;
  border-radius: 50%;
  background: #00aaff;
  border: none;
  cursor: pointer;
}

/* ========================
   Reveal Animation
======================== */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ========================
   Mobile
======================== */
@media (max-width: 768px) {
  nav {
    display: none;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 32px;
  }


.about-boxes {
    grid-template-columns: 1fr; /* 1 per row on mobile */
  }
}
