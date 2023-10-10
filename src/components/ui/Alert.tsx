import React from "react";

interface AlertProps {
  type: "warning" | "success" | "error";
  errorMessage: string;
}

const Alert: React.FC<AlertProps> = ({ type, errorMessage }) => {
  const alertClasses = {
    warning: "bg-yellow-500 text-black",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
  }[type];

  return <div className={`p-4 rounded ${alertClasses}`}>{errorMessage}</div>;
};

export default Alert;
