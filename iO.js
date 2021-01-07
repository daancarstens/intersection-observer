let alleLinks = document.querySelectorAll('nav a');
let deSecties = document.querySelectorAll('section');

const opties = {};

const verwerkDoorsnijding = (entries, observer) => {
    entries.forEach(entry => {
        // console.log(entry.target.id + " doorsnijdt " + entry.isIntersecting);
        if ( entry.isIntersecting ) {
           let link = zoekBijpassendeLink('#' + entry.targeet.id);
            maakActief(link);
        }
    });
}

let observer = new IntersectionObserver(verwerkDoorsnijding, opties);

observer.observe(deSecties[1]);

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


const zoekBijpassendeLink = (id) => {
    let link = document.querySelector('nav a[href="' + id + '"]');
    return link;
}