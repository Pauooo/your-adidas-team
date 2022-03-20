import { Team, WorldCupTeams } from "../types";

export class YatDmComponent {

  /**
   * URL path constant
   */
  private readonly WORLD_CUP_URL = 'http://api.football-data.org/v2/competitions/WC/teams';

  /**
   * URL path constant
   */
  private readonly TEAM_URL = 'http://api.football-data.org/v2/teams/';

  /**
   * Gets world cup teams
   * @returns world cup teams
   */
  public async getWorldCupTeams(): Promise<WorldCupTeams> {
    const myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', 'c0a4f2d106c24c49b55d4d72d5518a9f');
    let response = await fetch(this.WORLD_CUP_URL, {
      headers: myHeaders,
    });
    return await response.json();
  }

  /**
   * Gets national team
   * @returns national team
   */
  public async getNationalTeam(teamId: number): Promise<Team> {
    const url = this.TEAM_URL + teamId;
    const myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', 'c0a4f2d106c24c49b55d4d72d5518a9f');
    let response = await fetch(url, {
      headers: myHeaders,
    });
    return await response.json();
  }

}
