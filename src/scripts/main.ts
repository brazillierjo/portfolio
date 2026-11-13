// Tout le JavaScript du site : quelques observateurs, aucune dépendance.
// Le site reste complet sans lui (affiches au lieu des vidéos, pas d'animations).

const reduce = matchMedia("(prefers-reduced-motion: reduce)");

/* L'en-tête prend les couleurs de la section qu'il recouvre */
function headerTheme() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  const sections = [...document.querySelectorAll<HTMLElement>("main > [data-theme]")];
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  let current = "";
  let queued = false;
  const update = () => {
    queued = false;
    const y = header.offsetHeight / 2;
    const hit = sections.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= y && r.bottom > y;
    });
    const theme = hit?.dataset.theme ?? "paper";
    if (theme === current) return;
    current = theme;
    header.dataset.theme = theme;
    if (meta && hit) meta.content = getComputedStyle(hit).backgroundColor;
  };
  const schedule = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", schedule, { passive: true });
  update();
}

/* Vidéos : source posée et lecture lancée seulement à l'écran */
function videos() {
  const blocks = document.querySelectorAll<HTMLElement>("[data-video]");
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const block = e.target as HTMLElement;
        const video = block.querySelector("video")!;
        if (e.isIntersecting) {
          if (!video.src) video.src = video.dataset.src!;
          if (!reduce.matches && !block.hasAttribute("data-user-paused")) {
            video.play().then(
              () => block.removeAttribute("data-paused"),
              () => block.setAttribute("data-paused", ""),
            );
          } else {
            block.setAttribute("data-paused", "");
          }
        } else if (!video.paused) {
          video.pause();
        }
      }
    },
    { rootMargin: "200px 0px", threshold: 0.2 },
  );
  blocks.forEach((block) => {
    const video = block.querySelector("video")!;
    const btn = block.querySelector<HTMLButtonElement>("[data-video-toggle]")!;
    btn.hidden = false;
    if (reduce.matches) block.setAttribute("data-paused", "");
    const sync = () => {
      const paused = video.paused;
      block.toggleAttribute("data-paused", paused);
      btn.setAttribute("aria-label", paused ? btn.dataset.labelPlay! : btn.dataset.labelPause!);
    };
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    btn.addEventListener("click", () => {
      if (!video.src) video.src = video.dataset.src!;
      if (video.paused) {
        block.removeAttribute("data-user-paused");
        void video.play();
      } else {
        block.setAttribute("data-user-paused", "");
        video.pause();
      }
    });
    if (block.hasAttribute("data-hero")) {
      // Le hero s'affiche d'abord avec son affiche ; la vidéo attend que la page soit au calme
      const start = () =>
        "requestIdleCallback" in window
          ? requestIdleCallback(() => io.observe(block), { timeout: 2000 })
          : setTimeout(() => io.observe(block), 800);
      if (document.readyState === "complete") start();
      else addEventListener("load", start, { once: true });
    } else {
      io.observe(block);
    }
  });
}

/* Projets : l'aperçu se déplie au clic. Le détail s'ouvre aussi quand un lien
   ou l'adresse de la page pointe vers le projet (#mio, #shelltown, #fastflix). */
function projects() {
  const cards = [...document.querySelectorAll<HTMLElement>("[data-project]")];
  const set = (card: HTMLElement, open: boolean, animate = true) => {
    const btn = card.querySelector<HTMLButtonElement>("[data-toggle]")!;
    const label = btn.querySelector<HTMLElement>("[data-toggle-label]")!;
    const detail = card.querySelector<HTMLElement>("[data-detail]")!;
    if (open === detail.classList.contains("is-open")) return;
    btn.setAttribute("aria-expanded", String(open));
    label.textContent = open ? btn.dataset.less! : btn.dataset.more!;
    const run = animate && !reduce.matches;
    if (open) {
      detail.classList.add("is-open");
      if (run) {
        const h = detail.scrollHeight;
        detail.animate(
          [
            { height: "0px", opacity: 0 },
            { height: `${h}px`, opacity: 1 },
          ],
          {
            duration: 520,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
          },
        );
      }
    } else if (run) {
      const h = detail.scrollHeight;
      const anim = detail.animate(
        [
          { height: `${h}px`, opacity: 1 },
          { height: "0px", opacity: 0 },
        ],
        {
          duration: 380,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        },
      );
      anim.onfinish = () => detail.classList.remove("is-open");
      // Le haut de la carte reste à l'écran une fois refermée
      const top = card.getBoundingClientRect().top;
      if (top < 0) scrollTo({ top: scrollY + top - 80, behavior: "smooth" });
    } else {
      detail.classList.remove("is-open");
    }
  };
  cards.forEach((card) => {
    card.querySelector("[data-toggle]")!.addEventListener("click", () => {
      set(card, !card.querySelector("[data-detail]")!.classList.contains("is-open"));
    });
  });
  const fromHash = () => {
    const card = cards.find((c) => `#${c.id}` === location.hash);
    if (card) set(card, true, false);
  };
  fromHash();
  addEventListener("hashchange", fromHash);
  document.querySelectorAll<HTMLAnchorElement>("[data-open-project]").forEach((a) =>
    a.addEventListener("click", () => {
      const card = cards.find((c) => `#${c.id}` === a.hash);
      if (card) set(card, true, false);
    }),
  );
}

