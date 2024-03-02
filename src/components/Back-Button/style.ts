import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  color: green;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 8px;
  }
`