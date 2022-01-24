import React from "react";
import { PropTypes } from "prop-types";
import { SectionS, SectionTitle } from "./Section.styled";

export default function Section({ title, children }) {
  return (
    <SectionS>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionS>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
