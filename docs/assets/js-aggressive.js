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
