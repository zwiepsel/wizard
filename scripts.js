  var app = angular.module('archilogus', [])
    .controller('configuratorController', function ($scope) {
      var carport = false;
      var garage = false;
      var old = false;
      var wide = false;
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

      $scope.requestQuote = function(){
        console.log($scope.user.name + " " + $scope.user.email)
        
      }
      $('#email').validator().on('submit', function (e) {
        console.log('crap')
        if (e.isDefaultPrevented()) {
          console.log('bad')
        } else {
          console.log('good')
          // everything looks good!
        }
      })
      //switch between all the extras
      $scope.addExtras = function (value) {
        switch (value) {
          case 1:
            if (!carport) {
              $scope.extras.push({
                id: 1,
                description: "Carport",
                price: 25000
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
                description: "Garage",
                price: 25000
              })
              $scope.totalPrice = $scope.totalPrice + 25000
              garage = true;
              break;
            }
            break;
          case 3:
            if (!old) {
              $scope.extras.push({
                id: 3,
                description: "65+ aanpassing",
                price: 25000
              })
              $scope.totalPrice = $scope.totalPrice + 25000
              old = true;
              break;
            }
            break;
          case 4:
            if (!wide) {
              $scope.extras.push({
                id: 4,
                description: "Verbrede woonkamer",
                price: 25000
              })
              $scope.totalPrice = $scope.totalPrice + 25000
              wide = true;
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
               break;
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
            break;
          case 3:
            if (old) {
              index = $scope.extras.indexOf(findById($scope.extras, value))
              $scope.extras.splice(index, 1)
              $scope.totalPrice = $scope.totalPrice - 25000
              old = false;
               break;
            }
            break;
        case 4:
            if (wide) {
              index = $scope.extras.indexOf(findById($scope.extras, value))
              $scope.extras.splice(index, 1)
              $scope.totalPrice = $scope.totalPrice - 25000
              wide = false;
               break;
            }
          default:
            break;
        }

      }
    });
  angular.bootstrap(document, ['archilogus']);

  //checkbox by code
  
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
    var percent = (parseInt(stap) / 5) * 100;

    $('.progress-bar').css({
      width: percent + '%'
    });
    $('.progress-bar').text("Stap " + stap + " van 5");

    //e.relatedTarget // previous tab

  })

  $('.first').click(function () {

    $('#myWizard a:first').tab('show')

  })