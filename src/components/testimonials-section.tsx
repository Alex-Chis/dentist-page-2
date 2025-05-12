
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophie Moore",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "I've always been anxious about dental visits, but this clinic made me feel completely at ease. The staff is professional and caring.",
    },
    {
      name: "Morgan McKinley",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "The care I received was exceptional. Dr. Young took the time to explain everything and made sure I was comfortable throughout my procedure.",
    },
    {
      name: "Lily Wood",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "My family has been coming here for years. The quality of care and attention to detail is outstanding. Highly recommend!",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            See what our over 1,000 happy<br />customers have to say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our patients' experiences speak for themselves. We're proud to have earned the trust and satisfaction of so many in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dentist-lightGray p-6 rounded-xl">
              <div className="mb-4">
                <Avatar className="h-16 w-16 border-2 border-dentist-purple">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <h4 className="text-xl font-medium mb-2">{testimonial.name}</h4>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-dentist-purple text-dentist-purple hover:bg-dentist-purple hover:text-white">
            See all testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
