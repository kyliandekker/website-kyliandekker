import { UniqueCollection, GAME_ENGINE, PROGRAMMING_LANGUAGE, PROJECT_PLATFORM, PROJECT_ROLE, PROJECT_TAG, PROJECT_TYPE, TEAMMATE, Teammate, TeammateLink, Project } from "./classes";

function getKylianDekker(roles: PROJECT_ROLE[]): Teammate
{
	return new Teammate(
		TEAMMATE.KYLIAN_DEKKER,
		roles,
		new TeammateLink(
			"https://www.kyliandekker.com",
			"https://github.com/kyliandekker",
			"https://www.linkedin.com/in/kyliandekker",
			"",
			""
		)
	)
}

function getKayminSambrano(roles: PROJECT_ROLE[]): Teammate
{
	return new Teammate(
		TEAMMATE.KAYMIN_SAMBRANO,
		roles,
		new TeammateLink(
			"",
			"",
			"",
			"",
			"",
		)
	)
}

function getJustinKujawa(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.JUSTIN_KUJAWA,
		roles,
		new TeammateLink("https://jkujawa.com/", "https://github.com/Contingencyy", "https://www.linkedin.com/in/justin-kujawa-37094718a", "", "")
	);
}

function getSamBoots(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.SAM_BOOTS,
		roles,
		new TeammateLink("https://samboots.github.io/portfolio/", "https://github.com/SamBoots", "https://www.linkedin.com/in/sam-boots-7b256b15", "", "")
	);
}

function getLyubomirKostadinov(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.LYUBOMIR_KOSTADINOV,
		roles,
		new TeammateLink("", "https://github.com/lyubokostadinov", "https://www.linkedin.com/in/lyubomir-kostadinov-b25062229", "", "")
	);
}

function getSlavaTakrovskij(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.SLAVA_TAKROVSKIJ,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/slava-takrovskij-21b7691b", "", "")
	);
}

function getMartijnVahl(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.MARTIJN_VAHL,
		roles,
		new TeammateLink("https://martijnvahl.com/", "", "https://www.linkedin.com/in/martijnvahl/", "", "")
	);
}

function getStanVogels(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.STAN_VOGELS,
		roles,
		new TeammateLink("https://stanvogels.com/", "https://github.com/Reemhi2122", "https://www.linkedin.com/in/stanvogels/", "", "")
	);
}

function getLexRoovers(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.LEX_ROOVERS,
		roles,
		new TeammateLink("https://lexroovers.com/", "https://github.com/Flashcaptain", "https://www.linkedin.com/in/lex-roovers-aa9405155", "", "")
	);
}

function getMariaLoannou(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.MARIA_LOANNOU,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/maria-ioannou-0898841b8", "https://www.artstation.com/lamci", "")
	);
}

function getRembrandtVanLeeuwen(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.REMBRANDT_VAN_LEEUWEN,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/rembrandt-van-leeuwen-968801a1", "https://www.artstation.com/clockweiz", "")
	);
}

function getWesleyCats(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.WESLEY_CATS,
		roles,
		new TeammateLink("https://wesleycats.com/", "", "https://www.linkedin.com/in/wesley-cats-games/", "", "")
	);
}

function getLucaYavuzok(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.LUCA_YAVUZOK,
		roles,
		new TeammateLink("https://lucayavuzok.com/", "", "https://www.linkedin.com/in/luca-yavuzok-04067815b/", "", "")
	);
}

// function getDefault(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.DSADAS,
// 		roles,
// 		new TeammateLink("", "", "", "", "")
// 	);
// }

