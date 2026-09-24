(function () {
  var cache = new Map();

  document.addEventListener('DOMContentLoaded', function () {
    initPage();
    registerServiceWorker();
    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', function () {
      navigate(window.location.href, false);
    });
  });

  function initPage() {
    initMobileMenu();
    initFAQ();
    initContactForm();
    initSmoothScroll();
    initGallery();
    initImages();
    initReveal();
    updateNav();
  }

  function initMobileMenu() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav || toggle.dataset.bound) return;
    toggle.dataset.bound = 'true';

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  function closeMenu() {
    var nav = document.querySelector('.main-nav');
    var toggle = document.querySelector('.nav-toggle');
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function handleClick(e) {
    var nav = document.querySelector('.main-nav');
    var toggle = document.querySelector('.nav-toggle');
    if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) closeMenu();

    var link = e.target.closest ? e.target.closest('a[href]') : null;
    if (!link || !sameOriginPage(link) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || link.target === '_blank') return;

    var url = new URL(link.href);
    if (url.hash && normalize(url.pathname) === normalize(location.pathname)) {
      var target = document.querySelector(url.hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    e.preventDefault();
    navigate(url.href, true);
  }

  function sameOriginPage(link) {
    var url = new URL(link.href);
    return url.origin === location.origin && (/\.html$|\/$/.test(url.pathname) || url.pathname.endsWith('index.html'));
  }

  async function navigate(url, push) {
    var target = new URL(url, location.href);
    if (normalize(target.pathname) === normalize(location.pathname) && !target.hash) return;
    document.documentElement.classList.add('is-navigating');
    closeMenu();

    try {
      var path = normalize(target.pathname);
      var html = cache.get(path);
      if (!html) {
        var response = await fetch(target.href, { headers: { 'X-Bukana-Navigation': 'soft' } });
        if (!response.ok) throw new Error('Navigation failed');
        html = await response.text();
        cache.set(path, html);
      }

      var doc = new DOMParser().parseFromString(html, 'text/html');
      var next = doc.querySelector('#main-content');
      var current = document.querySelector('#main-content');
      if (!next || !current) return location.assign(target.href);

      if (document.startViewTransition) {
        await document.startViewTransition(function () {
          current.innerHTML = next.innerHTML;
        }).finished;
      } else {
        current.classList.add('page-exit');
        await new Promise(function (resolve) { setTimeout(resolve, 120); });
        current.innerHTML = next.innerHTML;
        current.classList.remove('page-exit');
        current.classList.add('page-enter');
        requestAnimationFrame(function () { current.classList.remove('page-enter'); });
      }

      document.title = doc.title || document.title;
      syncMeta(doc);
      if (push) history.pushState({}, '', target.href);
      initPage();
      if (target.hash) {
        requestAnimationFrame(function () {
          var targetNode = document.querySelector(target.hash);
          if (targetNode) targetNode.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        window.scrollTo(0, 0);
      }
      var main = document.querySelector('#main-content');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    } catch (error) {
      location.assign(target.href);
    } finally {
      document.documentElement.classList.remove('is-navigating');
    }
  }

  function syncMeta(doc) {
    var current = document.querySelector('meta[name="description"]');
    var next = doc.querySelector('meta[name="description"]');
    if (current && next) current.content = next.content;
    ['og:title', 'og:description', 'og:type'].forEach(function (name) {
      var a = document.querySelector('meta[property="' + name + '"]');
      var b = doc.querySelector('meta[property="' + name + '"]');
      if (a && b) a.content = b.content;
    });
  }

  function normalize(path) {
    return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
  }

  function updateNav() {
    var current = normalize(location.pathname);
    document.querySelectorAll('.main-nav a[href]').forEach(function (link) {
      var path = normalize(new URL(link.href, location.href).pathname);
      var active = path === current || (current === '/' && path.endsWith('/index.html'));
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function (button) {
      if (button.dataset.bound) return;
      var answer = document.getElementById(button.getAttribute('aria-controls'));
      if (!answer) return;
      button.dataset.bound = 'true';
      button.addEventListener('click', function () {
        var open = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!open));
        answer.hidden = open;
      });
    });
  }

  function initContactForm() {
    document.querySelectorAll('.contact-form').forEach(function (form) {
      if (form.dataset.bound) return;
      form.dataset.bound = 'true';
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var status = form.querySelector('.form-status');
        if (status) {
          status.hidden = false;
          status.className = 'form-status form-status-success';
          status.textContent = 'Thank you for your enquiry. This is a demo form — no data has been sent.';
        }
        form.reset();
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      if (link.dataset.bound) return;
      link.dataset.bound = 'true';
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        var target = id && id !== '#' ? document.querySelector(id) : null;
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initReveal() {
    var elements = document.querySelectorAll('.section-header, .feature-split, .card, .value-item, .steps > li, .page-hero .container > *');
    elements.forEach(function (el) { el.setAttribute('data-reveal', ''); });

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    elements.forEach(function (el) {
      if (!el.classList.contains('is-visible')) observer.observe(el);
    });
  }

  function initImages() {
    var map = {
      '/images/hero-school.svg': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/School_with_a_group_of_young_african_children_1.jpg',
      '/images/classroom.svg': 'https://upload.wikimedia.org/wikipedia/commons/2/29/6.Children_Students.jpg',
      '/images/activities.svg': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Primary_students_in_Chati.jpg',
      '/images/events.svg': 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Nigeria_school_children_%2814373239383%29.jpg',
      '/images/facilities.svg': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/An_African_class.jpg',
      '/images/community.svg': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/School_with_a_group_of_young_african_children_1.jpg',
      '/images/early-years.svg': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/An_African_class.jpg',
      '/images/primary.svg': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Primary_students_in_Chati.jpg',
      '/images/secondary.svg': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Africa_student_in_classroom.jpg',
      '/images/news-1.svg': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/School_with_a_group_of_young_african_children_1.jpg',
      '/images/news-2.svg': 'https://images.unsplash.com/photo-1689973849511-e1995810cf7a?auto=format&fit=crop&fm=jpg&q=78&w=1200'
    };

    document.querySelectorAll('img[src]').forEach(function (img) {
      var url = map[img.getAttribute('src')];
      if (!url) return;
      img.src = url;
      img.dataset.assetResolved = 'true';
      if (/Bukana Brilliant Schools/.test(img.alt)) img.alt = 'Demo school photography — replace with an official Bukana Brilliant Schools photograph.';
    });
  }

  function initGallery() {
    var buttons = document.querySelectorAll('.filter-btn');
    var items = document.querySelectorAll('.gallery-item');

    buttons.forEach(function (button) {
      if (button.dataset.bound) return;
      button.dataset.bound = 'true';
      button.addEventListener('click', function () {
        var filter = button.dataset.filter;
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        button.classList.add('is-active');
        items.forEach(function (item) {
          item.hidden = !(filter === 'all' || item.dataset.category === filter);
        });
      });
    });

    var lightbox = document.querySelector('.lightbox');
    if (!lightbox || lightbox.dataset.bound) return;
    lightbox.dataset.bound = 'true';
    var image = lightbox.querySelector('img');
    var caption = lightbox.querySelector('figcaption');
    var close = lightbox.querySelector('.lightbox-close');

    function hide() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    items.forEach(function (item) {
      if (item.dataset.bound) return;
      var img = item.querySelector('img');
      if (!img) return;
      item.dataset.bound = 'true';
      function show() {
        if (image) { image.src = img.currentSrc || img.src; image.alt = img.alt; }
        if (caption) caption.textContent = img.alt || '';
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        if (close) close.focus();
      }
      item.addEventListener('click', show);
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); }
      });
    });

    if (close) close.addEventListener('click', hide);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) hide(); });
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(function () {});
  }
})();