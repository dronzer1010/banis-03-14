// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'ui.rCalendar', 'ion-datetime-picker'])

.run(function($ionicPlatform, $cordovaDevice, $rootScope, Session, $state, $location,$cordovaFileTransfer) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && $cordovaDevice){
      AppSettings.platform = $cordovaDevice.getPlatform(); //Update platform type in the constant object
    }

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    FCMPlugin.getToken(
        function(token){

          console.log('token : ' + token);

          AppSettings.deviceToken = token;
        },
        function(err){
          console.log('error retrieving token: ' + err);
        }
      );
  });

  // FCMPlugin.onNotification(
  //     function(data){
  //       if(data.wasTapped){
  //         //Notification was received on device tray and tapped by the user.
  //         console.log('tappded Data : ' + JSON.stringify(data));
  //         alert( JSON.stringify(data) );
  //       }else{
  //         //Notification was received in foreground. Maybe the user needs to be notified.
  //         console.log('foreground data Data : ' + JSON.stringify(data));
  //         alert( JSON.stringify(data) );
  //       }
  //     },
  //     function(msg){
  //       console.log('onNotification callback successfully registered: ' + msg);
  //     },
  //     function(err){
  //       console.log('Error registering onNotification callback: ' + err);
  //     }
  //   );

  if (Session.isLoggedIn() === false) {
    $location.path('/tab/login');
    // $state.go('tab.more');
    // event.preventDefault();
    return;
  }else {
    // $state.go('tab.beneficious');
    $location.path('/tab/more');
    console.log('login true called');
  }

  //for rootscope this is coment to solve issue of clicking:
  // $rootScope.$on('$stateChangeStart', function(event, toState, toParam, fromState, fromParam) {
  //   // console.log('tostate : ' + angular.toJson(toState, ' '));
  //   // console.log('Session.isLoggedIn() : ' + Session.isLoggedIn());
  //   if (Session.isLoggedIn() === false) {
  //     $location.path('/tab/login');
  //     // $state.go('tab.more');
  //     // event.preventDefault();
  //     return;
  //   }else {
  //     // $state.go('tab.beneficious');
  //     $location.path('/tab/more');
  //     console.log('login true called');
  //   }
  // });


})
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
 /**/ 
   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'moreController'
  })

  // Each tab has its own nav history stack:

  .state('login', {
  url: '/login',
  templateUrl: 'templates/login.html',
  controller: 'loginController'
 })

  .state('tab.beneficious', {
    url: '/beneficious',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficious.html',
        controller: 'beneficiousController'
      }
    }
  })

  .state('tab.beneficiousSubCategory', {
    url: '/beneficiousSubCategory/:catId',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficiousSubCategory.html',
        controller: 'beneficiousSubCategoryController'
      }
    }
  })

  .state('tab.beneficiousCoupons', {
    url: '/beneficiousCoupons/:catId/:catName',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficiousCoupons.html',
        controller: 'beneficiosCoupenController'
      }
    }
  })


  .state('tab.beneficiosDetailPage', {
    url: '/beneficiosDetailPage/:coupen_obj',
    views: {
      'tab-beneficious': {
        templateUrl: 'templates/beneficiosDetailPage.html',
        controller: 'beneficiosDetailController'
      }
    }
  })

  .state('tab.induccion', {
      url: '/induccion',
      views: {
        'tab-more': {
          templateUrl: 'templates/induccion.html',
          controller: 'induccionController'
        }
      }
    })
    .state('tab.entertanmento', {
        url: '/entertanmento',
        views: {
          'tab-more': {
            templateUrl: 'templates/entertanmento.html',
            controller: 'entertanmentoController'
          }
        }
      })
    .state('tab.nominacionIndividual', {
        url: '/nominacionIndividual',
        views: {
          'tab-more': {
            templateUrl: 'templates/nominacionIndividual.html',
            controller: 'nominacionIndividualController'
          }
        }
      })

      .state('tab.nominacionIndividualSelect', {
          url: '/nominacionIndividualSelect',
          views: {
            'tab-more': {
              templateUrl: 'templates/nominacionIndividualSelect.html',
              controller: 'nominacionIndividualSelectController'
            }
          }
        })

      .state('tab.nominacionSelectPage', {
          url: '/nominacionSelectPage',
          views: {
            'tab-more': {
              templateUrl: 'templates/nominacionSelectPage.html',
              controller: 'nominacionSelectPageController'
            }
          }
        })

        .state('tab.nominacionVotarPage', {
            url: '/nominacionVotarPage',
            views: {
              'tab-more': {
                templateUrl: 'templates/nominacionVotarPage.html',
                controller: 'nominacionSelectPageController'
              }
            }
          })



        .state('tab.nominacionCompletePage', {
            url: '/nominacionCompletePage',
            views: {
              'tab-more': {
                templateUrl: 'templates/nominacionCompletePage.html',
                controller: 'nominacionCompletePageController'
              }
            }
          })

          .state('tab.nominacionVotarCompletePage', {
              url: '/nominacionVotarCompletePage',
              views: {
                'tab-more': {
                  templateUrl: 'templates/nominacionVotarCompletePage.html',
                  controller: 'nominacionCompletePageController'
                }
              }
            })


    .state('tab.induccionCourse', {
        url: '/induccionCourse',
        views: {
          'tab-more': {
            templateUrl: 'templates/induccionCourse.html',
            controller: 'induccionCourseController'
          }
        }
      })

      .state('tab.induccionCourseVideoList', {
        url: '/induccionCourseVideoList',
        views: {
          'tab-more': {
            templateUrl: 'templates/induccionCourseVideoList.html',
            controller: 'induccionCourseContentController'
          }
        }
      })

      .state('tab.induccionCoursePresentationList', {
        url: '/induccionCoursePresentationList',
        views: {
          'tab-more': {
            templateUrl: 'templates/induccionCoursePresentationList.html',
            controller: 'induccionCourseContentController'
          }
        }
      })

      .state('tab.induccionCourseDinamica', {
        url: '/induccionCourseDinamica',
        views: {
          'tab-more': {
            templateUrl: 'templates/induccionCourseDinamica.html',
            controller: 'induccionCourseDinamicaController'
          }
        }
      })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })


    .state('tab.more', {
      url: '/more',
      views: {
        'tab-more': {
          templateUrl: 'templates/more.html',
          controller: 'moreController'
        }
      }
    })

    .state('tab.formacionSubmenu', {
      url: '/formacionSubmenu',
      views: {
        'tab-more': {
          templateUrl: 'templates/formacionSubmenu.html',
          controller: 'formacionSubmenuController'
        }
      }
    })



    .state('tab.noticiasPage', {
      url: '/noticiasPage',
      views: {
        'tab-more': {
          templateUrl: 'templates/noticiasPage.html',
          controller: 'noticiasPageController'
        }
      }
    })
    .state('tab.noticiasDetailPage', {
      url: '/noticiasDetailPage/:data_obj',
      views: {
        'tab-more': {
          templateUrl: 'templates/noticiasDetailPage.html',
          controller: 'noticiasDetailPageController'
        }
      }
    })

    .state('tab.noticasDetail', {
      url: '/noticasDetail/:noticisaId',
      views: {
        'tab-noticas': {
          templateUrl: 'templates/noticasDetail.html',
          controller: 'noticiasDetailController'
        }
      }
    })


    .state('tab.noticasComment', {
      url: '/noticasComment',
      views: {
        'tab-noticas': {
          templateUrl: 'templates/noticasComment.html',
          controller: 'noticiasDetailController'
        }
      }
    })

    .state('tab.contactos', {
      url: '/contactos',
      views: {
        'tab-more': {
          templateUrl: 'templates/contactos.html',
          controller: 'contactosController'
        }
      }
    })

    .state('tab.contactosDetailPage', {
      url: '/contactosDetailPage/:contactos_data',
      views: {
        'tab-more': {
          templateUrl: 'templates/contactosDetailPage.html',
          controller: 'contactosDetailController'
        }
      }
    })

    .state('tab.calendario', {
      url: '/calendario',
      views: {
        'tab-more': {
          templateUrl: 'templates/calendario.html',
          controller: 'calendarioController'
        }
      }
    })

    .state('tab.calendarioDetail', {
      url: '/calendarioDetail/:eventId',
      views: {
        'tab-more': {
          templateUrl: 'templates/calendarioDetail.html',
          controller: 'calendarioDetailController'
        }
      }
    })



    .state('tab.calendarioCreateEvent', {
      url: '/calendarioCreateEvent/:event_obj',
      views: {
        'tab-more': {
          templateUrl: 'templates/calendarioCreateEvent.html',
          controller: 'calendarioCreateEventController'
        }
      }
    })

    .state('tab.weather', {
      url: '/weather',
      views: {
        'tab-more': {
          templateUrl: 'templates/weather.html',
          controller: 'weatherController'
        }
      }
    })

  .state('tab.formulario', {
    url: '/formulario',
    views: {
      'tab-more': {
        templateUrl: 'templates/formulario.html',
        controller: 'formularioController'
      }
    }
  })



  .state('tab.vacaciones', {
    url: '/vacaciones',
    views: {
      'tab-more': {
        templateUrl: 'templates/vacaciones.html',
        controller: 'vacacionesController'
      }
    }
  })

  .state('tab.cuenta', {
    url: '/cuenta',
    views: {
      'tab-more': {
        templateUrl: 'templates/cuenta.html',
        controller: 'cuentaController'
      }
    }
  })

  .state('tab.reconocimiento', {
    url: '/reconocimiento',
    views: {
      'tab-more': {
        templateUrl: 'templates/reconocimiento.html',
        controller: 'reconocimientoController'
      }
    }
  })

  .state('tab.reconocimientoSubmenu', {
    url: '/reconocimientoSubmenu',
    views: {
      'tab-more': {
        templateUrl: 'templates/reconocimientoSubmenu.html',
        controller: 'reconocimientoSubmenuController'
      }
    }
  })

  .state('tab.ghContigo', {
    url: '/ghContigo',
    views: {
      'tab-ghcontigo': {
        templateUrl: 'templates/ghContigo.html',
        controller: 'ghContigoController'
      }
    }
  })

  .state('tab.directory', {
     url: '/directory',
     views: {
       'tab-more': {
         templateUrl: 'templates/directory.html',
         controller: 'directoryController'
       }
     }
   })

   .state('tab.vacantes', {
      url: '/vacantes',
      views: {
        'tab-more': {
          templateUrl: 'templates/vacantes.html',
          controller: 'vacantesController'
        }
      }
    })

    .state('tab.vacantesLineamientos', {
       url: '/vacantesLineamientos',
       views: {
         'tab-more': {
           templateUrl: 'templates/vacantesLineamientos.html',
           controller: 'vacantesController'
         }
       }
     })
     .state('tab.vacantesReclutar', {
        url: '/vacantesReclutar',
        views: {
          'tab-more': {
            templateUrl: 'templates/vacantesReclutar.html',
            controller: 'vacantesController'
          }
        }
      })
	  

      .state('tab.vacantesSubMenu', {
         url: '/vacantesSubMenu',
         views: {
           'tab-more': {
             templateUrl: 'templates/vacantesSubMenu.html',
             controller: 'vacantesSubMenuController'
           }
         }
       })
       .state('tab.vacantesDetail', {
          url: '/vacantesDetail/:vacancyId',
          views: {
            'tab-more': {
              templateUrl: 'templates/vacantesDetail.html',
              controller: 'vacantesDetailController'
            }
          }
        })

        .state('tab.preguntasFrecuentes', {
           url: '/preguntasFrecuentes',
           views: {
             'tab-more': {
               templateUrl: 'templates/preguntasFrecuentes.html',
               controller: 'preguntasFrecuentesController'
             }
           }
         })

         .state('tab.Segmentostaffadd', {
            url: '/Segmentostaffadd',
            views: {
              'tab-more': {
                templateUrl: 'templates/segmentostaffadd.html',
                controller: 'SegmentostaffaddController'
              }
            }
          })

          .state('tab.Calendariode', {
             url: '/Calendariode',
             views: {
               'tab-more': {
                 templateUrl: 'templates/calendariode.html',
                 controller: 'CalendariodeController'
               }
             }
           })

           .state('tab.Beneficios', {
              url: '/Beneficios',
              views: {
                'tab-beneficios': {
                  templateUrl: 'templates/beneficios.html',
                  controller: 'BeneficiosController'
                }
              }
            })



  .state('tab.noticas', {
    url: '/noticas',
    views: {
      'tab-noticas': {
        templateUrl: 'templates/noticas.html',
        controller: 'noticasController'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
