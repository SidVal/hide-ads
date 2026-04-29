# 🧼 Hide Ads

A tiny bookmarklet to remove ads from any website.

No extensions. No installs. Just drag, click, and read.


## ✨ Features

- 🧩 Works on any website
- ⚡ Instant ad hiding via CSS
- 🔄 Removes dynamic ads with JavaScript
- 🧠 Uses `MutationObserver` to catch ads loaded after page load
- 🧪 Two modes:
  - **Normal Mode** → clean ads without breaking layout
  - **🔥 Beast Mode** → removes everything (aggressive)



## 🚀 How to use

1. Go to the project page  
2. Drag the button to your bookmarks bar  
3. Open any website  
4. Click your bookmark  
5. Enjoy a clean reading experience  

> Refresh the page (F5) to restore everything.



## 🛠 How it works

When you trigger the bookmarklet, it injects:

- A **CSS file** → hides common ad containers instantly
- A **JavaScript file** → removes dynamic ads and prevents them from reappearing

### 🔍 DOM Monitoring

Modern websites inject ads dynamically after page load.

To handle this, Hide Ads uses:

```js
MutationObserver
````

This allows:

* Detecting new nodes added to the DOM
* Removing ads in real-time
* Fighting back against JS-based ad reloads



## 🧪 Modes

### Normal Mode

* Removes most ads
* Keeps layout mostly intact

### 🔥 Beast Mode

* Removes iframes, embeds, sponsored blocks, and more
* Designed for news sites and heavy ad pages
* May break layouts (by design)



## 📂 Project structure

```
/assets
style.css
js.js
style-aggressive.css
js-aggressive.js
```



## 🧠 Philosophy

This project is intentionally simple.

* No browser APIs
* No extensions
* No permissions
* No tracking

Just pure client-side DOM manipulation.



## 🔬 Research & Development

Part of the original idea (since 2018) was to fight back against websites that:

* Reload ads dynamically via JavaScript
* Re-inject ads after user interaction
* Continuously mutate the DOM

### Key approach

* Detect DOM changes
* Intercept injected elements
* Remove unwanted nodes instantly

### References

* Detecting DOM changes
* How JavaScript works: tracking changes in the DOM using MutationObserver
* StackOverflow discussions on DOM mutation detection



## 🧭 Roadmap

* [ ] Improve detection heuristics
* [ ] Smarter "auto mode" (detect news sites)
* [ ] Performance optimizations
* [ ] Better selector tuning
* [ ] Annual updates (keep up with modern web changes)



## 🐛 Reporting issues

If you find ads that are not removed:

👉 Open an issue:
[https://github.com/SidVal/hide-ads/issues](https://github.com/SidVal/hide-ads/issues)

Include:

* URL
* Screenshot (if possible)
* Description of the ad



## ⚠️ Disclaimer

This tool removes elements from the DOM after the page loads.

It does **not** block network requests like browser extensions (e.g. uBlock Origin).

Some websites may break when using aggressive mode.



## ❤️ Contributing

PRs and ideas are welcome.

This project evolves with the web.


## 📜 License

MIT


