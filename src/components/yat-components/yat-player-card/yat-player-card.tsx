import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { Player, YourTeamPlayerEvent } from '../../../types';
import { CssClassMap } from '../../../utils';

@Component({
  tag: 'yat-player-card',
  styleUrl: 'yat-player-card.scss',
  shadow: true,
})
export class YatPlayerCard {
  /**
   * A control variable in order to determine if the app is running in a small breakpoint (under 769px) or not
   */
  private isSmallBreakpoint: boolean;

  /**
   * Player to display
   */
  @Prop() player: Player;

  /**
   * Team name if the team is national
   */
  @Prop() nationalTeam?: string;

  /**
   * Event fired when the user want to remove or add a player to YourTeam
   */
  @Event()
  movePlayerEvent!: EventEmitter<YourTeamPlayerEvent>;

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  componentWillLoad() {
    this.isSmallBreakpoint = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 769;
  }

  /**
   * Players click handler
   */
  private playerClickHandler() {
    const data: YourTeamPlayerEvent = {
      player: this.player,
      originalTeam: this.nationalTeam,
      action: !!this.nationalTeam ? 'add' : 'remove',
    };
    this.movePlayerEvent.emit(data);
  }

  render() {
    const setTagPositionClass: CssClassMap = {
      'is-primary': this.player.position === 'Defender',
      'is-danger': this.player.position === 'Attacker',
      'is-info': this.player.position === 'Midfielder',
      'is-warning': this.player.position === 'Goalkeeper',
      'is-success': !this.player.position,
      'tag': true,
    };

    return (
      <div class="yat-player-card card">
        {!this.isSmallBreakpoint && (
          <div class="card-image">
            <figure class="image is-1by1">
              <img src="./../../../assets/img/athlete.png" alt="athlete-avatar"></img>
            </figure>
          </div>
        )}
        <div class="card-content">
          <p class="title is-6 mb-1">{this.player.name}</p>
          <span class={setTagPositionClass}>{this.player.position ? this.player.position : 'Coach'}</span>
          {!this.nationalTeam && <span class="tag is-light">{this.player.originalTeam}</span>}
        </div>
        <button class="button is-black is-small yat-player-card--button" onClick={() => this.playerClickHandler()}>
          {this.nationalTeam ? (
            <span>
              <ion-icon name="add-outline"></ion-icon>
              {this.isSmallBreakpoint ? 'Add me' : 'Add me to your team'}
            </span>
          ) : (
            <span>
              <ion-icon name="remove-outline"></ion-icon>Remove me
            </span>
          )}
        </button>
      </div>
    );
  }
}
