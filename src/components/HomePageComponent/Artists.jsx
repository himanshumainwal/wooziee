import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


const Artists = ({ title, artistData }) => {
    return (
        <section className="py-10 px-4 md:px-16 container mx-auto text-white">
            <div className="flex justify-between">
                <h2 className="text-xl md:text-2xl font-semibold mb-8">{title}</h2>
                <MdOutlineKeyboardArrowRight
                    className="cursor-pointer text-4xl md:text-[45px] text-pink-600"
                />
            </div>
            <div className="flex flex-wrap sm:gap-6 gap-1 justify-around items-center">
                {artistData.map((artist, index) => (
                <Link to={`/artist-profile/${artist.id}`} key={index}>
                    <div className="flex cursor-pointer flex-col items-center">  <div className="w-[55px] sm:w-24 h-[55px] sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-t-4 border-pink-600 hover:scale-105 transition-transform duration-300">
                            <img
                                src={artist.img}
                                alt={artist.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-3 text-[11px] sm:text-sm md:text-base font-medium">{artist.name}</p>
                    </div>
                </Link>
                ))}
            </div>
        </section>
    );
};

export default Artists