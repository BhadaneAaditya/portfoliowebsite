/* ============================================================
   Aaditya Bhadane — Portfolio
   Data fetched from github.com/BhadaneAaditya (via GitHub API)
   ============================================================ */

/* ---------------- PROJECT DATA (from GitHub API) ---------------- */
const GITHUB_USER = "BhadaneAaditya";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

const PROJECTS = [
  {
    name: "AI-Frontend-Developer-Agent",
    desc: "An intelligent, automated system that acts like a junior-to-mid frontend developer — takes high-level UI tasks and generates production-ready React, Next.js, TailwindCSS and TypeScript code.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/AI-Frontend-Developer-Agent-", featured: true, stars: 0
  },
  {
    name: "AI-WhatsApp-Business-Assistant",
    desc: "Production-ready WhatsApp automation backend integrating the WhatsApp Cloud API with LLMs — conversation memory, intelligent replies and real-time business insights.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/AI-WhatsApp-Business-Assistant", featured: true, stars: 0
  },
  {
    name: "OpsPilot",
    desc: "AI-native ERP that replaces Tally + 10 Excels for mid-size factories — connects to data in 1 day, predicts stockouts 7 days ahead, and runs production on autopilot.",
    lang: "HTML", url: "https://github.com/BhadaneAaditya/OpsPilot", featured: true, stars: 0
  },
  {
    name: "VitalWatch",
    desc: "AI-powered early-warning system that detects subtle health decline using everyday data like sleep, energy and vitals — flags risks early and suggests specific tests.",
    lang: "HTML", url: "https://github.com/BhadaneAaditya/VitalWatch", featured: true, stars: 0
  },
  {
    name: "QuantAlphaLab",
    desc: "Experimental quantitative research platform for synthetic alpha-factor generation, predictive modeling and institutional-style factor analytics using ML + advanced visualization.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/QuantAlphaLab-Synthetic-Factor-Research-Predictive-Analytics-Platform", featured: true, stars: 0
  },
  {
    name: "VirtualMouseUsingOpenCv",
    desc: "Real-time virtual mouse with Python, OpenCV and MediaPipe — controls your cursor through hand-gesture tracking, clicks included, no hardware needed.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/VirtualMouseUsingOpenCv", featured: true, stars: 0
  },
  {
    name: "DiamondComputersCRMTool",
    desc: "A workflow & customer-relationship management tool delivered as a freelance project for Diamond Computers.",
    lang: "HTML", url: "https://github.com/BhadaneAaditya/DiamondComputersCRMTool", featured: false, stars: 0
  },
  {
    name: "call-center-ai",
    desc: "Send a phone call from an AI agent in a single API call — or dial the bot directly from your configured phone number.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/call-center-ai", featured: false, stars: 0
  },
  {
    name: "gemma",
    desc: "Gemma open-weight LLM library bindings (from Google DeepMind) — lightweight local inference experiments.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/gemma", featured: false, stars: 0
  },
  {
    name: "Streamify",
    desc: "A full-fledged streaming platform built with a modern TypeScript stack.",
    lang: "TypeScript", url: "https://github.com/BhadaneAaditya/Streamify", featured: false, stars: 0
  },
  {
    name: "Audiophile",
    desc: "An immersive e-commerce website for high-end audio gear.",
    lang: "HTML", url: "https://github.com/BhadaneAaditya/Audiophile", featured: false, stars: 0
  },
  {
    name: "communlink",
    desc: "Community & communication platform — connect, share and collaborate.",
    lang: "TypeScript", url: "https://github.com/BhadaneAaditya/communlink", featured: false, stars: 0
  },
  {
    name: "Airline-Reservation-Advance-Java",
    desc: "Airline reservation system built with Advance Java (Swing + JDBC workflows).",
    lang: "Java", url: "https://github.com/BhadaneAaditya/Airline-Reservation-using-Advance-Java", featured: false, stars: 1
  },
  {
    name: "Stock-Management-System",
    desc: "Inventory & stock tracking system with a PHP-driven admin flow.",
    lang: "PHP", url: "https://github.com/BhadaneAaditya/Stock-Management-System", featured: false, stars: 0
  },
  {
    name: "GST-Billing-Python-Django",
    desc: "GST-compliant billing application built on Python & Django.",
    lang: "Python", url: "https://github.com/BhadaneAaditya/GST-Billing-Python-Django", featured: false, stars: 0
  },
  {
    name: "Doctor-Appointment-System",
    desc: "Appointment booking & scheduling system for clinics.",
    lang: "CSS", url: "https://github.com/BhadaneAaditya/Doctor-Appointment-System", featured: false, stars: 0
  },
  {
    name: "PharmaStoreManagement",
    desc: "Pharmacy inventory & store management web app.",
    lang: "HTML", url: "https://github.com/BhadaneAaditya/PharmaStoreManagement", featured: false, stars: 0
  },
  {
    name: "Xwiggy",
    desc: "Food-ordering experience inspired by modern delivery apps.",
    lang: "HTML", url: "https://github.com/BhadaneAaditya/Xwiggy", featured: false, stars: 0
  }
];

