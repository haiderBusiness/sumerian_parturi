const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const menuLinks = mobileMenu.querySelectorAll('a');
const desktopLinks = document.querySelectorAll('.nav-desktop a');

function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
}

function setActiveLink(link) {
    // Remove active from all links (mobile + desktop)
    [...menuLinks, ...desktopLinks].forEach(el => el.classList.remove('active'));
    // Add to the clicked one
    link.classList.add('active');
}

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    setActiveLink(link);
    closeMenu();
    });
});

desktopLinks.forEach(link => {
    link.addEventListener('click', () => {
    setActiveLink(link);
    });
});



// getting the full height of an element including margin

function getFullHeightWithMargin(el) {
    const style = window.getComputedStyle(el);
    
    const marginTop = parseFloat(style.marginTop);
    const marginBottom = parseFloat(style.marginBottom);

    const paddingTop = parseFloat(style.paddingTop);
    const paddingBottom = parseFloat(style.paddingBottom);	
    
    const height = el.getBoundingClientRect().height;

    return height + marginTop + marginBottom;														
}

const headerDiv = document.getElementById('the_whole_header');
const totalHeight = getFullHeightWithMargin(headerDiv);

const divUnderWholeHeader = document.getElementById('div_under_whole_header');

divUnderWholeHeader.style.height = totalHeight + 'px';

console.log("totalHeight: ", totalHeight);







// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll("#the_whole_header a"); // adjust selector if needed

// function setActiveNavLink() {
// 	let scrollY = window.scrollY;

// 	sections.forEach((section) => {
// 	const sectionTop = section.offsetTop - 80; // adjust for fixed header
// 	const sectionHeight = section.offsetHeight;
// 	const sectionId = section.getAttribute("id");

// 	if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
// 		navLinks.forEach((link) => {
// 		link.classList.remove("active");
// 		if (link.getAttribute("href") === `#${sectionId}`) {
// 			link.classList.add("active");
// 		}
// 		});
// 	}
// 	});
// }

// window.addEventListener("scroll", setActiveNavLink);