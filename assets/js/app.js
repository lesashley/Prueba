// document.getElementById('light').style.display='block';
// document.getElementById('fade').style.display='block'
var botonAdd = document.getElementById("enviar");
//var botonCerrar = document.getElementById("cerrar");
botonAdd.addEventListener("click",function () {
  document.getElementById("light").style.display="none";
  var dato = document.getElementById("numero").value;
  alert(dato);
});
