import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from './components/HomePage.vue';
import AboutMe from './components/AboutMe.vue';
import { Project } from '@/classes';
import { PROJECTS, AGE } from '@/data';

// Generate meta for each project
const getProjectMeta = (project: Project): Record<string, any> => ({
	title: `${project.name} - Kylian Dekker`,
	description: project.description,
	type: 'website',
	url: `https://www.kyliandekker.com/${project.link}`,
	image: `src/meta.jpg`,
	card: 'summary_large_image',
});

// Define routes
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: HomePage,
		// meta: {
		// 	title: `Home - Kylian Dekker`,
		// 	description: `Hi! I’m Kylian Dekker, a ${AGE()}-year-old gameplay programmer from the Netherlands.`,
		// 	type: 'website',
		// 	url: `https://www.kyliandekker.com/`,
		// 	image: `src/meta.jpg`,
		// 	card: 'summary_large_image',
		// },
	},
	{
		path: '/about',
		component: AboutMe,
		// meta: {
		// 	title: `About - Kylian Dekker`,
		// 	description: "Learn more about me and my journey as a gameplay programmer.",
		// 	type: 'website',
		// 	url: `https://www.kyliandekker.com/about`,
		// 	image: `src/meta-about.jpg`,
		// 	card: 'summary_large_image',
		// },
	},
];

// Add project-specific routes
PROJECTS.forEach((project) =>
	routes.push({
		path: `/${project.link}`,
		component: HomePage,
		props: { startingProject: project.link },
		// meta: getProjectMeta(project), // Pass the meta information
	}),
);

// const setMetaInfo = (properties: string[], metaInfo: string): void => {
//     properties.forEach(element => {
// 		let metaDescription = document.querySelector(`meta[name="${element}"]`);

// 		if (!metaDescription)
// 		{
// 			metaDescription = document.createElement('meta');
// 			metaDescription.setAttribute('name', element);
// 			document.head.appendChild(metaDescription);
// 		}

// 		// Type assertion to string
// 		metaDescription.setAttribute('content', metaInfo);
//     });
// };

// Create the router
const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Handle dynamic title and meta tags
// router.beforeEach((to, from, next) => {
// 	if (to.meta?.title)
// 	{
// 		document.title = to.meta.title as string;
// 	}

// 	setMetaInfo(['title', 'og:title', 'og:site_name', 'twitter:title'], to.meta.title as string);
// 	setMetaInfo(['author'], 'Kylian Dekker');
// 	setMetaInfo(['keywords'], 'Kylian Dekker, Gameplay Programmer, Programmer, C++, CoopScoop');
// 	setMetaInfo(['description', 'og:description', 'twitter:description'], to.meta.description as string);
// 	setMetaInfo(['robots'], 'index, follow');
// 	setMetaInfo(['locale'], 'en_US');
// 	// setMetaInfo(['og:see_also'], to.meta.description as string); // Do this?

// 	setMetaInfo(['url', 'og:url', 'twitter:url'], to.meta.url as string);
// 	setMetaInfo(['twitter:card'], to.meta.card as string);
// 	setMetaInfo(['og:image', 'twitter:image'], to.meta.image as string);

// 	next();
// });

export default router;