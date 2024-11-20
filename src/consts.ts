import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "HAHZ.LIVE",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Wizard of Hahz",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "My resume.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Explaining my solutions.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hahz@blkluv.org.com",
    HREF: "mailto:hahz@blkluv.org.com",
  },
  { 
    NAME: "TikTok",
    ICON: "tiktok",
    TEXT: "Wizard of Hahz",
    HREF: "https://tiktok.com/@wizardofhahz"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Hahz Terry",
    HREF: "https://www.linkedin.com/in/hassan-terry/",
  },
  { 
    NAME: "YouTube",
    ICON: "youtube",
    TEXT: "YouTube",
    HREF: "https://youtube.com/@wizardofhahz",
  },
]

