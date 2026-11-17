const translations = {
  en: {
    navMusic:'Music',navEvents:'Events',navEquipment:'My gear',navAbout:'About me',navContact:'Contact',
    headline1:'Your party.',headline2:'Your rhythm.',headline3:'Your moment.',
    genres:'Reggaeton · Salsa · Bachata · Pop · House · Dance · Classics & More',
    heroDesc:"Merengue, Ecuadorian music, salsa and more. Let's find the perfect sound for your celebration.",
    bookButton:'Ask about your event ↗', musicButton:'Explore the music',heroWhatsApp:'Prefer WhatsApp? Message me directly',partyLabel:"YOUR CELEBRATION<br>LET'S DANCE!",
    imageNote:'Music without borders · Música sin fronteras',
    gearKicker:'BEHIND THE MUSIC',gearTitle:'My sound. My setup.',gearDesc:'Get to know the gear behind the music. Real photographs of my personal DJ equipment.',
    gearCaption1:'My controller and DJ laptop, ready for music',gearCaption2:'Keeping the equipment protected',gearFeatureTitle:'Music for every generation',
    gearFeatureText:'Latin favourites, global hits, and a growing lighting setup with Equinox Fusion Orbit MKII moving heads.',gearButton:"Let's talk about your event →",
    fieldDate:'Event date',fieldLocation:'Event location',privacyNote:'This page does not store your details. WhatsApp will open so you can review and send your message.',
    musicKicker:'THE SOUND',musicTitle:'A rhythm for every moment.',musicDesc:"From timeless favourites to today's dancefloor hits — a mix made for your celebration.",
    musicLatin:'Latin rhythms to dance, sing and enjoy together.',musicDance:'Energy and modern beats for the party.',
    musicRoots:'Sounds that bring people and generations together.',musicClassics:'Favourites across eras and styles.',
    eventsKicker:'CELEBRATIONS',eventsTitle:'Your event. Your soundtrack.',
    eventsText:"Planning a birthday, family celebration or private event? Share what you have in mind and let's talk about the music.",
    eventsLink:'Tell me about your event →',aboutKicker:'MY STORY',aboutTitle:"Hi, I'm Luis Salcedo.",
    aboutLead:'Music is my way of connecting people, cultures and generations.',
    aboutText:'I live with a disability and use a wheelchair. I want to show this part of my life naturally, without hiding it. My wheelchair is part of my story, but it does not define my dreams.',
    aboutText2:'With the love of my family, perseverance and a passion for music, I keep learning and building my DJ project. To me, Music Without Borders means joy, rhythm and opportunities for everyone.',
    aboutQuote:'My message is simple: never stop believing in yourself. With passion and determination, anything is possible.',
    contactKicker:"LET'S CONNECT",contactTitle:"Let's make it a celebration.",
    contactDesc:"Tell me about your event: the date, the place and the kind of music you love.",
    contactNote:'Every celebration deserves its own rhythm.',whatsAppTitle:'Chat on WhatsApp',emailTitle:'Send me an email',phoneTitle:'Call me',
    fieldName:'Your name',fieldEmail:'Your email',fieldOccasion:'Type of event',fieldMessage:'Tell me about your celebration',sendButton:'Prepare WhatsApp message ↗',
    formInfo:'The button opens WhatsApp with your enquiry ready. You can review it before sending.',
    lightKicker:'A TOUCH OF LIGHT',lightTitle:'Light up the celebration.',lightText:'Equinox Fusion Orbit MKII moving heads add colour and atmosphere to the DJ setup.',

  },
  es: {
    navMusic:'Música',navEvents:'Eventos',navEquipment:'Mi equipo',navAbout:'Sobre mí',navContact:'Contacto',
    headline1:'Tu fiesta.',headline2:'Tu ritmo.',headline3:'Tu momento.',
    genres:'Reguetón · Salsa · Bachata · Pop · House · Dance · Clásicos y más',
    heroDesc:'Merengue, música ecuatoriana, salsa y mucho más. Busquemos el sonido ideal para tu celebración.',
    bookButton:'Consulta por tu evento ↗', musicButton:'Descubre la música',heroWhatsApp:'¿Prefieres WhatsApp? Escríbeme directamente',partyLabel:'TU CELEBRACIÓN<br>¡A BAILAR!',
    imageNote:'Music without borders · Música sin fronteras',
    gearKicker:'DETRÁS DE LA MÚSICA',gearTitle:'Mi sonido. Mi equipo.',gearDesc:'Conoce el equipo que acompaña mi música. Fotografías reales de mis aparatos de DJ.',
    gearCaption1:'Mi controladora y portátil, listos para la música',gearCaption2:'Mi equipo protegido y preparado',gearFeatureTitle:'Música para todas las generaciones',
    gearFeatureText:'Ritmos latinos, éxitos internacionales y un equipo de iluminación que sigue creciendo con las luces Equinox Fusion Orbit MKII.',gearButton:'Hablemos de tu celebración →',
    fieldDate:'Fecha del evento',fieldLocation:'Lugar del evento',privacyNote:'Tus datos no se guardan en esta página. WhatsApp abrirá el mensaje para que decidas si enviarlo.',
    musicKicker:'LA MÚSICA',musicTitle:'Un ritmo para cada momento.',musicDesc:'Desde clásicos inolvidables hasta éxitos actuales: una mezcla para celebrar.',
    musicLatin:'Ritmos latinos para bailar, cantar y disfrutar juntos.',musicDance:'Energía y sonidos actuales para la fiesta.',
    musicRoots:'Música que une a personas y generaciones.',musicClassics:'Los favoritos de diferentes épocas y estilos.',
    eventsKicker:'CELEBRACIONES',eventsTitle:'Tu evento. Tu música.',
    eventsText:'¿Estás organizando un cumpleaños, una celebración familiar o un evento privado? Cuéntame tu idea y hablemos de la música.',
    eventsLink:'Cuéntame sobre tu evento →',aboutKicker:'MI HISTORIA',aboutTitle:'Hola, soy Luis Salcedo.',
    aboutLead:'La música es mi manera de unir personas, culturas y generaciones.',
    aboutText:'Vivo con una discapacidad y utilizo una silla de ruedas. Quiero mostrar esta parte de mi vida con naturalidad, sin esconderla. Mi silla forma parte de mi historia, pero no define mis sueños.',
    aboutText2:'Con el cariño de mi familia, perseverancia y pasión por la música, sigo aprendiendo y construyendo mi proyecto como DJ. Para mí, Música Sin Fronteras significa alegría, ritmo y oportunidades para todos.',
    aboutQuote:'Mi mensaje es sencillo: nunca dejes de creer en ti. Con pasión y determinación, todo se puede.',
    contactKicker:'HABLEMOS',contactTitle:'Hagamos una gran celebración.',
    contactDesc:'Cuéntame la fecha, el lugar y qué música te gusta para tu celebración.',
    contactNote:'Cada celebración merece su propio ritmo.',whatsAppTitle:'Escríbeme por WhatsApp',emailTitle:'Envíame un correo',phoneTitle:'Llámame',
    fieldName:'Tu nombre',fieldEmail:'Tu correo electrónico',fieldOccasion:'Tipo de evento',fieldMessage:'Cuéntame sobre tu celebración',sendButton:'Preparar mensaje en WhatsApp ↗',
    formInfo:'Al pulsar el botón se abrirá WhatsApp con tu consulta preparada. Podrás revisarla y enviarla tú mismo.',
    lightKicker:'UN TOQUE DE LUZ',lightTitle:'La fiesta también se ilumina.',lightText:'Las luces robotizadas Equinox Fusion Orbit MKII aportan color y ambiente al equipo.',
    
  }
};
function setLanguage(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    if (key === 'partyLabel') el.innerHTML = t[key];
    else el.textContent = t[key];
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    const active = btn.id === `lang-${lang}`;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  document.title = lang === 'es' ? 'DJ Luis Salcedo | Música Sin Fronteras' : 'DJ Luis Salcedo | Music Without Borders';
  const hello = lang === 'es' ? 'Hola Luis, me gustaría consultar sobre música DJ para un evento.' : "Hello Luis, I'd like to ask about DJ music for an event.";
  document.querySelectorAll('[data-wa-link]').forEach(a => a.href = 'https://wa.me/447943825944?text=' + encodeURIComponent(hello));
  try { localStorage.setItem('dj-luis-language', lang); } catch(e) { /* Storage disabled: no problem. */ }
}
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
try { setLanguage(localStorage.getItem('dj-luis-language') === 'en' ? 'en' : 'es'); } catch(e) { setLanguage('es'); }
const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('primary-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = String(new Date().getFullYear());

// Funciona en páginas HTML estáticas (incluido GitHub Pages).
// No envía el mensaje por sí solo: la persona confirma el envío en WhatsApp.
const inquiryForm = document.getElementById('dj-contact');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    const data = new FormData(inquiryForm);
    const english = document.documentElement.lang === 'en';
    const fields = english ? [
      'Hello DJ Luis Salcedo, I would like a quote for an event.',
      'Name: ' + (data.get('name') || ''),
      'Email: ' + (data.get('email') || ''),
      'Event type: ' + (data.get('occasion') || 'Not specified'),
      'Event date: ' + (data.get('event-date') || 'Not specified'),
      'Location: ' + (data.get('event-location') || 'Not specified'),
      'Message: ' + (data.get('message') || '')
    ] : [
      'Hola DJ Luis Salcedo, quisiera un presupuesto para un evento.',
      'Nombre: ' + (data.get('name') || ''),
      'Correo: ' + (data.get('email') || ''),
      'Tipo de evento: ' + (data.get('occasion') || 'No indicado'),
      'Fecha: ' + (data.get('event-date') || 'No indicada'),
      'Lugar: ' + (data.get('event-location') || 'No indicado'),
      'Mensaje: ' + (data.get('message') || '')
    ];
    window.open('https://wa.me/447943825944?text=' + encodeURIComponent(fields.join('\n')), '_blank', 'noopener,noreferrer');
  });
}
