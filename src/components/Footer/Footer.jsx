const Footer = () => {
  return (
    <footer className="bg-[#081122] text-white px-6 md:px-16 py-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-8 ">
        {/* Logo + Description */}
        <div className="md:w-1/4">
          <h1 className="textPinkColor font-extrabold text-3xl mb-4">wooziee</h1>
          <p className="text-[12px] text-gray-300 leading-relaxed">
            Seamless ticketing means quick, hassle-free access to events for every enthusiast. From discovery to booking, everything happens smoothly in one place. For organizers, it simplifies event setup, promotions, and crowd management—all in a few clicks.
          </p>
        </div>

        <div className="flex md:w-1/3 justify-around md:justify-between">
          {/* Wooziee Column */}
          <div >
            <h3 className="text-white font-semibold text-lg mb-4 ">Wooziee</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Vision</li>
              <li>Dashboard</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Careers</li>
            </ul>
          </div>

        </div>
        {/* Newsletter Column */}
        <div  className="md:w-1/4">
          <h3 className="text-white font-semibold text-lg mb-4">Stay In The Loop</h3>
          <p className="text-[11.5px] text-gray-300 mb-4 leading-relaxed">
            Let’s create and join the Wooziee community– don’t miss any of the latest updates from us!
          </p>

          <div className="flex bg-gradient-to-r h-10 from-[#2b2b32] to-[#1a1a1f] rounded-full overflow-hidden shadow-lg w-full">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-sm text-white placeholder:text-gray-400 px-4 py-3 focus:outline-none flex-1"
            />
            <button className="bgPinkColor text-white font-medium text-[11px] px-3 py-2.5 cursor-pointer rounded-full transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 