# Créer un composant dans le style KBR-UI

À utiliser quand le catalogue ne couvre pas le besoin. Le but : un composant qu'on
croirait sorti de la bibliothèque — même surface, même grammaire de mouvement.

## Contrat technique

```js
// my-component.js — un seul fichier, zéro dépendance
class MyComponent extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = `<style>/* styles encapsulés */</style><div>…</div>`;
    // listeners, état interne…
  }
  disconnectedCallback() { /* cleanup timers/listeners */ }
}
customElements.define("my-component", MyComponent);
```

- **Custom element + Shadow DOM** — styles encapsulés, aucune fuite CSS.
- **Nom du tag en kebab-case** (`<mon-composant>`), fichier `mon-composant.js`.
- **Zéro dépendance** : pas de framework, pas de fetch, tout inline (SVG inclus).
- **Paramètres par attributs HTML** : `this.getAttribute("label")` avec valeurs par
  défaut. Attributs typiques : `label`, `appearance`, `accent`, durées en secondes.
- **Événements** : émettre des `CustomEvent` (`this.dispatchEvent(new CustomEvent("change", { detail: …, bubbles: true, composed: true }))`) pour que l'hôte puisse réagir.

## Palette KBR-UI

```
surface   #FFFFFF   fond carte / page claire
fill      #EFEEE9   surfaces secondaires (keys, pills)
fillHover #E8E6E0
ink       #1A1915   texte principal / bouton primaire
ink2      #8D8A81   texte secondaire
focus     #3355FF   accent / anneau focus
success   #1FB257   états de succès
danger    #E5484D   destruction / erreur
radius    pilules arrondies ou ~50% selon le composant
```

Mode sombre : supporter `appearance="dark"` (ou `auto` = `prefers-color-scheme`) avec
fond `#1A1915`, encre `#FFFFFF`/`#B0ADA4`.

## Grammaire de mouvement

- **Seul ce qui change bouge** : dans un changement d'état textuel, seules les lettres
  ou chiffres modifiés roulent (flip/roll vertical), pas tout le libellé.
- **Interactions tactiles** : `pointerdown`/`up`/`cancel` plutôt que `click` — press,
  hold-to-confirm (remplissage qui inverse le texte à son passage, relâchement →
  retour élastique).
- **Physique ressort** : `cubic-bezier` dynamiques ou `transition` avec overshoot léger;
  transitions 150–400 ms, jamais de mouvement gratuit.
- **États racontés** : `Save → Saving → Saved`, compteurs qui roulent, icônes qui
  swappent — l'animation raconte ce qui se passe.
- **`prefers-reduced-motion`** : désactiver les animations non essentielles.

## Accessibilité et état

- Élément interactif = `role` + `tabindex` si non-natif, `aria-label`, état
  `aria-pressed`/`aria-expanded` quand pertinent, navigation clavier complète.
- Contraste ≥ 4.5:1 sur les textes.

## Checklist avant de livrer

1. Le tag fonctionne avec juste `<script src>` + `<mon-composant>` — aucune config.
2. Par défauts corrects : rendu identique au style du catalogue sans attributs.
3. `appearance="dark"` fonctionne.
4. `prefers-reduced-motion` respecté.
5. Aucune fuite CSS ni variable globale polluée.
