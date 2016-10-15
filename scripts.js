  var app = angular.module('demo', [])
    .controller('configuratorController', function ($scope) {

      var carport = false;
      var garage = false;
      $scope.extras = [];
      $scope.totalPrice = 200000;
      //console.log($scope.extras);

      $scope.addExtras = function (value) {
        switch (value) {
          case 1:
          for(var extra in $scope.extras)
          {       
            // console.log($scope.extras[value].id)
          }
          if(!carport){
          $scope.extras.push({
              id: 1,
              name: "carport  €25000"
            })
            carport = true;
            break;
          }

          case 2:
          console.log(value)
          for(var extra in $scope.extras)
          {       
      
          }
          if(!garage)
          {
          $scope.extras.push({
              id: 2,
              name: "garage  €25000"
            })
            garage = true;
            break;
          }

          default:
            console.log('geen match' )
          

          
        }
        //   case 2:

        //     if ($scope.extras.length > 0){
        //     for (i = 0; i < $scope.extras.length; i++)  {
        //       $scope.extras.push({
        //         id: 2,
        //         name: "Gargage  €25000"
        //       })
        //       $scope.totalPrice = $scope.totalPrice + 25000;
        //       console.log($scope.extras)
        //     }
        // }
      }

      $scope.removeExtras = function (value) {
        switch (value) {
          case 1:
              for(var value in $scope.extras)
              {       
                var extra = $scope.extras[value].id
                console.log(extra)
                // if(extra = 1)
                // {

                // }
              }
          case 2:
            for(var value in $scope.extras)
            {       
              var extra = $scope.extras[value].id
              console.log(extra)
              // if(extra = 1)
              // {

              // }
            }
        }
      }
    });
  angular.bootstrap(document, ['demo']);

  $('#input-1').checkboxpicker({
    html: true,
    offLabel: '<span class="glyphicon glyphicon-remove">',
    onLabel: '<span class="glyphicon glyphicon-ok">',
  });

  $('.next').click(function () {
    var nextId = $(this).parents('.tab-pane').next().attr("id");
    $('.nav a[href="#' + nextId + '"]').tab('show')
    return false;

  })
  $('.prev').click(function () {
    var nextId = $(this).parents('.tab-pane').prev().attr("id");
    $('.nav a[href="#' + nextId + '"]').tab('show')
    return false;

  })

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    //update progress
    var stap = $(e.target).data('stap');
    var percent = (parseInt(stap) / 8) * 100;

    $('.progress-bar').css({
      width: percent + '%'
    });
    $('.progress-bar').text("Stap " + stap + " of 8");

    //e.relatedTarget // previous tab

  })

  $('.first').click(function () {

    $('#myWizard a:first').tab('show')

  })