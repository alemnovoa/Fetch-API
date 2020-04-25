document.getElementById('txtBtn').addEventListener('click', cargarTXT);



function cargarTXT() {
     fetch('datos.txt')
          //el primero es para conectar y recibir la informacion
          .then(function(res) {
               return res.text();
          })
          // el segundo para mostrar los datos
          .then(function(empleados){
               console.log(empleados);
               document.getElementById('resultado').innerHTML = empleados;
          })
          .catch(function(error) {
               console.log(error);
          });
}