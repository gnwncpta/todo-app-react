import styled from "styled-components";

const InputContainer = styled.input`
    border: 1px solid #D6D6D6;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 8px;
`;

export default function ToDoInput(props){
    return (
        <InputContainer type="text" placeholder="Masukkan Hal" value={props.value} onChange={props.onChange}/>
    )
}