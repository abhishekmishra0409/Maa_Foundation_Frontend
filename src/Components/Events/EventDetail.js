import EventDetailCard from "./EventDetailCard";
import { events } from "../Utils/Constant";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventid } = useParams();
  const event = events.find((event) => event.id === parseInt(eventid));

  if (!event) {
    return <div>Event not found</div>;
  }

  const otherEvents = events.filter((e) => e.id !== parseInt(eventid));

  return (
    <div className="w-full flex flex-col justify-center items-center bg-secondary-light gap-12 px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Event Image Section */}
      <section className="w-full max-w-7xl">
        <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            loading="lazy"
            alt="event"
            src={event.image}
          />
        </div>
      </section>

      {/* Event Details */}
      <section className="flex flex-col items-start justify-start gap-6 max-w-5xl px-4 text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">{event.title}</h1>
        <div className="text-lg sm:text-xl text-gray-dark">
          {Array.from({ length: 4 }).map((_, index) => (
            <p key={index} className="mb-4">{event.subtitle}</p>
          ))}
        </div>
      </section>

      {/* Other Events Section */}
      <section className="w-full max-w-5xl flex flex-col items-start justify-start gap-10">
        {otherEvents.map((event) => (
          <EventDetailCard key={event.id} data={event} />
        ))}
      </section>
    </div>
  );
};

export default EventDetail;
