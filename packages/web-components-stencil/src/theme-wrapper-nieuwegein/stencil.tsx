/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import style from '@opengemeenten/nieuwegein-design-tokens/dist/index.css';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'omg-theme-wrapper-nieuwegein',
  shadow: true,
})
export class ThemeWrapperNieuwegein {
  render() {
    return (
      <div class="nieuwegein-theme">
        <style>{style}</style>
        <slot></slot>
      </div>
    );
  }
}
