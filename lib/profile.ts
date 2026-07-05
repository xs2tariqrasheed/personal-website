import profileJson from "@/data/profile.json";

export interface Social {
  label: string;
  url: string;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  shortBio: string;
  email: string;
  location: string;
  avatar: string;
  siteUrl: string;
  resumeUrl: string | null;
  socials: Social[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string | null;
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
}

export interface Story {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string[];
}

export interface Profile {
  personal: Personal;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: Project[];
  stories: Story[];
}

export const profile = profileJson as Profile;

export function getStories(): Story[] {
  return [...profile.stories].sort((a, b) => b.date.localeCompare(a.date));
}

export function getStoryBySlug(slug: string): Story | undefined {
  return profile.stories.find((story) => story.slug === slug);
}

export function absoluteUrl(path: string): string {
  return new URL(path, profile.personal.siteUrl).toString();
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatDateRange(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}

export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
}
