/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'omg-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button class="omg-button" type="button">
        <span class="omg-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
