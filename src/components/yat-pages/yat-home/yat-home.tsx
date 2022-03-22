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
        <section class="yat-home--banner section is-medium">
          <img src="./../../../assets/img/banner_adidas_02.jpg" alt="adidas-banner" />
        </section>
        <section class="yat-home--national-teams hero is-large">
          <h1 class="title">Create your team</h1>
          <h2 class="subtitle">Select players from the different national teams around the World and assign them to your own adidas team.</h2>
          <yat-all-national-teams />
        </section>
      </div>
    );
  }
}
