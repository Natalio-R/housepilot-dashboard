import React, { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import supabase from "../../supabaseClient";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const [newRoomName, setNewRoomName] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomTab, setRoomTab] = useState(null);
  const [room, setRoom] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const fetchRooms = async () => {
    try {
      const { data, error } = await supabase.from("rooms").select("*");
      if (error) {
        throw error;
      }
      console.log(data);
      setRooms(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTypes = async () => {
    try {
      const { data, error } = await supabase.from("rooms_types").select("*");
      if (error) {
        throw error;
      }
      console.log(data);
      setTypes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
    fetchTypes();
    console.log(rooms);
  }, []);

  return (
    <div className="h-full flex flex-col p-6 w-4/6">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          {rooms.map((room) => (
            <button
              className={
                room.id === roomTab && roomTab !== null
                  ? "bg-black py-4 px-6 flex items-center justify-ceter cursor-pointer text-lg font-medium transition rounded-lg text-white"
                  : "py-4 px-6 flex items-center justify-ceter cursor-pointer text-lg font-medium transition rounded-lg bg-transparent text-gray-600 hover:text-black hover:bg-white"
              }
              onClick={() => {
                setRoomTab(room.id);
                console.log("id: " + room.id);
              }}
            >
              {room.name}
            </button>
          ))}
        </div>
        <div
          data-modal-target="addroom-modal"
          data-modal-toggle="addroom-modal"
          className="py-4 px-6 flex items-center justify-ceter cursor-pointer text-lg font-medium transition rounded-lg border-2 border-black bg-transparent text-gray-500 hover:text-black hover:bg-white"
        >
          <IoAddCircleOutline className="text-2xl mr-2" /> Add new room
        </div>

        <div
          id="addroom-modal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="addroom-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-10 h-10"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-10 text-2xl font-bold text-black">
                  New room
                </h3>
                <form
                  onSubmit={async (event) => {
                    event.preventDefault();
                    try {
                      const { error } = await supabase.from("rooms").insert([
                        {
                          name: newRoomName,
                          type_name: selectedType,
                        },
                      ]);
                      if (error) {
                        throw error;
                      }
                      setNewRoomName("");
                      setSelectedType(null); // Reiniciar el valor del tipo de habitación seleccionado
                      alert("Room added successfully"); // Mostrar una alerta al usuario
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <div className="mb-6">
                    <label htmlFor="type" className="text-lg font-medium">
                      Write the room name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
                      value={newRoomName}
                      onChange={(event) => setNewRoomName(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="text-lg font-medium">
                      Select the room type
                    </label>
                    <select
                      name="type"
                      id="type"
                      className="cursor-pointer mt-2 bg-gray-200 border-2 border-gray-200 hover:border-2 focus:ring-0 focus:border-black text-black text-xl rounded-md block w-full p-4"
                      onChange={(event) => setSelectedType(event.target.value)}
                      required
                    >
                      {types.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-10 w-full text-white hover:text-black bg-black hover:bg-white border-2 border-black font-medium rounded-md text-lg px-5 py-3 text-center transition"
                  >
                    Add room
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        {roomTab ? (
          <RoomCard data={roomTab}></RoomCard>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-black">No info</h2>
            <h2 className="text-md font-medium text-gray-600">
              Select a room for see more details
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
