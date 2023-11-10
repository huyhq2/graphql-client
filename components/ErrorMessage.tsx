interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center w-100 text-red-800">
      {message}
    </div>
  );
};

export default ErrorMessage;
