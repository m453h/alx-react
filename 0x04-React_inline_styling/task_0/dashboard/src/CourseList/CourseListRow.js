import React from "react";
import PropTypes from "prop-types";

function CourseListRow({isHeader, textFirstCell, textSecondCell }) {

  const rowStyling = {
    backgroundColor: "#f5f5f5ab",
  };

  const headerStyling = {
    backgroundColor: "#deb5b545",
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
          <tr style={headerStyling}>
            <th colSpan={2}>{textFirstCell}</th>
          </tr>
      );
    } else {
      return (
          <tr style={headerStyling}>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </tr>
      );
    }
  } else {
    return (
        <tr style={rowStyling}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
