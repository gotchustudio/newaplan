/* =========================================================
   30-Day Growth Strategy: scroll deck engine
   - All on-screen copy for generated sections lives in CONTENT.
   - Static sections (hero, outcomes, final) are written in index.html.
   - Image placeholders are <figure class="ph">. To insert a real photo,
     add <img src="photo.jpg" alt="..."> inside the figure.
   ========================================================= */
(() => {
  'use strict';

  /* ---------------------------------------------------------
     CONTENT (edit copy here)
     --------------------------------------------------------- */
  const CONTENT = {
    objective: [
      { t: 'More Visibility', d: 'The right travelers find the homestay.' },
      { t: 'More Interest', d: 'They see a reason to look closer.' },
      { t: 'More Inquiries', d: 'Asking is simple and fast.' },
      { t: 'More Bookings', d: 'Inquiries turn into confirmed stays.' },
      { t: 'More Reviews', d: 'Real guests build public proof.' },
      { t: 'More Growth', d: 'Trust brings the next guest.' }
    ],

    days: [
      { t: 'Marketing Audit', d: 'Review the current presence, listings and guest feedback to set a baseline.' },
      { t: 'Competitor Research', d: 'Study nearby stays and how they win attention and bookings.' },
      { t: 'Positioning', d: 'Define what makes this stay different and who it is for.' },
      { t: 'Professional Content Shoot', d: 'One focused shoot that supplies content for the month.' },
      { t: 'Google Maps Optimization', d: 'Complete and upgrade the Google Maps profile.' },
      { t: 'Booking Funnel', d: 'Make the path from interest to inquiry short and clear.' },
      { t: 'Launch', d: 'Go live with the new positioning and the first content.' }
    ],

    tiles: [
      { n: 3, lab: 'Reels per week' },
      { n: 2, lab: 'Photo / Carousel posts per week' },
      { n: 'Daily', lab: 'Stories' },
      { n: 'TikTok', lab: 'Adaptation of the best Reels' }
    ],

    mix: [
      { v: 70, t: 'Experience', d: 'Show what staying here feels like.', color: '#f2a93b' },
      { v: 20, t: 'Trust', d: 'Guests, faces, reviews and proof.', color: '#86c1a2' },
      { v: 10, t: 'Direct Selling', d: 'Clear offers and a simple way to inquire.', color: '#8fb4d9' }
    ],

    content: [
      { t: 'Stay With Us', fmt: 'Reel', video: 'staywithus.mp4', hue: 35, hook: 'Wake up in Kathmandu, the quiet way.',
        shots: ['Morning light in the room', 'First tea of the day', 'A guest arriving'] },
      { t: 'Around Ramkot', fmt: 'Carousel', video: 'aroundramkot.mp4', hue: 150, hook: 'Corners of Ramkot most visitors miss.',
        shots: ['Lanes and local life', 'A local food stop', 'The path toward Swayambhu'] },
      { t: 'Kathmandu From Here', fmt: 'Reel', video: 'kathmandufromhere.mp4', hue: 215, hook: 'Kathmandu looks different from here.',
        shots: ['The view at golden hour', 'Route into the city', 'Swayambhu seen from nearby'] },
      { t: 'Homestay Stories', fmt: 'Reel', video: 'homestaystories.mp4', hue: 10, hook: 'Meet the people behind the stay.',
        shots: ['Host portrait', 'A shared meal', 'A guest moment'] },
      { t: 'What Your Stay Looks Like', fmt: 'Carousel', hue: 280, hook: 'Your stay, hour by hour.',
        shots: ['Arrival', 'The room', 'Breakfast and the evening'] },
      { t: 'Nepal Like a Local', fmt: 'Reel / Story', hue: 95, hook: 'Three things locals do that tourists skip.',
        shots: ['Local breakfast', 'A village walk', 'A market stop'] }
    ],

    channels: [
      { k: 'Creator', t: 'Micro-Creators', color: '#f2a93b',
        items: ['Travel creators', 'Backpackers', 'Couples', 'Photography creators'] },
      { k: 'Community', t: 'Travel Communities', color: '#86c1a2',
        items: ['Facebook groups', 'Travel communities', 'Reddit', 'University / travel communities'] },
      { k: 'Agency', t: 'Travel Partners', color: '#8fb4d9',
        items: ['Travel agencies', 'Tour operators', 'Local guides', 'Airport transfer providers'] }
    ],

    campaigns: [
      { k: 'A', t: 'Awareness', g: 'Reach new travelers', audience: 'Travelers planning a Kathmandu visit.', creative: 'A short, atmospheric Reel showing the stay and nearby views.', action: 'Watch the video or visit the profile.', stages: [0, 1] },
      { k: 'B', t: 'Tourist Acquisition', g: 'Generate booking inquiries', audience: 'Travelers actively considering a Kathmandu stay.', creative: 'Real property photos, guest experience and a clear stay offer.', action: 'Start a WhatsApp conversation about dates.', stages: [1, 2, 3] },
      { k: 'C', t: 'Retargeting', g: "Convert interested people who didn't book", audience: 'People who engaged with content or visited the profile.', creative: 'Guest proof, local experiences and a timely availability reminder.', action: 'Return to WhatsApp to confirm dates and book.', stages: [2, 3, 4] }
    ],
    funnel: ['Reach', 'Engage', 'Visit', 'Inquire', 'Book'],

    mapsChain: [
      { t: 'Search', d: 'A traveler looks for a stay in Kathmandu.' },
      { t: 'Google Maps', d: 'The homestay appears on the map.' },
      { t: 'Property Profile', d: 'The profile is the first impression.' },
      { t: 'Photos + Reviews', d: 'Proof that builds confidence.' },
      { t: 'Call / WhatsApp', d: 'One tap to start a conversation.' },
      { t: 'Booking', d: 'The conversation becomes a stay.' }
    ],
    mapsOpts: [
      { t: 'Photos', d: 'Fresh, professional photos from the shoot.' },
      { t: 'Description', d: 'A clear, positioned description of the stay.' },
      { t: 'Amenities', d: 'Every facility listed accurately.' },
      { t: 'Contact', d: 'Call and WhatsApp ready and correct.' },
      { t: 'Reviews', d: 'Genuine reviews, answered promptly.' },
      { t: 'Booking information', d: 'Clear steps for dates and availability.' }
    ],

    reviewChain: [
      { t: 'Guest Stay', d: 'It starts with the stay itself.' },
      { t: 'Great Experience', d: 'The Ramkot experience, delivered well.' },
      { t: 'WhatsApp Follow-up', d: 'A friendly message after checkout.' },
      { t: 'Google Review', d: 'A genuine review from a real guest.' },
      { t: 'Higher Trust', d: 'New travelers see proof.' },
      { t: 'More Future Bookings', d: 'Trust converts into bookings.' }
    ],

    ramkot: {
      parts: ['Stay', 'Breakfast', 'Local Experience', 'Kathmandu Guidance'],
      experiences: ['Local breakfast', 'Village walk', 'Hiking', 'Sunset', 'Swayambhu visit',
        'Local cooking', 'Airport pickup', 'Kathmandu sightseeing assistance']
    },

    phases: {
      attract: { label: 'Attract', color: '#8fb4d9' },
      convert: { label: 'Convert', color: '#f2a93b' },
      deliver: { label: 'Deliver', color: '#86c1a2' },
      grow: { label: 'Grow', color: '#e0673f' }
    },
    system: [
      { t: 'Content', p: 'attract', d: 'Experience-led posts and reels.' },
      { t: 'Social Media / Google', p: 'attract', d: 'Where travelers first find us.' },
      { t: 'Property Profile', p: 'convert', d: 'Photos, reviews and clear information.' },
      { t: 'WhatsApp / Call', p: 'convert', d: 'One tap to start a conversation.' },
      { t: 'Inquiry', p: 'convert', d: 'A real traveler asks about a stay.' },
      { t: 'Follow-up', p: 'convert', d: 'Fast, helpful replies that close.' },
      { t: 'Booking', p: 'convert', d: 'The inquiry becomes a stay.' },
      { t: 'Guest Experience', p: 'deliver', d: 'The Ramkot local experience, delivered well.' },
      { t: 'Review', p: 'grow', d: 'A genuine review from a real guest.' },
      { t: 'Referral / UGC', p: 'grow', d: 'Guests recommend and create content.' },
      { t: 'More Bookings', p: 'grow', d: 'The loop restarts with more trust.' }
    ],

    weeks: [
      { l: 'Week 1', s: 'Foundation', c: '#8fb4d9' },
      { l: 'Week 2', s: 'Attention', c: '#f2a93b' },
      { l: 'Week 3', s: 'Acquisition', c: '#86c1a2' },
      { l: 'Week 4', s: 'Paid Growth', c: '#e0673f' },
      { l: 'Wrap-up', s: 'Review', c: '#cfc7b6' }
    ],
    calendar: [
      ['Audit', 'Marketing Audit', 'Review the current presence and set a baseline.'],
      ['Competitors', 'Competitor Research', 'Study nearby stays and how they win bookings.'],
      ['Positioning', 'Positioning', 'Define the difference and the ideal traveler.'],
      ['Shoot', 'Professional Content Shoot', 'Capture the month of content in one shoot.'],
      ['Maps', 'Google Maps Optimization', 'Complete and upgrade the Maps profile.'],
      ['Funnel', 'Booking Funnel', 'Make inquiring simple and clear.'],
      ['Launch', 'Launch', 'Go live with the new positioning.'],
      ['Reel', 'Reel: Stay With Us', 'First experience Reel of the week.'],
      ['Carousel', 'Carousel: Around Ramkot', 'Photo carousel on the surroundings.'],
      ['Reel', 'Reel: Kathmandu From Here', 'Reel connecting Ramkot to the city.'],
      ['Stories + TikTok', 'Stories and TikTok', 'Daily Stories plus a TikTok adaptation.'],
      ['Reel', 'Reel: Homestay Stories', 'Reel focused on people and trust.'],
      ['Carousel', 'Carousel: What Your Stay Looks Like', 'Show the stay from arrival to evening.'],
      ['Review', 'Week 2 Review', 'Check what attracted attention.'],
      ['Shortlist', 'Creator Shortlist', 'Select micro-creators who fit the stay.'],
      ['Creators', 'Creator Outreach', 'Reach out to travel creators.'],
      ['Communities', 'Community Posts', 'Share value in travel communities.'],
      ['Agencies', 'Agency and Operator Outreach', 'Contact travel agencies and tour operators.'],
      ['Partners', 'Guides and Transfers', 'Connect with local guides and airport transfer providers.'],
      ['Follow-up', 'Follow-up', 'Follow up on every open conversation.'],
      ['Review', 'Week 3 Review', 'Check which channels produce inquiries.'],
      ['Setup', 'Campaign Setup', 'Build campaigns and tracking.'],
      ['Awareness', 'Launch Campaign A', 'Reach new travelers.'],
      ['Acquisition', 'Launch Campaign B', 'Generate booking inquiries.'],
      ['Retargeting', 'Launch Campaign C', 'Convert interested people who did not book.'],
      ['Creatives', 'Optimize Creatives', 'Keep the best-performing creatives.'],
      ['Audiences', 'Optimize Audiences', 'Refine audiences and budget.'],
      ['Review', 'Week 4 Review', 'Check cost per inquiry and booking.'],
      ['Results', 'Full Results Review', 'Review the full 30 days against the metrics.'],
      ['Next', 'Plan the Next 30 Days', 'Scale what works.']
    ],

    metricGroups: [
      { t: 'Attention', c: '#8fb4d9', items: [
        { t: 'Reach', d: 'How many people saw us.' },
        { t: 'Video Views', d: 'How many watched our videos.' },
        { t: 'Profile Visits', d: 'How many came to look closer.' } ] },
      { t: 'Intent', c: '#f2a93b', items: [
        { t: 'WhatsApp Clicks', d: 'People who tapped to message.' },
        { t: 'Calls', d: 'People who phoned.' },
        { t: 'Inquiries', d: 'Real questions about a stay.' },
        { t: 'Qualified Leads', d: 'Inquiries that fit the stay and dates.' } ] },
      { t: 'Outcome', c: '#86c1a2', items: [
        { t: 'Bookings', d: 'Confirmed stays.' },
        { t: 'Revenue', d: 'Income from those stays.' } ] },
      { t: 'Efficiency', c: '#e0673f', items: [
        { t: 'Cost Per Inquiry', d: 'What each inquiry costs.' },
        { t: 'Cost Per Booking', d: 'What each booking costs.' } ] }
    ],

    final: [
      { t: 'Visibility' }, { t: 'Trust' }, { t: 'Inquiry' },
      { t: 'Booking' }, { t: 'Review' }, { t: 'Growth' }
    ]
  };

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const pad = (n) => String(n).padStart(2, '0');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function h(tag, props = {}, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'style') el.style.cssText = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    el.append(...kids.flat().filter((c) => c != null && c !== false));
    return el;
  }

  function svgEl(markup, cls) {
    const s = h('span', { class: cls, 'aria-hidden': 'true' });
    s.innerHTML = markup;
    return s;
  }
  const ARROW_RIGHT = '<svg viewBox="0 0 28 20" width="28" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10h22M18 4l7 6-7 6"/></svg>';
  const ARROW_DOWN = '<svg viewBox="0 0 20 18" width="16" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v13M4 10l6 6 6-6"/></svg>';

  function retrigger(el) {
    el.classList.remove('swap');
    void el.offsetWidth;
    el.classList.add('swap');
  }

  // Animated statistics
  function animateCount(el) {
    cancelAnimationFrame(el._raf);
    const to = Number(el.dataset.count);
    const suf = el.dataset.suffix || '';
    const t0 = performance.now();
    const dur = 1500;
    const tick = (now) => {
      const p = reduceMotion ? 1 : Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e) + suf;
      if (p < 1) el._raf = requestAnimationFrame(tick);
    };
    el._raf = requestAnimationFrame(tick);
  }
  function resetCount(el) {
    cancelAnimationFrame(el._raf);
    el.textContent = '0' + (el.dataset.suffix || '');
  }

  /* ---------------------------------------------------------
     Components: each returns { el, enter?, leave? }
     --------------------------------------------------------- */

  // Flow of connected stages with arrows between them
  function Chain(nodes, opts = {}) {
    const { interactive = true, loop = false, compact = false, showDetail = true, words = false } = opts;
    let timer = null, delay = null;

    const list = h('ol', { class: 'chain', style: `--n:${nodes.length}` });
    const items = nodes.map((n, i) => {
      const inner = [h('span', { class: 'chain__idx', text: pad(i + 1) }), h('span', { class: 'chain__label', text: n.t })];
      const node = interactive
        ? h('button', { class: 'chain__node', type: 'button', onclick: () => { stop(); set(i); } }, ...inner)
        : h('div', { class: 'chain__node' }, ...inner);
      const li = h('li', { class: 'chain__item', 'data-r': '' }, node);
      list.append(li);
      return li;
    });
    const labels = items.map((li) => $('.chain__label', li));
    const detail = h('p', { class: 'chain__detail', 'aria-live': 'polite' });
    const replay = h('button', { class: 'btn btn--ghost btn--sm', type: 'button', onclick: () => start() }, 'Replay flow');
    const cls = 'chain-wrap' + (compact ? ' chain-wrap--compact' : '') + (words ? ' chain-wrap--words' : '');
    const el = h('div', { class: cls }, list);
    if (showDetail) el.append(h('div', { class: 'chain__foot', 'data-r': '' }, detail, interactive ? replay : null));

    function set(i) {
      items.forEach((li, j) => {
        li.classList.toggle('is-lit', j <= i);
        li.classList.toggle('is-active', j === i);
        li.classList.toggle('is-passed', j < i);
      });
      if (showDetail) detail.textContent = i >= 0 ? (nodes[i].d || '') : '';
    }
    function stop() { clearInterval(timer); timer = null; }
    function start() {
      stop(); set(-1);
      let i = 0;
      const step = () => {
        if (i < nodes.length) set(i);
        else if (loop && i >= nodes.length + 1) { set(-1); i = -1; }
        i++;
        if (!loop && i >= nodes.length) stop();
      };
      step();
      timer = setInterval(step, 950);
    }
    set(-1);
    return {
      el, set, start,
      setLabel: (i, t) => { labels[i].textContent = t; },
      enter() {
        clearTimeout(delay);
        if (reduceMotion) { set(nodes.length - 1); return; }
        delay = setTimeout(start, 900);
      },
      leave() { clearTimeout(delay); stop(); set(-1); }
    };
  }

  // Week 1: interactive timeline
  function Timeline(days) {
    const n = days.length;
    let cur = 0;
    const fill = h('span', { class: 'tl__fill' });
    const track = h('div', { class: 'tl__track', style: `--n:${n}`, 'data-r': '' }, h('div', { class: 'tl__line' }, fill));
    const nodes = days.map((d, i) => {
      const b = h('button', { class: 'tl__node', type: 'button', 'aria-label': 'Day ' + (i + 1) + ': ' + d.t, 'aria-controls': 'timelineDetail', 'aria-expanded': 'false', onclick: () => set(i, true, true) },
        h('span', { class: 'tl__dot' }),
        h('span', { class: 'tl__d', text: 'Day ' + pad(i + 1) }),
        h('span', { class: 'tl__t', text: d.t }));
      track.append(b);
      return b;
    });
    const big = h('span', { class: 'tl__big' });
    const meta = h('span', { class: 'tl__meta' });
    const title = h('h3', { class: 'tl__title' });
    const text = h('p', { class: 'tl__text' });
    const btnPrev = h('button', { class: 'nav-btn', type: 'button', 'aria-label': 'Previous day', onclick: () => set(cur - 1, true, true) },
      svgEl('<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>'));
    const btnNext = h('button', { class: 'nav-btn', type: 'button', 'aria-label': 'Next day', onclick: () => set(cur + 1, true, true) },
      svgEl('<svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M11 5l5 5-5 5"/></svg>'));
    const panel = h('div', { id: 'timelineDetail', class: 'tl__detail panel', 'data-r': '', 'aria-live': 'polite', hidden: true },
      big, h('div', { class: 'tl__info' }, meta, title, text), h('div', { class: 'tl__nav' }, btnPrev, btnNext));
    const el = h('div', { class: 'tl' }, track, panel);

    function set(i, animate = true, expand = false) {
      i = Math.max(0, Math.min(n - 1, i));
      cur = i;
      nodes.forEach((b, j) => {
        b.classList.toggle('is-lit', j <= i);
        b.classList.toggle('is-active', j === i);
        b.setAttribute('aria-expanded', String(expand && j === i));
      });
      panel.hidden = !expand;
      fill.style.width = (i / (n - 1) * 100) + '%';
      big.textContent = pad(i + 1);
      meta.textContent = 'Day ' + (i + 1) + ' of ' + n;
      title.textContent = days[i].t;
      text.textContent = days[i].d;
      btnPrev.disabled = i === 0;
      btnNext.disabled = i === n - 1;
      if (animate) retrigger(panel);
    }
    set(0, false);
    return { el };
  }

  // Week 2: large statistics (animated by the count engine)
  function Stats(tiles) {
    const el = h('div', { class: 'stats' }, ...tiles.map((t) => h('div', { class: 'stat', 'data-r': '' },
      typeof t.n === 'number'
        ? h('span', { class: 'stat__n', 'data-count': t.n, text: String(t.n) })
        : h('span', { class: 'stat__n is-word', text: t.n }),
      h('span', { class: 'stat__l', text: t.lab }))));
    return { el };
  }

  // Week 2: 70 / 20 / 10 content mix
  function Mix(items) {
    let delay = null;
    const bar = h('div', { class: 'mix__bar', 'data-r': '' });
    const dT = h('b'), dD = h('span');
    const detail = h('p', { class: 'mix__detail', 'aria-live': 'polite', 'data-r': '' }, dT, dD);
    const segs = items.map((it, i) => {
      const b = h('button', { class: 'mix__seg', type: 'button', style: `--c:${it.color};--v:${it.v}`,
        onmouseenter: () => focus(i), onfocus: () => focus(i), onclick: () => focus(i) },
        h('span', { class: 'mix__v' }, h('span', { 'data-count': it.v, 'data-suffix': '%', text: it.v + '%' })),
        h('span', { class: 'mix__t', text: it.t }));
      bar.append(b);
      return b;
    });
    const el = h('div', { class: 'mix' }, bar, detail);
    function focus(i) {
      el.classList.add('has-focus');
      segs.forEach((s, j) => s.classList.toggle('is-focus', j === i));
      dT.textContent = items[i].t;
      dD.textContent = items[i].d;
    }
    focus(0);
    return {
      el,
      enter() { clearTimeout(delay); focus(0); delay = setTimeout(() => bar.classList.add('is-drawn'), reduceMotion ? 0 : 500); },
      leave() { clearTimeout(delay); bar.classList.remove('is-drawn'); }
    };
  }

  // Shared expandable list (one row open at a time)
  function Accordion(items, onOpen) {
    const ul = h('ul', { class: 'acc' });
    const rows = items.map((it, i) => {
      const btn = h('button', { class: 'acc__head', type: 'button', 'aria-expanded': 'false', onclick: () => open(i) },
        ...it.head, h('span', { class: 'acc__x', 'aria-hidden': 'true' }));
      const body = h('div', { class: 'acc__body' }, h('div', { class: 'acc__in' }, ...it.body));
      const li = h('li', { class: 'acc__row', 'data-r': '' }, btn, body);
      ul.append(li);
      return { li, btn };
    });
    function open(i) {
      rows.forEach((r, j) => { r.li.classList.toggle('is-open', j === i); r.btn.setAttribute('aria-expanded', String(j === i)); });
      if (onOpen) onOpen(i);
    }
    return { el: ul, open };
  }

  // Content engine: expandable series + phone placeholder
  function ContentEngine(cards) {
    const phone = h('div', { class: 'phone' });
    const acc = Accordion(cards.map((c, i) => ({
      head: [h('span', { class: 'acc__n', text: pad(i + 1) }), h('span', { class: 'acc__t', text: c.t }), h('span', { class: 'acc__f', text: c.fmt })],
      body: [h('p', { class: 'acc__hook', text: '\u201C' + c.hook + '\u201D' }), h('ul', { class: 'acc__shots' }, ...c.shots.map((s) => h('li', { text: s })))]
    })), show);
    function show(i) {
      const c = cards[i];
      const currentVideo = $('.phone__video', phone);
      if (currentVideo) currentVideo.pause();
      phone.style.setProperty('--hue', c.hue);
      const screen = h('div', { class: 'phone__screen' + (c.video ? ' phone__screen--video' : '') });
      let video = null;
      if (c.video) {
        video = h('video', {
          class: 'phone__video',
          src: c.video,
          controls: true,
          playsinline: true,
          preload: 'metadata',
          'aria-label': c.t + ' video'
        });
        screen.append(video);
      }
      screen.append(
        h('span', { class: 'phone__tag', text: c.video ? 'Video preview' : c.fmt }),
        c.video ? null : h('span', { class: 'phone__play', 'aria-hidden': 'true' }),
        h('div', { class: 'phone__bottom' },
          h('p', { class: 'phone__hook', text: c.hook }),
          h('span', { class: 'phone__ph', text: c.video ? 'Available video' : 'No video available yet' })));
      phone.replaceChildren(screen);
      if (video) video.load();
      retrigger(phone);
    }
    const side = h('div', { class: 'ce__side', 'data-r': '' }, phone, h('p', { class: 'ce__note', text: 'Select a series to preview its available video.' }));
    acc.open(0);
    return { el: h('div', { class: 'ce' }, acc.el, side), enter: () => acc.open(0) };
  }

  // Week 3: acquisition channels (expanding panels) + flow
  function Channels(channels) {
    const ALL = 'Creator / Community / Agency';
    const flow = Chain([{ t: ALL }, { t: 'Homestay' }, { t: 'Traveler' }, { t: 'Booking' }],
      { interactive: false, loop: true, compact: true, showDetail: false });
    const panels = h('div', { class: 'chan__panels', 'data-r': '' });
    const btns = channels.map((c, i) => {
      const b = h('button', { class: 'cpanel', type: 'button', style: `--c:${c.color}`, 'aria-pressed': 'false', onclick: () => pick(i) },
        h('span', { class: 'cpanel__n', text: pad(i + 1) }),
        h('span', { class: 'cpanel__vt', text: c.t }),
        h('span', { class: 'cpanel__body' },
          h('strong', { class: 'cpanel__t', text: c.t }),
          h('ul', { class: 'ch__list' }, ...c.items.map((x) => h('li', { text: x })))));
      panels.append(b);
      return b;
    });
    function pick(i) {
      btns.forEach((b, j) => { b.classList.toggle('is-open', j === i); b.setAttribute('aria-pressed', String(j === i)); });
      flow.setLabel(0, i >= 0 ? channels[i].k : ALL);
    }
    pick(0);
    const el = h('div', { class: 'chan' }, panels, flow.el);
    return { el, enter() { pick(0); flow.enter(); }, leave() { flow.leave(); } };
  }

  // Week 4: campaigns + funnel
  function Campaigns(camps, stages) {
    const list = h('div', { class: 'camp__list', 'data-r': '' });
    const btns = camps.map((c, i) => {
      const details = h('span', { class: 'cc__details', hidden: true },
        ...[
          ['Audience', c.audience],
          ['Creative', c.creative],
          ['Goal', c.g],
          ['Conversion action', c.action]
        ].map(([label, value]) => h('span', { class: 'cc__detail' },
          h('b', { text: label }), h('span', { text: value }))));
      const b = h('button', { class: 'cc', type: 'button', 'aria-expanded': 'false', onclick: () => pick(i, true) },
        h('span', { class: 'cc__k', text: c.k }),
        h('span', { class: 'cc__t', text: c.t }),
        h('span', { class: 'cc__g', text: 'Goal: ' + c.g }),
        details);
      list.append(b);
      return { button: b, details };
    });
    const fn = h('div', { class: 'fn5', 'data-r': '' }, h('span', { class: 'fn5__cap', text: 'Funnel' }));
    const sts = stages.map((s, i) => {
      if (i) fn.append(svgEl(ARROW_DOWN, 'fn5__arrow'));
      const d = h('div', { class: 'fst', style: `--w:${100 - i * 14}%` }, h('span', { class: 'fst__n', text: pad(i + 1) }), h('span', { class: 'fst__t', text: s }));
      fn.append(d);
      return d;
    });
    let timer = null;
    function stopFunnel() {
      clearInterval(timer);
      timer = null;
    }
    function pick(i, animate = false) {
      stopFunnel();
      btns.forEach(({ button, details }, j) => {
        const selected = j === i;
        button.classList.toggle('is-sel', selected);
        button.setAttribute('aria-expanded', String(selected));
        details.hidden = !selected;
      });
      sts.forEach((s, j) => {
        s.classList.remove('is-on');
        s.classList.toggle('is-target', camps[i].stages.includes(j));
      });
      if (!animate) return;
      if (reduceMotion) {
        sts.forEach((s) => s.classList.add('is-on'));
        return;
      }
      let step = 0;
      const reveal = () => {
        sts[step].classList.add('is-on');
        step += 1;
        if (step === sts.length) stopFunnel();
      };
      reveal();
      timer = setInterval(reveal, 420);
    }
    pick(0);
    return {
      el: h('div', { class: 'camp' }, list, fn),
      enter: () => pick(0, true),
      leave: stopFunnel
    };
  }

  // Google Maps: optimization areas as an expandable list
  function Options(opts) {
    const acc = Accordion(opts.map((o, i) => ({
      head: [h('span', { class: 'acc__n', text: pad(i + 1) }), h('span', { class: 'acc__t', text: o.t }), h('span', { class: 'acc__f' })],
      body: [h('p', { class: 'acc__text', text: o.d })]
    })));
    acc.el.classList.add('acc--plain');
    acc.open(0);
    return { el: acc.el, enter: () => acc.open(0) };
  }

  // Ramkot experience: room vs experience
  function Ramkot(data) {
    let mode = 'room', timer = null;
    const old = h('span', { class: 'rk__old', text: 'Room' });
    const neu = h('span', { class: 'rk__new', text: 'Ramkot Local Experience' });
    const bRoom = h('button', { type: 'button', 'aria-pressed': 'false', onclick: () => { clearTimeout(timer); setMode('room'); } }, 'Selling a room');
    const bExp = h('button', { type: 'button', 'aria-pressed': 'false', onclick: () => { clearTimeout(timer); setMode('exp'); } }, 'Selling the experience');
    const bar = h('div', { class: 'rk__bar', 'data-r': '' }, h('div', { class: 'rk__big' }, old, neu), h('div', { class: 'seg' }, bRoom, bExp));
    const eq = h('div', { class: 'rk__eq', 'data-r': '' });
    const parts = data.parts.map((p, i) => {
      const d = h('div', { class: 'rk__part', text: p });
      if (i) eq.append(h('span', { class: 'rk__plus', 'aria-hidden': 'true', text: '+' }));
      eq.append(d);
      return d;
    });
    const count = h('span', { class: 'rk__count' });
    const chips = data.experiences.map((x) => h('button', { class: 'chip is-on', type: 'button', 'aria-pressed': 'true',
      onclick: (e) => {
        if (mode === 'room') setMode('exp');
        const on = !e.currentTarget.classList.contains('is-on');
        e.currentTarget.classList.toggle('is-on', on);
        e.currentTarget.setAttribute('aria-pressed', String(on));
        tally();
      } }, x));
    const chipBox = h('div', { class: 'rk__chips' }, ...chips);
    const foot = h('div', { 'data-r': '' }, h('div', { class: 'rk__chips-cap' }, h('span', { text: 'Possible experiences. Tap to adjust.' }), count), chipBox);
    const el = h('div', { class: 'rk', 'data-mode': 'room' }, bar, eq, foot);
    function tally() { count.textContent = $$('.chip.is-on', chipBox).length + ' of ' + chips.length; }
    function setMode(m) {
      mode = m; el.dataset.mode = m;
      bRoom.classList.toggle('is-on', m === 'room'); bRoom.setAttribute('aria-pressed', String(m === 'room'));
      bExp.classList.toggle('is-on', m === 'exp'); bExp.setAttribute('aria-pressed', String(m === 'exp'));
      parts.forEach((p, i) => p.classList.toggle('is-off', m === 'room' && i > 0));
    }
    setMode('room'); tally();
    return {
      el,
      enter() { clearTimeout(timer); setMode('room'); timer = setTimeout(() => setMode('exp'), reduceMotion ? 0 : 2200); },
      leave() { clearTimeout(timer); }
    };
  }

  // The complete marketing system: four phases, arrows, and a loop back
  function System(steps, phases) {
    let timer = null, delay = null;
    const legend = h('ul', { class: 'sys__legend', 'data-r': '' }, ...Object.values(phases).map((p) => h('li', { style: `--c:${p.color}`, text: p.label })));
    const flow = h('div', { class: 'sys__flow', 'data-r': '' });
    const rows = [];
    Object.keys(phases).forEach((k, ki) => {
      const ph = phases[k];
      const col = h('div', { class: 'sys__col' }, h('span', { class: 'sys__colhead', style: `--c:${ph.color}`, text: ph.label }));
      steps.forEach((s, i) => {
        if (s.p !== k) return;
        const b = h('button', { class: 'sstep', type: 'button', style: `--c:${ph.color}`, onclick: () => { stop(); set(i); } },
          h('span', { class: 'sstep__n', text: pad(i + 1) }), h('span', { class: 'sstep__t', text: s.t }));
        rows[i] = b;
        col.append(b);
      });
      if (ki) flow.append(svgEl(ARROW_RIGHT, 'sys__colarrow'));
      flow.append(col);
    });
    const loop = h('div', { class: 'sys__loop', 'data-r': '', 'aria-hidden': 'true' }, h('span', { text: 'Loops back' }));
    const pPhase = h('span', { class: 'sys__phase' });
    const pStep = h('p', { class: 'sys__step' });
    const pDesc = h('p', { class: 'sys__desc' });
    const panel = h('div', { class: 'sys__panel panel', 'aria-live': 'polite' }, pPhase, pStep, pDesc);
    const replay = h('button', { class: 'btn btn--ghost btn--sm', type: 'button', onclick: () => play() }, 'Play the system');
    const foot = h('div', { class: 'sys__foot', 'data-r': '' }, panel, h('div', { class: 'sys__replay' }, replay));

    function set(i) {
      rows.forEach((r, j) => { r.classList.toggle('is-lit', j < i); r.classList.toggle('is-active', j === i); });
      if (i < 0) { pPhase.textContent = ''; pStep.textContent = 'Select any step'; pDesc.textContent = ''; panel.style.removeProperty('--c'); return; }
      const s = steps[i], ph = phases[s.p];
      panel.style.setProperty('--c', ph.color);
      pPhase.replaceChildren(h('span', { text: ph.label }), h('span', { text: pad(i + 1) + ' / ' + pad(steps.length) }));
      pStep.textContent = s.t; pDesc.textContent = s.d;
      retrigger(panel);
    }
    function stop() { clearInterval(timer); timer = null; }
    function play() {
      stop(); set(0); let i = 1;
      timer = setInterval(() => { if (i >= steps.length) { stop(); return; } set(i++); }, 900);
    }
    set(-1);
    return {
      el: h('div', { class: 'sys' }, legend, flow, loop, foot),
      enter() { clearTimeout(delay); if (reduceMotion) { set(steps.length - 1); return; } delay = setTimeout(play, 1000); },
      leave() { clearTimeout(delay); stop(); set(-1); }
    };
  }

  // 30-day calendar
  function Calendar(days, weeks) {
    const grid = h('div', { class: 'cal__grid', 'data-r': '' });
    const cells = [];
    const pDay = h('span', { class: 'cal__pday' });
    const pTitle = h('p', { class: 'cal__ptitle' });
    const pText = h('p', { class: 'cal__ptext' });
    const panel = h('div', { class: 'cal__panel panel', 'aria-live': 'polite' }, pDay, pTitle, pText);
    weeks.forEach((w, wi) => {
      grid.append(h('div', { class: 'cal__wk', style: `--c:${w.c}` }, h('b', { text: w.l }), h('span', { text: w.s })));
      for (let k = 0; k < 7; k++) {
        const idx = wi * 7 + k;
        if (idx >= days.length) { grid.append(h('span', { class: 'cal__blank' })); continue; }
        const b = h('button', { class: 'cal__cell', type: 'button', style: `--c:${w.c};--i:${idx}`, onclick: () => pick(idx), 'aria-label': 'Day ' + (idx + 1) + ': ' + days[idx][1] },
          h('span', { class: 'cal__d', text: String(idx + 1) }), h('span', { class: 'cal__l', text: days[idx][0] }));
        cells[idx] = b;
        grid.append(b);
      }
    });
    function pick(i) {
      cells.forEach((c, j) => c.classList.toggle('is-sel', j === i));
      const w = weeks[Math.floor(i / 7)];
      panel.style.setProperty('--c', w.c);
      pDay.textContent = 'Day ' + (i + 1) + '  |  ' + w.l;
      pTitle.textContent = days[i][1];
      pText.textContent = days[i][2];
      retrigger(panel);
    }
    pick(0);
    return { el: h('div', { class: 'cal' }, grid, h('div', { 'data-r': '' }, panel)), enter: () => pick(0) };
  }

  // Metrics dashboard
  function Metrics(groups) {
    const dTitle = h('b');
    const dText = h('span');
    const detail = h('div', { class: 'met__detail glass', 'data-r': '', 'aria-live': 'polite' }, dTitle, dText);
    const tiles = [];
    const grid = h('div', { class: 'met__grid' });
    groups.forEach((g, gi) => {
      const col = h('div', { class: 'mg', style: `--c:${g.c}`, 'data-r': '' }, h('div', { class: 'mg__cap', text: pad(gi + 1) + '  ' + g.t }));
      g.items.forEach((m) => {
        const b = h('button', { class: 'mt', type: 'button', style: `--c:${g.c}`, onclick: () => pick(b, m, g) },
          h('span', { class: 'mt__t', text: m.t }), h('span', { class: 'mt__v', text: '\u2014' }));
        tiles.push(b);
        col.append(b);
      });
      grid.append(col);
    });
    function pick(b, m, g) {
      tiles.forEach((t) => t.classList.toggle('is-sel', t === b));
      detail.style.setProperty('--c', g.c);
      dTitle.textContent = g.t + '  |  ' + m.t;
      dText.textContent = m.d;
    }
    const goal = h('div', { class: 'met__goal', 'data-r': '' }, h('small', { text: 'The final goal' }), h('strong', { text: 'More qualified inquiries and more bookings.' }));
    const metricCount = groups.reduce((total, group) => total + group.items.length, 0);
    const summary = h('div', { class: 'met__summary', 'data-r': '' },
      h('p', {}, h('strong', { 'data-count': metricCount, text: String(metricCount) }), h('span', { text: ' tracked metrics' })),
      h('p', {}, h('strong', { 'data-count': groups.length, text: String(groups.length) }), h('span', { text: ' measurement stages' })));
    const el = h('div', { class: 'met' }, summary, grid, h('div', { class: 'met__foot' }, detail, goal));
    pick(tiles[0], groups[0].items[0], groups[0]);
    return { el, enter: () => pick(tiles[0], groups[0].items[0], groups[0]) };
  }

  /* ---------------------------------------------------------
     Mount components
     --------------------------------------------------------- */
  const MOUNTS = {
    'objective': () => Chain(CONTENT.objective, { words: true }),
    'timeline': () => Timeline(CONTENT.days),
    'tiles': () => Stats(CONTENT.tiles),
    'mix': () => Mix(CONTENT.mix),
    'content': () => ContentEngine(CONTENT.content),
    'channels': () => Channels(CONTENT.channels),
    'campaigns': () => Campaigns(CONTENT.campaigns, CONTENT.funnel),
    'maps-chain': () => Chain(CONTENT.mapsChain),
    'maps-opts': () => Options(CONTENT.mapsOpts),
    'review-chain': () => Chain(CONTENT.reviewChain),
    'ramkot': () => Ramkot(CONTENT.ramkot),
    'system': () => System(CONTENT.system, CONTENT.phases),
    'calendar': () => Calendar(CONTENT.calendar, CONTENT.weeks),
    'metrics': () => Metrics(CONTENT.metricGroups),
    'final-chain': () => Chain(CONTENT.final, { interactive: false, loop: true, compact: true, showDetail: false, words: true })
  };

  const slides = $$('.sec');
  const N = slides.length;
  const chapters = [
    { number: '01', title: 'Foundation', start: 's1' },
    { number: '02', title: 'Attention', start: 's4' },
    { number: '03', title: 'Acquisition', start: 's6' },
    { number: '04', title: 'Paid Growth', start: 's7' },
    { number: '05', title: 'Conversion', start: 's8' },
    { number: '06', title: 'Growth System', start: 's12' }
  ].map((chapter) => ({ ...chapter, index: slides.findIndex((slide) => slide.id === chapter.start) }));
  const chapterNav = $('#chapters');
  const chapterButtons = chapters.map((chapter, i) => {
    const button = h('button', {
      class: 'chapter-tab',
      type: 'button',
      'aria-label': chapter.number + ' ' + chapter.title,
      onclick: () => go(chapter.index)
    }, h('span', { class: 'chapter-tab__n', text: chapter.number }),
    h('span', { class: 'chapter-tab__t', text: chapter.title }));
    chapterNav.append(button);
    return button;
  });
  const hooks = {};
  let finalChain = null;

  $$('[data-mount]').forEach((mount) => {
    const comp = MOUNTS[mount.dataset.mount]();
    mount.replaceWith(comp.el);
    const id = comp.el.closest('.sec').id;
    (hooks[id] = hooks[id] || []).push(comp);
    if (mount.dataset.mount === 'final-chain') finalChain = comp;
  });

  // Section numbers on every section heading
  slides.forEach((s, i) => {
    const head = $('.head', s);
    if (head) head.prepend(h('span', { class: 'secnum', 'aria-hidden': 'true', text: pad(i + 1) }));
  });

  // Counters start at zero until their section is reached
  $$('[data-count]').forEach(resetCount);

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  const revealTargets = $$('[data-r], .lines');
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((e, i) => {
        e.target.style.setProperty('--d', Math.min(i, 8));
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revealTargets.forEach((t) => revealObs.observe(t));

    // Four-outcome lines light up as they scroll in
    const lineObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle('is-lit', e.isIntersecting || e.boundingClientRect.top < 0));
    }, { rootMargin: '0px 0px -38% 0px' });
    $$('.stmt__line').forEach((l) => lineObs.observe(l));
  } else {
    revealTargets.forEach((t) => t.classList.add('in'));
    $$('.stmt__line').forEach((l) => l.classList.add('is-lit'));
  }

  /* ---------------------------------------------------------
     Navigation, progress, section tracking
     --------------------------------------------------------- */
  const topbar = $('#topbar');
  const bar = $('#progressBar');
  const curNum = $('#curNum');
  const secName = $('#sectionName');
  const btnPrev = $('#btnPrev');
  const btnNext = $('#btnNext');
  const hint = $('#hint');
  const rail = $('#rail');
  const overview = $('#overview');
  const ovGrid = $('#overviewGrid');
  const entered = new Set();
  let cur = -1;

  $('#totNum').textContent = pad(N);

  const dots = slides.map((s, i) => {
    const d = h('button', { class: 'rail__dot', type: 'button', 'data-tip': pad(i + 1) + '  ' + s.dataset.title, 'aria-label': 'Go to ' + s.dataset.title, onclick: () => go(i) });
    rail.append(d);
    return d;
  });
  const ovItems = slides.map((s, i) => {
    const b = h('button', { class: 'ov', type: 'button', onclick: () => { closeOverview(); go(i); } }, h('b', { text: pad(i + 1) }), h('span', { text: s.dataset.title }));
    ovGrid.append(b);
    return b;
  });

  function go(n) {
    n = Math.max(0, Math.min(N - 1, n));
    slides[n].scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  function enterSection(i) {
    const s = slides[i];
    entered.add(i);
    (hooks[s.id] || []).forEach((c) => c.enter && c.enter());
    setTimeout(() => { if (entered.has(i)) $$('[data-count]', s).forEach(animateCount); }, 350);
  }
  function leaveSection(i) {
    const s = slides[i];
    entered.delete(i);
    (hooks[s.id] || []).forEach((c) => c.leave && c.leave());
    $$('[data-count]', s).forEach(resetCount);
  }

  function activate(i) {
    if (i !== cur) {
      cur = i;
      curNum.textContent = pad(i + 1);
      secName.textContent = slides[i].dataset.title;
      btnPrev.disabled = i === 0;
      btnNext.disabled = i === N - 1;
      dots.forEach((d, j) => { d.classList.toggle('is-active', j === i); if (j === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
      ovItems.forEach((b, j) => b.classList.toggle('is-cur', j === i));
      const chapterIndex = chapters.reduce((active, chapter, j) => chapter.index <= i ? j : active, 0);
      chapterButtons.forEach((button, j) => {
        button.classList.toggle('is-active', j === chapterIndex);
        button.classList.toggle('is-complete', j < chapterIndex);
        if (j === chapterIndex) button.setAttribute('aria-current', 'step');
        else button.removeAttribute('aria-current');
      });
      const activeTab = chapterButtons[chapterIndex];
      const navBounds = chapterNav.getBoundingClientRect();
      const tabBounds = activeTab.getBoundingClientRect();
      const scrollBy = tabBounds.left < navBounds.left
        ? tabBounds.left - navBounds.left
        : tabBounds.right > navBounds.right ? tabBounds.right - navBounds.right : 0;
      if (scrollBy) chapterNav.scrollBy({ left: scrollBy, behavior: reduceMotion ? 'auto' : 'smooth' });
      if (slides[i].classList.contains('chapter-start')) {
        slides[i].classList.remove('is-chapter-entering');
        void slides[i].offsetWidth;
        slides[i].classList.add('is-chapter-entering');
      }
      try { history.replaceState(null, '', '#' + (i + 1)); } catch (e) { /* file:// restrictions */ }
    }
    if (!entered.has(i)) enterSection(i);
  }

  if ('IntersectionObserver' in window) {
    // The section crossing the middle of the screen is the current one
    const midObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) activate(slides.indexOf(e.target)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    // Sections that fully leave the screen reset so they replay on return
    const farObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { const i = slides.indexOf(e.target); if (!e.isIntersecting && entered.has(i)) leaveSection(i); });
    }, { threshold: 0 });
    slides.forEach((s) => { midObs.observe(s); farObs.observe(s); });
  } else {
    activate(0);
  }

  // Scroll progress, header state, hint
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(1, window.scrollY / max) * 100 : 0) + '%';
      topbar.classList.toggle('is-scrolled', window.scrollY > 20);
      if (window.scrollY > 80) hint.classList.add('is-hidden');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  const next = () => go(Math.max(cur, 0) + 1);
  const prev = () => go(Math.max(cur, 0) - 1);

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  $$('[data-go="next"]').forEach((b) => b.addEventListener('click', next));
  $$('[data-goto]').forEach((b) => b.addEventListener('click', () => go(Number(b.dataset.goto))));

  function openOverview() { overview.hidden = false; (ovItems[Math.max(cur, 0)] || ovItems[0]).focus(); }
  function closeOverview() { overview.hidden = true; }
  $('#btnOverview').addEventListener('click', () => (overview.hidden ? openOverview() : closeOverview()));
  $('#btnCloseOverview').addEventListener('click', closeOverview);
  overview.addEventListener('click', (e) => { if (e.target === overview) closeOverview(); });

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
  }
  $('#btnFull').addEventListener('click', toggleFullscreen);

  // Arrow keys and page keys move one section at a time for presenter control.
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (!overview.hidden) {
      if (k === 'Escape' || k === 'o' || k === 'O') { e.preventDefault(); closeOverview(); }
      return;
    }
    const onButton = e.target instanceof Element && e.target.closest('button');
    switch (k) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': e.preventDefault(); prev(); break;
      case ' ': if (!onButton) { e.preventDefault(); e.shiftKey ? prev() : next(); } break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(N - 1); break;
      case 'f': case 'F': toggleFullscreen(); break;
      case 'o': case 'O': openOverview(); break;
      default:
    }
  });

  // Hero parallax
  const hero = $('#s1');
  let raf = 0;
  hero.addEventListener('pointermove', (e) => {
    if (raf || reduceMotion) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      hero.style.setProperty('--mx', (e.clientX / window.innerWidth - .5).toFixed(3));
      hero.style.setProperty('--my', (e.clientY / window.innerHeight - .5).toFixed(3));
    });
  });

  // Final CTA
  $('#ctaBuild').addEventListener('click', () => {
    if (finalChain) finalChain.start();
    $('#ctaNote').textContent = 'Day 1 begins with the marketing audit.';
  });

  // Deep link to a section (e.g. index.html#5)
  const startAt = parseInt(location.hash.replace('#', ''), 10) - 1;
  if (Number.isFinite(startAt) && startAt > 0 && startAt < N) {
    window.scrollTo({ top: slides[startAt].offsetTop, behavior: 'instant' });
  }
})();