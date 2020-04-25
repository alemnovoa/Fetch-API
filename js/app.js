document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarREST);




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

function cargarJSON(){
     fetch('empleados.json')
          .then(function(res) {
               // conexion y definir
               return res.json();
          })
          // muestra/respuesta
          .then(function(data){
               let html = '';
               data.forEach(function(empleado){
                    html += `
                         <li>${empleado.nombre} ${empleado.puesto}</li>
                    `;
               })

               document.getElementById('resultado').innerHTML = html;
          })
          .catch(function(error) {
               console.log(error);
          });
}
// DATOS DESDE UNA REST API
function cargarREST (){
     fetch('https://picsum.photos/list')
          .then(function(res) {
               return res.json();
          })
          .then (function(imagenes){
               let html = '';
               
               imagenes.forEach(function(imagen) {
                    html += `
                         <li>
                              <a href="${imagen.post_url}"> Ver imagen</a>
                              ${imagen.author}
                         </li>
                    `;
               });
               
               document.getElementById('resultado').innerHTML = html;
          })
}