interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="items-center w-100">{message}</div>;
};

export default ErrorMessage;
