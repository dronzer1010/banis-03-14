angular.module('starter').controller('SegmentostaffaddController', function(
  $scope, $state, $window, $location, $anchorScroll) {

  $scope.show1 = false;
  $scope.show2 = false;
  $scope.show3 = false;
  $scope.show4 = false;
  $scope.show5 = false;
  $scope.show6 = false;
  $scope.show7 = false;
  $scope.show8 = false;
  $scope.showOne = function() {
    //$scope.show1 = true;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.show8 = false;
    $scope.show1 = $scope.show1 ? false : true;
  };
  $scope.showTwo = function() {
    $scope.show1 = false;
    //$scope.show2 = true;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.show8 = false;
    $scope.show2 = $scope.show2 ? false : true;

  };
  $scope.showThree = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    //$scope.show3 = true;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.show8 = false;
    $scope.show3 = $scope.show3 ? false : true;
  };
  $scope.showFour = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    //$scope.show4 = true;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.show8 = false;
    $scope.show4 = $scope.show4 ? false : true;
  };
  $scope.showFive = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    //$scope.show5 = true;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.show8 = false;
    $scope.show5 = $scope.show5 ? false : true;
  };
  $scope.showSix = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    //$scope.show6 = true;
    $scope.show7 = false;
    $scope.show8 = false;
    $scope.show6 = $scope.show6 ? false : true;
  };
  $scope.showSeven = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    //$scope.show7 = true;
    $scope.show8 = false;
    $scope.show7 = $scope.show7 ? false : true;
  };
  $scope.showeight = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    //$scope.show8 = true;
    $scope.show8 = $scope.show8 ? false : true;
  };

  $scope.goBack = function() {
    $state.go('tab.more');
    // $window.history.back();
  };
  $scope.gomenuPage = function() {
    $state.go('tab.more');
  };

  $scope.groups = [];

  $scope.groups = [{
      name: 'Compensacion e incentivos',
      id: 1,
      items: [{
          que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
          ans: 'Si usted recibió un ajuste de salario en la 2da quincena del mes anterior, le corresponde la mitad de la diferencia, si su caso fuese de $50 a $75 en vale Panamá, la diferencia es $25 en vale Panamá, como solo laboró la mitad del mes, con su nuevo salario, le corresponde la mitad de la diferencia que serían $12.50. '
        }, {
          que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
          ans: 'Para que su vale Panamá llegue a su actual depto./ubicación, debe solicitar a su jefe inmediato, solicite el cambio de centro de costo a su socio estratégico (los cambios deben estar debidamente aprobados).  Si usted es de Sucursales, debe informarle a su gerente de sucursal, para que realice la solicitud al Analista de Admón. de Sucursales de su Regional. Es importante pueda asegurarse que la solicitud se realice antes de fin de mes, para que su vale Panamá llegue correctamente.'

        },

      ]
    }, {
      name: 'Valoracion de desempeno',
      id: 1,
      items: [{
          que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
          ans: 'Si usted recibió un ajuste de salario en la 2da quincena del mes anterior, le corresponde la mitad de la diferencia, si su caso fuese de $50 a $75 en vale Panamá, la diferencia es $25 en vale Panamá, como solo laboró la mitad del mes, con su nuevo salario, le corresponde la mitad de la diferencia que serían $12.50. '
        }

      ]
    },
    //  { name: 'Group1', id: 1, items: [{ subName: 'SubGrup1', subId: '1-1' }, { subName: 'SubGrup1', subId: '1-2' }]},
  ];


  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

});
