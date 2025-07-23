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

// function getBasVanSeeters(roles: PROJECT_ROLE[]): Teammate
// {
// 	return new Teammate(
// 		TEAMMATE.BAS_VAN_SEETERS,
// 		roles,
// 		new TeammateLink(
// 			"http://seeters.co/",
// 			"https://github.com/BluEngineer",
// 			"https://www.linkedin.com/in/bas-van-seeters-7b756b15b/",
// 			"",
// 			""
// 		)
// 	)
// }

// function getReneMeegdes(roles: PROJECT_ROLE[]): Teammate
// {
// 	return new Teammate(
// 		TEAMMATE.RENE_MEEGDES,
// 		roles,
// 		new TeammateLink(
// 			"",
// 			"",
// 			"https://www.linkedin.com/in/rene-meegdes-710203118",
// 			"https://www.artstation.com/rmeegdes",
// 			"https://www.behance.net/rmeegdes68c5",
// 		)
// 	)
// }

// function getFreyaDeVries(roles: PROJECT_ROLE[]): Teammate
// {
// 	return new Teammate(
// 		TEAMMATE.FREYA_DE_VRIES,
// 		roles,
// 		new TeammateLink(
// 			"",
// 			"",
// 			"https://www.linkedin.com/in/freya-de-vries",
// 			"",
// 			"https://www.behance.net/freyavriese70d",
// 		)
// 	)
// }

// function getDanishaGroos(roles: PROJECT_ROLE[]): Teammate
// {
// 	return new Teammate(
// 		TEAMMATE.DANISHA_GROOS,
// 		roles,
// 		new TeammateLink(
// 			"",
// 			"",
// 			"https://www.linkedin.com/in/danishagroos",
// 			"",
// 			"https://www.behance.net/danishaivana",
// 		)
// 	)
// }

// function getAaronVanErp(roles: PROJECT_ROLE[]): Teammate
// {
// 	return new Teammate(
// 		TEAMMATE.AARON_VAN_ERP,
// 		roles,
// 		new TeammateLink(
// 			"",
// 			"",
// 			"",
// 			"",
// 			"https://www.behance.net/avanerp4836",
// 		)
// 	)
// }

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

// function getEvieDeVisser(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.EVIE_DE_VISSER,
// 		roles,
// 		new TeammateLink("", "", "", "", "")
// 	);
// }

// function getWillemVanDenAkker(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.WILLEM_VAN_DEN_AKKER,
// 		roles,
// 		new TeammateLink("", "", "https://www.linkedin.com/in/willem-van-den-akker-a04405155/", "", "")
// 	);
// }

// function getTingTingChong(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.TINGTING_CHONG,
// 		roles,
// 		new TeammateLink("", "", "https://www.linkedin.com/in/ting-ting-chong-854438132", "https://www.artstation.com/artwork/2xR4BK", "")
// 	);
// }

// function getJipVanDeWouw(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.JIP_VAN_DE_WOUW,
// 		roles,
// 		new TeammateLink("", "", "https://www.linkedin.com/in/jipvdwouw", "", "https://www.behance.net/jipwouwe115")
// 	);
// }

// function getCelineTijdhof(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.CELINE_TIJDHOF,
// 		roles,
// 		new TeammateLink("", "", "https://www.linkedin.com/in/celine-tijdhof-07a67815b", "", "https://www.behance.net/celinetijdhof")
// 	);
// }

// function getColinDeKoning(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.COLIN_DE_KONING,
// 		roles,
// 		new TeammateLink("https://ccmdekoning.wixsite.com/portfolio", "", "https://www.linkedin.com/in/colindk/", "", "")
// 	);
// }

function getMattieToth(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.MATTIE_TOTH,
		roles,
		new TeammateLink("", "", "", "", "")
	);
}

// function getPepijnVanLoon(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.PEPIJN_VAN_LOON,
// 		roles,
// 		new TeammateLink("", "", "https://www.linkedin.com/in/pepijn-van-loon-6795aa257/", "", "")
// 	);
// }

// function getDannyOosterwijk(roles: PROJECT_ROLE[]): Teammate {
// 	return new Teammate(
// 		TEAMMATE.DANNY_OOSTERWIJK,
// 		roles,
// 		new TeammateLink("https://dannyoosterwijk.journoportfolio.com/", "", "https://www.linkedin.com/in/danny-oosterwijk-34b551182/", "", "")
// 	);
// }

