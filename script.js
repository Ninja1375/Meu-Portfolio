const burger = document
 .querySelector('.burger');
const navLinks = document
 .querySelector('.nav-links');

burger.addEventListener('click',
 () => {
  navLinks.classList.toggle(
   'active');
  burger.classList.toggle(
   'toggle');
 });

const faders = document
 .querySelectorAll('.fade-in');

const appearOptions = {
 threshold: 0.2,
 rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll =
 new IntersectionObserver(
  function(entries,
   appearOnScroll) {
   entries.forEach(entry => {
    if (!entry.isIntersecting) {
     return;
    } else {
     entry.target.classList.add(
      'show');
     appearOnScroll.unobserve(
      entry.target
     );
    }
   });
  }, appearOptions);

faders.forEach(fader => {
 appearOnScroll.observe(fader);
});
