module.exports = function(due_date, days_deadline = 60) {
  var current_date = new Date(),
      utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate()),
      utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate()),
      days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    var days_late = days_deadline-days,
        opacity = (days_late*100/days_deadline)/100;

    opacity = (opacity < 0) ? 0 : opacity;
    opacity = (opacity > 1) ? 1 : opacity;

    if (opacity >= 0 && opacity <= 1) {
      document.getElementsByTagName("BODY")[0].style.opacity = opacity;
    }
  }
};
