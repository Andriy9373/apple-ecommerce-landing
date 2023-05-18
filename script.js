document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
    })
});

// Cube
const cube = document.querySelector('.cube');
let X = 0;
let Y = 20;
let Z = 0;
let isRotating = true;
let interval;

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${X += 20}deg) rotateY(${Y}deg) rotate(${Z}deg)`;
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${X -= 20}deg) rotateY(${Y}deg) rotate(${Z}deg)`;
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y -= 20}deg) rotate(${Z}deg)`;
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y += 20}deg) rotate(${Z}deg)`;
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg) rotate(${Z -= 20}deg)`;
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg) rotate(${Z += 20}deg)`;
})

const playPause = () => {
    if (isRotating) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${X}deg) rotateY(${Y++}deg) rotate(${Z}deg)`;
        }, 100);
    }
    else {
        clearInterval(interval);
    }
}
playPause();

document.querySelector('.controls').addEventListener('mouseover', () => {
    isRotating = false;
    playPause();
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    isRotating = true;
    playPause();
})
// End of Cube

// Slideshow
const slideshowDivs = () => {
    for (let i = 1; i < 6; i++) {
        const div = document.createElement('div');
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

        if (i === 1) div.classList.add('change');

        document.querySelector('.slideshow').appendChild(div);
    }
}
slideshowDivs();

const slideshows = document.querySelectorAll('.slideshow div');
setInterval(() => {
    const div = document.querySelector('.slideshow .change');
    div.classList.remove('change');
    if (div.nextElementSibling) {
        div.nextElementSibling.classList.add('change');
    } else {
        slideshows[0].classList.add('change');
    }
}, 20000);
// End of Slideshow

// MacBook
const content = document.querySelector('.section-3-content');

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.pageYOffset > content.offsetTop + content.offsetHeight / 2) {
        content.classList.add('change');
    }
})
// End of MacBook

// Watches
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = (direction, position, controlOne, controlTwo) => {
    if (direction === position) {
        controlOne.classList.add('hideControl');
    }
    else {
        controlOne.classList.remove('hideControl');
        controlTwo.classList.remove('hideControl');
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    hideControl(axisY, -280, watchTopControl, watchBottomControl);
});

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginLeft = `${axisX -= 70}rem`;
    hideControl(axisX, -280, watchRightControl, watchLeftControl);
});

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    hideControl(axisY, 280, watchBottomControl, watchTopControl);
});

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginLeft = `${axisX += 70}rem`;
    hideControl(axisX, 280, watchLeftControl, watchRightControl);
});

// End of Watches