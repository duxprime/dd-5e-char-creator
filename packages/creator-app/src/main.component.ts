import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('app-main')
export class AppMain extends LitElement {
    public static styles = css`
        p {
            color: red;
        }
    `
    protected render() {
        return html`<p>This is the root component.</p>`
    }
}
