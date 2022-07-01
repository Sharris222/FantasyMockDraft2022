import Person from './Person'
import PositionFilter from './PositionFilter';
import Team from './Team';
import React, { useState } from 'react';
import SelectPick from './SelectPick';

function PeopleList(props){
const [filteredPosition, setFilteredPosition] = useState('ALL');
let filteredPeople = [];
for (let i = 0; i < props.people.length; i++){
  if (props.people[i].position === filteredPosition || filteredPosition === 'ALL'){
    filteredPeople.push(props.people[i])
  }
}
const deletedPerson = (id) => {
  props.findDeletedPerson(id)
}

const updatePosition = (position) => {
  setFilteredPosition(position)
}

const userPickChoice = (pick) => {
    props.handleZero(pick)
}

if (props.pick === 0){
  return <SelectPick userPickChoice={userPickChoice}></SelectPick>
}
return (
    <div>
      <Team team={props.team}></Team>
      <h1>Round {props.round}</h1>
      <PositionFilter updatePosition={updatePosition} position={filteredPosition}></PositionFilter>
      {filteredPeople.map(person => <Person key={person.id} title={person.title} amount={person.amount} adp={person.adp} id={person.id} deletedPerson={deletedPerson}> </Person>)}
    </div>
  );
}

export default PeopleList;