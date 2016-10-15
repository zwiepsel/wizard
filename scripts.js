  var app = angular.module('archilogus', [])
    .controller('configuratorController', function ($scope) {

      var carport = false;
      var garage = false;
      $scope.extras = [];
      $scope.totalPrice = 200000;

      function findById(source, id) {
        for (var i = 0; i < source.length; i++) {
          if (source[i].id === id) {
            return source[i];
          }
        }
        throw "Couldn't find object with id: " + id;
      }
      //switch between all the extras
      $scope.addExtras = function (value) {
        switch (value) {
          case 1:
            if (!carport) {
              $scope.extras.push({
                id: 1,
                description: "Carport €25.000"
              })
              $scope.totalPrice = $scope.totalPrice + 25000
              carport = true;
              break;
            }
            break;
          case 2:
            if (!garage) {
              $scope.extras.push({
                id: 2,
                description: "Garage €25.000"
              })
              $scope.totalPrice = $scope.totalPrice + 25000
              garage = true;
              break;
            }
            break;

        }

      }

      //switch to remove the extras
      $scope.removeExtras = function (value) {
        var result = 0
        switch (value) {
          case 1:
            if (carport) {
              index = $scope.extras.indexOf(findById($scope.extras, value))
              $scope.extras.splice(index, 1)
              $scope.totalPrice = $scope.totalPrice - 25000
              carport = false;
            }
            break;

          case 2:
            if (garage) {
              index = $scope.extras.indexOf(findById($scope.extras, value))
              $scope.extras.splice(index, 1)
              $scope.totalPrice = $scope.totalPrice - 25000
              garage = false;
              break;
            }
          default:
            break;
        }

      }
    });
  angular.bootstrap(document, ['archilogus']);

  //checkbox by code
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