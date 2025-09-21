import { computed, ref, watch } from 'vue'

export const useProjects = () => {
  const { t, locale } = useI18n()

  // Base project data (static info that doesn't change)
  const baseProjects = [
    {
      id: 1,
      key: 'bnb',
      thumbnail: '/images/bnb-thumb.jpg',
      technologies: 'Flutter, Firebase, Clean Architecture, GitLab',
      category: 'Fintech',
      appleLink: 'https://apps.apple.com/br/app/bnb-cartões/id1435796374',
      googleLink: 'https://play.google.com/store/apps/details?id=com.csu.bnb&hl=pt'
    },
    {
      id: 2,
      key: 'banpara',
      thumbnail: '/images/banpara-thumb.jpg',
      technologies: 'Flutter, .NET, Firebase, Docker, Nuxt.js',
      category: 'Fintech',
      appleLink: 'https://apps.apple.com/br/app/banpará-cartões/id1526688256',
      googleLink: 'https://play.google.com/store/apps/details?id=com.csu.banpara&hl=pt'
    },
    {
      id: 3,
      key: 'losango',
      thumbnail: '/images/losango-thumb.jpg',
      technologies: 'Flutter, Vue.js, Clean Architecture, BigQuery',
      category: 'Fintech',
      appleLink: 'https://apps.apple.com/br/app/losango/id1456294810?l=en-GB',
      googleLink: 'https://play.google.com/store/apps/details?id=com.csu.losango&hl=pt_BR'
    },
    {
      id: 4,
      key: 'h2club',
      thumbnail: '/images/h2club-thumb.png',
      technologies: 'Flutter, BigQuery, JWT, Docker, PHP',
      categories: ['Mobile'],
      category: 'Mobile',
      appleLink: 'https://apps.apple.com/br/app/h2-club/id6466628886',
      googleLink: 'https://play.google.com/store/apps/details?id=com.h2.app&hl=pt_BR&pli=1'
    },
    {
      id: 5,
      key: 'bluec',
      thumbnail: '/images/bluec-thumb.avif',
      technologies: 'Flutter, Docker, Google Pay, Apple Pay, Firebase',
      categories: ['Mobile', 'Fintech'],
      category: 'Mobile',
      appleLink: null,
      googleLink: 'https://play.google.com/store/apps/details?id=br.com.csu.baas&hl=pt_BR'
    },
    {
      id: 6,
      key: 'afinz',
      thumbnail: '/images/afinz-thumb.png',
      technologies: 'Flutter, Firebase, Vue.js, UI/UX, JWT',
      categories: ['Mobile', 'Fintech'],
      category: 'Mobile',
      appleLink: 'https://apps.apple.com/br/app/afinz/id1416167782',
      googleLink: 'https://play.google.com/store/apps/details?id=br.com.sorocred.sorocredapp&hl=en_US'
    },
    {
      id: 7,
      key: 'komus',
      thumbnail: '/images/komus-thumb.jpeg',
      technologies: 'Flutter, Vue.js, Node.js, TypeScript, UI/UX',
      categories: ['Mobile', 'Web'],
      category: 'Mobile',
      appleLink: null,
      googleLink: null
    },
    {
      id: 8,
      key: 'heiclub',
      thumbnail: '/images/heineken-thumb.jpg',
      technologies: 'Flutter, .NET, Docker, UI/UX',
      categories: ['Web', 'Enterprise'],
      category: 'Web',
      appleLink: null,
      googleLink: null
    },
    {
      id: 9,
      key: 'prudential',
      thumbnail: '/images/prudential-thumb.jpeg',
      technologies: 'Flutter Web, Firebase, Docker, XLSX',
      categories: ['Web', 'Enterprise'],
      category: 'Web',
      appleLink: null,
      googleLink: null
    },
    {
      id: 10,
      key: 'neopdv',
      thumbnail: '/images/neopdv-thumb.jpg',
      technologies: 'Flutter, Vue.js, Node.js, HTML/CSS, UI/UX',
      categories: ['Web', 'Mobile'],
      category: 'Web',
      appleLink: null,
      googleLink: null
    }
  ]

  // Reactive projects data
  const projectsData = ref([])
  
  // Function to update projects data
  const updateProjects = () => {
    projectsData.value = baseProjects.map(project => ({
      ...project,
      name: t(`home.projectsData.${project.key}.name`),
      shortDescription: t(`home.projectsData.${project.key}.shortDescription`),
      longDescription: t(`home.projectsData.${project.key}.longDescription`)
    }))
  }

  // Watch for locale changes and update projects
  watch(locale, updateProjects, { immediate: true })

  // Computed projects with translations
  const projects = computed(() => projectsData.value)

  // Featured projects (first 6)
  const featuredProjects = computed(() => projects.value.slice(0, 6))

  return {
    projects,
    featuredProjects
  }
}