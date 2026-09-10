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
		game: 'FPS',
		years: 'Active since the IPX/SPX days · CAL-CS alum',
		bio: 'Cut his teeth on dial-up LAN nights and a brief, humbling stint in CAL-CS — the Cyberathlete Amateur League — where the team\'s record built a lot of character and very few wins. Aim has not degraded nearly as much as everything else.',
		quote: 'Ping was 40ms on a good day and I still 1v3\'d the block.',
	},
	{
		handle: 'SpreadsheetSlayer',
		role: 'In-Game Leader / Macro Strategist',
		game: 'RTS',
		years: '20+ years optimizing build orders',
		bio: 'Runs the team like a quarterly review. Calls it uber micro when he does it, calls it micromanaging when anyone else does. Has a strong opinion about everyone else\'s economy too.',
		quote: 'I have a spreadsheet for your spreadsheet.',
	},
	{
		handle: 'GoutGoblin',
		role: 'Sniper / Support',
		game: 'FPS',
		years: 'Since before "esports" was a word',
		bio: 'Holds angles longer than most people hold jobs. Pre-game routine includes a knee brace and a heating pad.',
		quote: 'Patience isn\'t a skill issue, it\'s a joint issue.',
	},
	{
		handle: 'MidnightMedic',
		role: 'Support / Jungle',
		game: 'MOBA',
		years: 'Insomniac since the Kali era',
		bio: 'Plays best between 1 and 4 AM, wards the map like it owes him money, for reasons that are either dedication or a sleep disorder. Nobody has asked.',
		quote: 'Melatonin didn\'t work but a clutch smite does.',
	},
	{
		handle: 'BifocalBarrage',
		role: 'Entry Fragger',
		game: 'FPS',
		years: 'Two pairs of glasses deep',
		bio: 'First through the door, first to need reading glasses to check the scoreboard afterward. Still pretty pro, if you squint.',
		quote: 'I don\'t need to see you clearly to hear you fall.',
	},
];
