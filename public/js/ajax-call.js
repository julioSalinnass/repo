function MeGusta(id){
    var Ruta = Routing.generate('likes');
$.ajax({
    type:'POST',
    url: Ruta,
    data: ({id: id}),
    async: true,
    dataType: "json",
    success: function (data){
        console.log(data['likes']);
    }


});

}