/* ---------------- SKILLS ---------------- */
const SKILLS = [
  { name: "HTML5", ico: "🖥️", level: "Advanced" },
  { name: "CSS3", ico: "🎨", level: "Advanced" },
  { name: "JavaScript", ico: "⚡", level: "Advanced" },
  { name: "Python", ico: "🐍", level: "Advanced" },
  { name: "Git & GitHub", ico: "🔀", level: "Advanced" },
  { name: "React.js", ico: "⚛️", level: "Advanced" },
  { name: "Full-Stack Development", ico: "🧱", level: "Advanced" },
  { name: "Web Development", ico: "🌐", level: "Advanced" },
  { name: "REST API Development", ico: "🔌", level: "Advanced" },
  { name: "Back-End Web Development", ico: "🖧", level: "Advanced" },
  { name: "AI Code Generation", ico: "🧠", level: "Intermediate" },
  { name: "AI Agents", ico: "👓", level: "Intermediate" },
  { name: "Agentic AI Development", ico: "🕸️", level: "Intermediate" },
  { name: "LangGraph", ico: "🔗", level: "Intermediate" },
  { name: "Prompt Engineering", ico: "✍️", level: "Intermediate" },
  { name: "OpenAI API (GPT-3.5)", ico: "🧬", level: "Intermediate" },
  { name: "Next.js", ico: "🔼", level: "Intermediate" },
  { name: "Tailwind CSS", ico: "💨", level: "Intermediate" },
  { name: "TypeScript", ico: "🛡️", level: "Intermediate" },
  { name: "Node.js", ico: "🟩", level: "Intermediate" },
  { name: "LLM Integration", ico: "🤖", level: "Intermediate" },
  { name: "FastAPI", ico: "🚀", level: "Intermediate" },
  { name: "Automation", ico: "⚙️", level: "Intermediate" },
  { name: "Lead Classification", ico: "🪧", level: "Intermediate" },
  { name: "PostgreSQL", ico: "🐘", level: "Intermediate" },
  { name: "SQLAlchemy", ico: "🗄️", level: "Intermediate" },
  { name: "Webhook Integration", ico: "🔔", level: "Intermediate" },
  { name: "Architectural Design", ico: "🏗️", level: "Intermediate" },
  { name: "Automation & Workflow Design", ico: "🔄", level: "Intermediate" },
  { name: "System Monitoring & Debugging", ico: "🛠️", level: "Intermediate" },
  { name: "Predictive Analytics", ico: "📊", level: "Intermediate" },
  { name: "SQLite", ico: "📦", level: "Intermediate" },
  { name: "Anomaly Detection", ico: "📉", level: "Intermediate" },
  { name: "Real-time Data Processing", ico: "⚡", level: "Intermediate" },
  { name: "Systems Design", ico: "🏗️", level: "Intermediate" },
  { name: "Risk Prediction Systems", ico: "⚠️", level: "Intermediate" },
  { name: "Real-time Systems Architecture", ico: "🌀", level: "Intermediate" },
  { name: "Machine Learning", ico: "📈", level: "Intermediate" },
  { name: "Data Science", ico: "📚", level: "Intermediate" },
  { name: "Problem Solving", ico: "💡", level: "Intermediate" },
  { name: "Algorithms", ico: "🧮", level: "Intermediate" },
  { name: "Data Structures", ico: "🌳", level: "Intermediate" },
  { name: "Blockchain", ico: "⛓️", level: "Intermediate" },
  { name: "Android Development", ico: "📱", level: "Intermediate" },
  { name: "Educational Research", ico: "🎓", level: "Intermediate" },
  { name: "Java", ico: "☕", level: "Intermediate" },
  { name: "PHP", ico: "🐘", level: "Intermediate" },
  { name: "OpenCV / MediaPipe", ico: "👁️", level: "Intermediate" }
];

