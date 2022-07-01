import './PersonADP.css'

function PersonADP(props) {
    const ADP = 'ADP'
    const number = '#'
    const actualNum = props.adp

    return (
        <div className="expense-date">
            <div className="ADP">{ADP}</div>
            <div className="number">{number}</div>
            <div className="actualNum">{actualNum}</div>
        </div>
    );
}

export default PersonADP;