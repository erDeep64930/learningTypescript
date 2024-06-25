import { MyContext } from "@/context/MyContext";
import React, { useContext } from "react";

const MyContextComponents = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("mycontext shuold  be use within mycontextprovider");
  }
  const { value, setValue } = context;
  return (
    <div>
      <p>value:{value}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default MyContextComponents;
