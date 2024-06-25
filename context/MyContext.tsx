"use client";
import { createContext, useState, FC, ReactNode } from "react";

type MyContextData = {
  value: string;
  setValue: (newValue: string) => void;
};

export const MyContext = createContext<MyContextData | undefined>(undefined);

type MyContextProviderProp = {
  children: ReactNode;
};

export const MyContextProvider: FC<MyContextProviderProp> = ({ children }) => {
  const [value, setValue] = useState<string>("");

  const contextValue: MyContextData = {
    value,
    setValue,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
