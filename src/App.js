import React, { useState } from 'react';
import PeopleList from './components/PeopleList'

const INITIAL_LIST = [
  {
    id: 'person1',
    title: 'Jonathan Taylor',
    amount: 12,
    position: 'RB',
    adp: 1
  },
  {
    id: 'person2',
    amount: 15,
    title: 'Cooper Kupp',
    position: 'WR',
    adp: 2
  },
  {
    id: 'person3',
    amount: 17,
    title: 'Austin Ekeler',
    position: 'RB',
    adp: 3
  },
  {
    id: 'person4',
    amount: 0,
    title: 'Derrick Henry',
    position: 'RB',
    adp: 4
  },
  {
    id: 'person5',
    amount: 1,
    title: 'Christian Mccaffrey',
    position: 'RB',
    adp: 5
  },
  {
    id: 'person6',
    amount: 2,
    title: 'Najee Harris',
    position: 'RB',
    adp: 6
  },
  {
    id: 'person7',
    amount: 3,
    title: 'Dalvin Cook',
    position: 'RB',
    adp: 7
  },
  {
    id: 'person8',
    amount: 4,
    title: 'Justin Jefferson',
    position: 'WR',
    adp: 8
  },
  {
    id: 'person9',
    amount: 5,
    title: 'Jamarr Chase',
    position: 'WR',
    adp: 9
  },
  {
    id: 'person10',
    amount: 6,
    title: 'Joe Mixon',
    position: 'RB',
    adp: 10
  }
];

const TEAM = {
  qb1: '',
  wr1: '',
  wr2: '',
  rb1: '',
  rb2: '',
  flx: '',
  te: '',
  def: '',
  k: '',
  be1: '',
  be2: '',
  be3: '',
  be4: '',
  be5: '',
  be6: ''
}

