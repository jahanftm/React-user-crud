import styled from 'styled-components'

const Text = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

const IconButton = styled.div`
  display: grid;
  place-content: center;
  width: 34px;
  height: 34px;
  cursor: pointer;
  font-size: 14px;
  color: red;
  border-radius: 50%;
  border: 1px solid red;
`;


export const UserItem = ({id, name, onDelete}) => {
    return (
        <Text>
            {name}
            <IconButton onClick={()=> onDelete(id)}>×</IconButton>
        </Text>
    )
}