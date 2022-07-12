function Team(props){
return(
        <div class="col-sm">
            <h1>Your Team:</h1>
            <h3>QB: {props.team.qb1}</h3>
            <h3>RB1: {props.team.rb1}</h3>
            <h3>RB2: {props.team.rb2}</h3>
            <h3>WR1: {props.team.wr1}</h3>
            <h3>WR2: {props.team.wr2}</h3>
            <h3>TE: {props.team.te}</h3>
            <h3>FLEX: {props.team.flx}</h3>
            <h3>DEF: {props.team.def}</h3>
            <h3>K: {props.team.k}</h3>
            <h3>BENCH: {props.team.be1}</h3>
            <h3>BENCH: {props.team.be2}</h3>
            <h3>BENCH: {props.team.be3}</h3>
            <h3>BENCH: {props.team.be4}</h3>
            <h3>BENCH: {props.team.be5}</h3>
            <h3>BENCH: {props.team.be6}</h3>
        </div>
);
}
export default Team;