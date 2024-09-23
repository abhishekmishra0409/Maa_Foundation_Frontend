import { createContext, useEffect, useState } from "react";
import axiosInstance from "../axios/axios";

//  creating event Context
export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  // creating state to store the events detail
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    let isMounted = true;
    const controller = new AbortController();

    try {
      const getAllEvents = async()=>{
  
        const res = await axiosInstance.get('/events');
        isMounted && setEvents(res.data.data);
        setLoading(false);
      }
  
      getAllEvents();
    } catch (error) {
      console.log("someething went wrong while fetching events data")
    }


    return () => {
      isMounted = false;
      controller.abort();
    }


  },[])

  return (
    <EventContext.Provider value={{ events,setEvents, loading }}>
      {children}
    </EventContext.Provider>
  );
};
