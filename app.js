(() => {
  const $ = (s) => document.querySelector(s);
  const A = '';

  /* ---------- données ---------- */
  const STAGES = [
    { name: 'Checkout', detail: 'ESPRIT · Génie Logiciel · ASI', time: '2024' },
    { name: 'Build', detail: 'Spring Boot · Angular · FastAPI', time: 'full-stack' },
    { name: 'Train', detail: 'XGBoost · MLflow · RAG LangChain', time: 'data & ia' },
    { name: 'Test & qualité', detail: 'SonarQube · Jira Xray · Clean Code', time: 'qa' },
    { name: 'Deploy', detail: 'Docker · Kubernetes · Vercel · Render', time: 'prod' }
  ];
  const CODE = [
    ['Checkout', 'git', 'esprit/genie-logiciel'],
    ['Build', 'sh', 'spring-boot · angular · fastapi'],
    ['Train', 'mlflow run', 'xgboost · rag'],
    ['Test', 'sonar', 'quality-gate'],
    ['Deploy', 'kubectl apply -f', 'prod.yaml']
  ];
  const PRINCIPLES = [
    ['01 — Comprendre', 'Partir du métier', 'Avant le code, je cartographie les utilisateurs et leurs flux : agent, admin, patient, pharmacien. Chaque écran répond à une tâche précise.'],
    ['02 — Construire', 'Du solide, pas du jetable', 'Architecture claire, API sécurisées, tests et qualité de code mesurée. Le genre de base qu’une équipe peut reprendre.'],
    ['03 — Livrer', 'Jusqu’en production', 'CI/CD, conteneurs, monitoring et suivi des modèles. Un projet n’est fini que lorsqu’il tourne chez ses utilisateurs.']
  ];
  const TIMELINE = [
    ['v2026.08', 'Juin – août 2026', 'Talys Consulting', 'Stage Software Engineer — Data, IA & MLOps', 'Data Mart et ETL Talend, 6 dashboards Power BI, prévision XGBoost industrialisée avec MLflow et CI/CD, copilote RAG exposé en FastAPI.'],
    ['v2025.08', 'Juil. – août 2025', 'Chakira Câble · Groupe Elloumi', 'Stage Développeur Java — Desktop & NLP', 'Application desktop de gestion de tickets IT (3-tiers, KPI multi-rôles), classification des tickets par NLP Hugging Face, rapports PDF iText, notifications SMTP.'],
    ['init', '2024 – 2027', 'ESPRIT School of Engineering', 'Diplôme d’ingénieur en Génie Logiciel · spécialisation ASI', 'Admis au concours national d’entrée aux écoles d’ingénieurs, session 2024. Agile/Scrum, Git Flow, Clean Code.']
  ];
  const PROJECTS = [
    {
      num: '01', title: 'EL-Fakhama', kind: 'Hajj & Omra · web + mobile', status: 'Projet client · en production', dot: 'var(--accent)',
      subtitle: 'La plateforme qui centralise groupes, vols, hôtels et transports d’une agence Omra.',
      desc: 'Les agents créent leurs groupes de pèlerins et demandent hôtels et transports ; l’administration valide, affecte les véhicules et génère les programmes en PDF. Utilisée par l’agence au quotidien.',
      cs: ['Centraliser les demandes d’hôtels et de transports des agents, leur validation par l’administration et la génération des programmes.', 'Une plateforme web + mobile trilingue avec espaces Agent et Admin, notifications, historique et documents PDF.', 'En production et utilisée par l’agence ; chaque push est testé, analysé et déployé automatiquement.'],
      points: ['Espaces Agent et Admin : groupes, vols, hébergement, demandes de transport, validation et historique', 'Interface trilingue FR / EN / AR avec support RTL, date hégirienne et horaires de prière', 'Vouchers et programmes de dispatch générés en PDF', 'CI/CD GitHub Actions + Docker + SonarQube à chaque push'],
      stack: ['Angular', 'Docker', 'PostgreSQL', 'Neon', 'Expo', 'GitHub Actions', 'SonarQube', 'Vercel', 'Render'],
      tech: ['Angular', 'Docker', 'PostgreSQL', 'GitHub Actions', 'CI/CD', 'TypeScript'],
      lanes: [
        ['Clients', [['Web Angular', 'Vercel'], ['App mobile', 'Expo']]],
        ['Backend & données', [['API', 'Docker · Render'], ['PostgreSQL', 'Neon'], ['PDF', 'vouchers · dispatch']]],
        ['Livraison', [['git push', 'GitHub'], ['GitHub Actions', 'build · tests'], ['SonarQube', 'qualité'], ['Production', 'domaine perso']]]
      ],
      archNote: 'Déploiement gratuit et rapide pour un MVP utilisé immédiatement, avec une chaîne CI/CD complète à chaque push.',
      images: [['fk-login', 'el-fakhama / connexion'], ['fk-agent', 'el-fakhama / agent / dashboard'], ['fk-groups', 'el-fakhama / agent / groupes-omra'], ['fk-admin', 'el-fakhama / admin / dashboard'], ['fk-transport', 'el-fakhama / admin / transport']]
    },
    {
      num: '02', title: 'Talys-Trade', kind: 'BI · prévision · copilote IA', status: 'Stage · Talys Consulting · 2026', dot: '#FBBF24',
      subtitle: 'De l’ETL au copilote IA : une plateforme décisionnelle complète pour piloter les ventes.',
      desc: 'Intégration des données, tableaux de bord, prévision du chiffre d’affaires industrialisée et assistant conversationnel branché sur le catalogue produits.',
      cs: ['Donner une vue fiable des ventes et anticiper le chiffre d’affaires des 30 prochains jours.', 'ETL Talend + Data Mart, 6 dashboards Power BI, un modèle XGBoost suivi dans MLflow et un copilote RAG.', '+96k ventes et 22k produits intégrés ; MAPE autour de 20 % sur les derniers réentraînements suivis.'],
      points: ['Data Mart en étoile (MySQL) et flux ETL Talend automatisés pour +96k ventes et 22k produits', '6 tableaux de bord Power BI en DAX avancé : ventes, produits, clients, prévisions, MLOps', 'Prévision du CA à 30 jours (XGBoost) suivie dans MLflow, gouvernance Champion/Challenger, CI/CD GitHub Actions', 'Copilote IA avec RAG (Groq Llama 3.3, Gemini, LangChain, ChromaDB) exposé via FastAPI asynchrone'],
      stack: ['Talend', 'MySQL', 'Power BI', 'XGBoost', 'MLflow', 'FastAPI', 'LangChain', 'ChromaDB', 'Docker'],
      tech: ['Talend', 'MySQL', 'Power BI', 'XGBoost', 'MLflow', 'FastAPI', 'LangChain', 'RAG', 'Docker', 'GitHub Actions', 'CI/CD', 'Python', 'SQL'],
      link: 'https://talys-trade.streamlit.app', linkLabel: 'Tester le copilote',
      lanes: [
        ['Données', [['Sources', 'ventes · produits'], ['Talend ETL', 'jobs Fact / Dim'], ['Data Mart', 'MySQL · étoile']]],
        ['Machine learning', [['XGBoost', 'prévision 30 j'], ['MLflow', 'runs · registry'], ['Champion / Challenger', 'gouvernance']]],
        ['Restitution', [['FastAPI', 'async'], ['Copilote RAG', 'LangChain · ChromaDB'], ['Power BI', '6 dashboards']]]
      ],
      archNote: 'Le modèle est réentraîné et suivi dans MLflow ; les métriques MAE, MAPE et RMSE remontent dans le dashboard MLOps.',
      images: [['tt-talend', 'talys-trade / 1-etl / talend-fact-sales'], ['tt-ventes', 'talys-trade / 2-bi / dashboard-ventes'], ['tt-prev', 'talys-trade / 3-ml / previsions'], ['tt-mlops', 'talys-trade / 4-mlops / suivi-modele'], ['tt-copilot', 'talys-trade / 5-ia / copilote-rag']]
    },
    {
      num: '03', title: 'MediCare AI', kind: 'Santé · plateforme multi-rôles', status: 'Projet académique · PIDEV 2025–2026', dot: 'var(--mut)',
      subtitle: 'Une plateforme de santé où patients, pharmaciens et soignants travaillent dans le même flux.',
      desc: 'Commande de médicaments avec ordonnance, suivi de livraison et paiement en ligne, avec des fonctionnalités IA servies par un microservice dédié.',
      cs: ['Relier patients, pharmacies et soignants à domicile dans un même parcours, de l’ordonnance à la livraison.', 'Une plateforme multi-rôles Spring Boot / Angular, avec un microservice IA FastAPI consommé par le backend.', 'Commande, paiement et suivi de bout en bout ; chaîne CI/CD Jenkins jusqu’au déploiement Kubernetes.'],
      points: ['Backend Spring Boot et frontend Angular 17 multi-rôles, API REST sécurisée par JWT / RBAC', 'Microservice FastAPI : prédiction du temps de livraison (régression, distance OSRM) et recommandation de soins par NLP', 'Commande en 3 étapes, pharmacies triées par disponibilité, paiement Stripe / D17 / espèces, facture PDF', 'Jenkins → build/push Docker → déploiement Kubernetes, monitoring Prometheus / Grafana'],
      stack: ['Spring Boot', 'Angular 17', 'FastAPI', 'scikit-learn', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins', 'Grafana'],
      tech: ['Spring Boot', 'Angular', 'FastAPI', 'scikit-learn', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana', 'CI/CD', 'JWT', 'REST API', 'Microservices', 'Java', 'Python', 'TypeScript', 'SQL'],
      lanes: [
        ['Application', [['Angular 17', '4 rôles'], ['Spring Boot', 'REST · JWT/RBAC'], ['MySQL', 'données']]],
        ['Intelligence', [['Spring Boot', 'appel interne'], ['FastAPI', 'microservice IA'], ['Modèles', 'régression · NLP']]],
        ['DevOps', [['Jenkins', 'back + front'], ['Docker', 'build · push'], ['Kubernetes', 'déploiement'], ['Grafana', 'monitoring']]]
      ],
      archNote: 'Les captures des modules IA arrivent bientôt dans cette galerie.',
      images: [['mc-pharma', 'medicare / patient / 1-choix-pharmacie'], ['mc-pay', 'medicare / patient / 2-paiement'], ['mc-order', 'medicare / patient / 3-suivi-commande'], ['mc-pharmacist', 'medicare / pharmacien / dashboard'], ['mc-admin', 'medicare / admin / dashboard'], ['mc-jenkins', 'medicare / devops / jenkins-k8s']]
    }
  ];
  const GROUPS = [
    ['Backend & web', ['Spring Boot', 'FastAPI', 'Microservices', 'REST API', 'JWT', 'Symfony', 'Angular']],
    ['Data, IA & ML', ['XGBoost', 'scikit-learn', 'Hugging Face', 'LangChain', 'RAG', 'Talend', 'Power BI']],
    ['MLOps & DevOps', ['MLflow', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana', 'CI/CD']],
    ['Langages', ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL']],
    ['Cloud & données', ['AWS', 'MySQL', 'PostgreSQL']]
  ];
  const EXTRA = { 'Hugging Face': ['Chakira Câble (stage)'] };
  const CERTS = [['AWS Certified AI Practitioner (AIF-C01)', 'Amazon Web Services'], ['Oracle Agentic AI Foundations Associate', 'Oracle University'], ['AWS Cloud Foundations', 'Amazon Web Services']];
  const MARQUEE = [['Spring Boot', 'backend'], ['Angular', 'frontend'], ['FastAPI', 'api'], ['XGBoost', 'prévision'], ['LangChain', 'rag'], ['MLflow', 'mlops'], ['Docker', 'conteneurs'], ['Kubernetes', 'orchestration'], ['Power BI', 'bi'], ['Talend', 'etl']];
  const PALETTE = [['Accueil', '#top', '↵'], ['Ma façon de travailler', '#manifeste', '01'], ['Parcours', '#parcours', '02'], ['Projets', '#projets', '03'], ['Stack & certifications', '#stack', '04'], ['Contact', '#contact', '05'], ['Télécharger le CV', 'CV_Mohamed_Aziz_Melki.pdf', 'pdf'], ['Écrire un email', 'mailto:melkimohamedaziz1@gmail.com', 'mail'], ['GitHub', 'https://github.com/Aziz216-ui', '↗'], ['LinkedIn', 'https://www.linkedin.com/in/mohamed-aziz-melki-5089512a6/', '↗']];

  const state = { step: 0, proj: 0, tab: 'apercu', img: 0, tech: 'Docker' };
  const ICON_CHECK = '<svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#04210F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  const ARROW = '<svg aria-hidden="true" width="26" height="14" viewBox="0 0 26 14" fill="none" stroke="#5E5C57" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 7h22"/><path d="m18 2 5 5-5 5"/></svg>';

  /* ---------- horloge ---------- */
  const tick = () => {
    let t;
    try { t = new Date().toLocaleTimeString('fr-FR', { timeZone: 'Africa/Tunis' }); } catch (e) { t = new Date().toLocaleTimeString(); }
    $('#clock').textContent = t;
  };
  tick(); setInterval(tick, 1000);

  /* ---------- pipeline ---------- */
  let timers = [];
  const renderPipe = () => {
    $('#stages').innerHTML = STAGES.map((s, i) => {
      const done = i < state.step, run = i === state.step;
      const ic = done ? `<span class="ic done">${ICON_CHECK}</span>` : run ? '<span class="ic run"></span>' : '<span class="ic wait"></span>';
      return `<div class="stage">${ic}<div class="st-b"><div class="st-n">${s.name}</div><div class="st-d">${s.detail}</div></div><span class="st-l">${done ? s.time : run ? 'en cours' : 'en attente'}</span></div>`;
    }).join('');
    $('#bar').style.width = (state.step / 5 * 100) + '%';
    $('#pipeMsg').innerHTML = state.step >= 5
      ? '<span style="animation:fade .5s ease both"><span class="accent">✓ Déployé</span> — candidat prêt pour un PFE · décembre 2026</span>'
      : 'Exécution en cours<span class="cursor">_</span>';
  };
  const run = () => {
    timers.forEach(clearTimeout); timers = [];
    state.step = 0; renderPipe();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    for (let i = 1; i <= 5; i++) timers.push(setTimeout(() => { state.step = i; renderPipe(); }, reduce ? 0 : 400 + i * 750));
  };
  $('#pipeCode').innerHTML =
    '<div><span class="k">pipeline</span> {</div>' +
    '<div>  <span class="k">agent</span> { label <span class="s">\'esprit-promo-2027\'</span> }</div>' +
    '<div>  <span class="k">stages</span> {</div>' +
    CODE.map(([n, c, a]) => `<div>    <span class="f">stage</span>(<span class="s">'${n}'</span>) { <span class="c">${c}</span> <span class="accent">'${a}'</span> }</div>`).join('') +
    '<div>  }</div>' +
    '<div>  <span class="k">post</span> { success { echo <span class="accent">\'Prêt pour un PFE — déc. 2026\'</span> } }</div><div>}</div>';
  const setView = (v) => {
    document.querySelectorAll('.seg button').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.view === v)));
    $('#pipeUi').hidden = v !== 'ui'; $('#pipeCode').hidden = v !== 'code';
  };
  document.querySelectorAll('.seg button').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
  $('#restart').addEventListener('click', () => { setView('ui'); run(); });

  /* ---------- sections statiques ---------- */
  const mq = MARQUEE.concat(MARQUEE).map(([a, b]) => `<span class="mq">${a}<em>${b}</em><i>✳</i></span>`).join('');
  $('#marquee').innerHTML = mq;
  $('#principles').innerHTML = PRINCIPLES.map(([k, t, d]) => `<div class="pr dimitem"><div class="mono">${k}</div><h3>${t}</h3><p>${d}</p></div>`).join('');
  $('#timeline').innerHTML = TIMELINE.map(([tag, date, org, role, text]) => `<li class="tl dimitem reveal"><div class="tl-a"><span class="ring"></span><div><div class="mono accent">${tag}</div><div class="mono dim">${date}</div></div></div><div class="tl-b"><h3>${org}</h3><div class="role">${role}</div><p>${text}</p></div></li>`).join('');
  $('#certs').innerHTML = CERTS.map(([n, o]) => `<div class="cert mag reveal"><div class="cert-h"><span class="mono">Certification</span><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/></svg></div><b>${n}</b><em>${o}</em></div>`).join('');

  /* ---------- explorateur de projets ---------- */
  const renderList = () => {
    $('#projList').innerHTML = PROJECTS.map((p, i) => `<button class="pj" role="tab" aria-selected="${i === state.proj}" data-proj="${i}"><div class="pj-t"><b>${p.title}</b><span>${p.num}</span></div><div class="pj-k">${p.kind}</div></button>`).join('');
  };
  const renderWin = () => {
    const p = PROJECTS[state.proj];
    const img = Math.min(state.img, p.images.length - 1);
    const tabs = [['apercu', 'Aperçu'], ['archi', 'Architecture'], ['impact', 'Impact']]
      .map(([k, l]) => `<button role="tab" aria-selected="${state.tab === k}" data-tab="${k}">${l}</button>`).join('');
    let view = '';
    if (state.tab === 'apercu') {
      const [src, cap] = p.images[img];
      view = `<div class="view pop"><div class="browser"><div class="browser-h"><i></i><i></i><i></i><span class="mono">${cap}</span><span class="mono pos">${img + 1} / ${p.images.length}</span></div><img src="${A}${src}.webp" alt="${cap}" data-zoom="${A}${src}.webp" loading="lazy" width="1600" height="900"></div>
        <div class="thumbs" role="group" aria-label="Écrans du projet">${p.images.map(([s, c], i) => `<button aria-pressed="${i === img}" aria-label="Afficher ${c}" data-img="${i}"><img src="${A}${s}.webp" alt="" loading="lazy"></button>`).join('')}</div></div>`;
    } else if (state.tab === 'archi') {
      view = `<div class="view pop"><div class="archi">${p.lanes.map(([l, nodes]) => `<div><div class="lane-l">${l}</div><div class="lane">${nodes.map(([n, s], j) => `${j ? ARROW : ''}<div class="node"><b>${n}</b><span>${s}</span></div>`).join('')}</div></div>`).join('')}</div><p class="note">${p.archNote}</p></div>`;
    } else {
      view = `<div class="view pop"><div class="cs dimlist">${p.cs.map((t, i) => `<div class="dimitem"><div class="mono">${['Besoin', 'Solution', 'Résultat'][i]} <span class="dim">0${i + 1}</span></div><p>${t}</p></div>`).join('')}</div>
        <div class="imp"><div class="imp-l"><p>${p.desc}</p><ol class="pts">${p.points.map((t, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${t}</li>`).join('')}</ol></div>
        <div class="imp-r"><div class="lane-l">Stack</div><div class="chips">${p.stack.map((s) => `<span>${s}</span>`).join('')}</div>
        ${p.link ? `<a class="btn-primary mag btn-link" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel} <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg></a>` : ''}</div></div></div>`;
    }
    $('#win').innerHTML = `<div class="win-h"><div style="min-width:0"><div class="mono win-s"><span class="dot" style="background:${p.dot}"></span>${p.status}</div><h3>${p.title}</h3><p class="tagline">${p.subtitle}</p></div><div class="tabs" role="tablist" aria-label="Vue du projet">${tabs}</div></div>${view}`;
  };
  $('#projList').addEventListener('click', (e) => {
    const b = e.target.closest('[data-proj]'); if (!b) return;
    state.proj = +b.dataset.proj; state.img = 0; renderList(); renderWin();
  });
  $('#win').addEventListener('click', (e) => {
    const t = e.target.closest('[data-tab]'); if (t) { state.tab = t.dataset.tab; renderWin(); return; }
    const i = e.target.closest('[data-img]'); if (i) { state.img = +i.dataset.img; renderWin(); return; }
    const z = e.target.closest('[data-zoom]'); if (z) openZoom(z.dataset.zoom, z.alt);
  });
  // flèches clavier dans la galerie
  $('#win').addEventListener('keydown', (e) => {
    if (state.tab !== 'apercu' || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const n = PROJECTS[state.proj].images.length;
    state.img = (state.img + (e.key === 'ArrowRight' ? 1 : n - 1)) % n; renderWin();
    const btn = $(`#win [data-img="${state.img}"]`); if (btn) btn.focus();
  });

  /* ---------- lightbox ---------- */
  const openZoom = (src, alt) => {
    const lb = document.createElement('div');
    lb.className = 'lightbox'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Capture agrandie');
    lb.innerHTML = `<img src="${src}" alt="${alt}">`;
    const close = () => { lb.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    lb.addEventListener('click', close); document.addEventListener('keydown', onKey);
    document.body.appendChild(lb);
  };

  /* ---------- stack explorer ---------- */
  const renderSkills = () => {
    $('#skills').innerHTML = GROUPS.map(([t, items]) => `<div class="sg"><div class="sg-t">${t}</div><div class="sg-i">${items.map((n) => `<button class="chip" aria-pressed="${n === state.tech}" data-tech="${n}">${n}</button>`).join('')}</div></div>`).join('');
    const uses = PROJECTS.map((p) => [p.title, p.tech.includes(state.tech)]);
    (EXTRA[state.tech] || []).forEach((t) => uses.push([t, true]));
    const none = !uses.some((u) => u[1]);
    $('#usage').innerHTML = `<div class="mono dim">$ grep -r "${state.tech}" ~/projets</div><div class="t">${state.tech}</div><div class="uses">${uses.map(([t, on]) => on ? `<div class="u on"><b>${t}</b><span>✓ utilisé</span></div>` : `<div class="u off">${t}<span>—</span></div>`).join('')}</div>${none ? '<p class="dim" style="margin:14px 0 0;font-size:14px">Compétence acquise en formation, en stage ou en certification.</p>' : ''}`;
  };
  $('#skills').addEventListener('click', (e) => {
    const b = e.target.closest('[data-tech]'); if (!b) return;
    state.tech = b.dataset.tech; renderSkills();
  });

  /* ---------- palette ⌘K ---------- */
  const pal = $('#palette'), palInput = $('#palInput');
  let palIdx = 0, palItems = PALETTE;
  const renderPal = () => {
    const q = palInput.value.trim().toLowerCase();
    palItems = PALETTE.filter(([l]) => l.toLowerCase().includes(q));
    palIdx = Math.min(palIdx, Math.max(0, palItems.length - 1));
    $('#palList').innerHTML = palItems.map(([l, h, k], i) => `<a href="${h}" class="${i === palIdx ? 'act' : ''}"${h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}${h.endsWith('.pdf') ? ' download' : ''}>${l}<span>${k}</span></a>`).join('') || '<p class="dim" style="padding:12px 14px;margin:0">Aucun résultat</p>';
  };
  const openPal = () => { pal.hidden = false; palInput.value = ''; palIdx = 0; renderPal(); palInput.focus(); };
  const closePal = () => { pal.hidden = true; };
  $('#openPalette').addEventListener('click', openPal);
  $('#closePalette').addEventListener('click', closePal);
  pal.addEventListener('click', (e) => { if (e.target === pal || e.target.closest('.pal-list a')) closePal(); });
  palInput.addEventListener('input', () => { palIdx = 0; renderPal(); });
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.hidden ? openPal() : closePal(); return; }
    if (pal.hidden) return;
    if (e.key === 'Escape') closePal();
    else if (e.key === 'ArrowDown') { e.preventDefault(); palIdx = (palIdx + 1) % Math.max(1, palItems.length); renderPal(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); palIdx = (palIdx - 1 + palItems.length) % Math.max(1, palItems.length); renderPal(); }
    else if (e.key === 'Enter') { const a = $('#palList a.act'); if (a) { a.click(); closePal(); } }
  });

  /* ---------- reveal au scroll ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: 0.12 }) : null;
  const observe = () => document.querySelectorAll('.reveal:not(.in)').forEach((el) => io ? io.observe(el) : el.classList.add('in'));

  /* ---------- init ---------- */
  renderPipe(); renderList(); renderWin(); renderSkills(); observe();
  setTimeout(run, 300);
})();
