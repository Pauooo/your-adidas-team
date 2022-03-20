/**
 * Player Positions
 */
export type PlayerPositionType = 'Defender' | 'Attacker' | 'Midfielder' | 'Goalkeeper';


/**
 * Player interface
 */
export interface Player {
  id: number;
  name: string;
  position: PlayerPositionType;
  dateOfBirth?: string;
  countryOfBirth?: string;
  nationality?: string;
  shirtNumber?: number;
  role?: string;
  originalTeam?: string;
}

/**
 * Team interface
 */
export interface Team {
  id: number | string;
  area?: {
    id: number;
    name: string;
  };
  activeCompetitions?: any;
  name: string;
  shortName?: string;
  tla?: string;
  address?: string;
  phone?: string;
  website?: string;
  crestUrl?: string;
  email?: string;
  founded?: number;
  clubColors?: string;
  venue?: string,
  squad?: Player[];
  lastUpdated?: string;
}

/**
 * WorldCup Teams interface
 */
export interface WorldCupTeams {
  competition: any;
  count: number;
  filters: any;
  season: any;
  teams: Team[];
}

/**
 * Your team player event
 */
export interface YourTeamPlayerEvent {
  player: Player;
  originalTeam?: string;
  action: 'add' | 'remove';
}
