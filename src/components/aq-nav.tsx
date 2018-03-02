import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'aq-nav',
  styleUrl: 'aq-nav.less'
})
export class AqNav {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <nav class="uk-navbar uk-navbar-container">

        <div class="uk-navbar-left">
          <span class="uk-navbar-item uk-logo">
            <slot name="logo"></slot>
          </span>
          <slot name="navigation"></slot>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li><a href="https://github.com/acquia/acquia-uikit" target="_blank">GitHub</a></li>
          </ul>
        </div>

      </nav>
    );
  }
}
