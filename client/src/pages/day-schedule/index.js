/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import CircleButton from "../../components/CircleButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Checkbox from "../../components/Checkbox";
import ActivityInfoModal from "../../components/ActivityInfoModal";

function DaySchedule(props) {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [clickedActivityId, setClickedActivityId] = useState("");
  const { type } = useParams();
  const url = window.location.href;
  const onUserPage = url.indexOf("user-schedule") > -1;

  useEffect(() => {
    // if on /user-activities page, get activities by this user
    if (onUserPage) {
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

  function checked(id) {
    let element = document.getElementById(id);
    if (element.classList.contains("line-through")) {
      element.classList.remove("line-through");
    } else {
      element.classList.add("line-through");
    }
  }

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

  function handleOpenModal(event) {
    setShowModal(true);
    event.preventDefault();
    event.stopPropagation();
    const activityId = event.target.dataset.id;
    setClickedActivityId(activityId);

    console.log("showModal", showModal);
  }

  function handleModalClose(event) {
    console.log("handleModalClose");
    event.stopPropagation();
    // handler function to update props.show when buttons are clicked in modal
    setShowModal(!showModal);
  }

  function handleCompleteActivity(event) {
    event.stopPropagation();
    const id = clickedActivityId;
    checked(id);
    setShowModal(!showModal);
  }

  return (
    <>
      <ActivityInfoModal
        handleModalClose={handleModalClose}
        handleCompleteActivity={handleCompleteActivity}
        show={showModal}
        id={clickedActivityId}
        isUserActivity={onUserPage}
      />
      <Navbar />
      <section className="w-full quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <h1 className="pacifico-title text-3xl">Today is the Day</h1>
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
                        <li
                          key={id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            onClick={handleOpenModal}
                            data-id={id}
                            key={activity._id}
                            data-test="day-schedule-activity"
                          >
                            <div className="relative flex items-center justify-center h-16">
                              <CircleButton
                                id={id}
                                activityType={activity.type}
                              />
                              <p
                                className="relative flex justify-center w-1/2 m-1 w-25 py-.5 px-4 border border-gray-400 rounded shadow"
                                data-id={id}
                                id={id}
                                onClick={handleOpenModal}
                              >
                                {activity.name}
                              </p>
                            </div>
                          </div>
                          <Checkbox checked={() => checked(id)} />
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
