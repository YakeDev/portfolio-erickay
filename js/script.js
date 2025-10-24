//script.js

document.addEventListener('DOMContentLoaded', () => {
	// Sélecteurs cohérents avec le HTML
	const menu = document.querySelector('.menu')
	const menuToggle = document.querySelector('.menu_toggle')
	const navBar = document.querySelector('.navbar')

	menuToggle.addEventListener('click', () => {
		menuToggle.classList.toggle('active')
		menu.classList.toggle('visible')
		navBar.classList.toggle('responsive')
		menu.style.transition = 'all 1s ease 0s'

		// Bloquer/débloquer le scroll de la page
		document.body.classList.toggle(
			'menu-open',
			menu.classList.contains('visible')
		)
	})
})