function getMaxVanDerPlas(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.MAX_VAN_DER_PLAS,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/max-van-der-plas-77611813b/", "https://www.artstation.com/maxvanderplas", "")
	);
}

function getMikaGoddrie(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.MIKA_GODDRIE,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/mika-goddrie-030367244/", "https://www.artstation.com/mikagoddrie", "")
	);
}

function getTiesDeGroot(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.TIES_DE_GROOT,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/ties-de-groot-027304192/", "", "")
	);
}

function getSammieDeRaaff(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.SAMMIE_DE_RAAFF,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/sammie-de-raaff-17a41824b/", "", "")
	);
}

function getRalphWarrand(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.RALPH_WARRAND,
		roles,
		new TeammateLink("https://www.ralphwarrand.com", "", "https://www.linkedin.com/in/ralphwarrand/", "", "")
	);
}

function getAbdullaDonmez(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.ABDULLA_DONMEZ,
		roles,
		new TeammateLink("https://abdulladonmez.com", "", "https://www.linkedin.com/in/abdulladonmez/", "", "")
	);
}

function getCasTrines(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.CAS_TRINES,
		roles,
		new TeammateLink("", "", "", "", "")
	);
}

function getEsmeeVanBoven(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.ESMEE_VAN_BOVEN,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/esm%C3%A9e-van-boven-23914a261/", "", "")
	);
}

function getAlexSmith(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.ALEX_SMITH,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/alex-smith-b1a039224/", "https://www.artstation.com/asparas", "")
	);
}

function getAnneTeunissen(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.ANNE_TEUNISSEN,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/anne-teunissen-013186161/", "https://www.artstation.com/anneteunissen", "")
	);
}

function getJimiWeijers(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.JIMI_WEIJERS,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/jimi-weijers-a53272a0/", "https://www.artstation.com/lexicon", "")
	);
}

function getTomVanDerVeeken(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.TOM_VAN_DER_VEEKEN,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/tom-van-der-veeken-8b3407155/", "https://www.artstation.com/tvdv", "")
	);
}

function getMateValent(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.MATE_VALENT,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/matevalent", "https://www.artstation.com/jjampy", "")
	);
}

function getLeroyVis(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.LEROY_VIS,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/leroy-vis-1aa198174/", "https://www.artstation.com/icefish17", "")
	);
}

function getRubenSmit(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.RUBEN_SMIT,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/ruben-smit-7a567715b/", "https://www.artstation.com/rubensmit", "")
	);
}

function getRosanneGrootjes(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.ROSANNE_GROOTJES,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/rosanne-g-b557b2137/", "https://www.artstation.com/rosannegrootjes", "")
	);
}

function getNathalieStuit(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.NATHALIE_STUIT,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/nathalie-stuit-38250124b/", "https://www.artstation.com/nathaliestuit", "")
	);
}

function getJordyDeWaal(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.JORDY_DE_WAAL,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/jordy-de-waal-b7396b186/", "https://jordydewaal.artstation.com/", "")
	);
}

function getTristanTenCate(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.TRISTAN_TEN_CATE,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/tristan-ten-cate-15a483168/", "", "")
	);
}

function getRaduTandarica(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.RADU_TANDARICA,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/radu-tandarica-95064a223", "", "")
	);
}

function getStefanosZarakovitis(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.STEFANOS_ZARAKOVITIS,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/stefanos-zarakovitis-303153245/", "", "")
	);
}

function getAntonioMinev(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.STEFANOS_ZARAKOVITIS,
		roles,
		new TeammateLink("https://antoniominev.wixsite.com/website", "", "https://www.linkedin.com/in/antoniominev/", "", "")
	);
}

function getRicoVisscher(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.RICO_VISSCHER,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/rico-visscher/", "", "")
	);
}

function getYaroCopijn(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.YARO_COPIJN,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/yaro-copijn", "https://www.artstation.com/yaro_copijn", "")
	);
}

