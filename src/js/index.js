let scrollpos = window.scrollY
let point = document.querySelector(".cycle-tab-item")
const body = document.body

window.addEventListener('load', function () {
  point.classList.add("active")
  setTimeout(function () {
    body.style.opacity = "1"
  }, 300);

})

const header = document.querySelector(".header");

const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("header--active")

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) {
    add_class_on_scroll()
  } else {
    header.classList.remove("header--active")
  }
})

function tabChange() {
  let tabs = $('.nav-tabs > li');
  let active = tabs.filter('.active');
  let next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
  next.tab('show');
}

$('.tab-pane').hover(function () {
  clearInterval(tabCycle);
}, function () {
  tabCycle = setInterval(tabChange, 5000);
});

// Tab Cycle function
let tabCycle = setInterval(tabChange, 5000)

// Tab click event handler
$(function () {
  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab('show')
    tabCycle = setInterval(tabChange, 5000);
  });
});
