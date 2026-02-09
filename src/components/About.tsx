import { Award, Globe, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Globe, value: '65+', label: 'Countries Worldwide' },
    { icon: Users, value: '10,000+', label: 'Satisfied Clients' },
    { icon: Award, value: 'ISO 9001', label: 'Certified' },
    { icon: TrendingUp, value: '25+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Kik Pack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading manufacturer of disposable food packaging solutions with a commitment to quality and sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manufacturing facility"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At Kik Pack, we are dedicated to providing top-quality disposable food packaging solutions that meet the evolving needs of the food service industry. Our extensive portfolio of over 4,000 products serves customers across 65+ countries worldwide.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We combine modern technology with sustainable practices to manufacture packaging that protects food, enhances presentation, and minimizes environmental impact. Our ISO 9001:2015 certification ensures that every product meets the highest international standards.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From restaurants and catering services to food manufacturers and retailers, we provide innovative packaging solutions that help businesses succeed while contributing to a more sustainable future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
