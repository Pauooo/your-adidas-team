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
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="./../../../assets/img/athlete.png"></img>
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-6 mb-1">{this.player.name}</p>
          <span class={setTagPositionClass}>{this.player.position ? this.player.position : 'Coach'}</span>
          {!this.nationalTeam && <span class="tag is-light">{this.player.originalTeam}</span>}
        </div>
        <button class="button is-black is-small yat-player-card--button" onClick={() => this.playerClickHandler()}>
          {this.nationalTeam ? (
            <span>
              <i class="fa-light fa-circle-plus"></i>Add to me to your team!
            </span>
          ) : (
            <span>
              <i class="fa-light fa-circle-minus"></i>Remove me from your team!
            </span>
          )}
        </button>
      </div>
    );
  }
}
