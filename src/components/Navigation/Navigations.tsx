import React from "react";
import { Link } from "react-router-dom";
const adminNavConfig = [
  {
    name: "category",
    path: "category",
  },
  {
    name: "subcategory",
    path: "subcategory",
  },
  {
    name: "users",
    path: "users",
  },
];
const Navigations = () => {
  return (
    <div className={"flex gap-8"}>
      {adminNavConfig.map((l) => {
        return (
          <Link
            className={
              "capitalize font-inter font-semibold text-elg text-white-common"
            }
            key={l.name}
            to={l.path}
          >
            {l.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigations;
