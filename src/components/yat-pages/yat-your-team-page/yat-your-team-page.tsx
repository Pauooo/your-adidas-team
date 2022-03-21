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
        <section class="yat-your-team-page--banner section is-medium">
          <img src="./../../../assets/img/banner_adidas_03.jpg" alt="adidas-banner" />
        </section>
        <div class="yat-your-team-page--your-team">
          <yat-your-team team={this.yourTeam}>
            <div slot="actions" class="has-text-right yat-your-team--actions">
              <button class="button is-black is-outlined" onClick={() => this.deleteTeam()}>
                <ion-icon size="large" name="trash"></ion-icon> Delete the whole Team
              </button>
            </div>
          </yat-your-team>
        </div>
      </div>
    );
  }
}
