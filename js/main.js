/* TradeBridge - Main JS */

(function() {
    'use strict';

    // Header scroll shadow
    var header = document.getElementById('site-header');
    if (header) {
        var scrolled = false;
        window.addEventListener('scroll', function() {
            var shouldAdd = window.scrollY > 10;
            if (shouldAdd !== scrolled) {
                scrolled = shouldAdd;
                header.classList.toggle('header--scrolled', shouldAdd);
            }
        }, { passive: true });
    }

    // Mobile nav toggle
    var toggle = document.getElementById('mobile-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
        toggle.addEventListener('click', function() {
            var isOpen = mobileNav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    // Desktop dropdown hovers
    var dropdowns = document.querySelectorAll('.nav__item--dropdown');
    dropdowns.forEach(function(dd) {
        var btn = dd.querySelector('.nav__dropdown-toggle');
        if (!btn) return;

        dd.addEventListener('mouseenter', function() {
            btn.setAttribute('aria-expanded', 'true');
        });
        dd.addEventListener('mouseleave', function() {
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    // FAQ accordion
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        var btn = item.querySelector('.faq-item__question');
        if (!btn) return;

        btn.addEventListener('click', function() {
            var isOpen = item.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', isOpen);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
