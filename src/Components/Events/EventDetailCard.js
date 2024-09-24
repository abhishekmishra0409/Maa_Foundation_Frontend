const EventDetailCard = ({ data }) => {
    return (
      <div className="flex flex-col items-start justify-start p-4 rounded-lg w-full max-w-full gap-6 sm:flex-row sm:items-start sm:justify-start sm:gap-8">
        {/* Image */}
        <img
          className="w-full sm:w-96 object-contain rounded-md"
          loading="lazy"
          alt="event_img"
          src={data.image}
        />
  
        {/* Text Section */}
        <div className="flex flex-col items-start justify-start sm:ml-6 p-4 sm:p-0">
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold">{data.title}</h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-2 leading-7 sm:leading-8">
            {data.subtitle}
          </p>
        </div>
      </div>
    );
  };
  
  export default EventDetailCard;
  