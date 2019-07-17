import { html } from 'lit-html'

import LitRender from '../libs/litRender'
import Model from '../libs/model-two-way-bind.js'

class TwoWayBinding extends LitRender(HTMLElement) {
	constructor() {
		super()

		this._handlers = {}

		this.attachShadow({ mode: `open` })

		this.twoWayBind()

		this.invalidate(true)		
	}

	connectedCallback() {
		// const root = this.shadowRoot
		// const handlers = this._handlers	
	}

	disconnectedCallback() {
		// const root = this.shadowRoot
	}

	twoWayBind() {		
		this.timer = setInterval(this.onTick.bind(this), 1000)
		this.renderFunc = this.invalidate.bind(this)
		this.model = new Model(this.onChangeHandler.bind(this))
		this.requestRender = 0
	}

	// prop, oldValue, newValue 사용 가능
	onChangeHandler() {
		if (this.requestRender) {
			cancelAnimationFrame(this.requestRender)
		}
	
		this.requestRender = requestAnimationFrame(this.renderFunc)
	}

	onTick() {
		const now = new Date()
		this.model.hours = now.getHours()
		this.model.minutes = now.getMinutes()
		this.model.seconds = now.getSeconds()
	}

	render() {
		const { hours, minutes, seconds } = this.model
		return html`		
		${style}
    	<div class="two-way-binding">
			${hours} : ${minutes} : ${seconds}
		</div>
    	`
	}
}

const style = html`
<style>
.two-way-binding {
	display: -webkit-box;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	width: 300px;
	height: 100px;
	border: 1px solid black;
	background-color: #EEEEEE;		
}
</style>
`

customElements.define(`two-way-binding`, TwoWayBinding)
