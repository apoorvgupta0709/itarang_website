import { createMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog-posts";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeInOnScroll from "@/components/shared/FadeInOnScroll";
import BlogCard from "@/components/blog/BlogCard";
import Badge from "@/components/ui/Badge";

export const metadata = createMetadata({
  title: "Blog & Insights",
  description:
    "Industry insights, product updates, and thought leadership on EV battery financing, lifecycle management, and India's electric mobility ecosystem.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-700/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" className="mb-6">Knowledge Hub</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Blog &amp; Insights
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-200">
            Industry analysis, product updates, and thought leadership on EV battery financing and lifecycle management
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Latest Articles"
            title="From the iTarang Team"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {blogPosts.map((post, i) => (
              <FadeInOnScroll key={post.slug} delay={i * 0.1}>
                <BlogCard post={post} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
