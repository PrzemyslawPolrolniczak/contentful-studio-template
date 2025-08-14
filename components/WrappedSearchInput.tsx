import React from "react";

// import { SearchInput } from "../../components/SearchInput/SearchInput";

interface SearchInputProps {
  dataTestId?: string;
  placeholder?: string;
  value?: string;
  alwaysOpen?: boolean;
  autoFocus?: boolean;
}

export const WrappedSearchInput: React.FC<SearchInputProps> = ({
  ...props
}) => {
  // commented for now, will try to make it work once studio trial starts
  // onChange: (str: string) => void;
  // onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
  // reset: () => void;
  //
  // return <SearchInput onChange={() => {}} onKeyUp={() => {}} reset={() => {}} {...props} />;
  return <input onChange={() => {}} onKeyUp={() => {}} {...props} />;
};
