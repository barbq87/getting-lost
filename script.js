//sticky navigation
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
    
function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
    
window.addEventListener('scroll', fixNav);

//side-menu
const menuTrigger = document.getElementById('menu-trigger');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuTrigger.addEventListener('click', showSideMenu);
function showSideMenu() {
    sideMenu.classList.add('show-menu');
}

menuClose.addEventListener('click', closeSideMenu);
function closeSideMenu() {
    sideMenu.classList.remove('show-menu');
}

//hero-area
document.addEventListener("DOMContentLoaded", function() {
    // Attach an event listener to handle form submission
    const form = document.getElementById("location-form");
    form.addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Get the location name input value
        const locationInput = document.getElementById("location-type").value;

        // Remove extra whitespace and convert the input to lowercase
        const sanitizedLocation = locationInput.trim().toLowerCase();

        switch(sanitizedLocation) {
            case 'city':
                document.querySelector('.hero-area').style.background = "url('images/city.jpg') no-repeat center/cover";
                break;

            case 'small town':
                document.querySelector('.hero-area').style.background = "url('images/town.jpg') no-repeat center/cover";
                break;

            case 'mars':
                document.querySelector('.hero-area').style.background = "url('images/mars.jpg') no-repeat bottom/cover";
                break;

            case 'mountain':
                document.querySelector('.hero-area').style.background = "url('images/mountain.jpg') no-repeat top/cover";
                break;

            default:
                document.querySelector('.hero-area').style.background = "";
        }
    });
});

//Read-More Read-Less Content
document.addEventListener("DOMContentLoaded", function() {
    const reflectionText1 = document.getElementById('reflection-text-1');
    const button1 = document.getElementById('toggle-button-1');

    button1.addEventListener("click", function() {
        if (reflectionText1.style.display === "none" || reflectionText1.style.display === "") {
            reflectionText1.style.display = "block";
            button1.textContent = "Read Less";
        } else {
            reflectionText1.style.display = "none";
            button1.textContent = "Read More";
        }
    });

    const reflectionText2 = document.getElementById('reflection-text-2');
    const button2 = document.getElementById('toggle-button-2');

    button2.addEventListener("click", function() {
        if (reflectionText2.style.display === "none" || reflectionText2.style.display === "") {
            reflectionText2.style.display = "block";
            button2.textContent = "Read Less";
        } else {
            reflectionText2.style.display = "none";
            button2.textContent = "Read More";
        }
    });

    const reflectionText3 = document.getElementById('reflection-text-3');
    const button3 = document.getElementById('toggle-button-3');

    button3.addEventListener("click", function() {
        if (reflectionText3.style.display === "none" || reflectionText3.style.display === "") {
            reflectionText3.style.display = "block";
            button3.textContent = "Read Less";
        } else {
            reflectionText3.style.display = "none";
            button3.textContent = "Read More";
        }
    });
})