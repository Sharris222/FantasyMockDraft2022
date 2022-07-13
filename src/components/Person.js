import './Person.css'
import PersonADP from './PersonADP'
function Person(props){
    const clickHandler = () => {
        props.deletedPerson(props.id)
    }
    return (
        <div className="expense-item">
            <PersonADP adp={props.adp}></PersonADP>
            <div className ="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <button className ="button button2" onClick={clickHandler}>DRAFT</button>
        </div>
    );
}

export default Person;