/* Apparitions : calendrier de commits (une fois), schéma de Mio (animé à l'écran) */
function reveals() {
  const targets = document.querySelectorAll<HTMLElement>("[data-heatmap], [data-diagram]");
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        if (el.hasAttribute("data-diagram")) {
          el.classList.toggle("is-live", e.isIntersecting);
          continue;
        }
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.unobserve(el);
        }
      }
    },
    { threshold: 0.25 },
  );
  targets.forEach((t) => io.observe(t));

  // Sur mobile, le calendrier défile : on montre d'abord les mois récents
  document
    .querySelectorAll<HTMLElement>("[data-heatmap] .scroller")
    .forEach((s) => (s.scrollLeft = s.scrollWidth));
}

/* Contact : copie de l'adresse, numéro assemblé ici plutôt que dans le HTML */
function contact() {
  document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
    if (!navigator.clipboard) return;
    btn.hidden = false;
    const label = btn.textContent!.trim();
    const status = btn.parentElement!.querySelector<HTMLElement>("[data-copy-status]");
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy!);
        btn.textContent = btn.dataset.copied!;
        if (status) status.textContent = btn.dataset.copied!;
        setTimeout(() => (btn.textContent = label), 2200);
      } catch {
        /* le lien mailto reste disponible */
      }
    });
  });
  document.querySelectorAll<HTMLAnchorElement>("[data-phone]").forEach((a) => {
    const parts = a.dataset.phone!.split(" ");
    a.href = `tel:${parts.join("")}`;
    a.textContent = `${parts[0]} ${parts.slice(1).join(" ")}`;
    a.hidden = false;
  });
}

/* Le menu mobile se ferme après un choix */
function menu() {
  document.querySelectorAll<HTMLDetailsElement>("details.menu").forEach((d) => {
    d.addEventListener("click", (e) => {
      if ((e.target as HTMLElement).closest("a")) d.open = false;
    });
    document.addEventListener("click", (e) => {
      if (d.open && !d.contains(e.target as Node)) d.open = false;
    });
  });
}

/* Google Analytics, seulement après accord explicite (choix gardé dans le navigateur) */
function consent() {
  const banner = document.querySelector<HTMLElement>("[data-consent]");
  if (!banner) return;
  const id = banner.dataset.ga!;
  const KEY = "consent-analytics";
  let loaded = false;
  const read = () => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  };
  const load = () => {
    if (loaded) return;
    loaded = true;
    const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag() {
      // gtag attend l'objet arguments tel quel
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
    w.gtag("js", new Date());
    w.gtag("config", id);
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.append(s);
  };
  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* navigation privée : le choix vaut pour cette visite */
    }
    banner.hidden = true;
    if (value === "granted") load();
    else {
      // Retirer son accord efface les cookies _ga et coupe le suivi déjà lancé
      const host = location.hostname.replace(/^www\./, "");
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0]!.trim();
        if (name.startsWith("_ga")) {
          for (const domain of ["", `; domain=.${host}`])
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
        }
      });
      if (loaded) location.reload();
    }
  };
  banner
    .querySelectorAll<HTMLButtonElement>("[data-consent-choice]")
    .forEach((b) =>
      b.addEventListener("click", () => choose(b.dataset.consentChoice as "granted" | "denied")),
    );
  document.querySelectorAll("[data-consent-open]").forEach((b) =>
    b.addEventListener("click", () => {
      banner.hidden = false;
    }),
  );
  const saved = read();
  if (saved === "granted") load();
  else if (saved !== "denied") banner.hidden = false;
}

headerTheme();
videos();
projects();
reveals();
contact();
menu();
consent();
