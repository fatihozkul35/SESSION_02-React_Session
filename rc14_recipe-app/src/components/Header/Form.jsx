import React from "react";
import { FormContainer, Button, FoodInput, Select } from "./HeaderStyles";

const Form = ({ mealType, setQuery, getData, setSelectedMealType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>

      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setSelectedMealType(e.target.value)}
      >
        {mealType.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
