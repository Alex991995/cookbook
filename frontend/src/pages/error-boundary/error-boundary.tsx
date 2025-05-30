import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router';

function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error-page" className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{errorMessage}</i>
      </p>
      <button
        className="bg-primary rounded-md p-3 py-2 text-zinc-600 hover:bg-primary-hover cursor-pointer"
        onClick={() => navigate('/')}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default ErrorBoundary;
