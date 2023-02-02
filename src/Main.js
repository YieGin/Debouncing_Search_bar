import React, { useEffect, useState } from "react";
import useDebounce from "./Hook/useDebounce";

const Main = () => {
  const [search, setSearch] = useState("");
  const DebounceTerm = useDebounce(search, 1000);

  const HandleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (DebounceTerm) {
      console.log("Change", DebounceTerm);
    } else {
      console.log("nothing");
    }
  }, [DebounceTerm]);
  return (
    <div>
      <input type="text" value={search} onChange={HandleChange} />
    </div>
  );
};

export default Main;
