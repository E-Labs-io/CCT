/** @format */

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PTTRN - Show Tools",
  description: "A set of tools to assist lighting & show design.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "CCT Calculator",
      href: "/cct",
    },

    {
      label: "PTTRN",
      href: "https://pttrn.live",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "CCT Calculator",
      href: "/cct",
    },
    {
      label: "PTTRN",
      href: "https://pttrn.live",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
