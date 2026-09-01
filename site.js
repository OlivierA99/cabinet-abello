/* =====================================================================
   site.js — SOURCE UNIQUE du menu, du fil de vignettes et du pied de page
   Cabinet ABELLO — géomètre-expert

   POUR MODIFIER LE SITE, TOUT SE PASSE ICI ET NULLE PART AILLEURS.

   - Ajouter / retirer / renommer une entrée de menu  -> tableau MENU
   - Ajouter / retirer / réordonner une vignette      -> tableau VIGNETTES
   - Changer une coordonnée du pied de page           -> objet CABINET

   Un seul fichier modifié = toutes les pages du site à jour.
   ===================================================================== */

var CABINET = {
  nom       : "Cabinet ABELLO Olivier",
  qualite   : "Géomètre-Expert",
  forme     : "S.E.L.A.R.L. inscrite au tableau de l'Ordre des Géomètres-Experts n°2007C200005",
  siret     : "49467312200011",
  rcs       : "RCS Versailles D 494 673 122",
  oge       : "membre de l'Ordre des Géomètres-Experts n°5456",
  mantes    : { adresse:"3 place Saint-Maclou 78200 MANTES-LA-JOLIE", tel:"01.30.33.41.78", telLien:"+33130334178" },
  limay     : { adresse:"17 rue de l'Église 78520 LIMAY",             tel:"01.34.77.09.81", telLien:"+33134770981" },
  email     : "cabinet.abello@orange.fr",
  logoOge   : "images/logo-geometre-expert-noir-gris-20cm-site-cabinet-abello.jpg",
  logo      : "images/logo-boussole-cabinet-abello-geometre-expert.jpg",
  /* Réseaux sociaux affichés dans le pied de page (ajoutés le 23/08/2026).
     Pour en retirer un : supprimer sa ligne. L'ordre du tableau est l'ordre affiché. */
  reseaux   : [
    { nom:"LinkedIn — Olivier Abello",        url:"https://www.linkedin.com/in/olivier-abello-geometre-expert", icone:"linkedin" },
    { nom:"Facebook — Cabinet Abello",        url:"https://www.facebook.com/GEmantois/",                        icone:"facebook" },
    { nom:"Instagram — Cabinet Abello",       url:"https://www.instagram.com/cabinetabello/",                   icone:"instagram" }
  ]
};

/* ---------------------------------------------------------------------
   MENU — l'ordre du tableau est l'ordre affiché.
   { nom, url }                        = lien simple
   { nom, sous:[ {nom,url,note} ] }    = menu déroulant
   Pour retirer une entrée : supprimer sa ligne (ou la mettre en commentaire //).
   --------------------------------------------------------------------- */

var MENU = [
  { nom:"Le cabinet", sous:[
    { nom:"Accueil",             url:"index.html",            note:"Retour à la page d'accueil" },
    { nom:"Présentation",        url:"presentation.html",     note:"Le cabinet depuis 1975" },
    { nom:"Le Géomètre-Expert",  url:"geometre-expert.html",  note:"Un officier public de la propriété foncière" },
    { nom:"Moyens techniques",   url:"moyens-techniques.html",note:"Station totale, GNSS, scanner 3D" },
    { nom:"Archives",            url:"archives.html",         note:"Un fonds depuis 1922" },
    { nom:"Recrutement",         url:"recrutement.html" }
  ]},

  { nom:"Foncier", sous:[
    { nom:"Bornage et délimitation",  url:"bornage.html",     note:"Limites, bornes, murs mitoyens" },
    { nom:"Document d'arpentage",     url:"dmpc.html",        note:"DMPC, modification du parcellaire cadastral" },
    { nom:"Servitudes",               url:"servitudes.html",  note:"Passage, vue, écoulement" },
    { nom:"Division de propriété",    url:"division.html",    note:"Détacher un lot" },
    { nom:"Copropriété",              url:"copropriete.html", note:"EDD, tantièmes, loi Carrez" },
    { nom:"Division en volumes",      url:"eddv.html",        note:"Ensembles immobiliers complexes" }
  ]},

  { nom:"Géomatique", sous:[
    { nom:"Topographie et nivellement",     url:"topographie.html",  note:"Levés, corps de rue, altimétrie" },
    // Fusionnée dans topographie.html le 23/08/2026 (corps-de-rue.html redirige) :
    // { nom:"Relevé de corps de rue",      url:"corps-de-rue.html", note:"Voirie, mobilier, réseaux" },
    { nom:"Implantation",                   url:"implantation.html", note:"Bâtiments, ouvrages, fondations" },
    { nom:"Relevé d'architecture",         url:"releves.html",      note:"Plans d'intérieurs, coupes, façades" },
    { nom:"Cubatures et terrassements",     url:"cubatures.html",    note:"MNT, profils, volumes" },
    { nom:"Auscultation d'ouvrages",        url:"auscultation.html", note:"Surveillance et déformations" }
  ]},

  { nom:"Urbanisme", sous:[
    { nom:"Division en vue de construire", url:"division-construire.html", note:"Déclaration préalable" },
    { nom:"Permis d'aménager",             url:"permis-amenager.html",     note:"Plan de composition, règlement, profils" },
    { nom:"Autorisations et certificats d'urbanisme", url:"autorisations-urbanisme.html",
      note:"Certificat d'urbanisme, déclaration préalable, permis" }
  ]},

  /* Devis et Contact ne sont plus des onglets : ils sont réunis dans le bouton
     « Devis et contact » à droite de l'entête (voir CONTACT ci-dessous). */
];

