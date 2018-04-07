$('#submitName').on('click', addNewName);
$('#inputName').on('keypress', function(e){
  if(e.which == 13){
    addNewName();
  }
});


function addNewName(){
  var name = $('#inputName').val();
  var lastName = $('#inputLastName').val();
  var age = $('#inputAge').val();
  var score = $('#inputScore').val();
  var newLi = $('<li>').html('<span>'+name+'</span><span>'+lastName+'</span><span>'+age+'</span><span>'+score+'</span><div class="control"><button class="deleteButton">x</button>');
  $('.sideList ul').append(newLi);
   $('#inputName').val('');
   $('#inputLastName').val('');
   $('#inputAge').val('');
   $('#inputScore').val('');
}


// $('.sideList ul').on('click', 'li .upButton', function(){
//   var copy = $(this).parent().parent();
//   $(this).parent().parent().remove();
//    $('.sideList ul').prepend(copy);
// });
$('.sideList ul').on('click', 'li .deleteButton', function(){
  $(this).parent().parent().remove();
});