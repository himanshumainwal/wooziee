import EventSlider from "../../../components/HomePageComponent/EventSlider";
import { features, sampleEvents } from "../../../data/events"; // Assuming features data is imported from a file


const FeatureCards = () => {
    return (
        <>
            <div className="mt-8 bgPinkColor text-white py-10 px-4 md:px-12">
                <h2 className="text-center text-2xl font-bold mb-10">Find Favourites</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {features.map(({ icon, title, highlight }) => (
                        <div
                            key={highlight}
                            className="bg-[#0e0e1a] p-6 rounded-md text-center w-64"
                        >
                            <div className="text-3xl mb-2">{icon}</div>
                            <p className="text-md">
                                {title} <span className="textPinkColor">{highlight}</span>
                            </p>
                        </div>
                    ))}
                </div>


            </div>
            <EventSlider title="Book your favourite events" events={sampleEvents} />


        </>
    );
};

export default FeatureCards;
