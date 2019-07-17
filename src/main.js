<<<<<<< HEAD
import './components/page-main.js'
=======
import './components/App.js'
import './components/Login.js'
>>>>>>> f59ad0b49c8dd1970508b2f41ea8d11720885eb6

export class Main {
	static init() {
		this.loadingDOM()

<<<<<<< HEAD
=======
		// PJAX 방식
		// this._onPopstate()
		// this._onClickAnchor()
		// this.router(`/`)

>>>>>>> f59ad0b49c8dd1970508b2f41ea8d11720885eb6
		this.router()
			.isRoute()
			.otherwise()
			.pushUrl()
	}

<<<<<<< HEAD
	static router() {
		let path = location.pathname
		let isContinue = true
		if (path === `/`) {path = `/main`}		
		return {
			isRoute() {
				if (isContinue) {
					Main.renderPage(`page-${path.split(`/`)[1]}`, path)
=======
	static _onPopstate() {
		window.addEventListener(`popstate`, event => {
			console.info(`[popstate]`, event.state)
			this.router(event.state.path)
		})
	}

	static _onClickAnchor() {
		document.addEventListener(`click`, event => {
			if (!event.target || event.target.nodeName !== `A`) {
				return
			}
			event.preventDefault()
		
			const path = event.target.getAttribute(`href`)
		
			history.pushState({ path }, null, path)
		
			this.router(path)
		})
	}

	// PJAX 방식
	// static get routes() {
	// 	return {
	// 		'/': function () {
	// 			Main.renderPage(`app-main`, `/`)
	// 		},
	// 		'/login': function () {
	// 			Main.renderPage(`login-main`, `/login`)
	// 		},
	// 		otherwise() {
	// 			Main.exceptDOM()
	// 		},
	// 	}
	// }

	// static router(path) {
	// 	(this.routes[path] || this.routes.otherwise)(path)
	// }

	static router() {
		let path = location.pathname
		let isContinue = true
		if (path === `/`) {path = `/app`}		
		return {
			isRoute() {
				if (isContinue) {
					Main.renderPage(`${path.split(`/`)[1]}-main`, path)
>>>>>>> f59ad0b49c8dd1970508b2f41ea8d11720885eb6
					isContinue = false
				}
				return this
			},
			otherwise() {
				if (isContinue) {
<<<<<<< HEAD
					Main._onLoad(() => history.replaceState({}, null, `/main`))
					Main.renderPage(`page-main`, path)
=======
					Main._onLoad(() => history.replaceState({}, null, `login`))
					Main.renderPage(`login-main`, path)
>>>>>>> f59ad0b49c8dd1970508b2f41ea8d11720885eb6
					isContinue = false
				}
				return this
			},
			pushUrl() {
				if (isContinue) {	
					Main._onLoad(() => history.pushState({}, null, path))
				}
			},
		}
	}

	static _onLoad(callback) {
		window.addEventListener(`load`, () => {			
			callback()
		})
	}

	static loadingDOM() {
		const root = document.querySelector(`main`)
		const loading = document.createElement(`div`)
				
		this.emptyDOM()
		loading.classList.add(`loading`)
		for (let i=0; i < 5; i++) {
			loading.appendChild(document.createElement(`span`))
		}
		root.appendChild(loading)
	}

	static renderPage(pageName, path) {		
		this.emptyDOM()
		const pageElement = document.createElement(pageName)
		document.querySelector(`main`).appendChild(pageElement)
		history.pushState({}, pageName, path)
	}	

	static emptyDOM() {
		document.querySelector(`main`).innerHTML = ``	
	}

	static exceptDOM() {
		document.querySelector(`main`).innerHTML = `No Route`
	}

	static renderWaitMain(callback) {
		if (document.querySelector(`main`)) {
			callback()
		} else {
			Main._onLoad(() => {
				callback()
			})		
		}		
	}
}

Main.init()
