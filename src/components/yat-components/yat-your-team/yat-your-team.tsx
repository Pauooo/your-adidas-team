import { Component, h, Prop, State, Watch } from '@stencil/core';
import { Team } from '../../../types';

@Component({
  tag: 'yat-your-team',
  styleUrl: 'yat-your-team.scss',
  shadow: true,
})
export class YatYourTeam {
  /**
   * State to rerender the component if the team has changed
   */
  @State() teamLength = 0;

  /**
   * Team to display
   */
  @Prop() team: Team;

  /**
   * Watches if team length has changed
   */
  @Watch('team')
  onTeamUpdate(): void {
    this.checkEmptyTeam();
  }

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  async componentWillLoad() {
    this.checkEmptyTeam();
  }

  /**
   * Checks the team length
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
      <div class="yat-your-team--rules mb-4 mr-4">
        <p class="subtitle is-6 mb-1">
          Create your team of <strong>maximum 16 members</strong> with at least :
        </p>
        <p class="subtitle is-6 mb-1">
          <strong>1 coach</strong>, <strong>4 defenders</strong>, <strong>4 midfielders</strong>, <strong>2 attackers</strong>, <strong>2 goalkeepers</strong>.
        </p>
        <p class="subtitle is-6 mb-1">You can choose maximum 4 players of same national team.</p>
        <p class="subtitle is-6 mb-1">Enjoy creating Your Adidas Team!</p>
      </div>
    );
  }

  /**
   * Renders team if exists or a message if the team is empty
   * @returns
   */
  private renderTeam() {
    return this.teamLength ? <yat-team team={this.team}></yat-team> : <p class="title is-4 has-text-centered my-4">Your Adidas Team has no player yet!</p>;
  }

  render() {
    return (
      <div class="yat-your-team">
        <div class="has-text-centered">
          <p class="title mb-3">Your Team</p>
        </div>
        <div class="yat-your-team--rules-container">
          {this.renderYourTeamRules()}
          <slot name="actions" />
        </div>
        {this.renderTeam()}
      </div>
    );
  }
}
