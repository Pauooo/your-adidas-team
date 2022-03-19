import { Component, h, Prop } from '@stencil/core';
import { Player, PlayerPositionType, PLAYER_POSITIONS, Team } from '../../../types';

@Component({
  tag: 'yat-team',
  styleUrl: 'yat-team.scss',
  shadow: true,
})
export class YatTeam {
  @Prop() team: Team;

  /**
   * Sorts players by position
   * @param arr
   * @param position
   * @returns players by position
   */
  private sortPlayersByPosition(arr, position: PlayerPositionType) {
    return arr.filter(el => el.position === position);
  }

  /**
   * Renders players by position
   * @returns JSX Element
   */
  private renderPlayersByPosition() {
    return PLAYER_POSITIONS.map((position: PlayerPositionType) => (
      <div class="yat-team--position-container">
        <p class="subtitle is-4">{position + 's'}</p>
        <div class="yat-team--players">
          {this.sortPlayersByPosition(this.team.squad, position).map((player: Player) => (
            <yat-player-card player={player} nationalTeam={this.team?.area?.name} />
          ))}
        </div>
      </div>
    ));
  }

  render() {
    return <div class="yat-team">{this.team.squad && this.renderPlayersByPosition()}</div>;
  }
}
