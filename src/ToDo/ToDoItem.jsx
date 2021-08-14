

export default function ToDoItem(props){
    if(props.data === 'none'){
        return null;
    }

    const items = props.data.map(item => {
        return <p>{item}</p>
    })

    return (
        {items}
    )
}