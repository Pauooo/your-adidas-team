import { Component, h, State } from '@stencil/core';
import { YatYourTeamService } from '../../../services/yat-your-team-service';
import { Team } from '../../../types';

@Component({
  tag: 'yat-your-team-page',
  styleUrl: 'yat-your-team-page.scss',
  shadow: true,
})
export class YatYourTeamPage {
  /**
   * Yat service
   */
  private yatYourTeamService: YatYourTeamService;

  /**
   * Your team object
   */
  @State() yourTeam: Team;

  /**
   * Stencil Lifecycle method to be called once just after the component is first connected to the DOM.
   */
  componentWillLoad() {
    this.yatYourTeamService = YatYourTeamService.getInstance();
    this.yourTeam = this.yatYourTeamService.getYourTeam();
  }

  /**
   * Deletes the whole team
   */
  private deleteTeam() {
    this.yourTeam = this.yatYourTeamService.deleteYourTeam();
  }

  render() {
    return (
      <div class="yat-your-team-page">
        <yat-your-team team={this.yourTeam}>
          <div slot="actions" class="has-text-right">
            <button class="button is-black is-outlined" onClick={() => this.deleteTeam()}>
              Delete the whole Team
            </button>
          </div>
        </yat-your-team>
      </div>
    );
  }
}
