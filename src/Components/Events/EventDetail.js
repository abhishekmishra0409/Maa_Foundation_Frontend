import { useContext } from "react";
import EventDetailCard from "./EventDetailCard";
// import { events } from "../Utils/Constant";
import { useParams } from "react-router-dom";
import { EventContext } from "../../context/eventContext";

const EventDetail = () => {
  const {events,loading} = useContext(EventContext);
  const { eventid } = useParams();
  // console.log("id in url ",eventid, "type ",typeof(eventid) );
  // console.log("id from db ",events[0]._id, "type ",typeof(events[0]._id));
  const event = events.find((event) => event._id === eventid); 

  if (!event) {
    return <div>Event not found</div>;
  }

  const otherEvents = events.filter((e) => e.id !== parseInt(eventid)); 

  return (
    <div className="w-full flex flex-col justify-center items-center bg-secondary-light gap-12">
        <section className="self-stretch flex flex-col items-center justify-start">
          <div className="w-full relative h-0 pt-[50%]">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="lazy"
              alt=""
              src={event.imageUrl}
              // onError={} 
              // ToDo add fallback image here
            />
          </div>
        </section>
        
        <section className="flex flex-row items-start justify-center mx-28 box-border max-w-full text-left text-3xl">
          <div className="flex flex-col items-start justify-start gap-5 max-w-full">
            <h1 className="text-5xl font-semibold leading-snug">{event.title}</h1>
            <div className="relative font-normal text-gray-dark text-lg">
              {Array.from({ length: 4 }).map((_, index) => (<>
                <p key={index} className="mb-4 text-xl leading-8">{event.subtitle}</p><p className="my-4"></p>
              </>
              ))}
              {/* <p>{event.subtitle}</p>
              <p className="my-4"></p>
              <p>{event.subtitle}</p>
              <p>{event.subtitle}</p>
              <p>{event.subtitle}</p> */}
            </div>
          </div>
        </section>
        <section className="mx-32 mt-10 mb-28 flex flex-col items-center justify-start gap-5 shrink-0 self-center max-w-full text-left">
          {otherEvents.map((event) => (
            <EventDetailCard key={event.id} data={event} />
          ))}
        </section>
    </div>
  );
};

export default EventDetail;
