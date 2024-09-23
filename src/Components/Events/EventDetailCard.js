const EventDetailCard = ({ data }) => {
    return (
        <div className="flex flex-col items-start justify-start p-4 rounded-lg w-full max-w-full sm:flex-row sm:items-start sm:justify-start">
            <img
                className="w-96 object-contain rounded-md p-4"
                loading="lazy"
                alt="event_img"
                src={data.imageUrl}
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col items-start justify-start p-4">
                <h2 className="mb-2 text-5xl font-semibold">{data.title}</h2>
                <p className="text-xl mt-3 text-gray-700 leading-8">{data.subtitle}</p>
            </div>
        </div>
    );
};

export default EventDetailCard;
