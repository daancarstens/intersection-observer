let alleLinks = document.querySelectorAll('nav a');

const verwijderActief = () => {
    alleLinks.forEach ( (link) => {
        if( link.classList = 'actief' ) {
            link.classList.remove('actief');
        }
    });
}

const maakActief = (elem) => {
    verwijderActief();
    elem.classList.add('actief');
}

alleLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        maakActief(e.target);
        window.location = e.target.href;
    })
});