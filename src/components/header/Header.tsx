import styled from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <h1>PreOnboarding - TodoList</h1>
    </StHeader>
  );
}

const StHeader = styled.header`
  > h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;
