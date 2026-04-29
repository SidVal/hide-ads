# Idea

- [Issue padre](https://github.com/SidVal/SidV/issues/28)

## Desarrollo

Ideas relacionadas:

- https://github.com/SidVal/SidV/issues/22
- https://github.com/SidVal/SidV/issues/33
- https://github.com/SidVal/SidV/issues/32
- https://github.com/SidVal/SidV/issues/28
- https://github.com/SidVal/SidV/issues/53 <-- I&D

## Botón Fav en Chrome

- https://caiorss.github.io/bookmarklet-maker/
- https://mrcoles.com/bookmarklet/

### Calls

#### Botón Normal

```JS
javascript:(function(){
    // CSS
    const css = document.createElement('link');
    css.href = 'https://sidval.github.io/hide-ads/assets/style.css';
    css.rel = 'stylesheet';
    document.head.appendChild(css);

    // JS
    const script = document.createElement('script');
    script.src = 'https://sidval.github.io/hide-ads/assets/js.js';
    script.async = true;
    document.head.appendChild(script);
})();
```

#### Boton Agressive Mode

```JS
(function () {
  const script = document.createElement('script');
  script.src = 'https://sidval.github.io/hide-ads/assets/js.js';
  script.async = false;
  document.head.appendChild(script);

  const aggressiveSelectors = [
    'iframe',
    'picture',
    'source',
    'amp-ad',
    'amp-embed',
    'amp-iframe',
    'amp-sticky-ad',
    'amp-fx-flying-carpet',
    '[class*="taboola"]',
    '[id*="taboola"]',
    '[class*="outbrain"]',
    '[id*="outbrain"]',
    '[class*="mgid"]',
    '[id*="mgid"]',
    '[class*="native-ad"]',
    '[id*="native-ad"]',
    '[class*="newsletter"]',
    '[id*="newsletter"]',
    '[class*="paywall"]',
    '[id*="paywall"]'
  ];

  const adSelector = aggressiveSelectors.join(',');

  function removeAggressive(root = document) {
    root.querySelectorAll?.(adSelector).forEach(el => el.remove());
  }

  function cleanNode(node) {
    if (!(node instanceof Element)) return;

    if (node.matches(adSelector)) {
      node.remove();
      return;
    }

    removeAggressive(node);
  }

  removeAggressive();

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        cleanNode(node);
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
```
