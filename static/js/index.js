//Esta sección del js es solo una parte del js que se ha implementado dentro de la app, el resto 
//de codigo JS se encuentra dentro del propio index buscar en el index.html el comentario JS codigo

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }    
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

const button = document.querySelector('button');
button.addEventListener('click', function() {
    scrollToSection('universidades');
});