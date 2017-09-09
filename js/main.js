

const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name = $('#key');
        app.item.comment =$('#value');
        console.log(app.item.name);
        app.setup ();
        app.recover();
    },

    setup: function () {
        $('#guardar').click (app.addComment) ;
        $('#limpiar').click (app.clearComments) ;
    },

  addComment: function (event) {
      var nombre=$('#key').val();
      var comentario=$('#value').val();
      localStorage.setItem(nombre,comentario);
      $("#ale").append('<div><p>'+nombre+ '<p>'+comentario+'</p>'+'</div>');
      app.clear();

    },

  recover:function(){
 for(var i=0; i<localStorage.length;i++){
      var clave=localStorage.key(i);
      var value=localStorage.getItem(clave);
       $("#ale").append('<div><p>'+value+'</p><p>'+clave+'</p></div>');
    }
  },

  clearComments: function (event) {
      localStorage.clear();
        $('#ale').empty();
    },

  clear:function(){
      $('#value').val("");
      $('#key').val("");
    }
}
$(document).ready ( app.init );





