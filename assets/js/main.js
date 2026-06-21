/* ===================================================================
   ADP — interactions: nav, i18n (RO/EN), reveals, counters, form
   =================================================================== */
(function () {
  "use strict";

  /* ---------- NAV: scrolled state + mobile menu ---------- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var links = document.querySelector(".nav__links");

  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    nav.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      nav.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- I18N: Romanian (default) + English ---------- */
  var EN = {
    "brand.sub": "Criminal Law Association",
    "nav.about": "About", "nav.docs": "Documents", "nav.goals": "Goals", "nav.governance": "Governance",
    "nav.aidp": "AIDP", "nav.grupnational": "National Group", "nav.revista": "Journal",
    "nav.publicatii": "Publications", "nav.research": "Research",
    "nav.members": "Members", "nav.join": "Become a member",
    "hero.kicker": "Public association · Republic of Moldova · Founded 2017",
    "docs.eyebrow": "Official documents", "docs.title": "Founding and activity documents",
    "docs.sub": "The documents underpinning the establishment and operation of the association — statutes, regulations and activity reports.",
    "docs.d1t": "ADP Statute", "docs.d1s": "The founding document of the association",
    "docs.d2t": "Internal regulations", "docs.d2s": "Rules of organisation and operation",
    "docs.d3t": "Activity report", "docs.d3s": "Activities carried out by the association",
    "aidp.eyebrow": "International affiliation", "aidp.title": "AIDP",
    "aidp.sub": "The Criminal Law Association of the Republic of Moldova is a member of the Association Internationale de Droit Pénal (AIDP) — the international reference organisation in comparative criminal law, founded in 1924 and holding consultative status with the UN.",
    "aidp.c1t": "Global network", "aidp.c1d": "Through AIDP, our association is connected to the worldwide network of criminal-law specialists from over 100 countries.",
    "aidp.c2t": "World congresses", "aidp.c2d": "Participation in international congresses and colloquia organised by AIDP, contributing to the elaboration of criminal-law resolutions.",
    "aidp.c3t": "International standards", "aidp.c3d": "Promoting international standards in criminal law and the defence of human rights within criminal proceedings.",
    "gn.eyebrow": "National representation", "gn.title": "National Group",
    "gn.sub": "Within AIDP, the Criminal Law Association of the Republic of Moldova constitutes the National Group of the Republic of Moldova — the voice of Moldovan criminal law on the international legal scene.",
    "gn.1tag": "Mission", "gn.1t": "Representation at AIDP", "gn.1d": "The National Group represents the Republic of Moldova in AIDP structures and congresses, contributing to the elaboration of international criminal-law policies.",
    "gn.2tag": "Collaboration", "gn.2t": "Partner national groups", "gn.2d": "Direct collaboration with national groups from AIDP member states — experience-sharing, joint projects and comparative law studies.",
    "gn.3tag": "Activity", "gn.3t": "National reports", "gn.3d": "Elaboration of national reports for AIDP congresses and presentation of the Republic of Moldova's positions on international criminal-law issues.",
    "revista.eyebrow": "Periodic publication", "revista.title": "Criminal Law Journal",
    "revista.sub": "A specialist scientific publication edited by the Criminal Law Association of the Republic of Moldova. Members have free access to all editions.",
    "revista.soon": "Journal editions will be available soon.",
    "pub.eyebrow": "Published research", "pub.title": "Scientific Publications",
    "pub.sub": "Articles, studies and monographs produced by association members in the field of criminal law and related sciences.",
    "pub.soon": "Publications will be available soon.",
    "hero.t1": "The", "hero.t2": "Criminal Law", "hero.t3": "Association of Moldova",
    "hero.lead": "The professional community of jurists, researchers and practitioners dedicated to the science of criminal law — research, education, and the defence of the democratic rule of law.",
    "hero.cta1": "Join the association", "hero.cta2": "Explore our mission", "hero.scroll": "Scroll",
    "strip.1t": "Apolitical", "strip.1s": "Independent of parties and political interests",
    "strip.2t": "Scientific", "strip.2s": "Fundamental and applied criminal-law research",
    "strip.3t": "Rule of law", "strip.3s": "Defending legality and the democratic legal order",
    "strip.4t": "Non-profit", "strip.4s": "Acting in the public interest, without patrimonial gain",
    "about.eyebrow": "About the association",
    "about.title": "A community for the science of criminal law",
    "about.badge": "Year founded",
    "about.p1": "The “Criminal Law Association of the Republic of Moldova” is a public, non-commercial and apolitical organisation, a private-law legal entity, established voluntarily to contribute to the development of the science and practice of criminal law.",
    "about.p2": "We bring together academics, researchers, magistrates, lawyers, prosecutors and students around a common purpose: raising the scientific standard of criminal, procedural, executional and contravention law, criminalistics and criminology — and the correct application of legislation in the spirit of the democratic rule of law.",
    "about.l1": "Promoting national, civic, educational and democratic values",
    "about.l2": "Cooperation with academic associations at home and abroad",
    "about.l3": "Equal treatment and non-discrimination of members",
    "goals.eyebrow": "Goals of the association",
    "goals.title": "What we do for criminal law",
    "goals.sub": "Our statute defines the directions of activity through which we advance legal science and the profession.",
    "g1.t": "Scientific research", "g1.d": "Fundamental and applied research in criminal law, in partnership with universities and specialist institutions.",
    "g2.t": "Education & training", "g2.d": "Trainings, workshops, seminars and professional development programmes for jurists and students.",
    "g3.t": "Contests & olympiads", "g3.d": "Organising public contests, olympiads and scientific events at home and abroad.",
    "g4.t": "Legislative initiative", "g4.d": "Initiating and improving draft normative acts in the field of criminal law.",
    "g5.t": "Journal & publications", "g5.d": "Editing the Criminal Law Review and didactic-scientific works of the field.",
    "g6.t": "Comparative law", "g6.d": "Advancing knowledge of foreign criminal legislation, doctrine and comparative-law studies.",
    "g7.t": "Conferences & debate", "g7.d": "Events, conferences and debates for the prevention and combating of crime.",
    "g8.t": "International cooperation", "g8.d": "Affiliation and collaboration with national and international associations and joint projects.",
    "research.eyebrow": "Research & publications",
    "research.title": "A hub of legal thought",
    "research.p": "The association ensures the dissemination of the Criminal Law Review, supports scientific and applied opinions, and develops a documentation centre in the field of criminal law — a resource for the entire legal community.",
    "research.s1": "fields of research", "research.s2": "non-profit activity", "research.s3": "since founding",
    "dom.1": "Criminal law", "dom.2": "Criminal procedure", "dom.3": "Executional law",
    "dom.4": "Contravention law", "dom.5": "Criminalistics", "dom.6": "Criminology",
    "quote.t": "The State respects, protects and ensures the freedom of association — a democratic society in which the science of criminal law serves justice and human dignity.",
    "quote.src": "— from the Statute of the Criminal Law Association",
    "members.eyebrow": "Members", "members.title": "Who can join",
    "members.p": "The association brings together professionals and future jurists who share the same values. Membership is acquired voluntarily, under the Statute, and is exercised in a spirit of equality and good faith.",
    "band.eyebrow": "The General Assembly",
    "band.text": "Each member holds a single vote. Decisions are made together — transparently and democratically — in the service of the science of criminal law.",
    "gallery.eyebrow": "Gallery", "gallery.title": "Tradition, research, institution",
    "gallery.1": "The institution of justice", "gallery.2": "Doctrine & legislation", "gallery.3": "Research & study",
    "m1.t": "Active members", "m1.d": "Law graduates concerned with the development of the science or practice of criminal law, with no criminal record.",
    "m2.t": "Honorary members", "m2.d": "Distinguished figures of criminal-law science, recognised nationally and internationally.",
    "m3.t": "Students & young jurists", "m3.d": "Participation in research programmes, grants, conferences and the academic life of the association.",
    "benefits.title": "Members' rights",
    "b1": "Participation in all activities and projects of the association",
    "b2": "Eligibility to elect and be elected to governing bodies",
    "b3": "Publishing articles free of charge in specialist journals",
    "b4": "Access to resources: documentation, library, collections",
    "b5": "Participation in research programmes and grants",
    "b6": "Recognition for contributions to the association",
    "gov.eyebrow": "Governance", "gov.title": "Bodies of the association",
    "gov.sub": "The governance structure is set by the Statute and ensures transparent, democratic leadership.",
    "gov.1tag": "Supreme body", "gov.1t": "General Assembly", "gov.1d": "Composed of all members, it approves the strategy, statute and budget and elects the President. Each member holds a single vote.",
    "gov.2tag": "Executive body", "gov.2t": "The President", "gov.2d": "Represents the association before third parties, coordinates current activity and ensures the General Assembly’s decisions are carried out.",
    "gov.3tag": "Distinctions", "gov.3t": "Honorary president / member", "gov.3d": "Titles granted to personalities with outstanding merits in advancing the science and practice of criminal law.",
    "cta.eyebrow": "Join us", "cta.title": "Building the future of criminal law together",
    "cta.sub": "Become a member of the community and contribute to research, education and the strengthening of the rule of law in the Republic of Moldova.",
    "form.name": "Full name", "form.email": "Email", "form.msg": "Message (optional)", "form.submit": "Send request",
    "footer.loc": "Republic of Moldova",
    "footer.rights": "© 2025 Criminal Law Association of the Republic of Moldova. All rights reserved.",
    "footer.type": "Public association · non-commercial · apolitical"
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var RO = {};
  nodes.forEach(function (n) { RO[n.getAttribute("data-i18n")] = n.innerHTML; });

  function setLang(lang) {
    var dict = lang === "en" ? EN : RO;
    nodes.forEach(function (n) {
      var k = n.getAttribute("data-i18n");
      if (dict[k] != null) n.innerHTML = dict[k];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang__opt").forEach(function (o) {
      o.classList.toggle("is-active", o.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem("adp-lang", lang); } catch (e) {}
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    var cur = document.documentElement.lang === "en" ? "en" : "ro";
    setLang(cur === "en" ? "ro" : "en");
  });
  try {
    var saved = localStorage.getItem("adp-lang");
    if (saved === "en") setLang("en");
  } catch (e) {}

  /* ---------- REVEAL on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          var sibs = Array.prototype.indexOf.call(el.parentNode.children, el);
          el.style.transitionDelay = Math.min(sibs, 6) * 70 + "ms";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }

  /* ---------- COUNTERS ---------- */
  var counters = document.querySelectorAll("[data-count]");
  var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  function runCount(el) {
    var target = +el.getAttribute("data-count");
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = target + suffix; return; }
    var dur = 1400, start = performance.now();
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCount(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  } else { counters.forEach(runCount); }

  /* ---------- FORM (front-end demo) ---------- */
  var form = document.getElementById("joinForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var en = document.documentElement.lang === "en";
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      note.style.color = "#e08a6a";
      note.textContent = en ? "Please enter a valid name and email." : "Introduceți un nume și un email valid.";
      return;
    }
    note.style.color = "";
    note.textContent = en
      ? "Thank you, " + name + " — we’ll be in touch shortly."
      : "Mulțumim, " + name + " — vă vom contacta în curând.";
    form.reset();
  });
})();
