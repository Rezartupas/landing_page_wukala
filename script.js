window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicatorProgress").style.width = scrolled + "%";
};

let currentSection = 0;
const sections = document.querySelectorAll('.section');
const cursorIndicator = document.getElementById('cursorIndicator');

function updateCursorIndicator() {
    if (currentSection === 2) {
        cursorIndicator.classList.add('cursor-indicator-logo');
        cursorIndicator.classList.remove('cursor-indicator');
    } else {
        cursorIndicator.classList.add('cursor-indicator');
        cursorIndicator.classList.remove('cursor-indicator-logo');
    }
}

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
    updateCursorIndicator();
});

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // Most significant
        if (xDiff > 0) {
            /* left swipe */
        } else {
            /* right swipe */
        }
    } else {
        if (yDiff > 0) {
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
    }
    updateCursorIndicator();
    xDown = null;
    yDown = null;
}