export const PROJECTS: Project[] = [
	new Project(
		"Microsoft Flight Simulator 2024",
		"Climax Studios",
		"Explore the world with our largest fleet of aircraft and take simulation to new heights while pursuing your aviation career within Microsoft Flight Simulator 2024.",
		"2023-2024",
		"msfs",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.STEAM, PROJECT_PLATFORM.XBOX, PROJECT_PLATFORM.PS5 ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.IN_HOUSE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.TOOLS_PROGRAMMER,
					PROJECT_ROLE.UI_PROGRAMMER,
				]
			)
		]),
		[
			"Engineered and enhanced core functionality and game mechanics within a proprietary engine using C++.",
			// "Contributed to the RENO and Red Bull game modes by designing and implementing new maps and gameplay rules, expanding and enhancing the player experience.",
			"Designed and implemented a custom internal tool that significantly streamlined workflows and accelerated overall development for the entire team.",
			// "Developed responsive front-end UI systems using TypeScript, ensuring seamless user experiences.",
			"Translated client designs and requirements into polished game mechanics, aligning gameplay features with project goals.",
			"Collaborated effectively with a multidisciplinary team of programmers and designers to drive project success.",
			"Stubbed and implemented methods for Playstation 5.",
			// "Utilized industry-standard tools, including Coherent UI, Perforce, and Visual Studio, to support efficient development pipelines.",
		],
		[
			"How big and complex a team is when working on a AAA project.",
			"How to navigate my way around a big unfamiliar codebase by using various tools such as ripgrep, Everything and handy visual studio shortcuts.",
			"How important development tools are when working and debugging in projects of this scale.",
			"Working and communicating with other companies when work is shared across different studios.",
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.MULTIPLAYER, PROJECT_TAG.ART_3D, PROJECT_TAG.SIMULATION, PROJECT_TAG.PORTING ],
		"#48C7F0"
	),
	new Project(
		"Arma 4",
		"Bohemia Interactive",
		"Due to NDA, I am currently unable to say much about my work in Arma 4, but here are a few bullet points of my general activities.",
		"2026-20XX",
		"arma4",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.STEAM, PROJECT_PLATFORM.XBOX, PROJECT_PLATFORM.PS5 ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.ENFUSION,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.TECHNICAL_DESIGNER,
					PROJECT_ROLE.SCRIPTER,
				]
			)
		]),
		[
			"Created certain features in the Arma 4 environment.",
			"Designed tools and workflows that empower technical designers and scripters to expand functionality.",
			"Designed and created architecture meant for sharing between projects.",
			"Focused on creating frameworks that support modding, community-driven content, and multiplayer features."
		],
		[
			"How to identify and prioritize the most critical tasks during development.",
			"Take leadership of tasks, take meeting notes, organize and schedule meetings.",
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.MULTIPLAYER, PROJECT_TAG.ART_3D ],
		"#8E4742"
	),
	new Project(
		"Unannounced Project in DayZ Series",
		"Bohemia Interactive",
		"Due to NDA, I am currently unable to say much about what project I have worked on, but here are a few bullet points of my general activities.",
		"2025-20XX",
		"bi",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.STEAM, PROJECT_PLATFORM.XBOX, PROJECT_PLATFORM.PS5 ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.ENFUSION,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.TECHNICAL_DESIGNER,
					PROJECT_ROLE.SCRIPTER,
				]
			)
		]),
		[
			"Created core gameplay systems within a proprietary engine using C++.",
			"Involved from the project’s conception, contributing to the early prototype phase.",
			"Gained experience in building systems with scalability, long-term maintainability, and multiplayer support in mind.",
			"Designed tools and workflows that empower technical designers and scripters to expand functionality.",
			"Focused on creating frameworks that support modding, community-driven content, and multiplayer features."
		],
		[
			"How to identify and prioritize the most critical tasks during development",
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.MULTIPLAYER ],
		"#AC0C0C"
	),
	new Project(
		"Gallus Engine (Custom Engine)",
		"",
		"A pet project of mine used for learning more about graphics, engine architecture, UI, audio and everything else. NOTE: This is a WIP and it is by no means finished. I work on this in my freetime.",
		"2024-2026",
		"gallusengine",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.VR, PROJECT_PLATFORM.GITHUB ],
		PROJECT_TYPE.GAME_ENGINE,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.GALLUS_ENGINE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.ENGINE_PROGRAMMER,
					PROJECT_ROLE.AUDIO_PROGRAMMER,
					PROJECT_ROLE.GRAPHICS_PROGRAMMER,
					PROJECT_ROLE.UI_PROGRAMMER,
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
				]
			)
		]),
		[
			"Designed and implemented all UI and features such as the file explorer, inspector, scene window and all others.",
			"Developed a tool that lets me embed fonts directly into the engine and dynamically add or remove icons that get updated automatically by using nodeJS.",
			"Did all the graphics work for the engine."
		],
		[
			"Learned the basics of DirectX12, like resource management, render textures, root signatures, pipelines, etc.",
			"Learned more about creating custom tools that help accelerate the development of a project like this.",
		],
		[ PROJECT_TAG.CUSTOM_ENGINE ],
		"#B55214"
	),
	new Project(
		"Gudenuff Engine (Custom Engine) + Game",
		"",
		"A game engine for a 2D roguelike dungeon crawlers with rhythm-based mechanics. Can compile games for PC and PS4. Used to make the game Setsuko: Drums of Harmony.",
		"2023-2024",
		"gudenuffengine",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.PS4, PROJECT_PLATFORM.ITCH ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.GUDENUFF_ENGINE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.AUDIO_PROGRAMMER,
					PROJECT_ROLE.TOOLS_PROGRAMMER,
					PROJECT_ROLE.ENGINE_PROGRAMMER
				]
			),
			getSlavaTakrovskij(
				[
					PROJECT_ROLE.TOOLS_PROGRAMMER,
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.PRODUCT_OWNER,
				]
			),
			getJustinKujawa(
				[
					PROJECT_ROLE.GRAPHICS_PROGRAMMER,
				]
			),
			getSamBoots(
				[
					PROJECT_ROLE.GRAPHICS_PROGRAMMER,
					PROJECT_ROLE.PROGRAMMING_LEAD,
				]
			),
			getLyubomirKostadinov(
				[
					PROJECT_ROLE.GRAPHICS_PROGRAMMER,
				]
			),
			getMartijnVahl(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
				]
			),
			getStanVogels(
				[
					PROJECT_ROLE.ENGINE_PROGRAMMER,
				]
			),
			getLexRoovers(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.TOOLS_PROGRAMMER,
				]
			),
			getMariaLoannou(
				[
					PROJECT_ROLE.ARTIST_2D,
				]
			),
			getRembrandtVanLeeuwen(
				[
					PROJECT_ROLE.ARTIST_2D,
				]
			),
			getWesleyCats(
				[
					PROJECT_ROLE.PRODUCER,
				]
			),
			getLucaYavuzok(
				[
					PROJECT_ROLE.GAME_DESIGNER,
				]
			),
		]),
		[
			"Designed and implemented the core gameplay mechanic of rhythm-based movement synchronized with a changing BPM.",
			"Developed various tools and UI components with ImGui for the game engine, including the resource explorer, UI editor, level creator, and audio tools.",
			"Managed the resource management system across both Windows and PS4 platforms, ensuring efficient asset handling and quick testing.",
			"Composed the original soundtrack and designed all sound effects."
		],
		[
			"How to create my own game engine, including the planning process.",
			"How to create systems based on feedback from designers and gameplay programmers.",
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.CUSTOM_ENGINE, PROJECT_TAG.PS4, PROJECT_TAG.RHYTHM_BASED ],
		"#4761AB"
	),
	new Project(
		"CoopScoop",
		"",
		"A chicken virus spreads rapidly across the country and some of your chickens are infected and you need to take care of the sick chickens. You need to wash them, feed them and take good care of them to maintain a stable farm. Can you manage all those chickens?",
		"2024-2025",
		"coopscoop",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.VR, PROJECT_PLATFORM.STEAM ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CS,
		GAME_ENGINE.UNITY_ENGINE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.PROJECT_LEADER,
					PROJECT_ROLE.COMPOSER,
					PROJECT_ROLE.GAME_DESIGNER,
					PROJECT_ROLE.ARTIST_3D
				]
			),
			getKayminSambrano(
				[
					PROJECT_ROLE.VOICE_ACTOR
				]
			)
		]),
		[
			"Designed and implemented all core gameplay elements, including VR physics systems, dynamic chicken AI, interactive tutorials, and various other gameplay mechanics.",
			"Developed custom Unity tools to accelerate production, such as a subtitle editor, spline generator, play area editor, and an audio system that dynamically displays subtitles based on audio data position.",
			"Composed the original soundtrack, designed sound effects, created all 3D models, and handled all additional creative and technical aspects of the game."
		],
		[
			"Learned how to model in Blender.",
			"Learned how to upload a game to Steam and create a playtesting pipeline.",
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.VR ],
		"rgb(223 170 44)"
	),
	new Project(
		"Audio Showcase",
		"",
		"A pet project of mine used for learning more about audio and signal processing.",
		"2023-2024",
		"audioengine",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.GITHUB ],
		PROJECT_TYPE.GAME_ENGINE,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.IN_HOUSE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.ENGINE_PROGRAMMER,
					PROJECT_ROLE.AUDIO_PROGRAMMER,
					PROJECT_ROLE.UI_PROGRAMMER,
				]
			)
		]),
		[
			"Wrote an audio engine supporting playback, mixing, and basic DSP functionality.",
		],
		[
			"Learned about audio signal processing, multithreading, and applying mathematical concepts to real-time audio systems.",
		],
		[ PROJECT_TAG.TOOL, PROJECT_TAG.SHOWCASE ],
		"#FFCC2E"
	),
];

