const CategorySection = ({ title, categories }) => {
  return (
    <section className="py-10 px-4 md:px-16 container mx-auto text-white">
      <h2 className="text-xl md:text-2xl font-semibold mb-8">{title}</h2>
      <div className="flex flex-wrap sm:gap-6 gap-1 justify-around items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-[55px] sm:w-24 h-[55px] sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-t-4 border-pink-600 hover:scale-105 transition-transform duration-300">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] sm:text-sm md:text-base font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
