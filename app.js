/* Goodfellas Barbershop - shared engine. Renders identical header/footer + reusable sections on every page. */
const BIZ = {
  name: "Goodfellas Barbershop",
  phone: "(208) 501-6359",
  phoneRaw: "+12085016359",
  address: "5663 E Franklin Rd",
  city: "Nampa",
  state: "ID",
  zip: "83687",
  booking: "https://getsquire.com/discover/barbershop/goodfellas-barbershop-nampa-1",
  facebook: "https://facebook.com/goodfellasbarbershop208",
  rating: "4.7",
  reviewCount: "172",
  mapsUrl: "https://www.google.com/maps/place/Goodfellas+Barbershop/@43.6047076,-116.5074787,17z"
};

const HOURS = [
  ["Monday", "9:00 AM to 2:00 PM"],
  ["Tuesday", "9:00 AM to 6:00 PM"],
  ["Wednesday", "9:00 AM to 6:00 PM"],
  ["Thursday", "9:00 AM to 6:00 PM"],
  ["Friday", "9:00 AM to 6:00 PM"],
  ["Saturday", "9:00 AM to 4:00 PM"],
  ["Sunday", "Closed"]
];

const ICONS = {
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  beard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4v5a7 7 0 0 0 14 0V4"/><path d="M5 9c0 5 3 9 7 9s7-4 7-9"/><line x1="9" y1="7" x2="9" y2="8"/><line x1="15" y1="7" x2="15" y2="8"/></svg>',
  razor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l9 9"/><path d="M14.5 14.5L21 21"/><path d="M12 12l2.5 2.5"/><path d="M3 3c4 0 8 1.5 9.5 4.5C10 9 5.5 8 3 3z"/></svg>',
  crown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z"/><line x1="5" y1="19" x2="19" y2="19"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 21.5 12 17.5 5.5 21.5 7 14.5 2 9.5 9 9 12 2"/></svg>',
  brush: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 14.5L3 21"/><path d="M14 4l6 6-7 3-2-2 3-7z"/><path d="M11 7l6 6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><polyline points="9 12 11 14 15 10"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13l-7 7-9-9V4h7l9 9z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M17 5.5a3 3 0 0 1 0 5.8"/><path d="M21.5 20a6 6 0 0 0-4-5.6"/></svg>',
  pole: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="4" width="8" height="16" rx="4"/><path d="M9 8l6 4M9 12l6 4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 10 18 20 6"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>'
};
function icon(n){ return ICONS[n] || ""; }

