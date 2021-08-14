import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';
import createRandom from './createRandom';

const ToDoContainer = styled.div`
    width: 40%;
    padding: 30px;
    box-sizing: border-box;
    margin: 20px auto;
    border: 1px solid #D6D6D6;
`;

const UserInput = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    cursor: pointer;
    border: none;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    color: white;
    background-color: #111;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid #D6D6D6;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 8px;
`;

const Lists = styled.p`
    margin-top: 30px;
    color: grey;
    font-size: 14px;
    font-weight: 600;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ListItemContainer = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const List = styled.p`
    margin: 2px 0;
    color: #111;
    font-size: 14px;
    font-weight: 500;
`;

const CrossButton = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 10px;
    font-weight: 500;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: #D6D6D6;

    &:hover {
        color: white;
        background-color: red;
    }
`;

const NoItems = styled.p`
    font-size: 13px;
    color: grey;
`;


export default function ToDo(props){

    const [ item, setItem ] = useState('');
    const [ itemCollection, setItemCollection ] = useState([]);
    const [ selectedId, setSelectedId ] = useState('');

    useEffect(() => {
        console.log(itemCollection);
    }, [itemCollection])

    useEffect(() => {

        let indexKey = itemCollection.map((item, index) => {
            if(item.id == selectedId){
                return index;
            }
        }).join('');

        let firstElement = itemCollection.splice(0, parseInt(indexKey));
        let lastElement = itemCollection.splice(1, itemCollection.length - 1);

        let changeItemCollection = [...firstElement, ...lastElement];

        setItemCollection(changeItemCollection);
        console.log(changeItemCollection);
    }, [selectedId])

    let items = itemCollection.map((item, index) => {
        return <ListItemContainer key={item.id}>
                <List>{index+1}. {item.name}</List>
                <CrossButton key={item.id} onClick={() => setSelectedId(item.id)}>X</CrossButton>
            </ListItemContainer>
    });

    const ButtonEvent = () => {
        if(!item.length){
            return alert('Please insert the item!');
        }

        const id = createRandom();
        setItemCollection([...itemCollection, {id: id, name: item}]);
        setItem('');
    }

    return (
        <ToDoContainer>
            <h1>ToDo App</h1>

            <UserInput>
                <Input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                <Button onClick={ButtonEvent}>Add</Button>
            </UserInput>

            <Lists>Lists</Lists>
            <ListContainer>
                { items.length ? items : <NoItems>No Items</NoItems> }
            </ListContainer>
        </ToDoContainer>
    )
}