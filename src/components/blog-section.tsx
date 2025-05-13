import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const articles = [
    {
      title: "5 Ways to improve dental habits before bedtime",
      image:
        "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Oral Health",
    },
    {
      title: "How to find the right dentist for your family",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Dental Care",
    },
    {
      title: "Everything you should know about dental implants",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Procedures",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our articles on dental health
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest tips, trends, and insights on
            maintaining optimal oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-dentist-lightPurple text-dentist-purple text-sm px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold mb-3">{article.title}</h3>
                <Button
                  variant="link"
                  className="text-dentist-purple p-0 h-auto"
                >
                  Read more →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-dentist-purple text-dentist-purple hover:bg-dentist-purple hover:text-white"
          >
            View all articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
