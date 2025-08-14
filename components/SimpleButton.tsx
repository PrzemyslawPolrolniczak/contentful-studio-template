import React from "react";

interface SimpleButtonComponentProps {
  text: string;
}

export const SimpleButton: React.FC<SimpleButtonComponentProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};
