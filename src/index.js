import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-u5av3ltl.us.auth0.com"
      clientId="Gxis1Yu66HvMsgj5DausCj0ckUYuzRJQ"
      redirectUri={window.location.origin}
    >
      
    </Auth0Provider>,
  </React.StrictMode>
);