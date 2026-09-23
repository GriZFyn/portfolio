/* ==========================================================================
   main.js — 渲染项目 / 导航交互 / 移动端菜单
   ========================================================================== */

(function () {
  "use strict";

  var data = window.PORTFOLIO_DATA;

  /* ---------- 渲染项目 ---------- */
  var grid = document.getElementById("worksGrid");

  data.projects.forEach(function (p, i) {
    var seq = String(i + 1).padStart(2, "0");

    var el = document.createElement("article");
    el.className = "proj proj--" + p.variant;

    var media = document.createElement("div");
    media.className = "proj__media";
    media.setAttribute("data-seq", seq);

    var imgEl = document.createElement("img");
    imgEl.src = p.image;
    imgEl.alt = p.name;
    imgEl.loading = "lazy";

    var body = document.createElement("div");
    body.className = "proj__body";

    var tag = document.createElement("span");
    tag.className = "proj__tag";
    tag.textContent = p.tag;

    var title = document.createElement("h3");
    title.className = "proj__title";
    title.textContent = p.name;

    var desc = document.createElement("p");
    desc.className = "proj__desc";
    desc.textContent = p.desc;

    var meta = document.createElement("div");
    meta.className = "proj__meta";
    var m1 = document.createElement("span");
    m1.textContent = p.time;
    var m2 = document.createElement("span");
    m2.textContent = p.cat + " · " + (i + 1) + "/" + data.projects.length;
    var tags = document.createElement("div");
    tags.className = "proj__tags";
    p.tech.forEach(function (t) {
      var s = document.createElement("span");
      s.textContent = t;
      tags.appendChild(s);
    });

    media.appendChild(imgEl);
    meta.appendChild(m1);
    meta.appendChild(m2);
    meta.appendChild(tags);
    body.appendChild(tag);
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(meta);

    el.appendChild(media);
    el.appendChild(body);
    grid.appendChild(el);
  });

  /* ---------- 技能与经历 ---------- */
  var skillsEl = document.getElementById("aboutSkills");
  data.skills.forEach(function (s) {
    var li = document.createElement("span");
    li.textContent = s;
    skillsEl.appendChild(li);
  });

  var expEl = document.getElementById("aboutExp");
  data.experiences.forEach(function (e) {
    var li = document.createElement("li");
    var strong = document.createElement("strong");
    strong.textContent = e.title;
    var small = document.createElement("small");
    small.textContent = e.time;
    li.appendChild(strong);
    li.appendChild(small);
    expEl.appendChild(li);
  });

  /* ---------- 联系方式 ---------- */
  var contactEl = document.getElementById("contactList");
  data.contacts.forEach(function (c) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = c.href;
    var big = document.createElement("span");
    big.textContent = c.label;
    var arrow = document.createElement("small");
    arrow.textContent = "→";
    a.appendChild(big);
    a.appendChild(arrow);
    li.appendChild(a);
    contactEl.appendChild(li);
  });

  /* ---------- 深浅色主题切换 ---------- */
  var THEME_KEY = "portfolio-theme";
  var themeToggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  /* 应用本地保存的主题，默认浅色 */
  var savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", function () {
    var isDark = root.getAttribute("data-theme") === "dark";
    var next = isDark ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  /* ---------- 移动端菜单 ---------- */
  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("navToggle");

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  /* ---------- 滚动：当前导航高亮 + 关闭菜单 ---------- */
  var headings = document.querySelectorAll("section[id]");
  var links = document.querySelectorAll(".nav__links a[data-scroll]");

  function onScroll() {
    var pos = window.scrollY + 120;
    var currentId = "hero";
    var found = false;

    headings.forEach(function (sec) {
      if (sec.offsetTop <= pos) {
        currentId = sec.id;
        found = true;
      }
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 40) {
      currentId = "contact";
    }

    links.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + currentId);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 点击导航后关闭移动端菜单 */
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
})();