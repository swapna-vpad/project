import { Leaf, Shield, Truck, HeartHandshake, Zap, Building } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Solutions',
      description: 'Eco-friendly materials and manufacturing processes that reduce environmental impact',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified with rigorous quality control at every production stage',
    },
    {
      icon: Truck,
      title: 'Global Delivery',
      description: 'Reliable shipping to 65+ countries with efficient logistics and on-time delivery',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Support',
      description: 'Dedicated support team ready to assist with product selection and custom solutions',
    },
    {
      icon: Zap,
      title: 'Fast Production',
      description: 'Modern facilities with advanced technology for quick turnaround times',
    },
    {
      icon: Building,
      title: 'Industry Expertise',
      description: '25+ years of experience serving restaurants, caterers, and food manufacturers',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Kik Pack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with a trusted leader in food packaging manufacturing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-xl mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Food Packaging?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses worldwide who trust Kik Pack for their packaging needs
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg"
          >
            Get in Touch Today
          </button>
        </div>
      </div>
    </section>
  );
}
