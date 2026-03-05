document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile navigation toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            navMenu.classList.toggle('open');
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Sticky header shadow on scroll ---
    const header = document.getElementById('site-header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- Agenda tab filtering ---
    const tabs = document.querySelectorAll('.agenda-tab');
    const rows = document.querySelectorAll('.agenda-table tbody tr');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const room = tab.dataset.room;

            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            rows.forEach(row => {
                const rowRoom = row.dataset.room;
                if (room === 'all' || rowRoom === room || rowRoom === 'all') {
                    row.classList.remove('hidden');
                } else {
                    row.classList.add('hidden');
                }
            });
        });
    });

});
