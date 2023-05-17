import React, { useEffect, useState } from "react";
import supabase from "../../supabaseClient";
import { Devices } from "../../routes";

const RoomCard = (props) => {
  const [room, setRoom] = useState(null);

  const fetchRoom = async (id) => {
    try {
      const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("id", id);
      if (error) {
        throw error;
      }

      setRoom(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoom(props.data);
    console.log("ROOM DATA:");
    console.log(room);
  }, [props.data]);

  if (room)
    return (
      <div className="w-full flex flex-col mt-4">
        <h2 className="text-2xl font-bold text-black mb-4">{room[0].name}</h2>
        <Devices />
      </div>
    );
};

export default RoomCard;
