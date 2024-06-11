import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Light = () => {
  return (
    <div className="light">
      <button className="btn btn-danger"></button>
    </div>
  );
};

Light.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Light;
