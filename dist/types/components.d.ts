import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  AqNav as AqNav
} from './components/aq-nav';

declare global {
  interface HTMLAqNavElement extends AqNav, HTMLStencilElement {
  }
  var HTMLAqNavElement: {
    prototype: HTMLAqNavElement;
    new (): HTMLAqNavElement;
  };
  interface HTMLElementTagNameMap {
    "aq-nav": HTMLAqNavElement;
  }
  interface ElementTagNameMap {
    "aq-nav": HTMLAqNavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "aq-nav": JSXElements.AqNavAttributes;
    }
  }
  namespace JSXElements {
    export interface AqNavAttributes extends HTMLAttributes {
      name?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
