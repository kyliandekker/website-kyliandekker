export enum PROJECT_TYPE
{
	VIDEO_GAME = "Video Game",
	GAME_ENGINE = "Game Engine",
	TOOL = "Tool",
	LIBRARY = "Library",
}

export enum PROGRAMMING_LANGUAGE
{
	CS = "C#",
	CPP = "C++",
	NODEJS = "NodeJS"
}

export enum GAME_ENGINE
{
	UNITY_ENGINE = "Unity Engine",
	UNREAL_ENGINE = "Unreal Engine",
	GUDENUFF_ENGINE = "Gudenuff Engine (Custom Engine)",
	GALLUS_ENGINE = "Gallus Engine (Custom Engine)",
	IN_HOUSE = "Proprietary Engine"
}

export enum PROJECT_PLATFORM
{
	WINDOWS = "Windows",
	PS4 = "PS4",
	PS5 = "PS5",
	XBOX = "XBOX",
	VR = "VR",
	STEAM = "Steam"
}

export enum PROJECT_ROLE
{
	PROJECT_LEADER = "Project Leader",
	PRODUCT_OWNER = "Product Owner",
	PRODUCER = "Producer",
	PROGRAMMING_LEAD = "Lead Programmer",
	GAMEPLAY_PROGRAMMER = "Gameplay Programmer",
	ENGINE_PROGRAMMER = "Engine Programmer",
	GRAPHICS_PROGRAMMER = "Graphics Programmer",
	UI_PROGRAMMER = "UI Programmer",
	AUDIO_PROGRAMMER = "Audio Programmer",
	NETWORK_PROGRAMMER = "Network Programmer",
	TOOLS_PROGRAMMER = "Tools Programmer",
	AUDIO_LEAD = "Audio Lead",
	COMPOSER = "Composer",
	SOUND_DESIGNER = "Sound Designer",
	ARTIST_LEAD = "Lead Artist",
	ARTIST_3D = "3D Artist",
	ARTIST_2D = "2D Artist",
	ANIMATOR_LEAD = "Lead Animator",
	ANIMATOR_3D = "3D Animator",
	ANIMATOR_2D = "2D Animator",
	RIGGER = "Rigger",
	CHARACTER_ARTIST = "Character Artist",
	CONCEPT_ARTIST = "Concept Artist",
	ENVIRONMENT_ARTIST = "Environment Artist",
	TECHNICAL_ARTIST = "Technical Artist",
	DESIGN_LEAD = "Lead Designer",
	GAME_DESIGNER = "Game Designer",
	VOICE_ACTOR = "Voice Actor",
	GENERALIST = "Generalist",
}

export class TeammateLink
{
	portfolio: string;
	gitHub: string;
	linkedIn: string;
	artStation: string;
	behance: string;

	constructor(
		portfolio: string,
		gitHub: string,
		linkedIn: string,
		artStation: string,
		behance: string
	)
	{
		this.portfolio = portfolio;
		this.gitHub = gitHub;
		this.linkedIn = linkedIn;
		this.artStation = artStation;
		this.behance = behance;
	}
}

export class Teammate
{
	name: TEAMMATE;
	roles: PROJECT_ROLE[] = [];
	links: TeammateLink;

	constructor(
		name: TEAMMATE,
		roles: PROJECT_ROLE[],
		links: TeammateLink
	)
	{
		this.name = name;
		this.roles = roles;
		this.links = links;
	}
}

export enum PROJECT_TAG
{
	SINGLEPLAYER = "Singleplayer",
	MULTIPLAYER = "Multiplayer",
	VR = "Virtual Reality",
	ARCADE = "Arcade",
	METROIDVANIA = "Metroidvania",
	ART_3D = "3D",
	ART_2D = "2D",
	LOW_POLY = "Low Poly",
	CARTOON = "Cartoon",
	LINE_ART = "Line Art",
	AUDIO = "Audio",
	ACTION_ADVENTURE = "Action Adventure",
	RHYTHM_BASED = "Rhythm Based",
	CUSTOM_ENGINE = "Custom Engine",
	GAME_ENGINE = "Game Engine",
	LIBRARY = "Library",
	TOOL = "Tool",
	PS4 = "PS4",
	WINDOWS = "WINDOWS",
	SIMULATION = "SIMULATION",
}

