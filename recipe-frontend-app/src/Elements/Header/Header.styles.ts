import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  border: 0;
  border-bottom: 1px;
  border-style: solid;
  border-color: var(--text-color);
`;

const Title = styled.h1`
  padding: 10px;
  flex: 1;
`;

const styles = { Header, Title };

export default styles;
