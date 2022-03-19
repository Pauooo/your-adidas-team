import { Component, h, Listen, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { YatYourTeamService } from '../../../services/yat-your-team-service';
import { Player, Team, YourTeamPlayerEvent } from '../../../types';

@Component({
  tag: 'yat-create-your-team',
  styleUrl: 'yat-create-your-team.scss',
  shadow: true,
})
export class YatCreateYourTeam {
  /**
   * Reference to modal element
   */
  private notificationElement: HTMLDivElement;

  /**
   * Yat service
   */
  private yatYourTeamService: YatYourTeamService;

  /**
   * Modal message to display when the rules are not respected
   */
  @State() modalMessage: string;

  /**
   * Your team object
   */
  @State() yourTeam: Team;

  /**
   * Current national Team Id
   */
  @State() nationalTeamId: number;

  /**
   * Prop that retrieves the url param (id of the team)
   */
  @Prop() match: MatchResults;

  componentWillLoad() {
    this.yatYourTeamService = YatYourTeamService.getInstance();
    this.yourTeam = this.yatYourTeamService.getYourTeam();
    this.nationalTeamId = 18;
  }

  private getRandomTeam() {
    const oldTeamId = this.nationalTeamId;
    this.nationalTeamId = +this.match.params.id.slice(0, 2) !== oldTeamId ? +this.match.params.id.slice(0, 2) : Math.trunc(Math.random() * 100);
    this.nationalTeamId === 0 && (this.nationalTeamId = Math.trunc(Math.random() * 100));
    console.log(this.nationalTeamId);
  }

  /**
   * Checks if the YourTeam size is not already to max (16)
   * if false it displays a modal.
   * @returns false if team size is equal to 16
   */
  private correctTeamSize(): boolean {
    if (this.yourTeam.squad.length === 16) {
      this.modalMessage = 'You can not add this player to your team because you already have 16 players in your team.';
      this.notificationElement.classList.contains('hidden') ? this.openNotification() : [this.closeNotification(), this.openNotification()];
      setTimeout(() => {
        this.closeNotification();
      }, 5000);
      return false;
    } else {
      return true;
    }
  }

  /**
   * Checks if the YourTeam has not already 4 players of the same team
   * @returns false if team has already 4 player of the current national team
   */
  private correctNationalTeamNumber(originalTeam): boolean {
    const currentTeamPlayers: Player[] = this.yourTeam.squad.filter(player => player.originalTeam === originalTeam);
    if (currentTeamPlayers.length === 4) {
      this.modalMessage = 'You can not add this player to your team because you already have 4 players of this national team.';
      this.notificationElement.classList.contains('hidden') ? this.openNotification() : [this.closeNotification(), this.openNotification()];
      setTimeout(() => {
        this.closeNotification();
      }, 5000);
      return false;
    } else {
      return true;
    }
  }

  /**
   * Closes notification
   */
  private closeNotification(): void {
    this.notificationElement.classList.replace('visible', 'hidden');
  }

  /**
   * Opens notification
   */
  private openNotification(): void {
    this.notificationElement.classList.replace('hidden', 'visible');
  }

  /**
   * Listens movePlayerEvent and update Your Team if the conditions are fulfilled
   * @param event
   */
  @Listen('movePlayerEvent', { target: 'document' })
  private updateYourTeam(event: CustomEvent<YourTeamPlayerEvent>): void {
    const player: Player = event.detail.player;
    if (event.detail.action === 'add' && this.correctTeamSize() && this.correctNationalTeamNumber(event.detail.originalTeam)) {
      player.originalTeam = event.detail.originalTeam;
      this.yourTeam = { ...this.yatYourTeamService.addPlayerToYourTeam(player) };
    } else if (event.detail.action === 'remove') {
      this.yourTeam = { ...this.yatYourTeamService.removePlayerToYourTeam(player) };
    }
  }

  render() {
    if (this.match && this.match.params.id) {
      return (
        <div class="yat-create-your-team">
          <div class="columns">
            <div class="column">
              <div class="is-flex is-justify-content-center mb-4">
                <button class="button is-black is-outlined" onClick={() => this.getRandomTeam()}>
                  Change National Team
                </button>
              </div>
              <yat-national-team teamId={this.nationalTeamId} />
            </div>
            <div class="column">
              <yat-your-team team={this.yourTeam} />
            </div>
          </div>
          <div class="notification is-danger is-light hidden" ref={el => (this.notificationElement = el as HTMLDivElement)}>
            <button class="delete" onClick={() => this.closeNotification()}></button>
            <p>{this.modalMessage}</p>
          </div>
        </div>
      );
    }
  }
}
