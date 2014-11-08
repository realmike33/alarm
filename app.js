$(function() {
  var myFunc = function(){
    var time = moment().format('h:mm:ss a');
    $('.clock-container').text(time).addClass('clock');
    var currentTime = function(location, className){
      $(location).text(time).addClass(className);
    };

    currentTime('.clock-container', 'clock');  
  };



  setInterval(function(){
    myFunc();
  }, 1);

  var check = function(){
    $('button').timepicker();
    // var time = prompt('Set your Alarm', 'Please follow format: Hour:Minute');
    // var day = prompt('Is this am or pm?')
    // return time + day  
  };

  $('button').on('click', check)  



});  