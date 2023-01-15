import { type FC } from "react";

type Props = {
  error: any;
};

export const ErrorBoundary: FC<Props> = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
};
