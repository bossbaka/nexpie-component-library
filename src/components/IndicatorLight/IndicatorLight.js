import styled, { css } from "styled-components";

const getBgColorByStatus = (props) => {
  const colors = {
    success: "#2ddab5",
    error: "#ef4d56",
    neutral: "rgba(151, 151, 151, 0.9)",
    processing: "#2c98fe",
    warning: "#fda354",
  };
  return colors[props.status];
};

export const IndicatorLight = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: solid 2px #f3f5f8;
  ${(props) =>
    props.status &&
    css`
      background-color: ${(props) => getBgColorByStatus(props)};
    `}
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${(props) => props.backgroundColor};
    `}
`;
