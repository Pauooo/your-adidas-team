import { Component, h } from '@stencil/core';

@Component({
  tag: 'yat-home',
  styleUrl: 'yat-home.scss',
  shadow: true,
})
export class YatHome {
  render() {
    return (
      <div class="yat-home">
        <section class="yat-home--intro section is-medium">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </section>
        <section class="yat-home--national-teams hero is-large is-black">
          <yat-all-national-teams />
        </section>
      </div>
    );
  }
}
