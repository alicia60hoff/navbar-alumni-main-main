let btnLogo = document.getElementById('logo');
let menuD = document.getElementById('nav-m');

btnLogo.addEventListener('click', function(){
    menuD.classList.toggle('mostrarM');
});
let masDeportes = document.getElementById('masDeportes');
let subMenu = document.getElementById('nav-m');

masDeportes.addEventListener('click', function(){
    subMenu.classList.toggle('subMenu');
});

//console.log(menuD)

// tabla de posiciones automatica

function ordenarTabla() {
    var tabla, filas, switching, i, x, y, shouldSwitch;
    tabla = document.getElementById("tablaPosiciones");
    switching = true;
  
    while (switching) {
      switching = false;
      filas = tabla.rows;
  
      for (i = 1; i < (filas.length - 1); i++) {
        shouldSwitch = false;
  
        x = filas[i].getElementsByTagName("TD")[2];
        y = filas[i + 1].getElementsByTagName("TD")[2];
  
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
        switching = true;
      }
    }
  
    // Actualiza la columna de posiciones
    for (i = 1; i < filas.length; i++) {
      filas[i].getElementsByTagName("TD")[0].innerHTML = i;
    }
  }
  
  ordenarTabla();
