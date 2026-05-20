export type UserProfile = {
  id: number;
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  followers: number;
  following: number;
  location: string | null;
  html_url: string;
}