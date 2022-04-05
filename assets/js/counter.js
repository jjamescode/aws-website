const countEl = document.getElementById('count');

updateCounter();

function updateCounter() {
	fetch('https://api.countapi.xyz/update/jalandajames.cyou/resume/?amount=1')
		.then(res => res.json())
		.then(res => { countEl.innerHTML = res.value;
	});
}