export enum TEAMMATE
{
	KYLIAN_DEKKER = "Kylian Dekker",
	BAS_VAN_SEETERS = "Bas van Seeters",
	RENE_MEEGDES = "Rene Meegdes",
	FREYA_DE_VRIES = "Freya de Vries",
	DANISHA_GROOS = "Danisha Groos",
	AARON_VAN_ERP = "Aaron van Erp",
	STAN_VOGELS = "Stan Vogels",
	LEX_ROOVERS = "Lex Roovers",
	SAM_BOOTS = "Sam Boots",
	LUCA_YAVUZOK = "Luca Yavuzok",
	WILLEM_VAN_DEN_AKKER = "Willem van den Akker",
	EVIE_DE_VISSER = "Evie de Visser",
	CELINE_TIJDHOF = "Celine Tijdhof",
	COLIN_DE_KONING = "Colin de Koning",
	TINGTING_CHONG = "TingTing Chong",
	JIP_VAN_DE_WOUW = "Jip van de Wouw",
	TOM_VAN_DER_VEEKEN = "Tom van der Veeken",
	RUBEN_SMIT = "Ruben Smit",
	KAYMIN_SAMBRANO = "Kaymin Sambrano",
	SLAVA_TAKROVSKIJ = "Slava Takrovskij",
	JUSTIN_KUJAWA = "Justin Kujawa",
	LYUBOMIR_KOSTADINOV = "Lyubomir Kostadinov",
	MARTIJN_VAHL = "Martijn Vahl",
	MARIA_LOANNOU = "Maria Loannou",
	REMBRANDT_VAN_LEEUWEN = "Rembrandt van Leeuwen",
	MATTIE_TOTH = "Mattie Toth",
	WESLEY_CATS = "Wesley Cats",
	DANNY_OOSTERWIJK = "Danny Oosterwijk",
	PEPIJN_VAN_LOON = "Pepijn van Loon",
	TIES_DE_GROOT = "Ties de Groot",
	MAX_VAN_DER_PLAS = "Max van der Plas",
	RALPH_WARRAND = "Ralph Warrand",
	MIKA_GODDRIE = "Mika Goddrie",
	ABDULLA_DONMEZ = "Abdulla Donmez",
	CAS_TRINES = "Cas Trines",
	ESMEE_VAN_BOVEN = "Esmee van Boven",
	ALEX_SMITH = "Alex Smith",
	JIMI_WEIJERS = "Jimi Weijers",
	MATE_VALENT = "Mate Valent",
	LEROY_VIS = "Leroy Vis",
	ROSANNE_GROOTJES = "Rosanne Grootjes",
	ANNE_TEUNISSEN = "Anne Teunissen",
	NATHALIE_STUIT = "Nathalie Stuit",
	JORDY_DE_WAAL = "Jordy de Waal",
	SAMMIE_DE_RAAFF = "Sammie De Raaff",
	YARO_COPIJN = "Yaro Copijn",
	CELINE_VAN_DER_KNAAP = "Celine van der Knaap",
	TRISTAN_TEN_CATE = "Tristan ten Cate",
	RADU_TANDARICA = "Radu Tandarica",
	STEFANOS_ZARAKOVITIS = "Stefanos Zarakovitis",
	ANTONIO_MINEV = "Antonio Minev",
	RICO_VISSCHER = "Rico Visscher"
}

export class UniqueCollection<T>
{
	private items: Set<T>;
  
	constructor(initialItems?: T[])
	{
		this.items = new Set<T>(initialItems);
	}
  
	add(item: T): void
	{
		this.items.add(item);
	}
  
	has(item: T): boolean
	{
		return this.items.has(item);
	}
  
	delete(item: T): boolean
	{
		return this.items.delete(item);
	}
  
	size(): number
	{
		return this.items.size;
	}
  
	clear(): void
	{
		this.items.clear();
	}
  
	values(): T[]
	{
		return Array.from(this.items);
	}
  
	forEach(callback: (item: T) => void): void
	{
		this.items.forEach(callback);
	}
  
	find(predicate: (item: T) => boolean): T | undefined
	{
		for (const item of this.items)
		{
			predicate(item)
			{
				return item;
			}
		}
		return undefined;
	}
}

export class Project
{
	name: string;
	description: string;
	year: string;
	link: string;
	platforms: PROJECT_PLATFORM[] = [];
	projectType: PROJECT_TYPE;
	language: PROGRAMMING_LANGUAGE;
	engine: GAME_ENGINE;
	tags: PROJECT_TAG[] = [];
	team: UniqueCollection<Teammate>;
	me: Teammate | undefined;
	accentColor: string;
	tasks: string[] = [];
	learn: string[] = [];

	// Optional.
	steamLink?: string;
	specialImages?: string[] = [];
	className?: string;
	disabled?: boolean;

	getMe(): Teammate | undefined
	{
		return this.team.find((item) => item.name === TEAMMATE.KYLIAN_DEKKER);
	}

	// FUNCTION method
	// TeamSize method
	constructor(
		name: string,
		description: string,
		year: string,
		link: string,
		platforms: PROJECT_PLATFORM[],
		projectType: PROJECT_TYPE,
		language: PROGRAMMING_LANGUAGE,
		engine: GAME_ENGINE,
		team: UniqueCollection<Teammate>,
		tasks: string[],
		learn: string[],
		tags: PROJECT_TAG[],
		accentColor: string
	)
	{
		this.name = name;
		this.description = description;
		this.year = year;
		this.link = link;
		this.platforms = platforms;
		this.projectType = projectType;
		this.language = language;
		this.engine = engine;
		this.team = team;
		this.tasks = tasks;
		this.learn = learn;
		this.tags = tags;
		this.accentColor = accentColor;

		this.me = this.getMe();
	}
   
	calculateTeamSize(): number 
	{

		return 0;
	}
}