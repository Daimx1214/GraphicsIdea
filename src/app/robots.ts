import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/providers?*"],
      },
    ],
    sitemap: "https://graphicsidea.com/sitemap.xml",
  };
}
