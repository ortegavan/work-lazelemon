window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-134237019-3');

document.querySelector('.mobile-open').addEventListener('click', () => {
	document.querySelector('nav').classList.add('show');
	document.querySelector('.social').classList.add('show');
	document.querySelector('.mobile-close').classList.add('show');
});

document.querySelector('.mobile-close').addEventListener('click', () => {
	document.querySelector('nav').classList.remove('show');
	document.querySelector('.social').classList.remove('show');
	document.querySelector('.mobile-close').classList.remove('show');
});

function aceitarCookies() {
	localStorage.setItem('cookies', '1');
	document.querySelector('.cookies').classList.add('hide');
}

(function exibirCookies() {
	let alias = 'cookies';
	let cookies;

	if (localStorage.getItem(alias) != null) {
		cookies = parseInt(localStorage.getItem(alias));
		if (cookies == 1) {
			document.querySelector('.cookies').classList.add('hide');
		}
	}
})();
