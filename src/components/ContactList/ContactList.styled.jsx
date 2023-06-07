import styled from '@emotion/styled';

export const ContList = styled.ul``;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  width: 500px;

  margin-bottom: 10px;
  padding: 5px 10px;

  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 5px;

  background-color: ${props => props.theme.colors.backGroundFormColor};
`;

export const ContactDeskription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const ContactButton = styled.button`
  font-size: ${props => props.theme.fontSizes.medium};

  padding: 5px 10px;

  border: 1px solid black;
  border-radius: 5px;

  background-color: #8190be;

  &:hover {
    border: 1px solid white;

    transform: scale(1.03);

    background-color: #63729f;
  }
`;
