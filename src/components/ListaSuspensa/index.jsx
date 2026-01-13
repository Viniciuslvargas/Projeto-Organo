import './ListaSuspensa'
const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div>
            <label>{props.label}</label>
            <select>
               {props.item.map(item => <option>{item}</option>)}  
            </select>
        </div>
    )
}

export default ListaSuspensa