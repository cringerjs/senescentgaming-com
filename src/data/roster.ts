export interface Player {
	handle: string;
	role: string;
	game: string;
	years: string;
	bio: string;
	quote: string;
}

export const roster: Player[] = [
	{
		handle: 'Tristeaal',
		role: 'Fragger / Duelist',
		game: 'Arena Shooters',
		years: 'Active since the IPX/SPX days',
		bio: 'Cut his teeth on dial-up LAN nights and never really stopped. Aim has not degraded nearly as much as everything else.',
		quote: 'Ping was 40ms on a good day and I still 1v3\'d the block.',
	},
	{
		handle: 'SpreadsheetSlayer',
		role: 'In-Game Leader',
		game: 'Tactical FPS',
		years: '20+ years calling rotations',
		bio: 'Runs the team like a quarterly review. Has a callout for every angle and a strong opinion about everyone else\'s economy management.',
		quote: 'I have a spreadsheet for your spreadsheet.',
	},
	{
		handle: 'GoutGoblin',
		role: 'Sniper / Support',
		game: 'Arena Shooters',
		years: 'Since before "esports" was a word',
		bio: 'Holds angles longer than most people hold jobs. Pre-game routine includes a knee brace and a heating pad.',
		quote: 'Patience isn\'t a skill issue, it\'s a joint issue.',
	},
	{
		handle: 'MidnightMedic',
		role: 'Flex / Support',
		game: 'Tactical FPS',
		years: 'Insomniac since the Kali era',
		bio: 'Plays best between 1 and 4 AM, for reasons that are either dedication or a sleep disorder. Nobody has asked.',
		quote: 'Melatonin didn\'t work but the adrenaline from a clutch does.',
	},
	{
		handle: 'BifocalBarrage',
		role: 'Entry Fragger',
		game: 'Arena Shooters',
		years: 'Two pairs of glasses deep',
		bio: 'First through the door, first to need reading glasses to check the scoreboard afterward.',
		quote: 'I don\'t need to see you clearly to hear you fall.',
	},
];