function getCelineVanDerKnaap(roles: PROJECT_ROLE[]): Teammate {
	return new Teammate(
		TEAMMATE.CELINE_VAN_DER_KNAAP,
		roles,
		new TeammateLink("", "", "https://www.linkedin.com/in/celine-van-der-knaap-94a75916b", "https://www.artstation.com/celinevdknaap", "")
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
	// new Project(
	// 	"CoopScoop",
	// 	"A chicken virus spreads rapidly across the country and some of your chickens are infected and you need to take care of the sick chickens. You need to wash them, feed them and take good care of them to maintain a stable farm. Can you manage all those chickens?",
	// 	"coopscoop-logo-picture.jpg",
	// 	"./coopscoop",
	// 	[ PROJECT_PLATFORM.WINDOWS ],
	// 	"coopscoop-showcase-video_c.mp4",
	// 	false,
	// 	PROJECT_TYPE.VIDEO_GAME,
	// 	[ "indigo-award-2018.png", "indigo-2018-selection.png" ],
	// 	[ PROGRAMMING_LANGUAGE.CS ],
	// 	GAME_ENGINE.UNITY_ENGINE,
	// 	new UniqueCollection<Teammate>([
	// 		getKylianDekker(
	// 			[
	// 				PROJECT_ROLE.PROJECT_LEADER,
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 				PROJECT_ROLE.COMPOSER,
	// 				PROJECT_ROLE.GAME_DESIGNER,
	// 				PROJECT_ROLE.GENERALIST,
	// 			]
	// 		),
	// 		getBasVanSeeters(
	// 			[
	// 				PROJECT_ROLE.TECHNICAL_ARTIST,
	// 				PROJECT_ROLE.GAME_DESIGNER
	// 			]
	// 		),
	// 		getReneMeegdes(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getFreyaDeVries(
	// 			[
	// 				PROJECT_ROLE.ARTIST_2D
	// 			]
	// 		),
	// 		getDanishaGroos(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getAaronVanErp(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getKayminSambrano(
	// 			[
	// 				PROJECT_ROLE.VOICE_ACTOR
	// 			]
	// 		)
	// 	]),
	// 	[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.VR, PROJECT_TAG.ARCADE, PROJECT_TAG.ART_3D, PROJECT_TAG.LOW_POLY ],
	// 	"indigo-winner-2018"
	// ),
	new Project(
		"Microsoft Flight Simulator 2024",
		"Explore the world with our largest fleet of aircraft and take simulation to new heights while pursuing your aviation career within Microsoft Flight Simulator 2024.",
		"2023-2024",
		"msfs",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.STEAM ],
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
			// "Utilized industry-standard tools, including Coherent UI, Perforce, and Visual Studio, to support efficient development pipelines.",
		],
		[
			"How big and complex a team is when working on a AAA project.",
			"How to navigate my way around a big unfamiliar codebase by using various tools such as ripgrep, Everything and handy visual studio shortcuts.",
			"How important development tools are when working and debugging in projects of this scale.",
			"Working and communicating with other companies when work is shared across different studios.",
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.MULTIPLAYER, PROJECT_TAG.ART_3D, PROJECT_TAG.SIMULATION ],
		"#48C7F0"
	),
	new Project(
		"Game Engine + Game",
		"A game engine for a 2D roguelike dungeon crawlers with rhythm-based mechanics. Can compile games for PC and PS4. Used to make the game Setsuko: Drums of Harmony.",
		"2023-2024",
		"gudenuffengine",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.PS4 ],
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
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.CUSTOM_ENGINE, PROJECT_TAG.PS4, PROJECT_TAG.ART_2D, PROJECT_TAG.RHYTHM_BASED ],
		"#4761AB"
	),
	new Project(
		"CoopScoop",
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
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.VR, PROJECT_TAG.ARCADE, PROJECT_TAG.ART_3D, PROJECT_TAG.LOW_POLY ],
		"rgb(223 170 44)"
	),
	new Project(
		"Gallus Engine (Custom Engine)",
		"A pet project of mine used for learning more about graphics, engine architecture, UI, audio and everything else. NOTE: This is a WIP and it is by no means finished. I work on this in my freetime.",
		"2024-2025",
		"gallusengine",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.VR ],
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
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.VR, PROJECT_TAG.CUSTOM_ENGINE ],
		"#6B57D4"
	),
	// new Project(
	// 	"In Sheeps' Clothing",
	// 	"The political party for animal rights has been taken over by animals and has arranged a meeting about their possibly evil plans for the future. You'll be disguised as a sheep and you'll attend this meeting. Do not do anything suspicious, though! Who knows what they'll do if they find out that you're spying on them?",
	// 	"insheepsclothing-logo-picture.jpg",
	// 	"./insheepsclothing",
	// 	[ PROJECT_PLATFORM.WINDOWS ],
	// 	"insheepsclothing-showcase-video_c.mp4",
	// 	false,
	// 	PROJECT_TYPE.VIDEO_GAME,
	// 	[ "indigo-2023-selection.png" ],
	// 	[ PROGRAMMING_LANGUAGE.CS ],
	// 	GAME_ENGINE.UNITY_ENGINE,
	// 	new UniqueCollection<Teammate>([
	// 		getKylianDekker(
	// 			[
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 				PROJECT_ROLE.COMPOSER,
	// 				PROJECT_ROLE.SOUND_DESIGNER,
	// 				PROJECT_ROLE.GAME_DESIGNER,
	// 			]
	// 		),
	// 		getStanVogels(
	// 			[
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 				PROJECT_ROLE.GAME_DESIGNER,
	// 			]
	// 		),
	// 		getWillemVanDenAkker(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getEvieDeVisser(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getDanishaGroos(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getAaronVanErp(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getReneMeegdes(
	// 			[
	// 				PROJECT_ROLE.ARTIST_3D
	// 			]
	// 		),
	// 		getKayminSambrano(
	// 			[
	// 				PROJECT_ROLE.VOICE_ACTOR
	// 			]
	// 		),
	// 	]),
	// 	[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.VR, PROJECT_TAG.ARCADE, PROJECT_TAG.ART_2D, PROJECT_TAG.LOW_POLY ],
	// 	"indigo-selection-2023"
	// ),
	new Project(
		"S.P.L.I.C.E.D",
		"You take on the role of a strong-willed girl determined to challenge the tyranny of the mob leader Jiaolong and free Chinatown from their oppressor. Discover forgotten secrets and powerful weapons that will help you traverse the treacherous streets, as you set off on a dangerous mission to fight the mutants, monsters, and robotic enemies hiding within.",
		"2023",
		"spliced",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.STEAM ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CPP,
		GAME_ENGINE.UNREAL_ENGINE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.AUDIO_LEAD,
					PROJECT_ROLE.COMPOSER,
				]
			),
			getTiesDeGroot(
				[
					PROJECT_ROLE.PROJECT_LEADER,
					PROJECT_ROLE.GAME_DESIGNER,
				]
			),
			getMaxVanDerPlas(
				[
					PROJECT_ROLE.ANIMATOR_LEAD,
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ANIMATOR_3D,
					PROJECT_ROLE.RIGGER,
				]
			),
			getLucaYavuzok(
				[
					PROJECT_ROLE.DESIGN_LEAD,
					PROJECT_ROLE.GAME_DESIGNER
				]
			),
			getSammieDeRaaff(
				[
					PROJECT_ROLE.PRODUCER,
					PROJECT_ROLE.GAME_DESIGNER
				]
			),
			getRalphWarrand(
				[
					PROJECT_ROLE.PROGRAMMING_LEAD,
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER
				]
			),
			getMikaGoddrie(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ANIMATOR_3D,
					PROJECT_ROLE.RIGGER
				]
			),
			getAbdullaDonmez(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
				]
			),
			getCasTrines(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
				]
			),
			getEsmeeVanBoven(
				[
					PROJECT_ROLE.ANIMATOR_3D,
					PROJECT_ROLE.RIGGER,
				]
			),
			getAlexSmith(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
					PROJECT_ROLE.ENVIRONMENT_ARTIST,
				]
			),
			getAnneTeunissen(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ENVIRONMENT_ARTIST,
				]
			),
			getJimiWeijers(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
				]
			),
			getTomVanDerVeeken(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ENVIRONMENT_ARTIST,
				]
			),
			getMateValent(
				[
					PROJECT_ROLE.ARTIST_LEAD,
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ENVIRONMENT_ARTIST,
				]
			),
			getLeroyVis(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ENVIRONMENT_ARTIST,
				]
			),
			getRubenSmit(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
				]
			),
			getRosanneGrootjes(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
				]
			),
			getNathalieStuit(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
				]
			),
			getJordyDeWaal(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
				]
			),
			getYaroCopijn(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ANIMATOR_3D,
					PROJECT_ROLE.RIGGER,
				]
			),
			getCelineVanDerKnaap(
				[
					PROJECT_ROLE.ARTIST_LEAD,
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.ENVIRONMENT_ARTIST,
				]
			),
			getMariaLoannou(
				[
					PROJECT_ROLE.ARTIST_3D,
					PROJECT_ROLE.CHARACTER_ARTIST,
					PROJECT_ROLE.ANIMATOR_3D,
				]
			),
			getTristanTenCate(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER
				]
			),
			getMattieToth(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER
				]
			),
			getRaduTandarica(
				[
					PROJECT_ROLE.GAME_DESIGNER
				]
			),
			getStefanosZarakovitis(
				[
					PROJECT_ROLE.GAME_DESIGNER
				]
			),
			getAntonioMinev(
				[
					PROJECT_ROLE.GAME_DESIGNER
				]
			),
			getRicoVisscher(
				[
					PROJECT_ROLE.GAME_DESIGNER
				]
			),
		]),
		[
			"Designed and implemented the swordfish enemy.",
			"Developed and integrated multiple systems for dynamic music and sound effects in Unreal Engine.",
			"Worked on the player's secondary weapon, the charge weapon, enhancing combat mechanics.",
			"Composed the original soundtrack and created most of the sound effects."
		],
		[
			"Learned how to navigate my way around in Unreal Engine."
		],
		[ PROJECT_TAG.ACTION_ADVENTURE, PROJECT_TAG.METROIDVANIA, PROJECT_TAG.ART_3D, PROJECT_TAG.WINDOWS ],
		"#90785C"
	),
	new Project(
		"In Sheeps' Clothing",
		"The political party for animal rights has been taken over by animals and has arranged a meeting about their possibly evil plans for the future. You'll be disguised as a sheep and you'll attend this meeting. Do not do anything suspicious, though! Who knows what they'll do if they find out that you're spying on them?",
		"2024",
		"insheepsclothing",
		[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.VR ],
		PROJECT_TYPE.VIDEO_GAME,
		PROGRAMMING_LANGUAGE.CS,
		GAME_ENGINE.UNITY_ENGINE,
		new UniqueCollection<Teammate>([
			getKylianDekker(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.COMPOSER,
					PROJECT_ROLE.SOUND_DESIGNER,
					PROJECT_ROLE.GAME_DESIGNER,
					PROJECT_ROLE.ARTIST_3D
				]
			),
			getStanVogels(
				[
					PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
					PROJECT_ROLE.GAME_DESIGNER,
				]
			),
			getKayminSambrano(
				[
					PROJECT_ROLE.VOICE_ACTOR
				]
			),
		]),
		[
			"Designed and implemented several key gameplay elements, including VR physics and camera mechanics.",
			"Composed the original soundtrack, designed sound effects and created all 3D models."
		],
		[
			"Make shared libraries for VR projects and make them dynamic enough where specific game mechanics can be changed."
		],
		[ PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.VR, PROJECT_TAG.ARCADE, PROJECT_TAG.ART_2D, PROJECT_TAG.LOW_POLY ],
		"#5E5D3E"
	),
	// new Project(
	// 	"Trash Pickers",
	// 	"You wake up in a maze crowded with monsters. What's worse, they're polluting the environment by dropping trash all around the maze! Clean up the trash piles, but make sure you do not get touched by the monsters, otherwise your energy-levels get lower until you die.",
	// 	"2019",
	// 	"trashpickers",
	// 	[ PROJECT_PLATFORM.WINDOWS ],
	// 	PROJECT_TYPE.VIDEO_GAME,
	// 	[ PROGRAMMING_LANGUAGE.CS, PROGRAMMING_LANGUAGE.NODEJS ],
	// 	GAME_ENGINE.UNITY_ENGINE,
	// 	new UniqueCollection<Teammate>([
	// 		getKylianDekker(
	// 			[
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 				PROJECT_ROLE.NETWORK_PROGRAMMER,
	// 				PROJECT_ROLE.COMPOSER,
	// 				PROJECT_ROLE.SOUND_DESIGNER,
	// 				PROJECT_ROLE.GAME_DESIGNER,
	// 			]
	// 		),
	// 		getCelineTijdhof(
	// 			[
	// 				PROJECT_ROLE.ARTIST_2D,
	// 				PROJECT_ROLE.ANIMATOR_2D
	// 			]
	// 		),
	// 		getColinDeKoning(
	// 			[
	// 				PROJECT_ROLE.ARTIST_2D,
	// 			]
	// 		),
	// 		getTingTingChong(
	// 			[
	// 				PROJECT_ROLE.ARTIST_2D,
	// 			]
	// 		),
	// 		getJipVanDeWouw(
	// 			[
	// 				PROJECT_ROLE.ARTIST_2D,
	// 			]
	// 		)
	// 	]),
	// 	[
	// 		"Developed and managed all tile-based movement systems, enemy AI behaviors, and trash collection mechanics.",
	// 		"Implemented and maintained online functionality using WebSockets for both client and server-side communication.",
	// 		"Composed the original soundtrack and designed immersive sound effects."
	// 	],
	// 	[ PROJECT_TAG.MULTIPLAYER, PROJECT_TAG.SINGLEPLAYER, PROJECT_TAG.LINE_ART, PROJECT_TAG.ARCADE, PROJECT_TAG.ART_2D, PROJECT_TAG.CARTOON ],
	// 	"#AE3A3B"
	// ),
	// new Project(
	// 	"Gudenuff Engine",
	// 	"A game engine for a 2D roguelike dungeon crawlers with rhythm-based mechanics. Can compile games for PC and PS4. Used to make Setsuko: Drums of Harmony.",
	// 	"2022-2023",
	// 	"gudenuff-engine",
	// 	[ PROJECT_PLATFORM.WINDOWS, PROJECT_PLATFORM.PS4 ],
	// 	PROJECT_TYPE.GAME_ENGINE,
	// 	[ PROGRAMMING_LANGUAGE.CPP ],
	// 	GAME_ENGINE.GUDENUFF_ENGINE,
	// 	new UniqueCollection<Teammate>([
	// 		getKylianDekker(
	// 			[
	// 				PROJECT_ROLE.ENGINE_PROGRAMMER,
	// 				PROJECT_ROLE.PROJECT_LEADER,
	// 				PROJECT_ROLE.AUDIO_PROGRAMMER,
	// 				PROJECT_ROLE.TOOLS_PROGRAMMER,
	// 			]
	// 		),
	// 		getSlavaTakrovskij(
	// 			[
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 			]
	// 		),
	// 		getJustinKujawa(
	// 			[
	// 				PROJECT_ROLE.GRAPHICS_PROGRAMMER,
	// 			]
	// 		),
	// 		getMartijnVahl(
	// 			[
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 			]
	// 		),
	// 		getMattieToth(
	// 			[
	// 				PROJECT_ROLE.GRAPHICS_PROGRAMMER,
	// 			]
	// 		),
	// 		getDannyOosterwijk(
	// 			[
	// 				PROJECT_ROLE.ENGINE_PROGRAMMER,
	// 			]
	// 		),
	// 		getPepijnVanLoon(
	// 			[
	// 				PROJECT_ROLE.GAMEPLAY_PROGRAMMER,
	// 			]
	// 		),
	// 	]),
	// 	[
	// 		"Designed and implemented the core gameplay mechanic of rhythm-based movement synchronized with a changing BPM.",
	// 		"Developed various tools and UI components with ImGui for the game engine, including the resource explorer, UI editor, level creator, and audio tools.",
	// 		"Managed the resource management system across both Windows and PS4 platforms, ensuring efficient asset handling and quick testing.",
	// 		"Composed the original soundtrack and designed all sound effects."
	// 	],
	// 	[ PROJECT_TAG.GAME_ENGINE, PROJECT_TAG.PS4, PROJECT_TAG.RHYTHM_BASED, PROJECT_TAG.ART_2D, PROJECT_TAG.WINDOWS, PROJECT_TAG.TOOL ],
	// 	"#404040"
	// ),
	// TODO: ADD AUDIO ENGINE
];

PROJECTS[0].steamLink = "https://store.steampowered.com/app/2537590/Microsoft_Flight_Simulator_2024/";
PROJECTS[2].steamLink = "https://store.steampowered.com/app/2672620/CoopScoop/";
PROJECTS[3].steamLink = "https://store.steampowered.com/app/2163220/SPLICED/";

const CURRENT_DATE: Date = new Date();
const PROGRAMMING_YEAR = 2016;
const PROGRAMMING_YEAR_CPP = 2021;
const BIRTHDAY: Date = new Date('January 25, 2000 00:00:00');

export const CURRENT_YEAR = () => {
	return CURRENT_DATE.getFullYear();
};

export const PROGRAMMING_EXPERIENCE = () => {
	return CURRENT_YEAR() - PROGRAMMING_YEAR;
};

export const PROGRAMMING_EXPERIENCE_CPP = () => {
	return CURRENT_YEAR() - PROGRAMMING_YEAR_CPP;
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