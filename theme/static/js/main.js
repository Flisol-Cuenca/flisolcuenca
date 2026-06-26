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

  // --- Certificate download by email ---
  const certForm = document.getElementById("cert-download-form");
  if (certForm) {
    const emailInput = document.getElementById("cert-email");
    const submitBtn = document.getElementById("cert-submit-btn");
    const errorEl = document.getElementById("cert-error");
    const salt = certForm.dataset.certSalt;
    const baseUrl = certForm.dataset.certBase;

    const sha256Hex = async (text) => {
      const data = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    };

    certForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      errorEl.classList.remove("is-visible");

      const email = emailInput.value.trim().toLowerCase();
      if (!email) {
        emailInput.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Buscando…";

      try {
        const hash = await sha256Hex(email + salt);
        const url = baseUrl + hash + ".pdf";
        const response = await fetch(url, { method: "HEAD" });

        if (response.ok) {
          window.location.href = url;
        } else {
          errorEl.classList.add("is-visible");
        }
      } catch {
        errorEl.classList.add("is-visible");
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Descargar certificado";
      }
    });
  }
});
