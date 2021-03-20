import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../utils/api";

function ActInfo(props) {
  // const [activity, setActivity] = useState({});
  // const { id } = useParams();
  // const url = window.location.href;

  // useEffect(() => {
  //   const getActivities = () => {
  //     // if on /activity-info/user/:id get user activities
  //     if (url.indexOf("user") > -1) {
  //       console.log("getUserActivityById", id);
  //       api
  //         .getUserActivityById(id)
  //         .then((data) => setActivity(data))
  //         .catch((err) => console.log("getUserActivityById error", err));
  //     } else {
  //       api
  //         .getSystemActivityById(id)
  //         .then((data) => {
  //           setActivity(data);
  //         })
  //         .catch((err) => console.log("getSystemActivityById error", err));
  //     }
  //   };
  //   console.log("activity", activity);
  //   getActivities();
  // }, []);

  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <div
    className="fixed z-10 inset-0 overflow-y-auto"
    onClick={() => setShowModal(true)}
  >
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        className="fixed inset-0 transition-opacity"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <div
        className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              {props.name}
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
            onClick={() => setShowModal(true)}
          >
            Complete
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            onClick={() => setShowModal(true)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ActInfo;
