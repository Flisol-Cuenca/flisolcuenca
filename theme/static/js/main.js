document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile navigation toggle ---
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("open");
      document.body.style.overflow = isOpen ? "" : "hidden";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // --- Sticky header shadow on scroll ---
  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Agenda tabs (WAI-ARIA Tabs Pattern, manual activation) ---
  document.querySelectorAll("[role='tablist']").forEach((tablist) => {
    const tabs = Array.from(tablist.querySelectorAll("[role='tab']"));
    if (!tabs.length) return;

    const panels = tabs
      .map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
      .filter(Boolean);

    const activate = (index, { focus = false } = {}) => {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.setAttribute("tabindex", selected ? "0" : "-1");
      });
      panels.forEach((panel, i) => {
        const selected = i === index;
        panel.classList.toggle("is-active", selected);
        if (selected) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
      if (focus) {
        tabs[index].focus();
        tabs[index].scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(index));

      tab.addEventListener("keydown", (event) => {
        const lastIndex = tabs.length - 1;
        let nextIndex = null;

        switch (event.key) {
          case "ArrowRight":
            nextIndex = index === lastIndex ? 0 : index + 1;
            break;
          case "ArrowLeft":
            nextIndex = index === 0 ? lastIndex : index - 1;
            break;
          case "Home":
            nextIndex = 0;
            break;
          case "End":
            nextIndex = lastIndex;
            break;
          default:
            return;
        }

        event.preventDefault();
        activate(nextIndex, { focus: true });
      });
    });
  });
});
