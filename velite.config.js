import { defineCollection, defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Define computed fields to process the slug
const computedFields = (data) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"), // Remove leading directory if any
});

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content", // Root directory for content files
  output: {
    data: ".velite", // Output directory for posts.json
    assets: "public/static", // Output directory for assets
    base: "/static/", // Base path for assets
    name: "[name]-[hash:6].[ext]", // Asset naming convention
    clean: true, // Clean output directory before build
  },
  collections: {
    posts,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
