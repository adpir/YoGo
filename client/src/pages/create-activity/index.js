/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import InfoModel from "../../components/InfoModel";
import Navbar from "../../components/Navbar/index";
import RectangleBtn from "../../components/RectangleBtn";
import api from "../../utils/api";
import CreateOrSelect from "../create-select-activities";

export default function CreateActivity(props) {
  const [activityName, setActivityName] = useState("");
  const [category, setCategory] = useState("");
  const [durationMinutes, setDurationMinutes] = useState("");
  const [description, setDescription] = useState("");
  // need this until login is hooked up and we can get user info
  // const TEMP_USER_ID = "605299e4dac8fc8d03980fca";
  const [showInfoMessage, setShowInfoMessage] = useState(false);
  const history = useHistory();
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  const [createButtonDisabled, setCreateButtonDisabled] = useState(false);

  useEffect(() => {
    if (props.user.email) {
      api.getUserIdByEmail(props.user.email).then((data) => {
        console.log("getCurrentUser data", data, "email", props.user.email);
        setUser(data[0]);
        setUserId(data[0]._id);
        console.log("user id", userId);
      });
    } else {
      setCreateButtonDisabled(true);
    }
  }, []);

  const setDurationField = (e) => {
    const value = e.target.value;
    // max duration minutes 999
    if (value.length <= 3) {
      setDurationMinutes(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newActivity = {
      createdBy: userId,
      name: activityName,
      type: category.toLowerCase(),
      durationMinutes: durationMinutes,
      description: description,
    };

    api
      .postActivity(newActivity)
      .then((res) => {
        if (res.status === 200) {
          // go back to create-select page with message
          const successMessage = `Activity ${activityName} created successfully. Click 'User Activities' button to view your activities. Or, select 'Suggested Activities' to view the curated day activities.`;
          history.push("/create-or-select/" + userId, {
            state: { message: successMessage },
          });
        }
        return res.statusText;
      })
      .catch((err) => console.log("CreateActivity post error", err));
  };

  return (
    <>
      <div className="h-screen bkrd-5">
        <Navbar />
        <form onSubmit={handleFormSubmit}>
          <div className="quicksand-body w-full">
            <div className="relative flex items-center justify-center w-3/4 h-16">
              <input
                type="text"
                className="bg-white hover:bg-gray-100 text-gray-800  w-screen mx-5 py-2 px-4 border border-gray-400 rounded shadow"
                placeholder="Activity Name"
                data-test="activity-name-field"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
              />
            </div>
            <div className="relative flex items-center justify-center h-16">
              <label className="flex-grow w-full mx-5  py-.5 px-4">
                Select Category
              </label>
              <select
                className="flex-grow w-full mx-5"
                data-test="category-dropdown"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option className="pacifico-title bg-blue-700 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
                  Mind
                </option>
                <option className="pacifico-title bg-yellow-400 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
                  Body
                </option>
                <option className="pacifico-title bg-red-300 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
                  Social
                </option>
                <option className="pacifico-title bg-red-300 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
                  Other
                </option>
              </select>
            </div>
            <div className="relative flex items-center justify-center  m-2">
              <input
                type="number"
                data-test="duration-field"
                className="relative flex justify-center m-1  py-.5 px-4 border border-gray-400 rounded shadow"
                placeholder="Duration (in minutes)"
                value={durationMinutes}
                onChange={(e) => setDurationField(e)}
              />
              Minutes
            </div>
            <div className="relative flex items-center justify-center  m-2">
              <textarea
                className="border relative rounded flex-grow items-center justify-center m-5 p-2  h-40 shadow"
                rows="4"
                cols="30"
                placeholder="Description"
                data-test="description-field"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InfoModel
                hidden={!showInfoMessage}
                message={activityName + " created successfully."}
              />
            </div>
            <div className="relative flex items-center justify-center w-3/4 m-2">
              <RectangleBtn
                disabled={createButtonDisabled}
                type="submit"
                buttonText={"CREATE!"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
