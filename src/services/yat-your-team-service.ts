import { Player, Team } from "../types";

export class YatYourTeamService {
  protected static _instance: YatYourTeamService;
  private yourTeam: Team;

  /**
   *  This function checks if an instance already exists, if not creates it
   * @returns
   */
  public static getInstance() {
    if (this._instance) {
      return this._instance;
    } else {
      return (this._instance = new YatYourTeamService());
    }
  }

  /**
   * Gets your team
   * @returns
   */
  public getYourTeam(): Team {
    const yourTeam = this.yourTeam ? this.yourTeam :
      {
        id: 'yourTeam',
        name: 'YourTeam',
        squad: []
      };
    this.yourTeam = yourTeam;
    return this.yourTeam;
  }

  /**
   * Adds player to your team
   * @param player
   * @returns
   */
  public addPlayerToYourTeam(player: Player): Team {
    this.yourTeam.squad = [...this.yourTeam.squad, player]
    console.log('Player Added', this.yourTeam);
    return this.yourTeam;
  }

  /**
   * Removes player to your team
   * @param player
   * @returns
   */
  public removePlayerToYourTeam(player: Player) {
    this.yourTeam.squad = this.yourTeam.squad.filter(yourPlayer => yourPlayer.id !== player.id);
    console.log('Player Removed', this.yourTeam);
    return this.yourTeam;
  }
}