const SERVICES = [
  { slug:"haircuts-and-fades", icon:"scissors", title:"Haircuts & Razor Fades",
    short:"Skin fades, tapers, scissor work and a clean lineup, dialed in to your head shape.",
    what:"The cut Goodfellas is known for. Your barber starts with a real consultation, then builds a skin fade, taper, or scissor cut blended exactly the way you want it, finished with a sharp razor lineup and a hot towel.",
    goodFor:"Anyone who wants a fresh, dialed-in cut they do not have to think about for a few weeks.",
    howLong:"About 30 to 45 minutes",
    includes:["Consultation on shape and length","Skin fade, taper or scissor cut","Razor lineup at the edges","Hot towel and style to finish"],
    reviews:["leo","austin"] },
  { slug:"beard-trims-and-lineups", icon:"beard", title:"Beard Trims & Lineups",
    short:"Beard shaping, hot lather edges and a crisp lineup that holds for weeks.",
    what:"A beard trim that actually has a plan. Your barber maps the beard to your jaw, cleans the cheek and neck lines with a straight razor and hot lather, and finishes with oil so it looks sharp and feels good.",
    goodFor:"Guys growing a beard who want it shaped, even, and clean instead of guessing at home.",
    howLong:"About 20 to 30 minutes",
    includes:["Beard mapping and shaping","Hot lather cheek and neck lines","Straight razor detailing","Finishing beard oil"],
    reviews:["kaili","mikes"] },
  { slug:"hot-towel-shaves", icon:"razor", title:"Hot Towel Straight Razor Shaves",
    short:"The traditional shave: hot towels, warm lather and a straight razor, start to finish.",
    what:"A classic barbershop straight razor shave. Hot towels open everything up, pre-shave oil and warm lather go on, and your barber takes a true straight razor to it for the closest shave you can get, then cools it down with aftershave.",
    goodFor:"Anyone who wants the closest, most relaxing shave there is, or a special-occasion clean look.",
    howLong:"About 30 minutes",
    includes:["Hot towel prep","Pre-shave oil and warm lather","Straight razor shave","Cooling aftershave finish"],
    reviews:["mikes","bob"] },
  { slug:"haircut-and-beard", icon:"crown", title:"Haircut & Beard Combo",
    short:"The full Goodfellas treatment: cut, fade, beard sculpt and lineups in one chair.",
    what:"The full reset. A complete haircut and razor fade plus a full beard sculpt and lineups, so your hair and beard actually match and frame your face. This is the one most regulars book.",
    goodFor:"A full reset before an event, a trip, a new job, or just because it is time.",
    howLong:"About 45 to 60 minutes",
    includes:["Full haircut and razor fade","Beard shaping and lineups","Hot towel on hair and beard","Style, product and finish"],
    reviews:["melissa","kalyn"] },
  { slug:"kids-and-family-cuts", icon:"users", title:"Kids & Family Cuts",
    short:"Patient barbers, a welcoming room, and clean cuts for the whole family.",
    what:"Goodfellas is a family room. Reviewers bring their teen boys and their little ones, and the barbers take the time to make kids comfortable and send them out looking sharp. Bring the whole crew.",
    goodFor:"Kids, teens and families who want a friendly, no-stress first chair.",
    howLong:"About 20 to 30 minutes",
    includes:["Kid-friendly, patient barber","Cut to the style you want","Lineup and styling","A welcoming, family vibe"],
    reviews:["melissa","austin"] },
  { slug:"hair-designs-and-color", icon:"brush", title:"Hair Designs & Creative Color",
    short:"Freehand designs, parts and bold custom color when you want to make a statement.",
    what:"Goodfellas barbers do more than fades. Freehand hair designs, clean parts and full creative color, from a subtle detail to a full vivid look. Bring a reference and let the chair build it with you.",
    goodFor:"Anyone who wants custom design work or a bold color that stands out.",
    howLong:"About 45 to 90 minutes",
    includes:["Design or color consultation","Freehand designs and parts","Custom and vivid color","Finish and care tips"],
    reviews:["andy","leo"] }
];

