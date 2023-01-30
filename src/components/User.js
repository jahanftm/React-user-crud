import styled from 'styled-components';
import {UserItem} from "./UserItem";
import {useRef, useState} from "react";

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

const initialUsers = [
    {id: 0, name: 'hesan'},
    {id: 1, name: 'ramin'},
    {id: 2, name: 'fatemeh'},
    {id: 3, name: 'mona'},
    {id: 4, name: 'bita'},
    {id: 5, name: 'ali'},
]

function User() {

    const [users, setUsers] = useState(initialUsers);

    const [search, setSearch] = useState('');

    const [newUser, setNewUser] = useState();

    const userInputRef = useRef();

    const handleAddUserByKeyboard = ({keyCode}) => {
        if (keyCode === 13) {
            handleAddUser();
        }
    }

    const handleUserDelete = (userId) => {
        setUsers((prevUsers) => prevUsers.filter(({ id }) => id !== userId));
    };


    const handleAddUser = () => {
        if (!newUser) return;

        setUsers((prev) => [...prev, {id: users.length + 1, name: newUser}]);

        setNewUser('');

        userInputRef.current.focus();
    };

    return (
        <Container>
            <h4>Search the user</h4>
            <Input
                type='text'
                placeholder='search the user'
                value={search}
                onChange={({target}) => {
                    setSearch(target.value)
                }}
            />

            <h4>Add a user</h4>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Input
                    type='text'
                    placeholder='add a user'
                    value={newUser}
                    onChange={({target}) => setNewUser(target.value)}
                    ref={userInputRef}
                    onKeyUp={handleAddUserByKeyboard}
                />
                <button onClick={handleAddUser} disabled={!newUser}>Add</button>
            </div>


            <h4>List of users</h4>
            {
                users
                    .filter(({name}) => name.includes(search))
                    .map(({id, name}) =>
                        <UserItem key={id} id={id} name={name} onDelete={handleUserDelete}></UserItem>)
            }
        </Container>)
}

export default User;