import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="errorpage">
      <h1>uh oh!</h1>
      <p>An unexpected error has occurred!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
