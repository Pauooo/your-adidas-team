import { Component, h } from '@stencil/core';
import { YatDmComponent } from '../../../dm/dm';
import { WorldCupTeams } from '../../../types';

@Component({
  tag: 'yat-all-national-teams',
  styleUrl: 'yat-all-national-teams.scss',
  shadow: true,
})
export class YatAllNationalTeams {
  /**
   * Yat data Manager to retrieve data from API
   */
  private yatDm!: YatDmComponent;

  /**
   * World cup teams info
   */
  private worldCupTeamsInfo: WorldCupTeams;

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  async componentWillLoad() {
    this.worldCupTeamsInfo = await this.yatDm.getWorldCupTeams();
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
