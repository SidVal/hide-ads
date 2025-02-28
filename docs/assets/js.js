document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("iframe").forEach(iframe => iframe.remove());
});

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.tagName === "IFRAME") {
                node.remove();
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });
