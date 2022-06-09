import styled from "styled-components";
import { darkBlack, grey, white } from "./../helpers";
import { BoxShadow } from "./mixins";

export const Container = styled.div`
  margin-top: 2.5rem;
  padding: 0 5rem;

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

export const Field = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || "none"};
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${white};
  text-align: left;
`;

export const Input = styled.input`
  ${BoxShadow};
  outline: none;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  height: 25px;
  background: ${grey};
`;

export const FieldsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Button = styled.button`
  ${BoxShadow};
  background: ${grey};
  color: ${darkBlack};
  cursor: pointer;
  padding: 1.2rem 7rem;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  width: fit-content;
  border: none;
  transition: 0.1s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding: 1.2rem 0;
  }
`;
