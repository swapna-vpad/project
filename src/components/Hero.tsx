import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Food Packaging Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kik Pack is your trusted partner in disposable food packaging. We manufacture high-quality, sustainable packaging solutions for the food service industry worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all font-semibold text-lg"
              >
                View Products
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Food packaging products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-emerald-100">
              <div className="text-emerald-600 font-bold text-3xl">4000+</div>
              <div className="text-gray-600 font-medium">Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
