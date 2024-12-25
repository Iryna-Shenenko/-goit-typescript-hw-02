import React from "react";
const ErrorMessage: React.FC<ErrorMessageProps> =({message}) => {
    return <p>{message}</p>
};

export default ErrorMessage;