/* ---------------- Certifications ---------------- */
const CERTS = [
  { name: "OCI 2025 Certified Data Science Professional", cat: "Data Science", ico: "📊", desc: "Machine learning, statistics and data pipelines on Oracle Cloud Infrastructure." },
  { name: "OCI 2025 Certified AI Foundations Associate", cat: "AI", ico: "🤖", desc: "Core AI & ML concepts, cloud AI services and model fundamentals." },
  { name: "OCI 2025 Certified Generative AI Professional", cat: "AI", ico: "✨", desc: "Large language models, generative workflows and AI application design." },
  { name: "Oracle Autonomous Database Cloud Certified Professional", cat: "Databases", ico: "🗄️", desc: "Autonomous database provisioning, performance tuning and lifecycle management." },
  { name: "Oracle APEX Cloud Developer Certified Professional", cat: "Software Engineering", ico: "💻", desc: "Low-code enterprise application development with Oracle APEX." },
  { name: "OCI 2025 Certified Developer Professional", cat: "Software Engineering", ico: "👨‍💻", desc: "Python, REST APIs and cloud-native development practices." },
  { name: "OCI 2025 Certified DevOps Professional", cat: "DevOps", ico: "⚙️", desc: "CI/CD pipelines, infrastructure automation and cloud operations." }
];

/* ---------------- Render Skills ---------------- */
(function renderSkills() {
  const half = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, half);
  const row2 = SKILLS.slice(half);
  const card = (s) => `<div class="skill"><span class="ico">${s.ico}</span><span class="nm">${s.name}</span><span class="lv">${s.level}</span></div>`;

  const t1 = document.getElementById("marqueeTrack1");
  if (t1) t1.innerHTML = [...row1, ...row1].map(card).join("");

  const t2 = document.getElementById("marqueeTrack2");
  if (t2) t2.innerHTML = [...row2, ...row2].map(card).join("");

  const certLine = document.getElementById("certLine");
  if (certLine) {
    certLine.innerHTML = CERTS.map(
      (c) => `<div class="exp-item cert-item">
        <span class="exp-icon" aria-hidden="true">${c.ico}</span>
        <div class="exp-content">
          <span class="cert-cat">${c.cat}</span>
          <h3 class="cert-name">${c.name}</h3>
          <p class="cert-desc">${c.desc}</p>
        </div>
      </div>`
    ).join("");
  }
})();

/* ---------------- Render Projects ---------------- */
(function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const strip = document.getElementById("featuredStrip");
  const order = [...PROJECTS].sort((a, b) => (b.featured - a.featured) || a.name.localeCompare(b.name));
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const colorClass = (l) => {
    const m = { "Python": "col", "HTML": "col2", "TypeScript": "col3", "Java": "col4", "CSS": "col2", "PHP": "col" };
    return m[l] || "col";
  };

  if (strip && featured.length) {
    strip.innerHTML = featured.map((p, i) => `
      <a class="featured-card" href="${p.url}" target="_blank" rel="noopener">
        <span class="fc-num">0${i + 1}</span>
        <div class="fc-body">
          <span class="p-lang ${colorClass(p.lang)}">${p.lang}</span>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <span class="fc-link">View on GitHub ↗</span>
        </div>
      </a>`).join("");
  }

  grid.innerHTML = order.map((p) => `
    <article class="project-card${p.featured ? " featured" : ""}">
      <div class="p-top">
        <span class="p-folder">📁</span>
        <span class="p-lang ${colorClass(p.lang)}">${p.lang}</span>
      </div>
      <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
      <p>${p.desc}</p>
      <div class="p-foot">
        <span class="repo-badge">${p.featured ? "⭐ Featured" : "Repository"}</span>
        <a class="glink" href="${p.url}" target="_blank" rel="noopener">View on GitHub ↗</a>
      </div>
    </article>`).join("");
})();

