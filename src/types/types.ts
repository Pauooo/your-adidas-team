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
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  role: string;
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
  name: string;
  shortName?: string;
  tla?: string;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  founded?: number;
  clubColors?: string;
  venue?: null,
  squad: Player[];
  lastUpdated?: string;
}

/**
 * Your team player event
 */
export interface YourTeamPlayerEvent {
  player: Player;
  originalTeam?: string;
  action: 'add' | 'remove';
}
