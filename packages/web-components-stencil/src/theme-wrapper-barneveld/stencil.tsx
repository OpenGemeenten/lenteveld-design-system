/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import style from '@opengemeenten/barneveld-design-tokens/dist/index.css';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'omg-theme-wrapper-barneveld',
  shadow: true,
})
export class ThemeWrapperBarneveld {
  render() {
    return (
      <div class="barneveld-theme">
        <style>{style}</style>
        <slot></slot>
      </div>
    );
  }
}