/* ---------------- Typewriter ---------------- */
(function typewriter() {
  const el = document.getElementById("typewriter");
  const lines = ["SOFTWARE DEVELOPER", "AI ENTHUSIAST", "FULL-STACK BUILDER", "OPEN SOURCE"];
  let li = 0, ci = 0, deleting = false;
  function tick() {
    const word = lines[li];
    el.textContent = word.slice(0, ci);
    let delay = deleting ? 40 : 90;
    if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; li = (li + 1) % lines.length; delay = 350; }
    ci += deleting ? -1 : 1;
    setTimeout(tick, delay);
  }
  tick();
})();

/* ---------------- Stars background ---------------- */
(function stars() {
  const wrap = document.getElementById("stars");
  for (let i = 0; i < 90; i++) {
    const s = document.createElement("span");
    s.className = "star";
    const size = (Math.random() * 2.4 + 1).toFixed(1);
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.width = s.style.height = size + "px";
    s.style.setProperty("--d", (3 + Math.random() * 5).toFixed(1) + "s");
    s.style.setProperty("--delay", (Math.random() * 6).toFixed(1) + "s");
    wrap.appendChild(s);
  }
})();

/* ---------------- Cube mouse tilt ---------------- */
(function cubeTilt() {
  const wrap = document.getElementById("cubeWrap");
  if (!wrap) return;
  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener("mousemove", (e) => {
    tx = ((e.clientX / innerWidth) - 0.5) * 40;
    ty = ((e.clientY / innerHeight) - 0.5) * 40;
  });
  (function loop() {
    cx += (tx - cx) * 0.05;
    cy += (ty - cy) * 0.05;
    wrap.style.transform = `translate(${cx}px, ${cy + 20}px) translateY(-50%)`;
    requestAnimationFrame(loop);
  })();
})();

/* ---------------- Cursor orb ---------------- */
(function orb() {
  const o = document.getElementById("orb");
  if (!o || !matchMedia("(hover:hover)").matches) return;
  window.addEventListener("mousemove", (e) => {
    o.style.left = e.clientX + "px";
    o.style.top = e.clientY + "px";
  });
})();

/* ---------------- Navbar / menu ---------------- */
(function nav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const links = document.querySelector(".nav-links");
  const progress = document.getElementById("progressBar");
  const toTop = document.getElementById("toTop");

  const onScroll = () => {
    navbar.classList.toggle("scrolled", scrollY > 30);
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    if (toTop) toTop.classList.toggle("show", scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));

  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navAnchors.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  sections.forEach((s) => spy.observe(s));
})();

/* ---------------- Scroll reveal ---------------- */
(function reveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

/* ---------------- Animated counters ---------------- */
(function counters() {
  const data = { statProjects: 24, statYears: 7, statPublications: 2 };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id, target = data[id];
      let cur = 0;
      const step = Math.max(1, Math.round(target / 60));
      const t = setInterval(() => {
        cur = Math.min(target, cur + step);
        en.target.textContent = cur + "+";
        if (cur >= target) clearInterval(t);
      }, 30);
      io.unobserve(en.target);
    });
  }, { threshold: 0.5 });
  Object.keys(data).forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
})();

/* ---------------- Contact form (composes an email) ---------------- */
(function contactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${fd.get("name")}`);
    const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
    window.location.href = `mailto:asbdev07@gmail.com?subject=${subject}&body=${body}`;
  });
})();
