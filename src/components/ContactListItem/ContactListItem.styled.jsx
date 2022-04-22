import styled from '@emotion/styled';

export const ContactNameItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  padding-bottom: 2px;
  border-bottom: 1px solid #000;
`;
export const ContactNameText = styled.p``;
export const ContactNumberText = styled.p``;
export const ContactListButton = styled.button`
  cursor: pointer;
  height: 20px;
`;
