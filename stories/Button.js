import PropTypes from "prop-types";
import React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = (props) => {
  const { theme = 'primary', label = 'Button' } = props;
  
  return (
    <button
      type="button"
      className={["storybook-button", `theme-${theme}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  theme: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  theme: "primary",
  onClick: undefined,
};
