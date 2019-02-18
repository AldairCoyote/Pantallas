//inicia materialize
$(document).ready(function(){
$('select').formSelect()
  genPedidos()
  M.AutoInit()
})
//genera los pedidos
function genPedidos(){
  $.get('prueba.json',
  function(data){
    var tbl = data.Rowsets.Rowset[0]
    var lgn = tbl.Row.length
    //muestra los primeros 3 pedidos
    for(i=0; i<3; i++){
      $("#psd").append('<tr>' + 
      '<td>' +  + tbl.Row[i].MATERIAL + '</td>'+
      '<td>' + tbl.Row[i].DESCRIPCION + '</td>'+
      '<td>' + tbl.Row[i].LOTE + '<span class="new badge red right" data-badge-caption="No Asignado">' + '</span>' + '</td>' + '</tr>')
    }

    //genera la lista de pedidos
    for(i=0; i<lgn; i++){
      $("#pedidos").append(
      '<a class="bttn waves-effect collection-item waves-light black-text">' +
      '<li>' + tbl.Row[i].MATERIAL + '</li>' +
      '<li>' + tbl.Row[i].DESCRIPCION + '</li>' + 
      '<li>' + tbl.Row[i].ORDEN + '</li>' +
      '<li>' + tbl.Row[i].LOTE + '</li>' +
      '<li>' + tbl.Row[i].CADUCIDAD + '</li>' 
      + '</a>')
    }

    //genera los detalles de los pedidos
      $('.bttn').click(function(data){
      $('#tabla').empty('tr')
      var tot
      tot = $(this).text()
      $("#tabla").append('<tr>' +
       '<td>' + tot + '</td>' + '</tr>')
     })

     //semaforo
     $('#prueba').click(function(){
      $('#prueba').removeClass('red')
      $('#prueba').addClass('green')
     })
  })
}

 //despliega la lista de puertas
 function asignarPuerta(){
  $.get('puertas.json',
  function(data){
    var tbl = data.Rowsets.Rowset[0]
    var lgn = tbl.Row.length
    for(i=0; i<lgn; i++){
      $("#puertas").append(
        '<option '+'value='+[i]+'>' + 'PUERTA '+ tbl.Row[i].PUERTA + '</option>')
    }
  })
}
asignarPuerta()


// const data = {
//   "json": [
//     {
//       "list_ip": [
//         {
//           "1": "190.15.20.18",
//           "2": "10.10.10.100",
//           "3": "10.20.30.40"
//         }
//       ],
//       "cosas": [
//         {
//           "elementos": [
//              {
//                "ip_id": 1
//              },
//              {
//                "ip_id": 3
//              }
//           ]
//         }
//       ]
//     }
//   ]
// };

// function mapIPs() {
//   const ips = data.json[0].list_ip[0];
//   const els = data.json[0].cosas[0].elementos;
//   const associations = {};
  
//   els.forEach(el => {
//     for(let [key, val] of Object.entries(el)) {
//       if (ips[val]) {
//         associations[val] = ips[val];
//       }
//     }
//   });
  
//   return associations;
// }

// console.info(mapIPs());