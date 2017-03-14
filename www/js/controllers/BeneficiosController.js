angular.module('starter').controller('BeneficiosController', function($scope,
    $state, $window, $location, $anchorScroll, $timeout,$ionicPopup, $cordovaFileTransfer, $ionicLoading) {

    $scope.show1 = false;
    $scope.show2 = false;
    $scope.show3 = false;
    $scope.show4 = false;
    $scope.show5 = false;
    $scope.show6 = false;
    $scope.show7 = false;
    $scope.showOne = function() {
        //  $scope.show1 = true;
        $scope.show2 = false;
        $scope.show3 = false;
        $scope.show4 = false;
        $scope.show5 = false;
        $scope.show6 = false;
        $scope.show7 = false;
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
        $scope.show7 = $scope.show7 ? false : true;
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
        name: 'Sección de Seguro de vida y salud',
        id: 1,
        items: [{
            ans: 'Banistmo y subsidiaria, provee una póliza de vida y salud cubierta al 100% para todos los colaboradores permanentes. En el plan de salud, se puede vincular a los dependientes del colaborador (cónyuge e hijos) en donde el colaborador solo debe cubrir un 20% del costo. El plan médico incluye beneficio dental,  beneficio óptico, hospitalización, visitas a médicos generalistas, especialistas y sub-especialistas, entre otros. '
        }]
    }, {
        name: 'Sección de Plan de ahorro para el retiro',
        id: 1,
        items: [{
                ans: 'Banistmo ofrece un plan de ahorros contributivo, colaborando con un generoso aporte en donde se iguala su aportación hasta un porciento máximo, para ayudarles a aumentar los ahorros para su retiro. El fondo de Pensiones te permite planificar tu jubilación y asegurar tu bienestar económico y el de tu familia, de tal manera, que cuando llegues a edad de retiro, pueda mantener la misma calidad de vida que tenías cuando estabas laborando.'
            }

        ]
    }, ];

    // $scope.groups = [
    //   { name: 'Sección de Seguro de vida y salud', id: 1,
    //    items: [{ que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
    //              ans: 'Banistmo y subsidiaria, provee una póliza de vida y salud cubierta al 100% para todos los colaboradores permanentes. En el plan de salud, se puede vincular a los dependientes del colaborador (cónyuge e hijos) en donde el colaborador solo debe cubrir un 20% del costo. El plan médico incluye beneficio dental,  beneficio óptico, hospitalización, visitas a médicos generalistas, especialistas y sub-especialistas, entre otros. '
    //            }
    //          ]
    //        },
    //   { name: 'Sección de Plan de ahorro para el retiro', id: 1,
    //   items: [{ que: '¿Por qué recibí vales de menos, si mi salario aumento? ',
    //             ans: 'Si usted recibió un ajuste de salario en la 2da quincena del mes anterior, le corresponde la mitad de la diferencia, si su caso fuese de $50 a $75 en vale Panamá, la diferencia es $25 en vale Panamá, como solo laboró la mitad del mes, con su nuevo salario, le corresponde la mitad de la diferencia que serían $12.50. '
    //           }
    //
    //         ]
    //   },
    // ];


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

    function gotFS(fileSystem) {
        return fileSystem.root.getDirectory("data", { create: true }, gotDir);
    }


    $scope.download = function(url) {

        // Confirm popup code

        // When button is clicked, the popup will be shown...
        // $scope.showConfirm = function() {

        var confirmPopup = $ionicPopup.confirm({
            //  title: 'Descarga',
            template: 'Esta seguro que quiere descargar este archivo en la carpeta Banistmo?',
            cancelText: 'Cancelar',
            okText: 'Aceptar'
        });

        confirmPopup.then(function(res) {
            if (res) {
                console.log(ionic.platform);
                if (ionic.platform == "android") {
                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner><br>Esperar por favor...',
                    });
                    // var url = "http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20160427_BM_Cv51_56f33d0526d1a5.59154201.jpg";
                    // var targetPath = window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS) + 'x.jpg';
                    // File name only
                    var filename = url.split("/").pop();

                    // Save location
                    var targetPath = cordova.file.externalRootDirectory + 'Banistmo/' + filename;
                    // alert(targetPath)
                    // var targetPath = "///download/testImage.png";
                    var trustHosts = true;
                    var options = {};
                    // alert(targetPath);
                    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                        .then(function(result) {
                            // Success!

                            // An alert dialog
                            $ionicPopup.alert({

                                template: 'El archivo de descargo con exito',
                                okText: 'Cerrar'
                            });

                            //        alert("El archivo de descargo con exito");
                            $ionicLoading.hide();
                        }, function(err) {
                            // Error
                            // alert(JSON.stringify(err));
                            $ionicPopup.alert({
                                //  title: 'Don\'t eat that!',
                                template: 'Se encontro algun error'
                            });
                            //alert("Se encontro algun error");
                            $ionicLoading.hide();
                        });
                } else {
                    window.open(url, '_system', 'location=yes');
                }
                console.log('Sure!');
            } else {
                console.log('Not sure!');
            }
	
      });
		
   };

})				