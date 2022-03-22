import { Component, h } from '@stencil/core';

@Component({
  tag: 'yat-root',
  styleUrl: 'yat-root.scss',
  shadow: true,
})
export class YatRoot {
  /**
   * A control variable in order to determine if the app is running in a small breakpoint (under 769px) or not
   */
  private isSmallBreakpoint: boolean;

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  componentWillLoad() {
    this.isSmallBreakpoint = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 769;
  }

  render() {
    return (
      <div>
        <nav class="navbar has-background-black has-text-dark" role="navigation" aria-label="main navigation">
          <stencil-route-link url={'/'} activeClass="active">
            {this.isSmallBreakpoint ? (
              <div class="navbar-brand is-align-items-center">
                <h1 class="navbar-item title has-text-white is-4">YAT</h1>
              </div>
            ) : (
              <div class="navbar-brand is-align-items-center">
                <figure class="image is-48x48">
                  <img src="./../../../assets/icon/icon.png" alt="adidas-icon"></img>
                </figure>
                <h1 class="navbar-item title has-text-white is-3">Your Adidas Team</h1>
              </div>
            )}
          </stencil-route-link>
          <div class="navbar-other">
            <stencil-route-link url={'/create-your-team/98'} activeClass="active">
              <p class={`${this.isSmallBreakpoint ? 'is-6' : 'is-5'} navbar-item title has-text-white`}>Create your Team</p>
            </stencil-route-link>
            <stencil-route-link url={'/your-team'} activeClass="active">
              <p class={`${this.isSmallBreakpoint ? 'is-6' : 'is-5'} navbar-item title has-text-white`}>Your Team</p>
            </stencil-route-link>
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