/* Bouton d'action à droite de l'entête — remplace l'ancien bouton e-mail. */
var CONTACT = { libelle:"Devis et contact", url:"devis.html" };

/* ---------------------------------------------------------------------
   VIGNETTES — le fil horizontal en haut des pages intérieures.
   type : "photo" (remplit la case) | "plan" (vu en entier, fond blanc)
   Pour en ajouter une : copier une ligne. Pour en retirer : la supprimer.
   --------------------------------------------------------------------- */

var VIGNETTES = [
  { nom:"Bornage",      url:"bornage.html",      img:"images/borne-pied-limite-propriete-bornage-abello.jpg" },
  { nom:"Division",     url:"division.html",     img:"images/division-propriete-geometre-abello.jpg" },
  { nom:"Topographie",  url:"topographie.html",  img:"images/plan-topographique-echelle-1-500-abello.jpg" },
  { nom:"Implantation", url:"implantation.html", img:"images/piquet-et-clou-geometre-abello.jpg" },
  { nom:"Bâtiments",    url:"releves.html",      img:"images/releve-interieur-station-totale-abello.jpg" },
  { nom:"Cubatures",    url:"cubatures.html",    img:"images/modele-numerique-terrain-calcul-cubature-abello.jpg" },
  { nom:"Moyens",       url:"moyens-techniques.html", img:"images/scanner-3d-faro-focus-cabinet-abello.jpg" },
  { nom:"Archives",     url:"archives.html",     img:"images/plan-division-archives-1976-abello.jpg" },
  { nom:"Activités",    url:"activites.html",    img:"images/plan-chemin-des-tranchees-vignette-activites-abello.jpg", type:"plan" }
];

/* =====================================================================
   À partir d'ici, c'est la mécanique. Rien à modifier au quotidien.
   ===================================================================== */

