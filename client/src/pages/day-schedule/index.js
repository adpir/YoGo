// /* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import CircleButton from "../../components/CircleButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DaySchedule() {
  let temp = [];
  const [activities, setActivities] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    api
    .getSystemActivitiesByType(type)
    .then((data) => {
      setActivities(data);
    })
    .catch((err) => console.log(err));
  }, []);
  
  function handleOnDragEnd(result) {
    //handle errors caused by dragging off screen
    if (!result.destination) return;

    //make copy of activities array
    const items = Array.from(activities);
    //use source.index to fund our item from new array and remove/destructure it
    const [reorderedItem] = items.splice(result.source.index, 1);
    //add that item back into the array, at its new location(destination.index)
    items.splice(result.destination.index, 0, reorderedItem);

    //update our activities state
    setActivities(items);
  };

  return (
    <>
      <Navbar />
      <section className="w-full max-w-sm quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <div className="bg-white text-center w-screen mx-16 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            TODAY IS THE DAY!
          </div>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="activity">
            {(provided) => (
              <ul
                className="activity"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {activities.map((activity, index) => {
                  let id = activity._id;
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Link
                            to={"/activity-info/" + activity._id}
                            key={activity._id}
                            data-test="day-schedule-activity"
                          >
                            <div className="relative flex items-center justify-center h-16">
                              <CircleButton activityType={activity.type} />
                              <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
                                {activity.name}
                              </p>
                            </div>
                          </Link>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </>
  );
}

export default DaySchedule;
