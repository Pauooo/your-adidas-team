import { Component, h, Prop, State, Watch } from '@stencil/core';
import { YatDmComponent } from '../../../dm/dm';
import { Team } from '../../../types';

@Component({
  tag: 'yat-national-team',
  styleUrl: 'yat-national-team.scss',
  shadow: true,
})
export class YatNationalTeam {
  /**
   * Yat data Manager to retrieve data from API
   */
  private yatDm = new YatDmComponent();

  /**
   * Current national team
   */
  @State() team: Team;

  /**
   * national team id to retrieve the team from API
   */
  @Prop() teamId: number;

  /**
   * Watches if the prop team id changes if it's the case it gets the new national team
   */
  @Watch('teamId')
  private async updateTeam() {
    this.team = await this.yatDm.getNationalTeam(this.teamId);
  }

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  async componentWillLoad() {
    this.team = await this.yatDm.getNationalTeam(this.teamId);
  }

  render() {
    return (
      <div class="yat-national-team">
        <div class="has-text-centered">
          <p class="title mb-3">{this.team.area.name}</p>
        </div>
        {this.team.squad.length === 0 ? (
          <div class="notification is-danger is-light hidden">
            <strong>Sorry,</strong>
            <p>Looks like this team is not ready yet...</p>
            <p>Click the button above to find an other team!</p>
          </div>
        ) : (
          <yat-team team={this.team} is-national-team={true}></yat-team>
        )}
      </div>
    );
  }
}
