// CMU Day briefing — app

const D = window.CMU_DATA;
const facById = Object.fromEntries(D.faculty.map(f => [f.id, f]));

// Build a flat paper registry so cards can reference papers by id
const paperById = {};
D.faculty.forEach(f => {
  (f.papers || []).forEach((p, i) => {
    const pid = `${f.id}-p${i}`;
    p.__pid = pid;
    p.__owner = f.id;
    paperById[pid] = p;
  });
});

// -------- stats
function renderStats() {
  const allPapers = D.faculty.reduce((acc, f) => acc + (f.papers ? f.papers.length : 0), 0);
  const allAngles = D.faculty.reduce((acc, f) => acc + (f.commercialization ? f.commercialization.length : 0), 0);
  document.getElementById("stat-faculty").textContent = D.faculty.length;
  document.getElementById("stat-papers").textContent = allPapers;
  document.getElementById("stat-connections").textContent = D.connections.length;
  document.getElementById("stat-angles").textContent = allAngles;
}

// -------- agenda
function renderAgenda() {
  const el = document.getElementById("agenda-list");
  el.innerHTML = D.agenda.map(row => {
    const f = row.who ? facById[row.who] : null;
    if (!f) {
      return `<div class="agenda-row agenda-row--break">
        <span class="agenda-time">${row.time}</span>
        <span class="agenda-name">${row.event}</span>
        <span class="agenda-event"></span>
        <span class="agenda-room">${row.room}</span>
      </div>`;
    }
    return `<a class="agenda-row" href="#${f.id}" data-target="${f.id}">
      <span class="agenda-time">${row.time}</span>
      <span class="agenda-name">${f.name}</span>
      <span class="agenda-event">${row.event}</span>
      <span class="agenda-room">${row.room}</span>
    </a>`;
  }).join("");
}

// -------- threads
function renderThreads() {
  const el = document.getElementById("threads-list");
  el.innerHTML = D.threads.map(t => {
    const chips = t.faculty.map(fid => {
      const f = facById[fid];
      return f ? `<a class="thread-chip" href="#${fid}">${f.name.split(" ").slice(-1)[0]}</a>` : "";
    }).join("");
    return `<div class="thread">
      <h3>${t.title}</h3>
      <div class="thread-faculty">${chips}</div>
      <p>${t.summary}</p>
    </div>`;
  }).join("");
}

// -------- filter strip
function renderFilters() {
  const el = document.getElementById("filter-strip");
  const themes = D.themes;
  const items = ['<button class="filter-chip active" data-filter="all">All faculty</button>'];
  Object.entries(themes).forEach(([key, t]) => {
    items.push(`<button class="filter-chip" data-filter="${key}" data-theme><span class="swatch" style="background:${t.color}"></span>${t.label}</button>`);
  });
  el.innerHTML = items.join("");
  el.addEventListener("click", e => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    el.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".prof-card").forEach(card => {
      const ts = (card.dataset.themes || "").split(",");
      card.classList.toggle("dim", f !== "all" && !ts.includes(f));
    });
  });
}

