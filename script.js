window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicatorProgress").style.width = scrolled + "%";
};

let currentSection = 0;
const sections = document.querySelectorAll('.section');
const cursorIndicator = document.getElementById('cursorIndicator');

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
            sections[currentSection].scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
            sections[currentSection].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Change cursor indicator when entering section 3
    if (currentSection === 2) {
        cursorIndicator.classList.add('cursor-indicator-logo');
        cursorIndicator.classList.remove('cursor-indicator');
    } else {
        cursorIndicator.classList.add('cursor-indicator');
        cursorIndicator.classList.remove('cursor-indicator-logo');
    }
});

cursorIndicator.addEventListener('click', function() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
});
