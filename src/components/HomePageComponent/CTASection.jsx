import { useNavigate, Link } from "react-router-dom";
import CTA from "/images/CTA.png";

const CTASection = () => {
  const navigate = useNavigate();


  return (
    <section className="bgPinkColor py-10 px-4 md:px-16 rounded-none text-white">
      <div className="container mx-auto w-4/5 flex flex-col md:flex-row items-center">
        {/* Left Text */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-3">Find what you love?</h2>
          <p className="text-sm mb-5">
            Find shows that align with your interests, and have the time of your
            life. Let Wooziee find you the right events, so you're only required
            to have a great time.
          </p>
          <Link to="/feature-cards">
            <button className="bg-[#0e0e1a] cursor-pointer text-white px-9 py-3 rounded-full font-semibold hover:bg-[#1b1b2d] transition">
              Let’s Go!
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={CTA}
            alt="CTA Illustration"
            className="w-64 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
