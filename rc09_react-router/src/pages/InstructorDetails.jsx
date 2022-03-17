import React from "react";
import { useParams } from "react-router-dom";

const InstructorDetails = () => {
  const { id } = useParams();
  return <div>InstructorDetails</div>;
};

export default InstructorDetails;