const INITIAL_PICK_COUNTER = 0;
const USER_PICK = 7;
const INITIAL_ROUND = 1;
function App() {
  const [people, setPeople] = useState(INITIAL_LIST)
  const [team, setTeam] = useState(TEAM)
  const [currentPick, setCurrentPick] = useState(INITIAL_PICK_COUNTER)
  const [userPick, setUserPick] = useState(USER_PICK)
  const [currentRound, setCurrentRound] = useState(INITIAL_ROUND)
  console.log(currentPick)
  console.log(currentRound)
  if (currentPick < 151){
  if (currentPick === 0){
    
  }
  else if (currentRound%2 != 0){
    if (currentPick != (((currentRound - 1)*8) + userPick)){
      let updatedArr = []
      for (let i = 1; i < people.length; i++){
          updatedArr.push(people[i])
      }
      setPeople(updatedArr)
      if ((currentPick)%8 === 0){
        setCurrentRound(currentRound + 1)
      }
      setCurrentPick(currentPick+1)
    }
  }
  else{
    if (currentPick != ((currentRound*8) - userPick + 1)){
      let updatedArr = []
      for (let i = 1; i < people.length; i++){
          updatedArr.push(people[i])
      }
      setPeople(updatedArr)
      if ((currentPick)%8 === 0){
        setCurrentRound(currentRound + 1)
      }
      setCurrentPick(currentPick+1)
    }
  }
}

  const handleRoundZero = (userChoice) => {
    setUserPick(userChoice)
    setCurrentPick(currentPick + 1)
  }
  const findDeletedPerson = (id) => {
    console.log(currentPick)
    let updatedArr = [];
    for (let i = 0; i < people.length; i++){
      if (people[i].id != id){
        updatedArr.push(people[i])
      }
      else{
        const player = people[i]
        let updatedTeam = team;
        if (player.position === 'WR'){
          if (team.wr1 === ''){
             updatedTeam.wr1 = player.title
          }
          else if (team.wr2 === ''){
            updatedTeam.wr2 = player.title
          }
          else if (team.flx === ''){
            updatedTeam.flx = player.title
          }
          else if (team.be1 === ''){
            updatedTeam.be1 = player.title
          }
          else if (team.be2 === ''){
            updatedTeam.be2 = player.title
          }
          else if (team.be3 === ''){
            updatedTeam.be3 = player.title
          }
          else if (team.be4 === ''){
            updatedTeam.be4 = player.title
          }
          else if (team.be5 === ''){
            updatedTeam.be5 = player.title
          }
          else if (team.be6 === ''){
            updatedTeam.be6 = player.title
          }
        }
        else if (player.position === 'RB'){
          if (team.rb1 === ''){
             updatedTeam.rb1 = player.title
          }
          else if (team.rb2 === ''){
            updatedTeam.rb2 = player.title
          }
          else if (team.flx === ''){
            updatedTeam.flx = player.title
          }
          else if (team.be1 === ''){
            updatedTeam.be1 = player.title
          }
          else if (team.be2 === ''){
            updatedTeam.be2 = player.title
          }
          else if (team.be3 === ''){
            updatedTeam.be3 = player.title
          }
          else if (team.be4 === ''){
            updatedTeam.be4 = player.title
          }
          else if (team.be5 === ''){
            updatedTeam.be5 = player.title
          }
          else if (team.be6 === ''){
            updatedTeam.be6 = player.title
          }
        }
        else if (player.position === 'TE'){
          if (team.te === ''){
             updatedTeam.te = player.title
          }
          else if (team.flx === ''){
            updatedTeam.flx = player.title
          }
          else if (team.be1 === ''){
            updatedTeam.be1 = player.title
          }
          else if (team.be2 === ''){
            updatedTeam.be2 = player.title
          }
          else if (team.be3 === ''){
            updatedTeam.be3 = player.title
          }
          else if (team.be4 === ''){
            updatedTeam.be4 = player.title
          }
          else if (team.be5 === ''){
            updatedTeam.be5 = player.title
          }
          else if (team.be6 === ''){
            updatedTeam.be6 = player.title
          }
        }
        else if (player.position === 'QB'){
          if (team.qbq === ''){
             updatedTeam.qb1 = player.title
          }
          else if (team.be1 === ''){
            updatedTeam.be1 = player.title
          }
          else if (team.be2 === ''){
            updatedTeam.be2 = player.title
          }
          else if (team.be3 === ''){
            updatedTeam.be3 = player.title
          }
          else if (team.be4 === ''){
            updatedTeam.be4 = player.title
          }
          else if (team.be5 === ''){
            updatedTeam.be5 = player.title
          }
          else if (team.be6 === ''){
            updatedTeam.be6 = player.title
          }
        }
        else if (player.position === 'DEF'){
          if (team.def === ''){
             updatedTeam.def = player.title
          }
          else if (team.be1 === ''){
            updatedTeam.be1 = player.title
          }
          else if (team.be2 === ''){
            updatedTeam.be2 = player.title
          }
          else if (team.be3 === ''){
            updatedTeam.be3 = player.title
          }
          else if (team.be4 === ''){
            updatedTeam.be4 = player.title
          }
          else if (team.be5 === ''){
            updatedTeam.be5 = player.title
          }
          else if (team.be6 === ''){
            updatedTeam.be6 = player.title
          }
        }
        else if (player.position === 'K'){
          if (team.k === ''){
             updatedTeam.k = player.title
          }
          else if (team.be1 === ''){
            updatedTeam.be1 = player.title
          }
          else if (team.be2 === ''){
            updatedTeam.be2 = player.title
          }
          else if (team.be3 === ''){
            updatedTeam.be3 = player.title
          }
          else if (team.be4 === ''){
            updatedTeam.be4 = player.title
          }
          else if (team.be5 === ''){
            updatedTeam.be5 = player.title
          }
          else if (team.be6 === ''){
            updatedTeam.be6 = player.title
          }
        }
        setTeam(updatedTeam)
        }

    }
      setPeople(updatedArr)
      if((currentPick)%8 == 0){
        setCurrentRound(currentRound+1)
      }
      setCurrentPick(currentPick + 1);
  }
  
  return (
    <PeopleList handleZero={handleRoundZero} pick={currentPick} round={currentRound} team={team} findDeletedPerson={findDeletedPerson} people={people}></PeopleList>
  );
}

export default App;
