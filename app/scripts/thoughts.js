var $ = require('jquery');
var Gun = require('gun');
var peers = ['http://localhost:8080/'];

var gun = Gun(peers).get('thoughts');

$('form').on('submit', function(event){
  event.preventDefault();
  gun.set($('input').val());
  $('input').val("");
});

gun.map().on(function(thought, id){
  var li = $('#' + id).get(0) || $('<li>').attr('id', id).appendTo('ul');
  if(thought){
    $(li).text(thought);
  } else {
    $(li).hide();
  }
});

$('body').on('dblclick', 'li', function(event){
  gun.path(this.id).put(null);
});
