let tabIndex = 1;

const showTab = (n) => {
    let sections = document.querySelectorAll('.profile-section');
    let tabs = document.querySelectorAll('#main-nav .link');
    console.log(sections, tabs);
    sections.forEach(section => {
        section.style.display = 'none';
    })

    tabs.forEach(tab => {
        tab.className = tab.className.replace(' active', ' ');
    })
    sections[tabIndex - 1].style.display = 'block';
    tabs[tabIndex - 1].className += ' active';

};

showTab(tabIndex)
const currentTab = (n) => {
    showTab(tabIndex = n);
};