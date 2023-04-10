let scrollpos = window.scrollY

const header = document.querySelector(".header");

const scrollChange = 1

const add_class_on_scroll = () => header.classList.add("header--active")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= scrollChange) { add_class_on_scroll() } else {
    header.classList.remove("header--active")
  }
})


// let tabChange = function(){
//   let tabs = $('.nav-pills > li');
//   let active = tabs.filter('.active');
//   let next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
//   // Bootsrap tab show, para ativar a tab
//   next.tab('show')
// }
// // Tab Cycle function
// let tabCycle = setInterval(tabChange, 3000)
// // Tab click event handler
// $(function(){
//   $('.nav-tabs a').click(function(e) {
//     e.preventDefault();
//     // Parar o loop
//     clearInterval(tabCycle);
//     // mosta o tab clicado, default bootstrap
//     $(this).tab('show')
//     // Inicia o ciclo outra vez
//     setTimeout(function(){
//       tabCycle = setInterval(tabChange, 1000)//quando recomeça assume este timing
//     }, 1000);
//   });
// });

// Tab-Pane change function
function tabChange() {
  var tabs = $('.nav-tabs > li');
  var active = tabs.filter('.active');
  var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
  next.tab('show');
}

$('.tab-pane').hover(function() {
  clearInterval(tabCycle);
}, function() {
  tabCycle = setInterval(tabChange, 5000);
});

// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000)

// Tab click event handler
$(function(){
  $('.nav-tabs a').click(function(e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab('show')
    tabCycle = setInterval(tabChange, 5000);
  });
});
