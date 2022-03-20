import { Component, h } from '@stencil/core';
import { WorldCupTeams } from '../../../types';

@Component({
  tag: 'yat-all-national-teams',
  styleUrl: 'yat-all-national-teams.scss',
  shadow: true,
})
export class YatAllNationalTeams {
  /**
   * World cup teams info
   */
  private worldCupTeamsInfo: WorldCupTeams;

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  async componentWillLoad() {
    const myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', 'c0a4f2d106c24c49b55d4d72d5518a9f');
    let response = await fetch('http://api.football-data.org/v2/competitions/WC/teams', {
      headers: myHeaders,
    });
    this.worldCupTeamsInfo = await response.json();
  }

  render() {
    return (
      <div class="yat-all-national-teams">
        {this.worldCupTeamsInfo.teams.map(team => (
          <stencil-route-link url={'/create-your-team/' + team.id}>
            <div class="card yat-all-national-teams--card">
              <div class="card-content">
                <figure class="image is-48x48">
                  <img src={team.crestUrl} alt="country_flag"></img>
                </figure>
                <p class="title is-5">{team.name}</p>
              </div>
            </div>
          </stencil-route-link>
        ))}
      </div>
    );
  }
}
