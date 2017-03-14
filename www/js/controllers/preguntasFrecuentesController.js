angular.module('starter').controller('preguntasFrecuentesController', function($scope, $state, $window) {

  $scope.show1 = false;
  $scope.show2 = false;
  $scope.show3 = false;
  $scope.show4 = false;
  $scope.show5 = false;
  $scope.show6 = false;
  $scope.show7 = false;
  $scope.show8 = false;
  $scope.showOne = function() {
    //  $scope.show1 = true;
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
    //  $scope.show2 = true;
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
    //  $scope.show3 = true;
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
    //  $scope.show4 = true;
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
    //  $scope.show5 = true;
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
    $scope.show8 = false;
    //$scope.show7 = true;
    $scope.show7 = $scope.show7 ? false : true;
  };

  $scope.showEight = function() {
    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.show8 = $scope.show8 ? false : true;
  };

  // for sub beneficious category
    $scope.beneficious1 = false;
    $scope.beneficious2 = false;
    $scope.beneficious3 = false;
    $scope.beneficious4 = false;
    $scope.beneficious5 = false;

    $scope.beneficiousShowOne = function () {
      $scope.beneficious1 = $scope.beneficious1 ? false : true;
      $scope.beneficious2 = false;
      $scope.beneficious3 = false;
      $scope.beneficious4 = false;
      $scope.beneficious5 = false;
    };
    $scope.beneficiousShowTwo = function () {
      $scope.beneficious1 = false;
      $scope.beneficious2 = $scope.beneficious2 ? false : true;
      $scope.beneficious3 = false;
      $scope.beneficious4 = false;
      $scope.beneficious5 = false;
    };
    $scope.beneficiousShowThree = function () {
      $scope.beneficious1 = false;
      $scope.beneficious2 = false;
      $scope.beneficious3 = $scope.beneficious3 ? false : true;
      $scope.beneficious4 = false;
      $scope.beneficious5 = false;
    };
    $scope.beneficiousShowFour = function () {
      $scope.beneficious1 = false;
      $scope.beneficious2 = false;
      $scope.beneficious3 = false;
      $scope.beneficious4 = $scope.beneficious4 ? false : true;
      $scope.beneficious5 = false;
    };
    $scope.beneficiousShowFive = function () {
      $scope.beneficious1 = false;
      $scope.beneficious2 = false;
      $scope.beneficious3 = false;
      $scope.beneficious4 = false;
      $scope.beneficious5 = $scope.beneficious5 ? false : true;
    };
  //

  // for sub Mi-pago category
    $scope.mi1 = false;
    $scope.mi2 = false;
    $scope.mi3 = false;
    $scope.mi4 = false;
    $scope.mi5 = false;

    $scope.miShowOne = function () {
      $scope.mi1 = $scope.mi1 ? false : true;
      $scope.mi2 = false;
      $scope.mi3 = false;
      $scope.mi4 = false;
      $scope.mi5 = false;
    };
    $scope.miShowTwo = function () {
      $scope.mi1 = false;
      $scope.mi2 = $scope.mi2 ? false : true;
      $scope.mi3 = false;
      $scope.mi4 = false;
      $scope.mi5 = false;
    };
    $scope.miShowThree = function () {
      $scope.mi1 = false;
      $scope.mi2 = false;
      $scope.mi3 = $scope.mi3 ? false : true;
      $scope.mi4 = false;
      $scope.mi5 = false;
    };
    $scope.miShowFour = function () {
      $scope.mi1 = false;
      $scope.mi2 = false;
      $scope.mi3 = false;
      $scope.mi4 = $scope.mi4 ? false : true;
      $scope.mi5 = false;
    };
    $scope.miShowFive = function () {
      $scope.mi1 = false;
      $scope.mi2 = false;
      $scope.mi3 = false;
      $scope.mi4 = false;
      $scope.mi5 = $scope.mi5 ? false : true;
    };
  //

  // for sub Mi-Equipo category
    $scope.miEquipo1 = false;
    $scope.miEquipo2 = false;
    $scope.miEquipo3 = false;


    $scope.miEquipoShowOne = function () {
      $scope.miEquipo1 = $scope.miEquipo1 ? false : true;
      $scope.miEquipo2 = false;
      $scope.miEquipo3 = false;

    };
    $scope.miEquipoShowTwo = function () {
      $scope.miEquipo1 = false;
      $scope.miEquipo2 = $scope.miEquipo2 ? false : true;
      $scope.miEquipo3 = false;

    };
    $scope.miEquipoShowThree = function () {
      $scope.miEquipo1 = false;
      $scope.miEquipo2 = false;
      $scope.miEquipo3 = $scope.miEquipo3 ? false : true;

    };

  //

  // for sub concurso category
    $scope.concurso1 = false;
    $scope.concurso2 = false;
    $scope.concurso3 = false;


    $scope.concursoShowOne = function () {
      $scope.concurso1 = $scope.concurso1 ? false : true;
      $scope.concurso2 = false;
      $scope.concurso3 = false;

    };
    $scope.concursoShowTwo = function () {
      $scope.concurso1 = false;
      $scope.concurso2 = $scope.concurso2 ? false : true;
      $scope.concurso3 = false;

    };
    $scope.concursoShowThree = function () {
      $scope.concurso1 = false;
      $scope.concurso2 = false;
      $scope.concurso3 = $scope.concurso3 ? false : true;

    };

  //


  $scope.goBack = function() {
    $state.go('tab.more');
    // $window.history.back();
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.groups = [];

 $scope.groups = [
   { name: 'Compensacion e incentivos', id: 1,
    items: [{ que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
              ans: 'Si usted recibió un ajuste de salario en la 2da quincena del mes anterior, le corresponde la mitad de la diferencia, si su caso fuese de $50 a $75 en vale Panamá, la diferencia es $25 en vale Panamá, como solo laboró la mitad del mes, con su nuevo salario, le corresponde la mitad de la diferencia que serían $12.50. '
            },
            { que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
              ans: 'Para que su vale Panamá llegue a su actual depto./ubicación, debe solicitar a su jefe inmediato, solicite el cambio de centro de costo a su socio estratégico (los cambios deben estar debidamente aprobados).  Si usted es de Sucursales, debe informarle a su gerente de sucursal, para que realice la solicitud al Analista de Admón. de Sucursales de su Regional. Es importante pueda asegurarse que la solicitud se realice antes de fin de mes, para que su vale Panamá llegue correctamente.'

            },

          ]
        },
   { name: 'Valoracion de desempeno', id: 1,
   items: [{ que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
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
