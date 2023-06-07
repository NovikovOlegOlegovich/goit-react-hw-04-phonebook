import styled from '@emotion/styled';

export const PhonebookForm = styled.form`
  padding: 20px;
  margin-bottom: 20px;

  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 5px;

  background-color: ${props => props.theme.colors.backGroundFormColor};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
`;

export const NameInput = styled.input`
  margin-bottom: 10px;
  margin-top: 5px;

  font-family: 'Droid Sans';

  min-width: 300px;
  max-width: 300px;

  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 5px;

  background-color: ${props => props.theme.colors.inputColor};

  &:focus {
    background-color: ${props => props.theme.colors.light};
    outline: none;
  }
`;

export const FormButton = styled.button`
  padding: 5px 10px;

  font-size: ${props => props.theme.fontSizes.medium};

  border: 1px solid black;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.buttonColor};

  &:hover {
    border: 1px solid white;

    transform: scale(1.03);

    background-color: ${props => props.theme.colors.hoverButtonColor};
  }
`;
