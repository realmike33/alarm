$(function() {
  var alarms = [];
  var audio = new Audio('alarm1.mp3');
  var time = moment();
  $('.clock-container').text(time.format('h:mm:ss a')).addClass('clock');
  var myFunc = function(){
    time = moment();
    var currentTime = function(location, className){
      $(location).text(time.format('h:mm:ss a')).addClass(className);
    };
    currentTime('.clock-container', 'clock'); 
    alarms.forEach(function(val){
      var diff = time.diff(val, 'seconds');
      if(diff === 1){
        audio.play();
      }
    }) 
  };
  window.check = setInterval(function(){
    myFunc();
  }, 1000);

 $('button').on('click', function(){
  var userHours = $('input.time')[0].valueAsNumber;
  var userMinutes = $('input.time')[1].valueAsNumber;
  var userAM = $('input.time')[2].checked;
  var userPM = $('input.time')[3].checked;
  var dayTime = !!userAM ? "AM" : "PM";
  var alarmTime = userHours + ':' + userMinutes + dayTime; 
  var alarmMoment = moment({hour: userHours, minute: userMinutes})
  alarms.push(alarmMoment);
  var li = '<li class="'+ alarmTime +'">' + alarmTime + '</li>'
    console.log(alarmTime, 'UserTime')
  }) 
});  