import React from "react";

import Input from "../../shared/components/FormElement/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element={`input`}
        type="text"
        label="Title"
        validators={[]}
        errorText="please enter a valid title."
      />
    </form>
  );
};

export default NewPlace;
