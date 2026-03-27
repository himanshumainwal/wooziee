import { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Menu, X, User } from 'lucide-react';
import { useAdminSidebar } from "../../context/AdminSidebarContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAdminOpen, toggleAdminSidebar } = useAdminSidebar(); // ✅ Added isAdminOpen
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Vision", path: "/vision" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About Us", path: "/about-us" },
  ];

  // ✅ Change navbar background after scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-sm text-white transition-colors duration-400 
      ${isScrolled ? "bg-white/10" : "bg-white/5"}`}
    >
      <div className="flex lg:container lg:mx-auto justify-between items-center px-4 py-4 md:px-16">

        {/* ✅ Logo */}
        <Link to="/">
          <div className="textPinkColor font-bold text-2xl">wooziee</div>
        </Link>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "textPinkColor" : "text-white hoverPinkColor transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* ✅ User Icon */}
          <li className="relative">
            <User
              className={`text-3xl border cursor-pointer border-gray-300 rounded-full p-1 transition 
    ${isAdminOpen ? "text-pink-600 border-pink-600" : "text-white hover:text-pink-600 hover:border-pink-600"}`}
              onClick={() => toggleAdminSidebar(prev => !prev)}
            />
          </li>
        </ul>

        {/* ✅ Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <User
              className={`w-5 h-5 transition 
    ${isAdminOpen ? "text-pink-600" : "text-white hover:text-pink-600"}`}
              onClick={() => toggleAdminSidebar(prev => !prev)}
            />
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-5xl absolute w-full top-16 left-0 p-6 flex flex-col gap-4 z-40">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "textPinkColor" : "text-white hoverPinkColor transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
