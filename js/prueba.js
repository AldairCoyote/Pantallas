//   inicia materialize
  document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit()
  })

  $(document).ready(function(){
    $('select').formSelect()
    genPedidos()
    PDV()
  })

  // semaforo
  function cambiarColor() {
        document.getElementById('prueba')
        prueba.classList.remove('red')
        prueba.classList.add('green')
      }

  // despliega la lista de puertas
  function asignarPuerta(){
  var p = $.get('puertas.json',
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

// $(document).ready(function(){
//   $.ajax({url: "puertas.json", success: function(result){
//     $("#puertas").append('<option '+'value='+[i]+'>' +
//      'PUERTA '+ tbl.Row[i].PUERTA + '</option>').html(result);
//   }});
// });

// despliega la lista de pedidos
function genPedidos(){
  $.get('prueba.json',
  function(data){
    var tbl = data.Rowsets.Rowset[0]
    var lgn = tbl.Row.length
    for(i=0; i<lgn; i++){
      $("#pedidos").append('<a class="bttn waves-effect waves-light red">' + 
      + tbl.Row[i].ORDEN + '//'+ tbl.Row[i].LOTE + '</a>')
    }
    $('.bttn').click(function(){
      var tot
      var c1 = tbl.Row[i]
      tot=$(this).text()
       console.log(tot)
       console.log(c1)
     })
  })
}

// Obtenga los antepasados ​​de cada elemento en el conjunto actual de elementos emparejados, opcionalmente filtrado por un selector.
// Obtenga los descendientes de cada elemento en el conjunto actual de elementos emparejados, filtrados por un selector, un objeto jQuery o un elemento.
// Iterar sobre un objeto jQuery, ejecutando una función para cada elemento coincidente.

// muestra los detalles de pedidos
function mostrarPedido(){
  var mtr = document.getElementById('tabla')

  if(mtr.hasChildNodes()){
    mtr.removeChild(mtr.firstChild)
  }
  var x = $.get('prueba.json',
  function(data){
    var tbl = data.Rowsets.Rowset[0]
    var lrg = tbl.Row.length
      for(i = 0; i < lrg; i++){
        $("#tabla").append('<tr id="ped' + [i] + '">' +
        '<td>' + tbl.Row[i].MATERIAL + '</td>'+
        '<td>' + tbl.Row[i].DESCRIPCION + '</td>'+
        '<td>' + tbl.Row[i].ORDEN + '</td>'+
        '<td>' + tbl.Row[i].LOTE + '</td>'+
        '<td>' + tbl.Row[i].CADUCIDAD + '</td>' + '</tr>')
      }
    })
  }
  // Obtenga los antepasados ​​de cada elemento en el conjunto actual de elementos emparejados, opcionalmente filtrado por un selector.
  // Obtenga los descendientes de cada elemento en el conjunto actual de elementos emparejados, filtrados por un selector, un objeto jQuery o un elemento.
  // Iterar sobre un objeto jQuery, ejecutando una función para cada elemento coincidente.


// muestra los primeros 3 pedidos no asignados
function PDV(){
  $.get('prueba.json',
  function(data){
    var tbl = data.Rowsets.Rowset[0]
    var lgn = 3
    for(i = 0; i < lgn; i++){
      $("#psd").append('<tr>' + 
      '<td>' +  + tbl.Row[i].MATERIAL + '</td>'+
      '<td>' + tbl.Row[i].DESCRIPCION + '</td>'+
      '<td>' + tbl.Row[i].LOTE + '<span class="new badge red right" data-badge-caption="No Asignado">' + '</span>' + '</td>' + '</tr>')
    }
  })
}

// function genTable(){ new badge red data-badge-caption="no asignado"
//   $.get('prueba.json',
//   function(data){
//     var tbl = data.Rowsets.Rowset[0]
//     var lgn = tbl.Row.length
//     for(i=0; i<lgn; i++){
//       $("#psd").append('<tr>' + 
//       '<td align="center">' + 'hola' + tbl.Row[i].MATERIAL + '</td>'+
//       '<td align="center">' + tbl.Row[i].DESCRIPCION + '</td>'+
//       '<td align="center">' + tbl.Row[i].ORDEN + '</td>'+
//       '<td align="center">' + tbl.Row[i].LOTE + '</td>'+
//       '<td align="center">' + tbl.Row[i].CADUCIDAD + '</td>'+'</tr>')
//     }
//   })
// }
