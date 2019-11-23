if (navigator.serviceWorker) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js')
        console.log('Service Worker: Registered')
    })
}


/* this function takes in the */
const showTab = (n, sectionClass, linkClass) => {
    let sections = document.querySelectorAll(sectionClass);
    let tabs = document.querySelectorAll(linkClass);
    sections.forEach(section => {
        section.style.display = 'none';
    })
    tabs.forEach(tab => {
        tab.className = tab.className.replace(' active', ' ');
    })
    sections[n].style.display = 'block';
    tabs[n].className += ' active';
};

showTab(0, '.profile-section', '.link'); //sets initial condition
showTab(0, '.bio-section', '.bio-link'); //sets initial condition
showTab(0, '.project-section', '.project-link'); //sets initial condition
const currentProfileSection = (n) => {
    showTab(n, '.profile-section', '.link');
};
const currentBioSection = (n) => {
    showTab(n, '.bio-section', '.bio-link');
};
const currentProjectSection = (n) => {
    showTab(n, '.project-section', '.project-link')
}