document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initFAQAccordion();
  initContactForm();
  initSmoothScroll();
});

function initMobileMenu() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

function initFAQAccordion() {
  var buttons = document.querySelectorAll('.faq-question');
  buttons.forEach(function (btn) {
    var answerId = btn.getAttribute('aria-controls');
    var answer = answerId ? document.getElementById(answerId) : null;
    if (!answer) return;

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.hidden = isOpen;
    });
  });
}

function initContactForm() {
  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = form.querySelector('.form-status');
    if (status) {
      status.hidden = false;
      status.className = 'form-status form-status-success';
      status.textContent = 'Thank you for your enquiry. This is a demo form — no data has been sent. The school will contact you once a backend is connected.';
    }
    form.reset();
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}