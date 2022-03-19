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

  componentWillLoad() {
    this.yatYourTeamService = YatYourTeamService.getInstance();
    this.yourTeam = this.yatYourTeamService.getYourTeam();
  }

  render() {
    return (
      <div class="yat-your-team-page">
        <yat-your-team team={this.yourTeam} />
      </div>
    );
  }
}
