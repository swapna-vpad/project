import { Box, Coffee, UtensilsCrossed, ShoppingBag, IceCream, Salad } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      icon: Box,
      title: 'Food Containers',
      description: 'Durable containers for hot and cold foods, perfect for takeout and delivery services',
      image: 'https://images.pexels.com/photos/5623069/pexels-photo-5623069.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Coffee,
      title: 'Cups & Lids',
      description: 'Insulated cups and secure lids for beverages of all temperatures',
      image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: UtensilsCrossed,
      title: 'Cutlery & Utensils',
      description: 'Eco-friendly disposable cutlery sets for convenient dining',
      image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: ShoppingBag,
      title: 'Bags & Wraps',
      description: 'Versatile packaging bags and wraps for sandwiches, pastries, and more',
      image: 'https://images.pexels.com/photos/6347905/pexels-photo-6347905.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Salad,
      title: 'Bowl & Plates',
      description: 'Sturdy disposable bowls and plates in various sizes for any meal',
      image: 'https://images.pexels.com/photos/6419129/pexels-photo-6419129.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: IceCream,
      title: 'Specialty Items',
      description: 'Custom packaging solutions for desserts, bakery items, and specialty foods',
      image: 'https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive packaging solutions for every food service need with over 4,000 products to choose from
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-lg mb-2">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Can't find what you're looking for? We offer custom packaging solutions tailored to your needs.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-all font-semibold text-lg"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
