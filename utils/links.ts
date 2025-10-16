type Link = {
  id: string
  name: string
  icon: string
}

export const links: Link[] = [
  { id: 'introduction', name: 'links.introduction', icon: 'mdi:home-outline' },
  { id: 'about', name: 'links.about', icon: 'mdi:account-outline' },
  {
    id: 'experiences',
    name: 'links.experiences',
    icon: 'mdi:briefcase-outline',
  },
  { id: 'projects', name: 'links.projects', icon: 'mdi:code-tags' },
  { id: 'educations', name: 'links.educations', icon: 'mdi:school-outline' },
  { id: 'contact', name: 'links.contact', icon: 'mdi:email-outline' },
]
