import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {

  // inferring the error type beyond unknown
  // from https://github.com/remix-run/react-router/discussions/9628#discussioncomment-5555901
  interface RouterError extends Error {}

  function isRouterError(object: any): object is RouterError {
      return 'message' in object;
  }

  function errorMessage(error: unknown): string {
      if (isRouteErrorResponse(error)) {
          return `${error.status} ${error.statusText}`;
      } else if (error != undefined && isRouterError(error)) {
          return error.message;
      } else if (typeof error === 'string') {
          return error;
      } else {
          console.error(error)
          return 'Unknown error';
      }
  }

  // find error message
  const error = errorMessage(useRouteError());
  console.error("router error:", error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error}</i>
      </p>
    </div>
  );
}