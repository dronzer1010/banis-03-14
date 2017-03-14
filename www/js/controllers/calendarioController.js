angular.module('starter').controller('calendarioController', function($scope, $state, $window,$sce,$filter,$ionicModal, EventService, IonicPopupService) {

  $scope.events = {};
  // $scope.events.title = '';
  // $scope.events.description = '';
  $scope.events.selectedStartDate = '';
  $scope.events.selectedStartTime = '';

  $scope.goBack = function() {
    // $window.history.back();
    $state.go('tab.more');
  };
  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.goDetail = function (eventId) {
    $state.go('tab.calendarioDetail', { 'eventId': eventId });
  };



  ////for open modal :
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    console.log('before assign');
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });


  $scope.goCreateEventPage = function () {

    $state.go('tab.calendarioCreateEvent');
  };
  // $scope.openDetailPage = function () {
  //
  // };

  // $scope.$on('$ionicView.enter', function(ev) {
  //   if (ev.targetScope !== $scope)
  //     return;

  $scope.loadData = function () {
    EventService.getEvents().then(function(response) {
      if (response.success = "true") {
        $scope.acceptedEvents = response.data;
        $scope.calendar.eventSource =  createEvents($scope.acceptedEvents);
      // console.log('event data...  : ' + angular.toJson($scope.acceptedEvents));
      // console.log('events data at modal : ' + angular.toJson(events , ' '));

      }
    }).catch(function(error) {
        // var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error);
        console.log('error : ' + angular.toJson(error, ' '));
    });
  };
    $scope.loadData();
  //
  // });

// var events = '';
  function createEvents(data) {
    // console.log('yes this function calling....'+ angular.toJson(data));
    var events = [];
    for (var i = 0; i < data.length; i += 1) {
      var startDate = new Date(data[i].startDate);
      var endDate = new Date(data[i].endDate);
      var description = data[i].description;

      // var startTime = new Date(data[i].startTime);
      // var endTime = new Date(data[i].endTime);

      // var eventStartTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startTime.getUTCHours(), startTime.getUTCMinutes());
      // var eventEndTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endTime.getUTCHours(), endTime.getUTCMinutes());

      var eventStartTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      var eventEndTime = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

      // console.log('eventStartTime ' + eventStartTime);
      // console.log('eventEndTime : ' + eventEndTime);
      // console.log('description,,,, : ' + description);

      events.push({
        title: data[i].event,
        startTime: eventStartTime,
        endTime: eventEndTime,
        description: data[i].description,
        allDay: false
      });
      // console.log('events  data...: ' + angular.toJson(events , ' '));
    }
    return events;
  }

  $scope.onDoubleTap = function(selectedTime, events,startTime, endTime) {
    console.log('Selected time.....: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0));


    $scope.events.selectedStartDate = selectedTime;
    $scope.events.selectedStartTime = selectedTime;
    console.log('events at onDoubleTap : ' + angular.toJson(events , ' '));
    $scope.modal.show();
      // if () {
        // $state.go('tab.calendarioCreateEvent', {
        //   'event_obj': JSON.stringify($scope.acceptedEvents)
        // });
      // }

  };


  // $scope.onViewTitleChanged = function(title) {
  //   $scope.viewTitle = title;
  // };
// for calender :

$scope.calendar = {};
$scope.changeMode = function(mode) {
  $scope.calendar.mode = mode;
};

$scope.loadEvents = function() {
  $scope.calendar.eventSource = createRandomEvents();
};

$scope.onEventSelected = function(event) {
  console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
};



$scope.today = function() {
  $scope.calendar.currentDate = new Date();
};

$scope.isToday = function() {
  var today = new Date(),
    currentCalendarDate = new Date($scope.calendar.currentDate);

  today.setHours(0, 0, 0, 0);
  currentCalendarDate.setHours(0, 0, 0, 0);
  return today.getTime() === currentCalendarDate.getTime();
};

});
