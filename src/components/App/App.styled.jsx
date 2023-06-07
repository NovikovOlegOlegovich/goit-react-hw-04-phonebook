import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 20px;

  width: 500px;

  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.textColor};
`;