const REVIEWS = [
  { id:"leo", name:"Leo M.", source:"Yelp", date:"March 2026", barber:"JR",
    text:"JR is a professional barber with an ability to do what very few know how to consistently. His skills and technique to provide outstanding fades, tapering and lining is amazing. He takes the time to learn his clientele and listens clearly to how they desire their cut to be. I would definitely give JR a 10 out of 10 for his skill alone. The shop provides a clean atmosphere that welcomes you in." },
  { id:"melissa", name:"Melissa Campanella", source:"Google", date:"11 months ago", barber:"JR",
    text:"JR is incredible! He does great with modern haircuts for my teen boys and is very professional. Thank you for making our entire family feel welcome in a super rad barbershop environment. The entire crew in this shop is friendly, the shop is clean, and cost is reasonable especially for the quality of the service." },
  { id:"austin", name:"Austin Polit", source:"Google", date:"2 months ago", barber:"the crew",
    text:"This is the best place to get a haircut in the Treasure Valley. They have some of the best barbers from Boise to Caldwell and their work speaks for itself. Personally I have been going there for 7 years and currently my 3 boys go as well." },
  { id:"kaili", name:"Kaili Michelle Smalley", source:"Google", date:"a month ago", barber:"David and Augie",
    text:"Dave (David) is incredible, as is Augie. We are pressed for cash, and Dave walked me, the wife, step by step on how to trim up my husband's hair and beard. Such a selfless and generous group of people that are full of love for hair, and of course, football." },
  { id:"andy", name:"Andy M.", source:"Yelp", date:"February 2025", barber:"the crew",
    text:"This place is what I like in a barber shop, a clean, well lit place full of people from all walks of life talking about the weather and what have you with the chatty barbers. This place was packed even in the middle of a snowstorm. You spend a little money on a reasonably priced haircut and walk out looking like a million bucks." },
  { id:"michael", name:"Michael S.", source:"Yelp", date:"February 2022", barber:"Anthony",
    text:"Now that I found Anthony at Goodfellas Barbershop, I doubt I will be using my home clippers ever again. The place reminded me of a typical neighborhood barber shop because that is exactly what it is. The guys who work there were all fun to talk with. I got right in with no wait, and I got a great cut, great service, for a super great price." },
  { id:"kalyn", name:"Kalyn S.", source:"Yelp", date:"January 2024", barber:"Augie",
    text:"I just moved back into town and asked a barber in our family for a recommendation. He recommended Augie. I have had Augie cut me a couple times already, he is good at what he does and he will make any adjustments needed. I highly recommend him for his skill, personality and cleanliness. The shop has a great vibe." },
  { id:"mikes", name:"Mike S.", source:"Yelp", date:"July 2022", barber:"Dre",
    text:"Dre is one of the most talented barbers I have encountered so far. Knows how to use a straight razor very well and keeps a good conversation. Good prices with amazing styles and amazing barbers. If you ever need a cut or a line-up, hit up Dre and he will take care of you." },
  { id:"bob", name:"Bob D.", source:"Yelp", date:"December 2022", barber:"Kevin",
    text:"My first time. I have been looking for a good cut near my house and in support of local businesses. These guys are the real deal. I had Kevin, second chair from the front left going in. Did a great job, good conversation, very nice young man. The entire place seems relaxed yet pro. Cool place, good service, nice cut, good price." }
];
function reviewById(id){ return REVIEWS.find(r=>r.id===id); }

const GALLERY = [
  ["images/exterior.jpg","The Goodfellas Barbershop storefront on East Franklin Road in Nampa"],
  ["images/interior-waiting.jpg","Goodfellas Barbershop interior with the checkered floor and waiting area"],
  ["images/barber-cutting.jpg","A Goodfellas barber working on a client's cut at the chair"],
  ["images/fade-closeup.jpg","A clean skin fade finished at Goodfellas Barbershop"],
  ["images/interior-stations.jpg","The barber stations and sports memorabilia inside Goodfellas"],
  ["images/chair.jpg","A classic barber chair at Goodfellas Barbershop"],
  ["images/interior-wide.jpg","Wide view of the Goodfellas Barbershop floor"],
  ["images/creative-color.jpg","Bold creative color work done by a Goodfellas barber"],
  ["images/interior-products.jpg","Goodfellas barber stations, mirrors and house grooming products"]
];

/* ---------- header / footer (identical markup on every page) ---------- */
function starRow(){ return '<span class="stars" aria-hidden="true">'+ '★★★★★'.split('').map(()=>'').join('') +'</span>'; }

function headerHTML(){
  return `
  <div class="annc">
    <div class="wrap annc-in">
      <span>Walk-ins welcome</span><span class="dot">&bull;</span>
      <span>7 chairs, Boise to Caldwell's best barbers</span><span class="dot">&bull;</span>
      <span>Tue to Fri 9 to 6, Sat 9 to 4</span>
    </div>
  </div>
  <div class="nav-wrap">
    <div class="wrap nav">
      <a class="brand" href="index.html" aria-label="Goodfellas Barbershop home">
        <span class="brand-mark">${icon('pole')}</span>
        <span class="brand-txt"><b>GOODFELLAS</b><i>BARBERSHOP &middot; NAMPA</i></span>
      </a>
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="links" id="links">
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="index.html#gallery">Gallery</a>
        <a href="index.html#reviews">Reviews</a>
        <a href="blog.html">Blog</a>
        <a class="nav-call" href="tel:${BIZ.phoneRaw}">${icon('phone')}<span>${BIZ.phone}</span></a>
        <a class="nav-book" href="${BIZ.booking}" target="_blank" rel="noopener">Book Online</a>
      </nav>
    </div>
  </div>`;
}

