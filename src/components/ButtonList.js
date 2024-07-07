import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Courses" />
      <Button name="Movies" />
      <Button name="Comedy" />
      <Button name="Jobs" />
      <Button name="Dances" />
      <Button name="Watched" />
    </div>
  );
};

export default ButtonList;
