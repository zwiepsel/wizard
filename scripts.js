$('.next').click(function(){

  var nextId = $(this).parents('.tab-pane').next().attr("id");
  $('[href=#'+nextId+']').tab('show');
  return false;
  
})

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  
  //update progress
  var stap = $(e.target).data('stap');
  var percent = (parseInt(stap) / 8) * 100;
  
  $('.progress-bar').css({width: percent + '%'});
  $('.progress-bar').text("Stap " + stap + " of 8");
  
  //e.relatedTarget // previous tab
  
})

$('.first').click(function(){

  $('#myWizard a:first').tab('show')

})
