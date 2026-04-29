(function () {
  const selectors = [
    '[id^="LO_VS"]',
    '[id^="ad"]',
    '[id*="ad-"]',
    '[id*="-ad"]',
    '[id*="_ad"]',
    '[id*="ads"]',
    '[id*="banner"]',
    '[id*="inarticle-ad"]',
    '[id*="ad-container"]',
    '[id*="floating"]',
    '[id*="sponsor"]',
    '[id*="promo"]',

    '[class^="ad"]',
    '[class*=" ad"]',
    '[class*="-ad"]',
    '[class*="_ad"]',
    '[class*="ads"]',
    '[class*="banner"]',
    '[class*="inarticle-ad"]',
    '[class*="ad-container"]',
    '[class*="floating"]',
    '[class*="sticker"]',
    '[class*="sponsor"]',
    '[class*="promo"]',

    '[data-ad]',
    '[data-ads]',
    '[data-ad-format]',
    '[data-ad-client]',
    '[data-ad-slot]',
    '[data-testid*="ad-container"]',
    '[data-testid*="inarticle-ad"]',

    'ins.adsbygoogle',
    'iframe[id^="google_ads"]',
    'iframe[src*="googlesyndication"]',
    'iframe[src*="doubleclick"]',
    'iframe[src*="googleads"]'
  ];

  const adSelector = selectors.join(',');

  function removeAds(root = document) {
    root.querySelectorAll?.(adSelector).forEach(el => {
      el.remove();
    });
  }

  function cleanNode(node) {
    if (!(node instanceof Element)) return;

    if (node.matches(adSelector)) {
      node.remove();
      return;
    }

    removeAds(node);
  }

  removeAds();

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
