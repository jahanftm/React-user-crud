import styled from 'styled-components'

const Text = styled.div`
    padding: 8px;
`;
export const UserItem = ({name}) => {
    return (
        <Text>
            {name}
        </Text>
    )
}