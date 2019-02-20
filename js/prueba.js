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
        $('#psd').append('<tr>' + 
        '<td>' + tbl.Row[i].MATERIAL + '</td>'+
        '<td>' + tbl.Row[i].DESCRIPCION + '</td>'+
        '<td>' + tbl.Row[i].LOTE + 
        '<span class="new badge red right" data-badge-caption="No Asignado">' + '</span>' + 
        '</td>' + '</tr>')
    }
    //genera la lista de pedidos
    for(i=0; i<lgn; i++){
      const p = {
        Material: tbl.Row[i].MATERIAL,
        Descrip: tbl.Row[i].DESCRIPCION,
        Lote: tbl.Row[i].LOTE,
        Cad: tbl.Row[i].CADUCIDAD,
        Pedi: tbl.Row[i].PEDIDO,
        Clien: tbl.Row[i].CLIENTE
      }
      $('#pedidos').append(
        '<a value="'+ p.Material + p.Lote +'" class="bttn waves-effect collection-item waves-light black-text">' +
        '<li>' + 'Pedido: ' + p.Pedi + '</li>' +
        '<li>' + 'Cliente: ' + p.Clien + '</li>'+ 
        '</a>')
      $('.bttn').click(function(){
      $('.bttn').removeClass('active white-text asig')
      $(this).addClass('active white-text asig')
      //genera los detalles de los pedidos
      var str = $(this).attr('value')
        if(str === p.Material + p.Lote){
          $('#tabla').empty('tr')
          $('#tabla').append('<tr>' + 
            '<td>' + p.Material + '</td>' +
            '<td>' + p.Descrip + '</td>' +
            '<td>' + p.Lote + '</td>' +
            '<td>' + p.Cad + '</td>' +
            '</tr>')
          }
      })
    }
    //Realiza la busqueda en la lista de pedidos
      $('#search').keyup(function() {
          var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
          $('#pedidos a').show().filter(function() {
              var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
              return !~text.indexOf(val);
          }).hide()
      })
    //semaforo
    $('#prueba').click(function(){
    $('#prueba').removeClass('red')
    $('#prueba').addClass('active')
    })
  })
}
//despliega la lista de puertas
function asignarPuerta(){
  $.get('puertas.json',
  function(data){
  var q = $('puertas').attr('value')
  var tbl = data.Rowsets.Rowset[0]
  var lgn = tbl.Row.length
    for(i=0; i<lgn; i++){
  var w =  $('#puertas').append(
      '<option value="puerta'+[i]+'">' + 'PUERTA '+ tbl.Row[i].PUERTA + '</option>')
    }
  })
}
asignarPuerta()
// boton de asignar
$('#asignar').click(function(){
M.toast({html: 'Asignado'})
var q = $('#tabla').text()
var w = $('.asig').text()
var e = $('.puerta').attr('value')
console.log(q)
console.log(w)
console.log(e)
})