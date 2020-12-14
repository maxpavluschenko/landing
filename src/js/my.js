document.addEventListener('DOMContentLoaded', () => {
    const li = document.querySelectorAll('.navbar .nav-item');
    window.scrollTo({top: 0, behavior: 'smooth'});

    function siblings(elem) {
        const nodes = [...elem.parentNode.children]
        return nodes.filter(node => node !== elem);
    }

    function toggleClass(elem, cls) {
        elem.classList.toggle(cls);
        siblings(elem).forEach(node => {
            node.classList.remove(cls);
        })
    }

    li.forEach(el => {
        el.addEventListener('click', function () {
            toggleClass(this, 'active');
        })
    })

});