// -------- faculty cards
function renderFaculty() {
  const el = document.getElementById("faculty-list");
  el.innerHTML = D.faculty.map(f => {
    const themeChips = f.themes.map(t => {
      const th = D.themes[t];
      return th ? `<span class="theme-chip" style="color:${th.color}">${th.label}</span>` : "";
    }).join("");

    const papersHtml = (f.papers || []).map(p => {
      const coauth = p.coauthors ? p.coauthors.map(cid => facById[cid] ? `<a class="paper-cite" href="#${cid}" onclick="event.stopPropagation()">↳ co-authored with ${facById[cid].name}</a>` : "").join(" ") : "";
      return `<div class="paper ${p.starred ? 'starred' : ''}" data-pid="${p.__pid}">
        <div class="paper-head">
          <div class="paper-title" role="button" tabindex="0">${p.title} <span class="paper-more">↗</span></div>
          <div class="paper-venue">${p.venue} · ${p.year}</div>
        </div>
        <div class="paper-authors">${p.authors}</div>
        <p class="paper-summary">${p.summary}</p>
        ${coauth}
      </div>`;
    }).join("");

    const anglesHtml = (f.commercialization || []).map((a, i) => `
      <div class="angle"><span class="num">Angle ${i + 1}</span>${a}</div>
    `).join("");

    const questionsHtml = (f.questions || []).map(q => `<div class="q">${q}</div>`).join("");

    const themesDetailHtml = (f.themes_detail || []).map(t => `<li>${t}</li>`).join("");

    return `<article id="${f.id}" class="prof-card" data-themes="${f.themes.join(",")}">
      <div class="prof-grid">
        <aside class="prof-sidebar">
          <div class="prof-slot">${f.slot} · ${f.location}</div>
          <h2 class="prof-name">${f.name}</h2>
          <div class="prof-title">${f.title}</div>
          <div class="prof-lab">${f.lab}</div>
          <div class="prof-themes">${themeChips}</div>
          <div class="prof-links">
            ${f.personalUrl ? `<a href="${f.personalUrl}" target="_blank" rel="noopener">Personal ↗</a>` : ""}
            ${f.labUrl ? `<a href="${f.labUrl}" target="_blank" rel="noopener">Lab ↗</a>` : ""}
            ${f.facultyUrl ? `<a href="${f.facultyUrl}" target="_blank" rel="noopener">CMU ↗</a>` : ""}
          </div>
        </aside>

        <div class="prof-body">
          <p class="prof-tagline">${f.tagline}</p>

          <div class="prof-section">
            <h3>Bio</h3>
            <p class="prof-bio">${f.bio}</p>
          </div>

          <div class="prof-section">
            <h3>Research focus</h3>
            <ul class="theme-list">${themesDetailHtml}</ul>
          </div>

          ${f.spinout ? `<div class="prof-section">
            <h3>Industry / spinout context</h3>
            <div class="spinout">${f.spinout}</div>
          </div>` : ""}

          <div class="prof-section">
            <h3>Recent papers · ★ = priority reading</h3>
            <div class="papers">${papersHtml}</div>
          </div>

          <div class="prof-section">
            <h3>Commercialization angles</h3>
            <div class="angles">${anglesHtml}</div>
          </div>

          <div class="prof-section">
            <h3>Sharp questions to ask</h3>
            <div class="questions">${questionsHtml}</div>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");
}

// -------- network graph
function renderNetwork() {
  const svg = document.getElementById("network");
  const detail = document.getElementById("network-detail");
  const W = 900, H = 560;
  const cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) * 0.36;

  // place faculty around a circle, ordered by theme cluster
  const order = ["delatorre", "morency", "busso", "diab", "sap", "zhu", "sawyer", "narasimhan", "erickson"];
  const positions = {};
  order.forEach((id, i) => {
    const angle = (i / order.length) * 2 * Math.PI - Math.PI / 2;
    positions[id] = {
      x: cx + R * Math.cos(angle),
      y: cy + R * Math.sin(angle),
      id
    };
  });

  // edges
  const edges = D.connections.map(c => {
    const pa = positions[c.a], pb = positions[c.b];
    if (!pa || !pb) return null;
    // curve mid
    const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2;
    const dx = pb.x - pa.x, dy = pb.y - pa.y;
    const len = Math.sqrt(dx*dx + dy*dy);
    const nx = -dy / len, ny = dx / len;
    const curve = 30;
    const cxp = mx + nx * curve, cyp = my + ny * curve;
    return { ...c, pa, pb, cxp, cyp };
  }).filter(Boolean);

  // build SVG
  let svgContent = "";
  edges.forEach(e => {
    const strong = e.weight >= 2 ? "strong" : "";
    svgContent += `<path class="edge ${strong}" data-a="${e.a}" data-b="${e.b}"
      d="M${e.pa.x},${e.pa.y} Q${e.cxp},${e.cyp} ${e.pb.x},${e.pb.y}"
      stroke-width="${1 + e.weight}" />`;
  });
  Object.values(positions).forEach(p => {
    const f = facById[p.id];
    if (!f) return;
    const color = D.themes[f.themes[0]]?.color || "#333";
    const last = f.name.split(" ").slice(-1)[0];
    svgContent += `<g class="node" data-id="${f.id}" transform="translate(${p.x},${p.y})">
      <circle r="18" fill="white" stroke="${color}" stroke-width="2" />
      <text class="node-label" text-anchor="middle" y="-26">${last}</text>
      <text class="node-role" text-anchor="middle" y="38">${D.themes[f.themes[0]].label}</text>
    </g>`;
  });
  svg.innerHTML = svgContent;

  // interactivity
  svg.querySelectorAll(".node").forEach(node => {
    node.addEventListener("mouseenter", () => showNodeDetail(node.dataset.id));
    node.addEventListener("click", () => {
      const id = node.dataset.id;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  svg.querySelectorAll(".edge").forEach(edge => {
    edge.addEventListener("mouseenter", () => showEdgeDetail(edge.dataset.a, edge.dataset.b));
  });

  function showNodeDetail(id) {
    const f = facById[id];
    if (!f) return;
    const edgeList = D.connections.filter(c => c.a === id || c.b === id).map(c => {
      const otherId = c.a === id ? c.b : c.a;
      const other = facById[otherId];
      return `<li><a href="#${otherId}">${other.name}</a> — <span class="muted">${c.paper}</span></li>`;
    }).join("");
    detail.innerHTML = `
      <h4>${f.name}</h4>
      <div class="nd-paper">${f.lab}</div>
      <p>${f.tagline}</p>
      ${edgeList ? `<p class="muted" style="margin-top:14px"><strong>Connections:</strong></p><ul style="padding-left:18px; margin:6px 0 0">${edgeList}</ul>` : ""}
    `;
  }
  function showEdgeDetail(a, b) {
    const c = D.connections.find(c => (c.a === a && c.b === b) || (c.a === b && c.b === a));
    if (!c) return;
    const fa = facById[a], fb = facById[b];
    detail.innerHTML = `
      <h4>${fa.name} × ${fb.name}</h4>
      <div class="nd-paper">${c.paper}</div>
      <p>${c.note}</p>
      <p class="muted"><a href="#${a}">View ${fa.name.split(" ").slice(-1)[0]} →</a> &nbsp;·&nbsp; <a href="#${b}">View ${fb.name.split(" ").slice(-1)[0]} →</a></p>
    `;
  }
}

// -------- paper modal
function openPaperModal(pid) {
  const p = paperById[pid];
  if (!p) return;
  const owner = facById[p.__owner];
  const content = document.getElementById("modal-content");

  // build extended paragraphs — fall back to summary if no extended
  let body = "";
  if (p.extended && p.extended.length) {
    body = p.extended.map(par => `<p>${par}</p>`).join("");
  } else {
    body = `<p>${p.summary}</p>`;
  }

  // coauthor chips for any verified within-list co-author
  let coauthChips = "";
  if (p.coauthors && p.coauthors.length) {
    coauthChips = p.coauthors.map(cid => {
      const f = facById[cid];
      return f ? `<a class="modal-coauth" href="#${cid}" data-jump>${f.name}</a>` : "";
    }).join("");
  }

  // matter section — pulled from paper.matter if present
  const matterHtml = p.matter ? `<div class="modal-section"><h4>Why this matters for the meeting</h4><p>${p.matter}</p></div>` : "";

  content.innerHTML = `
    <div class="modal-eyebrow">${owner.name} · ${owner.lab}</div>
    <h3 class="modal-title" id="modal-title">${p.title}</h3>
    <div class="modal-meta">${p.venue} · ${p.year}${p.starred ? " · ★ priority read" : ""}</div>
    <div class="modal-authors">${p.authors}</div>

    ${coauthChips ? `<div class="modal-section"><h4>Verified co-author on this list</h4>${coauthChips}</div>` : ""}

    <div class="modal-section">
      <h4>What the paper does</h4>
      ${body}
    </div>

    ${matterHtml}

    <div class="modal-link-row">
      <a href="${p.link}" target="_blank" rel="noopener" class="primary">Open paper ↗</a>
      <a href="#${owner.id}" data-jump>${owner.name.split(" ").slice(-1)[0]}'s briefing →</a>
    </div>
  `;

  document.getElementById("modal").classList.add("open");
  document.body.classList.add("modal-open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.classList.remove("modal-open");
}

// click anywhere on the paper card → open modal
document.addEventListener("click", e => {
  if (e.target.closest(".paper-cite") || e.target.closest("a")) return;
  const paper = e.target.closest(".paper");
  if (paper && paper.dataset.pid) {
    openPaperModal(paper.dataset.pid);
    return;
  }
  if (e.target.closest("[data-close]")) closeModal();
  if (e.target.closest("[data-jump]")) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// -------- smooth scroll on anchor click
document.addEventListener("click", e => {
  const a = e.target.closest("a[href^='#']");
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + id);
  }
});

// -------- init
renderStats();
renderAgenda();
renderThreads();
renderFilters();
renderFaculty();
renderNetwork();
