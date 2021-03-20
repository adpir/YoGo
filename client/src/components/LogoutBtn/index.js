import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "126094497611-a2vqjoksuflepk4scauu7lbhr43fapet.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    alert("Logged out successfully 👋");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;