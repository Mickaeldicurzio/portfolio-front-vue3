function listenStickyIsPinned(selector) {
    //lets add the observer element dynamically.
    let d = document
    var newEl = d.createElement("div");
    newEl.classList.add("myObserver");
    var ref = d.querySelector(selector);
    insertBefore(newEl, ref);
    function insertBefore(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode);
    }

    var observer = new IntersectionObserver(
        function (entries) {
            if (entries[0].intersectionRatio === 0) {
                ref.classList.add("sticky-element");
                //newEl.classList.add("sticky-observer");
            } else if (entries[0].intersectionRatio === 1) {
                ref.classList.remove("sticky-element");
                //newEl.classList.remove("sticky-observer");
            }
        },
        { threshold: [0, 1] }
    );

    observer.observe(d.querySelector(".myObserver"));
}

export { listenStickyIsPinned }