function footerHTML(){
  const hrs = HOURS.map(h=>`<li><span>${h[0]}</span><span>${h[1]}</span></li>`).join('');
  return `
  <div class="wrap foot-grid">
    <div class="foot-col">
      <a class="brand brand-foot" href="index.html">
        <span class="brand-mark">${icon('pole')}</span>
        <span class="brand-txt"><b>GOODFELLAS</b><i>BARBERSHOP</i></span>
      </a>
      <p class="foot-blurb">A real neighborhood barbershop in Nampa with 7 experienced barbers who specialize in razor fades, hot towel shaves and hair designs. Take pride in your everyday look.</p>
      <div class="foot-rate">${'★★★★★'} <strong>${BIZ.rating}</strong> <span>from ${BIZ.reviewCount} Google reviews</span></div>
      <a class="foot-fb" href="${BIZ.facebook}" target="_blank" rel="noopener" aria-label="Goodfellas Barbershop on Facebook">${icon('facebook')}<span>Follow on Facebook</span></a>
    </div>
    <div class="foot-col">
      <h4>Visit the shop</h4>
      <p class="foot-line">${icon('pin')}<span>${BIZ.address}<br>${BIZ.city}, ${BIZ.state} ${BIZ.zip}</span></p>
      <p class="foot-line">${icon('phone')}<a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a></p>
      <a class="foot-book" href="${BIZ.booking}" target="_blank" rel="noopener">Book Online</a>
      <a class="foot-dir" href="${BIZ.mapsUrl}" target="_blank" rel="noopener">Get directions</a>
    </div>
    <div class="foot-col">
      <h4>Hours</h4>
      <ul class="foot-hours">${hrs}</ul>
    </div>
  </div>
  <div class="wrap foot-bottom">
    <span>&copy; <span id="yr"></span> Goodfellas Barbershop. All rights reserved.</span>
    <span class="foot-made">Real photos and reviews from this shop. No stock, no filler.</span>
  </div>`;
}

/* ---------- section renderers ---------- */
function serviceCard(s){
  return `<a class="svc-card" href="service-${s.slug}.html">
    <span class="svc-ic">${icon(s.icon)}</span>
    <h3>${s.title}</h3>
    <p>${s.short}</p>
    <span class="svc-go">View service ${arrow()}</span>
  </a>`;
}
function arrow(){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ar"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'; }

function reviewCard(r, cls){
  return `<figure class="rev ${cls||''}">
    <div class="rev-stars">★★★★★</div>
    <blockquote>${r.text}</blockquote>
    <figcaption><span class="rev-name">${r.name}</span><span class="rev-meta">${r.source} &middot; ${r.date}</span></figcaption>
  </figure>`;
}

function renderHeaderFooter(){
  const h=document.getElementById('site-header'); if(h) h.innerHTML=headerHTML();
  const f=document.getElementById('site-footer'); if(f) f.innerHTML=footerHTML();
  const yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
  const burger=document.getElementById('burger'); const links=document.getElementById('links');
  if(burger&&links){
    const setMenu=(open)=>{
      links.classList.toggle('open',open);
      burger.classList.toggle('on',open);
      burger.setAttribute('aria-expanded',open?'true':'false');
      links.style.display = open ? 'flex' : '';
    };
    burger.addEventListener('click',()=>{ setMenu(!links.classList.contains('open')); });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  }
}

function renderServicesGrid(){
  const g=document.getElementById('services-grid'); if(!g) return;
  g.innerHTML = SERVICES.map(serviceCard).join('');
}
function renderFeaturedReviews(){
  const g=document.getElementById('featured-reviews'); if(!g) return;
  const ids=["leo","melissa","kalyn","mikes","austin","bob"];
  g.innerHTML = ids.map(id=>reviewCard(reviewById(id))).join('');
}
function renderReviewCarousel(){
  const t=document.getElementById('rev-track'); if(!t) return;
  const seq = REVIEWS.concat(REVIEWS);
  t.innerHTML = seq.map(r=>reviewCard(r,'rev-slide')).join('');
}
function renderGallery(){
  const g=document.getElementById('gallery-grid'); if(!g) return;
  g.innerHTML = GALLERY.map(([src,alt])=>`<figure class="gal"><img src="${src}" alt="${alt}" loading="lazy"></figure>`).join('');
}

/* ---------- service detail page ---------- */
function renderServiceDetail(){
  const host=document.getElementById('service-detail'); if(!host) return;
  const slug=host.getAttribute('data-slug');
  const s=SERVICES.find(x=>x.slug===slug); if(!s) return;
  document.title = s.title + " | Goodfellas Barbershop, Nampa ID";
  const inc=s.includes.map(i=>`<li>${icon('check')}<span>${i}</span></li>`).join('');
  const revs=s.reviews.map(id=>reviewCard(reviewById(id))).join('');
  const others=SERVICES.filter(x=>x.slug!==slug).slice(0,3).map(serviceCard).join('');
  host.innerHTML = `
   <section class="svc-hero">
     <div class="wrap svc-hero-in">
       <a class="crumb" href="services.html">${arrow()} All services</a>
       <span class="svc-hero-ic">${icon(s.icon)}</span>
       <h1>${s.title}</h1>
       <p class="svc-hero-sub">${s.short}</p>
       <div class="svc-hero-cta">
         <a class="btn btn-red" href="${BIZ.booking}" target="_blank" rel="noopener">Book this service</a>
         <a class="btn btn-ghost" href="tel:${BIZ.phoneRaw}">Call ${BIZ.phone}</a>
       </div>
     </div>
   </section>
   <section class="wrap svc-body">
     <div class="svc-main">
       <h2>What it is</h2>
       <p>${s.what}</p>
       <div class="svc-meta">
         <div class="svc-meta-card"><span class="mt">${icon('star')}</span><h4>Good for</h4><p>${s.goodFor}</p></div>
         <div class="svc-meta-card"><span class="mt">${icon('clock')}</span><h4>How long</h4><p>${s.howLong}</p></div>
       </div>
       <h2>What is included</h2>
       <ul class="svc-inc">${inc}</ul>
       <div class="svc-reviews">
         <h2>What clients say</h2>
         <div class="rev-pair">${revs}</div>
       </div>
       <div class="svc-cta-band">
         <div><h3>Ready when you are</h3><p>Walk in or book a chair online. Tue to Fri 9 to 6, Sat 9 to 4.</p></div>
         <a class="btn btn-red" href="${BIZ.booking}" target="_blank" rel="noopener">Book Online</a>
       </div>
     </div>
     <aside class="svc-aside">
       <div class="aside-card">
         <h4>Other services</h4>
         <div class="aside-svcs">${others}</div>
       </div>
       <div class="aside-card aside-info">
         <h4>The shop</h4>
         <p>${icon('pin')}<span>${BIZ.address}, ${BIZ.city}, ${BIZ.state} ${BIZ.zip}</span></p>
         <p>${icon('phone')}<a href="tel:${BIZ.phoneRaw}">${BIZ.phone}</a></p>
         <p>${icon('clock')}<span>Tue to Fri 9 to 6, Sat 9 to 4</span></p>
       </div>
     </aside>
   </section>`;
}

document.addEventListener('DOMContentLoaded',function(){
  renderHeaderFooter();
  renderServicesGrid();
  renderFeaturedReviews();
  renderReviewCarousel();
  renderGallery();
  renderServiceDetail();
});
