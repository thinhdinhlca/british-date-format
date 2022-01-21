window.function = function (year,month,day,hour,minute) {

year = year.value ?? "";
month = month.value ?? "";
day = day.value ?? "";
hour = hour.value ?? "";
minute = minute.value ?? "";

const s = new Date(year, month-1, day, hour, minute, 0, 0).replace(/-/g, '/');

return s.toLocaleString("en-AU", {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true}).toString();

}
