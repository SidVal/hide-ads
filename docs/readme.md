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
javascript:(function(){
  const css = document.createElement('link');
  css.href = 'https://sidval.github.io/hide-ads/assets/style-aggressive.css';
  css.rel = 'stylesheet';
  css.dataset.hideAds = 'aggressive-css';
  document.head.appendChild(css);

  const script = document.createElement('script');
  script.src = 'https://sidval.github.io/hide-ads/assets/js-aggressive.js';
  script.async = true;
  script.dataset.hideAds = 'aggressive-js';
  document.head.appendChild(script);
})();
```
