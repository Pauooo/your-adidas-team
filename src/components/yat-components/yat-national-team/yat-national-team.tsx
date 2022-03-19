import { Component, h, Prop, State, Watch } from '@stencil/core';
import { Team } from '../../../types';

@Component({
  tag: 'yat-national-team',
  styleUrl: 'yat-national-team.scss',
  shadow: true,
})
export class YatNationalTeam {
  /**
   * Current national team
   */
  @State() team: Team;

  /**
   * national team id to retrieve the team from API
   */
  @Prop() teamId: number;

  @Watch('teamId')
  private async updateTeam() {
    await this.getNationalTeam();
  }

  async componentWillLoad() {
    await this.getNationalTeam();
  }

  private async getNationalTeam(): Promise<void> {
    const url = 'http://api.football-data.org/v2/teams/' + this.teamId;
    const myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', 'c0a4f2d106c24c49b55d4d72d5518a9f');
    let response = await fetch(url, {
      headers: myHeaders,
    });
    this.team = await response.json();
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
