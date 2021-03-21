import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function ActivityInfoModal(props) {
  const [activity, setActivity] = useState({});
  const [show, setShow] = useState(false);
  const divClass = "fixed z-50 inset-0 overflow-y-auto";

  useEffect(() => {
    const getActivities = () => {
      if (props.isUserActivity) {
        api
          .getUserActivityById(props.id)
          .then((data) => setActivity(data))
          .catch((err) => console.log("getUserActivityById error", err));
      } else {
        api
          .getSystemActivityById(props.id)
          .then((data) => {
            console.log("system activity props id", activity, props.id);
            setActivity(data);
          })
          .catch((err) => console.log("getSystemActivityById error", err));
      }
    };

    getActivities();
  }, [props.id]);

  if (!props.show) {
    return null;
  } else {
    return (
      <>
        <div id="modalDiv" className={divClass}>
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
              className="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                    data-test="activity-info-name"
                  >
                    {activity.name}
                  </h3>
                  <div className="mt-2">
                    <p
                      className="text-sm text-gray-500"
                      data-test="activity-info-description"
                    >
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  onClick={props.handleCompleteActivity}
                  data-test="complete-activity"
                >
                  Complete
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={props.handleModalClose}
                  data-test="cancel-activity"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ActivityInfoModal;