(function () {
  var ici = (location.pathname.split('/').pop() || 'index.html');

  function esc(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function actuel(u){ return u === ici; }

  /* ---------- MENU ---------- */
  function htmlMenu() {
    var h = '<button class="bouton-menu" type="button" aria-expanded="false" aria-controls="nav-principal"><span></span> Menu</button>';
    h += '<nav class="principal" id="nav-principal" aria-label="Navigation principale"><ul>';
    MENU.forEach(function (e) {
      if (!e.sous) {
        h += '<li><a href="' + esc(e.url) + '"' + (actuel(e.url) ? ' aria-current="page"' : '') + '>' + esc(e.nom) + '</a></li>';
        return;
      }
      var dedans = e.sous.some(function (s) { return actuel(s.url); });
      h += '<li><button type="button" aria-expanded="false"' + (dedans ? ' class="branche-active"' : '') + '>' + esc(e.nom) + '<i class="chevron"></i></button><ul class="sous-menu">';
      e.sous.forEach(function (s) {
        h += '<li><a href="' + esc(s.url) + '"' + (actuel(s.url) ? ' aria-current="page"' : '') + '>' + esc(s.nom) +
             (s.note ? '<small>' + esc(s.note) + '</small>' : '') + '</a></li>';
      });
      h += '</ul></li>';
    });
    h += '</ul><a class="email-btn mobile-email" href="' + esc(CONTACT.url) + '">' + esc(CONTACT.libelle) + '</a></nav>';
    return h;
  }

  function htmlEntete() {
    return '<div class="grille">' +
      '<a class="logo-bloc" href="index.html"><img src="' + CABINET.logo + '" alt="Cabinet ABELLO — logo boussole">' +
      '<span><span class="nom">Cabinet ABELLO</span><br><span class="sous">' + CABINET.qualite + '</span></span></a>' +
      htmlMenu() +
      '<div class="entete-droite"><a class="email-btn" href="' + esc(CONTACT.url) + '">' + esc(CONTACT.libelle) + '</a></div>' +
      '</div>' +
      '<p class="tel-bandeau">MANTES-LA-JOLIE : <a href="tel:' + CABINET.mantes.telLien + '">' + CABINET.mantes.tel + '</a>' +
      ' &nbsp;·&nbsp; LIMAY : <a href="tel:' + CABINET.limay.telLien + '">' + CABINET.limay.tel + '</a>' +
      ' &nbsp;·&nbsp; <a href="mailto:' + CABINET.email + '">' + CABINET.email + '</a></p>';
  }

  function htmlFil() {
    var h = '<ul>';
    VIGNETTES.forEach(function (v) {
      h += '<li' + (v.type === 'plan' ? ' class="plan"' : '') + '><a href="' + esc(v.url) + '"' + (actuel(v.url) ? ' aria-current="page"' : '') + '>' +
           '<span class="photo" style="background-image:url(\'' + v.img + '\')"></span>' +
           '<span class="nom">' + esc(v.nom) + '</span></a></li>';
    });
    return h + '</ul>';
  }

  /* Icônes des réseaux sociaux (SVG en ligne, couleur héritée du pied de page). */
  var ICONES = {
    linkedin : '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="6" y="10" width="2.6" height="8" fill="currentColor"/><circle cx="7.3" cy="6.9" r="1.5" fill="currentColor"/><path d="M11 10h2.5v1.2c.5-.8 1.5-1.4 2.8-1.4 2.3 0 3.2 1.4 3.2 3.7V18h-2.6v-4.1c0-1.2-.4-1.9-1.4-1.9-1.1 0-1.9.8-1.9 2.1V18H11z" fill="currentColor"/></svg>',
    facebook : '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M13.2 19.5v-6h2l.3-2.4h-2.3V9.6c0-.7.2-1.2 1.2-1.2h1.2V6.3c-.2 0-1-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.7H8.7v2.4h2v6z" fill="currentColor"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" rx="5.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/></svg>'
  };

  function htmlReseaux() {
    var r = CABINET.reseaux || [];
    if (!r.length) return '';
    var h = '<p class="pied-reseaux" style="margin:1.2rem 0 0;display:inline-flex;gap:1.1rem;align-items:center;flex-wrap:wrap">' +
            '<span style="font-size:.8rem;opacity:.85">Suivez le cabinet :</span>';
    r.forEach(function (x) {
      h += '<a href="' + esc(x.url) + '" target="_blank" rel="noopener" aria-label="' + esc(x.nom) + '" title="' + esc(x.nom) + '"' +
           ' style="display:inline-flex;align-items:center;line-height:0">' + (ICONES[x.icone] || esc(x.nom)) + '</a>';
    });
    return h + '</p>';
  }

  function htmlPied() {
    var c = CABINET;
    return '<div>' +
      '<img class="pied-logo" src="' + c.logoOge + '" alt="Géomètre-Expert — Conseiller, Valoriser, Garantir">' +
      '<p><strong>' + c.nom + '</strong> — ' + c.qualite + ' / ' + c.forme + ' / n° SIRET : ' + c.siret + ' / ' + c.rcs + '</p>' +
      '<p>ABELLO Olivier, Géomètre-Expert, ' + c.oge + ' / Bureau principal : ' + c.mantes.adresse + ' — ' + c.mantes.tel +
      ' / Bureau secondaire : ' + c.limay.adresse + ' — ' + c.limay.tel + '</p>' +
      '<p><a href="mailto:' + c.email + '">' + c.email + '</a></p>' +
      htmlReseaux() +
      '<p class="pied-liens"><a href="mentions-legales.html">Mentions légales</a>' +
      '<a href="confidentialite.html">Politique de confidentialité</a><a href="index.html">Accueil</a></p>' +
      '</div>';
  }

  /* ---------- injection ---------- */
  function remplir(sel, html) { var n = document.querySelector(sel); if (n) n.innerHTML = html; }

  function poser() {
    var zone = document.querySelector('.zone-menu');
    if (zone) { zone.innerHTML = htmlMenu(); }      // page qui garde son entête propre (accueil)
    else { remplir('header.entete', htmlEntete()); } // pages intérieures : entête complète
    remplir('.fil', htmlFil());
    remplir('footer.pied', htmlPied());
    brancher();
  }

  /* ---------- comportement du menu ---------- */
  function brancher() {
    var nav = document.getElementById('nav-principal');
    if (!nav) return;
    var bouton = document.querySelector('.bouton-menu');
    var grand = window.matchMedia('(min-width:861px)');

    function fermerTout() {
      nav.querySelectorAll('li.ouvert').forEach(function (o) {
        o.classList.remove('ouvert'); o.querySelector('button').setAttribute('aria-expanded', 'false');
      });
    }

    bouton.addEventListener('click', function (e) {
      e.stopPropagation();
      var o = nav.classList.toggle('ouvert');
      bouton.setAttribute('aria-expanded', o ? 'true' : 'false');
    });

    nav.querySelectorAll('li > button').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var li = b.parentNode, etait = li.classList.contains('ouvert');
        fermerTout();
        if (!etait) { li.classList.add('ouvert'); b.setAttribute('aria-expanded', 'true'); }
      });
      var li = b.parentNode;
      li.addEventListener('mouseenter', function () { if (grand.matches) { li.classList.add('ouvert'); b.setAttribute('aria-expanded', 'true'); } });
      li.addEventListener('mouseleave', function () { if (grand.matches) { li.classList.remove('ouvert'); b.setAttribute('aria-expanded', 'false'); } });
    });

    document.addEventListener('click', fermerTout);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { fermerTout(); nav.classList.remove('ouvert'); bouton.setAttribute('aria-expanded', 'false'); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', poser);
  else poser();
})();
