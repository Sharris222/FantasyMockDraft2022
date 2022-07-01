function SelectPick(props) {
    const userDraft = (e) => {
        props.userPickChoice(e.target.value)
    }
    return(
        <form>
        <b> Select Draft Position </b>
        <select onChange ={userDraft} >
        <option> Select a Pick </option>
        <option> 1 </option>
        <option> 2 </option>
        <option> 3 </option>
        <option> 4 </option>
        <option> 5 </option>
        <option> 6 </option>
        <option> 7 </option>
        <option> 8 </option>
        </select>
        </form>
    );  
}

export default SelectPick;