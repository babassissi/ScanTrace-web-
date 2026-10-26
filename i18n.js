/* ScanTrace — traduction anglaise de la page d'accueil.
 *
 * La page est écrite en français. Si le navigateur du visiteur n'est pas en
 * français (ou s'il a choisi « EN » dans le menu), on remplace chaque texte par
 * sa traduction ci-dessous et on affiche les captures de l'app en anglais.
 * Les clés sont les textes français, espaces regroupés.
 */
(function () {
  'use strict';

  const EN = {
    // Navigation
    'Comment ça marche': 'How it works',
    'Fonctionnalités': 'Features',
    'Avis': 'Reviews',
    'Rejoindre la bêta': 'Join the beta',
    'ScanTrace, accueil': 'ScanTrace, home',
    'Navigation principale': 'Main navigation',

    // Hero
    'BÊTA OUVERTE': 'OPEN BETA',
    'App Android · gratuite': 'Android app · free',
    "ScanTrace te dit en quelques secondes si une photo, une vidéo, un texte ou un post a été fabriqué par une intelligence artificielle. Plusieurs agents IA l'examinent et comparent leurs avis : tu obtiens un verdict clair.":
      'ScanTrace tells you in seconds whether a photo, a video, a text or a post was made by artificial intelligence. Several AI agents examine it and compare their findings, so you get a clear verdict.',
    'Voir comment ça marche': 'See how it works',
    "Un ami t'invite :": 'A friend invited you:',
    '+5 crédits': '+5 credits',
    'pour vous deux avec le code': 'for both of you with the code',
    '50 crédits offerts / mois': '50 free credits / month',
    'Contenus jamais conservés': 'Content never stored',
    '7 langues': '7 languages',
    'Probablement généré par IA': 'Likely AI-generated',
    'Confiance élevée': 'High confidence',
    'Plusieurs agents IA': 'Several AI agents',
    'comparent leurs analyses': 'compare their analyses',

    // Bandeau
    'Photos': 'Photos', 'Vidéos': 'Videos', 'Textes': 'Texts',
    'Contenus analysables : photos, vidéos, textes, PDF et Word, posts Instagram, Facebook, X, TikTok, YouTube et Threads':
      'Supported content: photos, videos, texts, PDF and Word, posts from Instagram, Facebook, X, TikTok, YouTube and Threads',

    // Comment ça marche
    'Trois gestes. Un verdict.': 'Three taps. One verdict.',
    "Pas de réglages, pas de jargon. Tu montres le contenu, ScanTrace s'occupe du reste.": 'No settings, no jargon. Show it the content, ScanTrace does the rest.',
    'Montre-lui le contenu.': 'Show it the content.',
    "Prends une photo, choisis une image ou une vidéo dans ta galerie, colle un texte ou le lien d'un post. Tu peux aussi partager directement depuis Instagram, X ou Facebook vers ScanTrace.":
      'Take a photo, pick an image or a video from your gallery, paste a text or a link to a post. You can also share straight from Instagram, X or Facebook to ScanTrace.',
    'Caméra': 'Camera', 'Galerie': 'Gallery', 'Texte': 'Text', 'Lien de post': 'Post link',
    'Les agents IA enquêtent.': 'The AI agents investigate.',
    "Plusieurs agents IA spécialisés examinent le contenu en même temps, chacun à sa façon, puis comparent leurs conclusions. Le plus souvent, c'est réglé en quelques secondes.":
      'Several specialised AI agents examine the content at the same time, each in its own way, then compare their conclusions. Most of the time, it takes just a few seconds.',
    'Analyse croisée': 'Cross-checked', 'Quelques secondes': 'A few seconds',
    'Un verdict clair, à partager.': 'A clear verdict, ready to share.',
    'IA, authentique ou incertain : le résultat tient en une ligne. Tu peux voir le détail agent par agent, et partager une carte de résultat pour prévenir tes proches.':
      'AI, authentic or uncertain: the result fits in one line. You can see each agent’s findings and share a result card to warn your friends and family.',
    'Détail par agent': 'Per-agent detail', 'Carte à partager': 'Shareable card',
    "Écran d'accueil de ScanTrace : Caméra et Galerie": 'ScanTrace home screen: Camera and Gallery',
    'Analyse en cours : la photo se décompose en particules': 'Analysis in progress: the photo breaks into particles',
    'Verdict sur une photo de plat : probablement généré par IA, confiance élevée': 'Verdict on a food photo: likely AI-generated, high confidence',

    // Verdicts
    'Le résultat': 'The result',
    'Trois verdicts. Zéro jargon.': 'Three verdicts. Zero jargon.',
    "Quand les agents ne sont pas d'accord, ScanTrace te le dit franchement plutôt que d'affirmer n'importe quoi.": 'When the agents disagree, ScanTrace tells you so honestly instead of guessing.',
    'Fabriqué par une IA': 'Made by AI',
    "Les agents repèrent les traces typiques d'une création artificielle.": 'The agents spot the typical traces of an artificial creation.',
    'Authentique': 'Authentic',
    "Ça a l'air vrai": 'Looks real',
    "Rien n'indique une IA : le contenu a l'air d'être vrai.": 'Nothing points to AI: the content looks genuine.',
    'Incertain': 'Uncertain',
    'Les avis divergent': 'Mixed signals',
    'Les signaux sont partagés. Prudence avant de le partager.': 'The signals are split. Think twice before sharing it.',
    'Anneau rouge : probablement généré par IA': 'Red ring: likely AI-generated',
    'Anneau vert : probablement authentique': 'Green ring: likely authentic',
    'Anneau orange : incertain': 'Orange ring: uncertain',

    // Fonctionnalités
    "Pensée pour ton fil d'actu.": 'Built for your feed.',
    'Partage direct depuis tes applis': 'Share straight from your apps',
    "Tu tombes sur une image douteuse ? Appuie sur « Partager », choisis ScanTrace, et l'analyse démarre. Sans quitter ce que tu faisais.":
      'Come across a suspicious image? Tap “Share”, pick ScanTrace, and the analysis starts. Without leaving what you were doing.',
    "Partager l'image": 'Share image',
    'Depuis Instagram': 'From Instagram',
    'Post complet': 'Full post',
    "Colle le lien d'un post : le texte et le visuel sont évalués séparément.": 'Paste a link to a post: the text and the visual are checked separately.',
    'Plusieurs images sont extraites de la vidéo et analysées une à une, pour un verdict plus fiable.': 'Several frames are extracted from the video and analysed one by one, for a more reliable verdict.',
    'Textes & fichiers': 'Texts & files',
    'Un message, un article, un devoir : colle le texte ou importe un PDF, un Word, un ODT, un RTF ou un TXT.': 'A message, an article, an essay: paste the text or import a PDF, Word, ODT, RTF or TXT file.',
    'Dans ta langue': 'In your language',
    "L'app parle sept langues.": 'The app speaks seven languages.',
    'Tes contenus restent les tiens': 'Your content stays yours',
    "Les photos, vidéos et textes envoyés pour analyse ne sont jamais conservés : ils sont effacés dès que le résultat t'est renvoyé.":
      'The photos, videos and texts you send for analysis are never stored: they are deleted as soon as you get your result.',
    'Confidentialité': 'Privacy',

    // Rejoindre
    'Bêta Android': 'Android beta',
    'Rejoins la bêta en 3 étapes.': 'Join the beta in 3 steps.',
    "Pendant la bêta, Google Play réserve ScanTrace aux membres du groupe de testeurs. Ça prend deux minutes, et c'est gratuit.":
      'During the beta, Google Play only offers ScanTrace to members of the tester group. It takes two minutes, and it’s free.',
    'Téléphone Android avec Google Play': 'Android phone with Google Play',
    'Utilise le même compte Google aux 3 étapes': 'Use the same Google account for all 3 steps',
    "L'app peut mettre quelques minutes à apparaître sur le Play Store après l'étape 2": 'The app may take a few minutes to show up on the Play Store after step 2',
    'Rejoins le groupe des testeurs': 'Join the tester group',
    'Ouvre le groupe Google puis appuie sur « Rejoindre le groupe ».': 'Open the Google group, then tap “Join group”.',
    'Ouvrir le groupe': 'Open the group',
    'Active le test': 'Turn on testing',
    "Sur la page Google Play qui s'ouvre, appuie sur « Devenir testeur ».": 'On the Google Play page that opens, tap “Become a tester”.',
    'Devenir testeur': 'Become a tester',
    'Installe ScanTrace': 'Install ScanTrace',
    "Télécharge l'app depuis le Play Store, comme n'importe quelle autre.": 'Download the app from the Play Store, like any other app.',
    'Disponible sur': 'Get it on',
    'Entre le code de ton ami': 'Enter your friend’s code',
    "Dans l'app, connecte-toi, puis ouvre Réglages > « Tu as un code d'ami ? ». Vous gagnez chacun 5 crédits.": 'In the app, sign in, then open Settings > “Have a friend’s code?”. You each get 5 credits.',
    'Copier le code': 'Copy code',
    'Tu es sur iPhone ?': 'On an iPhone?',
    "ScanTrace n'existe pas encore sur iOS. Laisse ton e-mail : on te prévient s'il arrive sur iPhone. Rien d'autre, promis.":
      'ScanTrace isn’t on iOS yet. Leave your email and we’ll let you know if it comes to iPhone. Nothing else, promise.',
    'Ton adresse e-mail': 'Your email address',
    'ton@email.fr': 'you@email.com',
    'Me prévenir': 'Notify me',
    "Tu connais quelqu'un que ça intéresserait ?": 'Know someone who’d be interested?',
    'Envoie-lui cette page : plus on est de testeurs, plus ScanTrace devient précis.': 'Send them this page: the more testers, the more accurate ScanTrace gets.',
    'Partager la page': 'Share this page',

    // Avis
    'Avis des testeurs': 'Tester reviews',
    "Ce qu'en pensent les testeurs.": 'What testers think.',
    "Tu as essayé ScanTrace ? Ton avis aide à l'améliorer avant la sortie.": 'Tried ScanTrace? Your feedback helps improve it before launch.',
    'Note moyenne': 'Average rating',
    'Chargement des avis…': 'Loading reviews…',
    'Donner mon avis': 'Write a review',
    "Voir plus d'avis": 'Show more reviews',
    'Donne ton avis': 'Leave a review',
    'Ton prénom': 'Your first name',
    'Ta note': 'Your rating',
    'Ton avis': 'Your review',
    'Camille': 'Alex',
    "Ce que tu as aimé, ce qui t'a manqué…": 'What you liked, what was missing…',
    'Ton prénom, ta note et ton avis seront visibles publiquement sur cette page.': 'Your first name, rating and review will be shown publicly on this page.',
    'Publier mon avis': 'Post my review',

    // Pied de page
    "L'app Android qui te dit si c'est vrai, ou si c'est de l'IA.": 'The Android app that tells you if it’s real, or if it’s AI.',
    'Liens légaux': 'Legal links',
    'Mentions légales': 'Legal notice (FR)',
    "Conditions d'utilisation": 'Terms of use (FR)',
    'Supprimer mon compte': 'Delete my account (FR)',
    "© 2026 ScanTrace · Photo d'exemple générée par IA :": '© 2026 ScanTrace · AI-generated sample photo:',
    '· Les logos appartiennent à leurs détenteurs': '· Logos belong to their respective owners',
    'Contact :': 'Contact:',

    // Messages affichés par le script
    "C'est vrai, ou c'est de l'IA ? Rejoins la bêta de ScanTrace :": 'Real, or made by AI? Join the ScanTrace beta:',
    'Lien copié, tu peux le coller où tu veux': 'Link copied, paste it anywhere',
    'Copie ce lien :': 'Copy this link:',
    "Pas encore d'avis. Sois le premier ou la première à donner le tien !": 'No reviews yet. Be the first to leave one!',
    'Aucun avis pour le moment': 'No reviews yet',
    'Avis momentanément indisponibles': 'Reviews temporarily unavailable',
    'Bêta-testeur': 'Beta tester',
    'Décevant': 'Disappointing', 'Moyen': 'Average', 'Correct': 'Okay', 'Bien': 'Good', 'Excellent': 'Excellent',
    'Indique ton prénom.': 'Please enter your first name.',
    'Écris quelques mots sur ton expérience.': 'Write a few words about your experience.',
    "L'envoi est momentanément indisponible. Réessaie plus tard.": 'Sending is temporarily unavailable. Please try again later.',
    'Tu as déjà donné ton avis depuis cet appareil. Merci !': 'You’ve already left a review from this device. Thank you!',
    'Merci, ton avis est publié.': 'Thanks, your review is live.',
    'Envoi…': 'Sending…',
    "Ton avis n'a pas pu être envoyé. Vérifie ta connexion et réessaie.": 'Your review couldn’t be sent. Check your connection and try again.',
    'Cette adresse e-mail ne semble pas valide.': 'This email address doesn’t look valid.',
    "L'inscription est momentanément indisponible. Réessaie plus tard.": 'Sign-up is temporarily unavailable. Please try again later.',
    "C'est noté. On t'écrira seulement si ScanTrace arrive sur iPhone.": 'Got it. We’ll only email you if ScanTrace comes to iPhone.',
    'Tu es déjà sur la liste, merci !': 'You’re already on the list, thank you!',
    "L'inscription n'a pas pu être envoyée. Vérifie ta connexion et réessaie.": 'Your sign-up couldn’t be sent. Check your connection and try again.',
    'Code copié :': 'Code copied:',
    'Copie ce code :': 'Copy this code:',
  };

  const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
  function detecter() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'fr' || q === 'en') return q;
    try { const s = localStorage.getItem('st_lang'); if (s === 'fr' || s === 'en') return s; } catch (e) {}
    const prefs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'fr'];
    return /^fr\b/i.test(prefs[0] || 'fr') ? 'fr' : 'en';
  }
  const LANG = detecter();
  window.LANG = LANG;
  /** Traduit un texte du script (ou le renvoie tel quel en français). */
  window.T = (fr) => (LANG === 'en' && EN[norm(fr)]) || fr;

  function traduirePage() {
    document.documentElement.lang = 'en';
    document.title = 'ScanTrace — Real, or made by AI?';
    const md = document.querySelector('meta[name="description"]');
    if (md) md.content = 'ScanTrace is an Android app that tells you in seconds whether a photo, a video, a text or a post was made by AI. Free beta, join in 3 steps.';

    // Titre principal : phrase différente en anglais (celle de l'app)
    const h1 = document.querySelector('.hero h1.kin');
    if (h1) {
      h1.setAttribute('aria-label', 'Real, or made by AI?');
      h1.innerHTML = '<span aria-hidden="true"><span class="w" style="--i:0">Real,</span> <span class="w" style="--i:1">or</span> <span class="w" style="--i:2">made</span> <span class="w" style="--i:3">by</span> <span class="w" style="--i:4"><span class="hl">AI</span>?</span></span>';
    }

    // Tous les textes de la page
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest('script,style,svg,.hero h1')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const k = norm(n.nodeValue);
      if (!k || !(k in EN)) continue;
      const avant = n.nodeValue.match(/^\s*/)[0], apres = n.nodeValue.match(/\s*$/)[0];
      n.nodeValue = avant + EN[k] + apres;
    }
    // Attributs (textes alternatifs, libellés, champs)
    for (const attr of ['placeholder', 'aria-label', 'alt', 'title']) {
      document.querySelectorAll(`[${attr}]`).forEach((el) => {
        if (el.closest('.hero h1')) return;
        const k = norm(el.getAttribute(attr));
        if (k in EN) el.setAttribute(attr, EN[k]);
      });
    }
    // Captures de l'app en anglais
    document.querySelectorAll('img[src^="img/ecran-"], img[src^="img/anneau-"]').forEach((img) => {
      img.setAttribute('src', img.getAttribute('src').replace('img/', 'img/en/'));
    });
  }

  if (LANG === 'en') traduirePage();
  document.documentElement.classList.remove('i18n-attente');

  // Bouton FR / EN du menu
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.querySelectorAll('[data-l]').forEach((s) => s.classList.toggle('on', s.dataset.l === LANG));
    btn.setAttribute('aria-label', LANG === 'en' ? 'Passer en français' : 'Switch to English');
    btn.addEventListener('click', () => {
      const autre = LANG === 'en' ? 'fr' : 'en';
      try { localStorage.setItem('st_lang', autre); } catch (e) {}
      const u = new URL(location.href); u.searchParams.set('lang', autre); u.hash = '';
      location.href = u.toString();
    });
  }
})();
