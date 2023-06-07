import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
`;

export const FindInput = styled.input`
  font-family: 'Droid Sans';
  font-size: ${props => props.theme.fontSizes.medium};

  min-width: 300px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-top: 5px;

  border-radius: 5px;
  border: 2px solid ${props => props.theme.colors.borderColor};

  background-color: ${props => props.theme.colors.inputColor};

  &:focus {
    outline: none;

    background-color: ${props => props.theme.colors.light};
  }
`;
