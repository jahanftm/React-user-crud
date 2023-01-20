import styled from 'styled-components';
import {UserItem} from "./UserItem";
import {useState} from "react";

const Container = styled.div`
  width: 80%;
  margin: 40px auto;
  border: 1px solid #c4d5c4;
  border-radius: 4px;
  padding: 24px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px 8px;
  border-radius: 4px;
  border: 1px solid green;
  margin-bottom: 12px;
`;

const users = [
    {id: 0, name: 'hesan'},
    {id: 1, name: 'ramin'},
    {id: 2, name: 'fatemeh'},
    {id: 3, name: 'mona'},
    {id: 4, name: 'bita'},
    {id: 5, name: 'ali'},
]

function User() {
    const [search, setSearch] = useState('');
    return (
        <Container>
            <Input
                type='text'
                placeholder='search a user'
                onChange={({target}) => {
                    setSearch(target.value)
                }}
            />
            {
                users
                    .filter(({name}) => name.includes(search))
                    .map(({id, name}) => <UserItem key={id} name={name}></UserItem>)
            }
        </Container>)
}

export default User;