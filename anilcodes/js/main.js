function showSection(sectionClass, linkClass, activeClass, index = 0) {
    let sections = document.querySelectorAll('.' + sectionClass);
    let links = document.querySelectorAll('.' + linkClass);
    links.forEach(link => {
        link.className = link.className.replace(' ' + activeClass, ' ');
    })
    sections.forEach(section => {
        section.style.display = 'none'
    });
    links[index].className += ' ' + activeClass;
    sections[index].style.display = 'block';
}


function showLanding(index = 0) {
    let sections = document.querySelectorAll('.landing-section')
    sections.forEach(section => {
        section.style.display = 'none';
    })
    sections[index].style.display = 'block';
    showSection('main-section', 'link', 'active', 0);
    showSection('bio-section', 'bio-link', 'active', 0);
    showSection('projects-section', 'projects-link', 'active', 0);
    showSection('blogs-section', 'blogs-link', 'active', 0);
}

showLanding(0);