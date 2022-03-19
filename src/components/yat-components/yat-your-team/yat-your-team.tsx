import { Component, h, Prop, State, Watch } from '@stencil/core';
import { Team } from '../../../types';

@Component({
  tag: 'yat-your-team',
  styleUrl: 'yat-your-team.scss',
  shadow: true,
})
export class YatYourTeam {
  @State() teamLength = 0;

  @Prop() team: Team;

  @Watch('team')
  onTeamUpdate(): void {
    this.checkEmptyTeam();
  }

  async componentWillLoad() {
    this.checkEmptyTeam();
  }

  /**
   * Checks if the team has players
   */
  private checkEmptyTeam(): void {
    this.teamLength = this.team.squad.length;
  }

  /**
   * Renders your team rules
   * @returns JSX.Element
   */
  private renderYourTeamRules() {
    return (
      <div class="mb-4">
        <p class="subtitle is-6 mb-1">Create your team of maximum 16 members with at least : 1 coach, 4 defenders, 4 midfielders, 2 attackers, 2 goalkeepers.</p>
        <p class="subtitle is-6 mb-1">You can choose maximum 4 players of same national team.</p>
        <p class="subtitle is-6 mb-1">Enjoy creating Your Adidas Team!</p>
      </div>
    );
  }

  private renderTeam() {
    return this.teamLength ? <yat-team team={this.team}></yat-team> : <p class="title is-4 has-text-centered my-4">Your Adidas Team has no players yet!</p>;
  }

  render() {
    return (
      <div class="yat-your-team">
        <div class="has-text-centered">
          <p class="title mb-3">Your Team</p>
        </div>
        {this.renderYourTeamRules()}
        {this.renderTeam()}
      </div>
    );
  }
}
