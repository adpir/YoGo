/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import CircleButton from "../../components/CircleButton";
import ActInfo from "../../components/ActInfo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DaySchedule(props) {
  const [activities, setActivities] = useState([]);
  const { type } = useParams();
  const url = window.location.href;
  const onUserPage = url.indexOf("user-schedule") > -1;

  useEffect(() => {
    // if on /user-activities page, get activities by this user
    if (onUserPage) {
      console.log("user-activities user state", props.user);
      api
        .getUserIdByEmail(props.user.email)
        .then((data) => {
          const id = data[0]._id;
          console.log("getUser id on user-activities", id);
          api
            .getUserActivities(id)
            .then((data) => {
              setActivities(data);
            })
            .catch((err) => console.log("getUserActivities error", err));
        })
        .catch((err) => console.log(err));
    } else {
      // if on /day-schedule/:type render activities by type
      api
        .getSystemActivitiesByType(type)
        .then((data) => {
          setActivities(data);
        })
        .catch((err) => console.log(err));
    }
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
  }

  const [showModal, setShowModal] = React.useState(false);

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
                  console.log("activity", activity);
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {/* <Link
                            to={
                              onUserPage
                                ? "/activity-info/user/" + activity._id
                                : "/activity-info/system/" + activity._id
                            }
                            key={activity._id}
                            data-test="day-schedule-activity"
                          > */}
                          <div className="relative flex items-center justify-center h-16">
                            <CircleButton activityType={activity.type} />
                            <button
                              className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow"
                              onClick={() => setShowModal(true)}
                            >
                              <p>{activity.name}</p>
                            </button>
                            {showModal ? (
                            
                            <ActInfo />
                            
                            ) : null}
                          </div>
                          {/* </Link> */}
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
