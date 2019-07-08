import { html } from 'lit-html'

import LitRender from '../libs/litRender'
// import store from '../libs/store'
import {
	add,
} from '../libs/actions'

import './exam-element.js'

class AppMain extends LitRender(HTMLElement) {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })

		this.invalidate()
	}

	add(title) {
		add(title)
	}

	render() {
		return html` 
		<link rel="stylesheet" type="text/css" href="./src/css/App.css">
		<main>
			<exam-element />			
		</main>
        `
	}
}

customElements.define(`app-main`, AppMain)
