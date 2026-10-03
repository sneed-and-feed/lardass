/**
 * LARDASS — OFFICIAL ARCHIVE & WORKS
 * Client Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Curated Artwork Catalog (100% Authentic LARDASS works)
  const artworkData = [
    {
      id: "LARD-01",
      title: "Autorack Yellow Siding // Three-Eyed Character",
      category: "freight",
      categoryLabel: "Freight Steel",
      imgSrc: "assets/images/lard/Captur4e.PNG",
      location: "Lower Mainland Siding // Autorack Spur",
      surface: "Yellow Steel North American Autorack",
      crew: "KEFC • 26 • ZARQ!",
      palette: "Turquoise, Orange, Purple",
      desc: "Turquoise 'LARD!' block letters with orange starbursts and polka-dot textures, painted alongside his three-eyed melting character on the lower sill of a yellow freight autorack.",
      coords: "49°12'N 122°54'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-02",
      title: "Government of Canada Wheat Hopper 'LARDASS!'",
      category: "freight",
      categoryLabel: "Freight Steel",
      imgSrc: "assets/images/lard/Cap2ture.PNG",
      location: "Transcontinental Grain Corridor",
      surface: "Government of Canada Cylindrical Wheat Hopper",
      crew: "KEFC",
      palette: "Industrial White, Asphalt Black",
      desc: "Wide throwup executed across the lower sill of an authentic Government of Canada cylindrical grain hopper bearing the yellow wheat sheaf emblem.",
      coords: "49°13'N 122°55'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-03",
      title: "Track Ballast Retaining Wall 'LARD! ASS'",
      category: "freight",
      categoryLabel: "Freight Steel",
      imgSrc: "assets/images/lard/7746.PNG",
      location: "Active Rail Ballast Retaining Cut",
      surface: "Poured Concrete Trackside Wall",
      crew: "KEFC",
      palette: "Grape Purple, Orange, Acid Green",
      desc: "Purple block lettering with stippled orange and green polka dots and cloud headers, painted along gravel railway ballast beside active freight tracks.",
      coords: "49°12'N 122°53'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-04",
      title: "Lavender Jester Character (Third Eye)",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/23453454.PNG",
      location: "Underground Concrete Abutment",
      surface: "Cast Concrete Wall",
      crew: "LARD // KEFC",
      palette: "Lavender, Orchid, Cyan, Black",
      desc: "Psychedelic figurative character head with forehead third eye, concentric facial pores, geometric mouth interior, and chin teardrops over turquoise base.",
      coords: "49°12'N 122°55'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-05",
      title: "Plaza Viaduct Twin Pillars",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/7485768.PNG",
      location: "Highway Viaduct Plaza",
      surface: "Square Concrete Pillars",
      crew: "LARD • KEFC",
      palette: "Fluorescent Yellow, Orange, Red",
      desc: "Dual overpass pillar installation featuring mirrored melting character heads in high-visibility fluorescent yellow and orange with dripping halos.",
      coords: "49°13'N 122°53'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-06",
      title: "Twin Screamers on Transition (26)",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/5678768.PNG",
      location: "Drainage Bank // Concrete Transition",
      surface: "Curved Concrete Transition",
      crew: "LARD • 26",
      palette: "Cobalt Blue, White, Black",
      desc: "Dual high-contrast blue and white screaming character heads with concentric eye rings and teardrops painted on an angled concrete transition.",
      coords: "49°12'N 122°54'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-07",
      title: "Three Character Faces Above Rip-Rap",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/C2apture.PNG",
      location: "River Bridge Pier",
      surface: "Highway Overpass Sub-Ceiling Beam",
      crew: "LARD • KEFC",
      palette: "Monochrome Black, White, Orange Halo",
      desc: "Trio of expressive character studies in line and tone, placed high on the underpass lintel above river rip-rap boulders with vertical 'LARD' tag.",
      coords: "49°12'N 122°54'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-08",
      title: "The Golden Smoker // 'CRUSH / FREE BOIR'",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/Capt11ure.PNG",
      location: "Drainage Siphon Concrete Pier",
      surface: "Curved Concrete Wall",
      crew: "LARD ASS // BOIR // CRUSH",
      palette: "Ochre, Chartreuse, Sepia, White",
      desc: "Ochre and chartreuse character head with cigarette and surrounding sweat droplets, accompanied by raw marker tags reading 'LARD ASS' and 'FREE BOIR'.",
      coords: "49°13'N 122°55'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-09",
      title: "Pink Speech-Bubble Face // 'LARD ASS'",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/36746567857.PNG",
      location: "Trackside Retaining Cut",
      surface: "Concrete Retaining Wall",
      crew: "KEFC",
      palette: "Orchid Pink, Sky Blue, Plum",
      desc: "Pink and lavender character head with teardrops and third eye emitting a speech bubble reading 'LARD ASS', set against cosmic swooshes and paisley forms.",
      coords: "49°12'N 122°55'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-10",
      title: "Underpass Viaduct Pink Character",
      category: "characters",
      categoryLabel: "Characters",
      imgSrc: "assets/images/lard/Capt5ure.PNG",
      location: "Highway Underpass Column",
      surface: "Fluted Concrete Pillar",
      crew: "LARD",
      palette: "Pastel Pink, Black, Olive",
      desc: "Large vertical melting character head with stippled pore rows painted on a fluted underpass bridge column with overhead black 'LARD' tag.",
      coords: "49°13'N 122°53'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-11",
      title: "Boulder Run Throwup & Screamer",
      category: "burners",
      categoryLabel: "Walls & Cuts",
      imgSrc: "assets/images/lard/56786784.PNG",
      location: "Riverbank Bridge Pier",
      surface: "Cast Concrete Wall",
      crew: "LARDASS",
      palette: "Solid White, Jet Black, Safety Orange",
      desc: "Crisp white bubble throwup with thick black outlines spanning across the concrete wall above rip-rap boulders, crowned with an orange star-haloed character head.",
      coords: "49°12'N 122°54'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-12",
      title: "LARDS in Lavender with Turquoise Cloud",
      category: "burners",
      categoryLabel: "Walls & Cuts",
      imgSrc: "assets/images/lard/retwwrte245.PNG",
      location: "Bridge Abutment Cut",
      surface: "Highway Concrete Abutment",
      crew: "KEFC",
      palette: "Lavender, Electric Turquoise, Orange",
      desc: "Pastel lavender bubble letters bordered by electric turquoise spray clouds, concentric psychedelic swirls, orange starbursts, and 'KEFC' crew tag.",
      coords: "49°13'N 122°54'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-13",
      title: "Polka-Dot Dual Tone // 'The Boys Are Back In Town!'",
      category: "burners",
      categoryLabel: "Walls & Cuts",
      imgSrc: "assets/images/lard/6234325425.PNG",
      location: "Rail Trail Retaining Wall",
      surface: "Textured Concrete Wall",
      crew: "DVOUR • KEFC",
      palette: "Emerald Green, Purple, Orange",
      desc: "Emerald green and purple bubble lettering filled with bright orange polka dots, topped with 'DVOUR : KEFC' tag and 'THE BOYS ARE BACK IN TOWN!'.",
      coords: "49°13'N 122°54'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-14",
      title: "'LARD LOVES BOLR' Woodcut Contours",
      category: "burners",
      categoryLabel: "Walls & Cuts",
      imgSrc: "assets/images/lard/Captur3e.PNG",
      location: "Underground Concrete Cut",
      surface: "Smooth Cast Retaining Wall",
      crew: "LARD • BOLR • KWPA",
      palette: "Slate Blue, White, Neon Orange",
      desc: "Stylized bubble piece featuring woodgrain contour hatchings inside 'LARD', connected to dripping 'LOVES BOLR' with orange asterisks.",
      coords: "49°13'N 122°54'W",
      date: "2026 Archive"
    },
    {
      id: "LARD-15",
      title: "Ice-Blue 'LARD A S S' Drips",
      category: "burners",
      categoryLabel: "Walls & Cuts",
      imgSrc: "assets/images/lard/345636546786.PNG",
      location: "Perimeter Industrial Wall",
      surface: "Masonry Wall",
      crew: "LARD",
      palette: "Ice Blue, Deep Purple, White",
      desc: "Ice-blue bubble letters with melting drip icicles, violet outlines, star cuts in the 'A' and 'L', and direction arrows painted behind birch trees.",
      coords: "49°13'N 122°53'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-16",
      title: "Avocado Green 'LARDASS' Throwup",
      category: "burners",
      categoryLabel: "Walls & Cuts",
      imgSrc: "assets/images/lard/45677685678.PNG",
      location: "Concrete Hall of Fame Wall",
      surface: "Multi-layered Concrete",
      crew: "LARDASS",
      palette: "Avocado Green, Espresso Brown",
      desc: "Bold avocado green throwup with arrow terminal off the L, placed cleanly across an intricate multi-color background mural on the wall.",
      coords: "49°12'N 122°54'W",
      date: "2025 Archive"
    },
    {
      id: "LARD-17",
      title: "Blackbook Character Ink Study",
      category: "blackbook",
      categoryLabel: "Blackbook Ink",
      imgSrc: "assets/images/lard/Capture.PNG",
      location: "Studio Blackbook Study",
      surface: "Archival Ink on Heavyweight Paper",
      crew: "LARD",
      palette: "Black Archival Ink on Paper",
      desc: "Pen-and-ink character study showcasing the foundational linework of his surreal three-eyed melting jester with castle-tower brows and wavy contour hatching.",
      coords: "STUDIO ARCHIVE",
      date: "2024 Archive"
    }
  ];

  // 2. Render Gallery
  const galleryGrid = document.getElementById('galleryGrid');
  const catCountAll = document.getElementById('catCountAll');
  const catCountFreight = document.getElementById('catCountFreight');
  const catCountChars = document.getElementById('catCountChars');
  const catCountBurners = document.getElementById('catCountBurners');
  const catCountInk = document.getElementById('catCountInk');
  const totalPiecesCount = document.getElementById('totalPiecesCount');

  if (totalPiecesCount) totalPiecesCount.textContent = artworkData.length;
  if (catCountAll) catCountAll.textContent = artworkData.length;
  if (catCountFreight) catCountFreight.textContent = artworkData.filter(x => x.category === 'freight').length;
  if (catCountChars) catCountChars.textContent = artworkData.filter(x => x.category === 'characters').length;
  if (catCountBurners) catCountBurners.textContent = artworkData.filter(x => x.category === 'burners').length;
  if (catCountInk) catCountInk.textContent = artworkData.filter(x => x.category === 'blackbook').length;

  let currentCategory = 'all';

  function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const items = artworkData.filter(item => {
      if (currentCategory === 'all') return true;
      return item.category === currentCategory;
    });

    items.forEach(item => {
      const globalIdx = artworkData.findIndex(x => x.id === item.id);
      const card = document.createElement('article');
      card.className = 'work-card';
      card.setAttribute('data-index', globalIdx);

      card.innerHTML = `
        <div class="work-media">
          <span class="work-badge">${item.categoryLabel}</span>
          <img src="${item.imgSrc}" alt="${item.title}" loading="lazy">
          <div class="work-overlay">
            <span class="work-overlay-tag">INSPECT SCAN</span>
          </div>
        </div>
        <div class="work-content">
          <div>
            <div class="work-id-line">
              <span>${item.id}</span>
              <span>${item.crew}</span>
            </div>
            <h3 class="work-title">${item.title}</h3>
            <p class="work-desc">${item.desc}</p>
          </div>
          <div class="work-footer">
            <span>${item.palette.split(',')[0]}</span>
            <span>${item.date}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(globalIdx));
      galleryGrid.appendChild(card);
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-bar .filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderGallery();
    });
  });

  renderGallery();

  // 3. Lightbox Modal
  let currentModalIndex = 0;
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  const lightboxImg = document.getElementById('lightboxImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalCoords = document.getElementById('modalCoords');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalLoc = document.getElementById('modalLoc');
  const modalSurface = document.getElementById('modalSurface');
  const modalCrew = document.getElementById('modalCrew');
  const modalPalette = document.getElementById('modalPalette');
  const modalCounter = document.getElementById('modalCounter');

  function openLightbox(index) {
    currentModalIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = artworkData[currentModalIndex];
    if (!item) return;

    lightboxImg.src = item.imgSrc;
    lightboxImg.alt = item.title;
    modalBadge.textContent = `${item.id} // ${item.categoryLabel.toUpperCase()}`;
    modalCoords.textContent = item.coords;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    modalLoc.textContent = item.location;
    modalSurface.textContent = item.surface;
    modalCrew.textContent = item.crew;
    modalPalette.textContent = item.palette;
    modalCounter.textContent = `${currentModalIndex + 1} OF ${artworkData.length}`;
  }

  function nextLightbox() {
    currentModalIndex = (currentModalIndex + 1) % artworkData.length;
    updateLightbox();
  }

  function prevLightbox() {
    currentModalIndex = (currentModalIndex - 1 + artworkData.length) % artworkData.length;
    updateLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextLightbox);
  lightboxPrev.addEventListener('click', prevLightbox);

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  const spotlightTrigger = document.getElementById('spotlightTrigger');
  if (spotlightTrigger) {
    spotlightTrigger.addEventListener('click', () => openLightbox(0));
  }

  // 4. Guestbook / Dispatch Log (Starts Completely Empty)
  const guestbookStorageKey = 'lardass_official_guestlog_v3';
  let guestEntries = [];

  try {
    const stored = localStorage.getItem(guestbookStorageKey);
    if (stored) {
      guestEntries = JSON.parse(stored);
    } else {
      guestEntries = [];
      localStorage.setItem(guestbookStorageKey, JSON.stringify(guestEntries));
    }
  } catch (err) {
    guestEntries = [];
  }

  const shoutoutFeed = document.getElementById('shoutoutFeed');
  const shoutoutForm = document.getElementById('shoutoutForm');
  const formFeedback = document.getElementById('formFeedback');
  const guestCount = document.getElementById('guestCount');
  const feedCounter = document.getElementById('feedCounter');

  function renderGuestLog() {
    if (!shoutoutFeed) return;
    shoutoutFeed.innerHTML = '';

    const count = guestEntries.length;
    if (guestCount) guestCount.textContent = count;
    if (feedCounter) feedCounter.textContent = `${count} ${count === 1 ? 'ENTRY' : 'ENTRIES'}`;

    if (count === 0) {
      shoutoutFeed.innerHTML = `
        <div class="guest-empty">
          NO DISPATCHES RECORDED YET.<br>BE THE FIRST TO LOG A SIGHTING OR LEAVE A MESSAGE.
        </div>
      `;
      return;
    }

    guestEntries.forEach(entry => {
      const itemEl = document.createElement('div');
      itemEl.className = 'guest-entry';
      itemEl.innerHTML = `
        <div class="guest-entry-header">
          <div>
            <span class="guest-name">${escapeHtml(entry.name)}</span>
            ${entry.crew ? `<span class="guest-crew">[${escapeHtml(entry.crew)}]</span>` : ''}
          </div>
          <span class="guest-date">${entry.time}</span>
        </div>
        <p class="guest-msg">${escapeHtml(entry.message)}</p>
      `;
      shoutoutFeed.appendChild(itemEl);
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  if (shoutoutForm) {
    shoutoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('writerName');
      const crewInput = document.getElementById('writerCrew');
      const msgInput = document.getElementById('writerMsg');

      const name = nameInput.value.trim();
      const crew = crewInput.value.trim();
      const message = msgInput.value.trim();

      if (!name || !message) return;

      const now = new Date();
      const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} PST`;

      const newEntry = {
        id: `entry-${Date.now()}`,
        name,
        crew: crew || '',
        time: timeStr,
        message
      };

      guestEntries.unshift(newEntry);

      try {
        localStorage.setItem(guestbookStorageKey, JSON.stringify(guestEntries));
      } catch (err) {
        console.warn('Storage quota exceeded');
      }

      renderGuestLog();
      shoutoutForm.reset();
      formFeedback.textContent = "Dispatch logged successfully.";
      setTimeout(() => {
        formFeedback.textContent = "";
      }, 4000);
    });
  }

  renderGuestLog();

  // 5. Back to Top and Clock
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const currentDateTime = document.getElementById('currentDateTime');
  function updateClock() {
    if (!currentDateTime) return;
    const d = new Date();
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const m = months[d.getMonth()];
    const day = String(d.getDate()).padStart(2, '0');
    const y = d.getFullYear();
    const h = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    currentDateTime.textContent = `${m} ${day}, ${y} // ${h}:${min}:${s} PST`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 6. Scroll Spy for Nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sub-nav .nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  console.log("LARDASS // OFFICIAL ARCHIVE READY.");
});
