  var app = angular.module('demo', [])
  .controller('configuratorController', function($scope) {

      $scope.extras =  [];
      $scope.totaalPrice = 200.000;
      console.log('Welcome!');

      $scope.addExtras = function(){
        console.log('hoi')
      }
  });
  angular.bootstrap(document, ['demo']);

$('#input-1').checkboxpicker({
  html: true,
  offLabel: '<span class="glyphicon glyphicon-remove">',
  onLabel: '<span class="glyphicon glyphicon-ok">',
});

$('.next').click(function(){
  var nextId = $(this).parents('.tab-pane').next().attr("id");
  $('.nav a[href="#'+nextId+'"]').tab('show')
  return false;
  
})
$('.prev').click(function(){
  var nextId = $(this).parents('.tab-pane').prev().attr("id");
  $('.nav a[href="#'+nextId+'"]').tab('show')
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
