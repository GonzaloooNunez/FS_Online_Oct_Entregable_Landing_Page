
let botones = document.querySelectorAll('.dropdown button');
let menusDesplegables = document.querySelectorAll('.dropdown-content');

botones.forEach(function(button) {
  button.addEventListener('click', function() {

    menusDesplegables.forEach(function(menu) {
      menu.style.display = 'none';
    });

    let menuDesplegable = this.nextElementSibling;

    if (menuDesplegable.style.display === 'block') {
      menuDesplegable.style.display = 'none';
    } else {
   
      let rect = this.getBoundingClientRect();
      let left = rect.left;
      let top = rect.bottom;

    
      menuDesplegable.style.display = 'block';
      menuDesplegable.style.position = 'absolute';
      menuDesplegable.style.left = left + 'px';
      menuDesplegable.style.top = top + 'px';
    }
  });
});

menusDesplegables.forEach(function(menu) {
  menu.addEventListener('mouseleave', function() {
    this.style.display = 'none'; 
  });
});
