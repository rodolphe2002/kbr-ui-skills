# Catalogue KBR-UI — 40 composants

Base URL : https://ui.rodolphekouadio.com

Chaque composant est un **web component autonome** (zéro dépendance) :

- Source JS : `https://ui.rodolphekouadio.com/bluma/<id>.js` — définit le custom element
- Démo HTML : `https://ui.rodolphekouadio.com/bluma/<id>.html` — page d'exemple complète

| Composant (FR / EN) | Tag | Famille | Ce qu'il fait |
|---|---|---|---|
| Bouton d'action / Action Button | `<action-button>` | Actions | Enregistrer → Enregistrement → Enregistré : seules les lettres qui changent bougent. En cas d'échec, il propose Réessayer. |
| Bouton à charge / Charge Button | `<charge-button>` | Actions | Maintenez pour le charger : le bouton se remplit, puis se déclenche. |
| Bouton copier / Copy Button | `<copy-button>` | Actions | Copier devient Copié, l'icône change et le texte copié brille une fois. |
| Doki Like / Doki Like | `<doki-like>` | Actions | Un bouton j'aime dont le cœur s'emballe quand on le touche. |
| Maintenir pour confirmer / Hold to Confirm | `<hold-to-confirm>` | Actions | Le remplissage inverse le libellé à son passage ; relâchez trop tôt et il revient ; à la fin, Annuler avec compte à rebours. |
| Maintenir pour quitter / Hold to Leave | `<hold-to-leave>` | Actions | Un bouton ouvre une feuille ; maintenez, un rouge vivant envahit la touche jusqu'à Terminé. Relâchez et il se vide. |
| Bouton scindé / Split Button | `<split-button>` | Actions | Un bouton en deux moitiés : l'action et son menu. |
| Action bascule / Toggle Action | `<toggle-action>` | Actions | J'aime, Enregistrer ou Suivre : l'icône se remplit d'un pop, le compteur roule, Suivre devient Abonné. |
| Secret révélé / Secret Reveal | `<secret-reveal>` | Data | Une valeur cachée qui se dévoile tant que vous maintenez. |
| Accordéon / Accordion | `<accordion-list>` | Disclosure | Une question s'ouvre sur sa réponse, les suivantes font de la place ; la réponse arrive une fois la carte ouverte. |
| Accordéon Afterglow / Afterglow Accordion | `<afterglow-accordion>` | Disclosure | Un accordéon qui laisse une lueur chaude là où il s'ouvre. |
| Menu pilule morphing / Pill Morph Menu | `<pill-morph-menu>` | Disclosure | Une rangée de capsules ; touchez-en une et elle devient une carte de choix, puis se replie à sa place. |
| Menu contextuel / Popover Menu | `<popover-menu>` | Disclosure | La touche ••• grandit en menu, les items montent ; Supprimer redemande avant de partir. |
| Bouton de progression / Progress Button | `<progress-button>` | Feedback | Télécharger devient une capsule de progression, puis une coche, puis Ouvrir ; × l'arrête en route. |
| Liste squelette / Skeleton List | `<skeleton-list>` | Feedback | Un squelette de liste avec un léger reflet pendant le chargement. |
| Pilule de statut / Status Pill | `<status-pill>` | Feedback | À jour → Synchronisation de 4 fichiers, le compteur descend pendant que l'anneau se remplit → Synchronisé. |
| Loader réflexion / Thinking Loader | `<thinking-loader>` | Feedback | Un loader qui réfléchit à voix haute, un point rebondissant à la fois. |
| Toast / Toast | `<toast-message>` | Feedback | Un point qui s'ouvre sur le message ; un second fait rouler le compteur ; Annuler se transforme sur place. |
| Saisie de code / Code Input | `<code-input>` | Inputs | Une touche se divise en cases, les chiffres roulent ; un mauvais code tremble, un bon devient vert. |
| Recherche extensible / Expanding Search | `<expanding-search>` | Inputs | Un cercle qui s'ouvre en champ ; les résultats montent dessous, les flèches déplacent la sélection. |
| Tableau inline / Inline Table | `<inline-table>` | Inputs | Un mini tableur dont on édite les cellules sur place. |
| Champ d'invitation / Invite Field | `<invite-field>` | Inputs | Une pile d'avatars et une touche Inviter ; l'email saisi devient une personne qui saute dans la pile. |
| Pile d'invitations / Invite Stack | `<invite-stack>` | Inputs | Un composeur d'invitations dont les invités s'empilent au fil des ajouts. |
| Mot de passe / Password Field | `<password-field>` | Inputs | Une touche qui s'ouvre en champ ; les points se changent en lettres et la jauge passe de Faible à Fort. |
| Enregistreur vocal / Voice Recorder | `<voice-recorder>` | Inputs | Un enregistreur qui dessine une onde en direct pendant que vous parlez. |
| Dash Tabs / Dash Tabs | `<dash-tabs>` | Navigation | Une barre d'onglets dont l'indicateur file vers l'onglet choisi. |
| Barre d'onglets / Tab Bar | `<tab-bar>` | Navigation | L'onglet choisi grandit pour afficher son nom ; la pilule s'étire vers lui, puis le rattrape. |
| Select / Select | `<select-menu>` | Pickers | La pilule s'ouvre autour de sa valeur en liste ; le choix retourne dans la pilule. |
| Sélecteur de quantité / Quantity Stepper | `<quantity-stepper>` | Selection | Ajouter au panier se divise en − n +, les prix roulent, une corbeille à un, et le paiement devient un succès. |
| Contrôle segmenté / Segmented Control | `<segmented-control>` | Selection | La sélection s'étire vers la nouvelle option, puis son autre bord la rattrape. |
| Interrupteur + volet / Switch + Disclosure | `<switch-row>` | Selection | Activer fait grandir la ligne en carte d'options ; le compteur roule quand vous cochez. |
| Paiement / Checkout | `<pay-button>` | Signature | Choisissez une carte ou ajoutez-en une ; Payer devient Paiement en cours, puis Payé avec reçu. |
| Créer un groupe / Create Group | `<group-create>` | Signature | Choisissez des personnes (chaque visage s'envole dans l'en-tête), nommez le groupe, donnez-lui une couleur. |
| Chambre noire / Darkroom | `<darkroom-card>` | Signature | Une carte photo qui se révèle sous vos yeux, comme en chambre noire. |
| Minuteur focus / Focus Timer | `<focus-timer>` | Signature | Un compte à rebours qui ne fait rouler que le chiffre qui change ; pause se divise en Reprendre et Terminer. |
| Sondage / Poll | `<poll-vote>` | Signature | Votez et chaque option devient son résultat : barres, chiffres qui roulent, votants qui apparaissent. |
| Planifier une réunion / Schedule Meeting | `<meeting-scheduler>` | Signature | Un jour, une heure, puis qui vient et pour combien de temps ; tout se replie en réservation. |
| Partager & inviter / Share & Invite | `<share-invite>` | Signature | Les emails deviennent des puces avec un rôle ; Envoyer les range dans la liste ; Copier le lien copie. |
| Ticket détachable / Tear-off Ticket | `<tear-ticket>` | Signature | Un ticket qui se détache le long des pointillés quand vous tirez. |
| Ticket détachable, horizontal / Tear-off Ticket, horizontal | `<tear-ticket-horizontal>` | Signature | Le ticket détachable, à l'horizontale. |
