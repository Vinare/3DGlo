let date = new Date()
let dayOfWeek = getWeekDay(date)
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let message = '';

function getWeekDay(date) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] 

  return days[date.getDay()]
}

// определим фразу приветствия в зависимости от местного времени пользователя 

if (hours <= 6) {
  message = 'Доброй ночи';
} else if (hours > 7 && hours <= 12) {
  message = 'Доброе утро';
} else if (hours > 12 && hours<= 18) {
  message = 'Добрый день';
} else {
  message = 'Добрый вечер';
}

console.log(date);
console.log(todayDate);
console.log(dayOfWeek);

