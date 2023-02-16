import React, { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage: FC = (): JSX.Element => {
  let error:any = useRouteError() as Error;
  if (!isRouteErrorResponse(error) || error.status !== 401) {
    throw error;
  }
  return (
    <div id="error-page">
      <h1>Oops! 💥</h1>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>
        <i>{error.statusText || JSON.stringify(error)}</i>
      </pre>
      <button onClick={() => (window.location.href = "/")}>
        Click here to reload the app
      </button>
    </div>
  );
}

export default ErrorPage;