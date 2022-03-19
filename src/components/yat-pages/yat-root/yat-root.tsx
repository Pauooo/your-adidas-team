import { Component, h } from '@stencil/core';

@Component({
  tag: 'yat-root',
  styleUrl: 'yat-root.scss',
  shadow: true,
})
export class YatRoot {
  render() {
    return (
      <div>
        <nav class="navbar has-background-black has-text-dark" role="navigation" aria-label="main navigation">
          <stencil-route-link url={'/'}>
            <div class="navbar-brand is-align-items-center">
              <figure class="image is-32x32">
                <img src="./../../../assets/icon/icon.png"></img>
              </figure>
              <h1 class="navbar-item title has-text-white is-3">YAT - Your Adidas Team</h1>
            </div>
          </stencil-route-link>
          <div class="navbar-menu">
            <div class="navbar-end is-align-items-center">
              <stencil-route-link url={'/create-your-team/45'}>
                <p class="navbar-item title has-text-white is-5">Create your Team</p>
              </stencil-route-link>
              <stencil-route-link url={'/your-team'}>
                <p class="navbar-item title has-text-white is-5">Your Team</p>
              </stencil-route-link>
            </div>
          </div>
        </nav>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="yat-home" exact={true} />
              <stencil-route url="/create-your-team/:id" component="yat-create-your-team" />
              <stencil-route url="/your-team" component="yat-your-team-page" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
