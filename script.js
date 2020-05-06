$(document).ready(function () {


  $('.saveBtn').ready(function () {
    const value=$(this).siblings('.description').val();
    const time=$(this).parent().attr('id');
    localStorage.setItem(time, value);


  });

  function hourUpdater() {
    const currentHour=moment().hours();
    $('.time-block').each(function () {
      const blockHour=parseInt($(this).attr('id').split('-')[1]);
      console.log(currentHour, blockHour)

      if (blockHour < currentHour) {
        console.log('past');
        $(this).addClass('past');

      }
      else if (blockHour === currentHour) {
        console.log('present');
        $(this).removeClass('past');
        $(this).addClass('present');
      }
      else {
        console.log('future');
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  hourUpdater();
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});