PROJECTS[0].steamLink = "https://store.steampowered.com/app/2537590/Microsoft_Flight_Simulator_2024/";
PROJECTS[5].steamLink = "https://store.steampowered.com/app/2672620/CoopScoop/";
PROJECTS[4].itchLink = "https://buas.itch.io/gudenuff-drumsofharmony";
PROJECTS[3].gitHubLink = "https://github.com/kyliandekker/gallus-3D";

const CURRENT_DATE: Date = new Date();
const C_PROGRAMMING_YEAR = 2016;
const PROGRAMMING_YEAR_CPP = 2021;
const PROGRAMMING_YEAR_AAA = 2023;
const BIRTHDAY: Date = new Date("January 25, 2000 00:00:00");

export const CURRENT_YEAR = () => {
	return CURRENT_DATE.getFullYear();
};

export const PROGRAMMING_YEAR = () => {
	return C_PROGRAMMING_YEAR;
};

export const PROGRAMMING_EXPERIENCE = () => {
	return CURRENT_YEAR() - C_PROGRAMMING_YEAR;
};

export const PROGRAMMING_EXPERIENCE_CPP = () => {
	return CURRENT_YEAR() - PROGRAMMING_YEAR_CPP;
};

export const PROGRAMMING_EXPERIENCE_AAA = () => {
	return CURRENT_YEAR() - PROGRAMMING_YEAR_AAA;
};

export const AGE = () => {
	const today = new Date();
	let age = today.getFullYear() - BIRTHDAY.getFullYear();
	const m = today.getMonth() - BIRTHDAY.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < BIRTHDAY.getDate())) {
		age--;
	}
	return age; // Return an object with the calculated age
};