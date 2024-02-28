import { BUTTON_COLOR, BUTTON_TYPES } from "@/types/todoTypes.ts";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  buttonType: BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET | BUTTON_TYPES.BUTTON;
  handleOnClick?: (id: number) => void;
  todoId?: number;
  buttonColor: BUTTON_COLOR.ADD | BUTTON_COLOR.DELETE;
  buttonHoverColor: BUTTON_COLOR.ADD_HOVER | BUTTON_COLOR.DELETE_HOVER;
}

export default function Button({
  buttonType,
  handleOnClick,
  todoId,
  buttonColor,
  buttonHoverColor,
  children,
}: PropsWithChildren<Props>) {
  const onClick = (todoId: number | undefined) => {
    if (handleOnClick) handleOnClick(todoId!);
  };

  return (
    <StButton
      type={buttonType}
      onClick={() => onClick(todoId)}
      $buttonColor={buttonColor}
      $buttonHoverColor={buttonHoverColor}
    >
      {children}
    </StButton>
  );
}

const StButton = styled.button<{
  $buttonColor: BUTTON_COLOR.ADD | BUTTON_COLOR.DELETE;
  $buttonHoverColor: BUTTON_COLOR.ADD_HOVER | BUTTON_COLOR.DELETE_HOVER;
}>`
  border-radius: var(--border-radius);
  padding: 0 2rem;
  background-color: ${(props) => props.$buttonColor};
  color: #fff;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${(props) => props.$buttonHoverColor};
  }
`;
