/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import '@utrecht/web-component-library-react';
import style from '@opengemeenten/lenteveld-design-tokens/dist/index.css';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'omg-theme-wrapper-lenteveld',
  shadow: true,
})
export class ThemeWrapperLenteveld {
  render() {
    return (
      <div class="lenteveld-theme">
        <style>{style}</style>
        <slot></slot>
      </div>
    );
  }
}
