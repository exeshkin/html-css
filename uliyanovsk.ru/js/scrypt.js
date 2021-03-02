function clock() {
	let hour = document.getElementById('hour');
	let minute = document.getElementById('minute');
	let seconds = document.getElementById('seconds');

	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

	h = (h < 10) ? '0' + h : h;
	m = (m < 10) ? '0' + m : m;
	s = (s < 10) ? '0' + s : s;

	hour.innerHTML = h;
	minute.innerHTML = m;
	seconds.innerHTML = s;
}

function dayWeek() {
	let dayWeek = document.getElementById('dayWeek');

	var days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	];

	let dw = new Date().getDay();

	dayWeek.innerHTML = days[dw];
}

var interval = setInterval(dayWeek, 0);
var interval = setInterval(clock, 0);