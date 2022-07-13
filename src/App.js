import React, { useEffect, useState } from 'react'; 
import PeopleList from './components/PeopleList'
import SelectPick from './components/SelectPick';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Team';

const INITIAL_LIST = [
  {
    id: 'person1',
    title: 'Jonathan Taylor',
    position: 'RB',
    adp: 1
  },
  {
    id: 'person2',
    title: 'Cooper Kupp',
    position: 'WR',
    adp: 2
  },
  {
    id: 'person3',
    title: 'Austin Ekeler',
    position: 'RB',
    adp: 3
  },
  {
    id: 'person4',
    title: 'Derrick Henry',
    position: 'RB',
    adp: 4
  },
  {
    id: 'person5',
    title: 'Christian Mccaffrey',
    position: 'RB',
    adp: 5
  },
  {
    id: 'person6',
    title: 'Najee Harris',
    position: 'RB',
    adp: 6
  },
  {
    id: 'person7',
    title: 'Dalvin Cook',
    position: 'RB',
    adp: 7
  },
  {
    id: 'person8',
    title: 'Justin Jefferson',
    position: 'WR',
    adp: 8
  },
  {
    id: 'person9',
    title: 'Jamarr Chase',
    position: 'WR',
    adp: 9
  },
  {
    id: 'person10',
    title: 'Joe Mixon',
    position: 'RB',
    adp: 10
  },
  {
    id: 'person11',
    title: 'Davante Adams',
    position: 'WR',
    adp: 11
  },
  {
    id: 'person12',
    title: 'Stefon Diggs',
    position: 'WR',
    adp: 12
  },
  {
    id: 'person13',
    title: 'Travis Kelce',
    position: 'TE',
    adp: 13
  },
  {
    id: 'person14',
    title: 'Alvin Kamara',
    position: 'RB',
    adp: 14
  },
  {
    id: 'person15',
    title: 'Tyreek Hill',
    position: 'WR',
    adp: 15
  },
  {
    id: 'person16',
    title: 'Deebo Samuel',
    position: 'WR',
    adp: 16
  },
  {
    id: 'person17',
    title: 'Aaron Jones',
    position: 'RB',
    adp: 17
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

const COMPUTER1 = {
  id: 1,
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

const COMPUTER2 = {
  id: 2,
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

const COMPUTER3 = {
  id: 3,
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

const COMPUTER4 = {
  id: 4,
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

const COMPUTER5 = {
  id: 5,
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

const COMPUTER6 = {
  id: 6,
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
const COMPUTER7 = {
  id: 7,
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

const SELECTIONS_ARR = [COMPUTER1, COMPUTER2, COMPUTER3, COMPUTER4, COMPUTER5, COMPUTER6, COMPUTER7]
const INITIAL_PICK_COUNTER = 0;
const USER_PICK = 7;
const INITIAL_ROUND = 1;

function App() {
  const [people, setPeople] = useState(INITIAL_LIST)
  const [team, setTeam] = useState(TEAM)
  const [selections, setSelections] = useState(SELECTIONS_ARR)
  const [currentPick, setCurrentPick] = useState(INITIAL_PICK_COUNTER)
  const [userPick, setUserPick] = useState(USER_PICK)
  const [currentRound, setCurrentRound] = useState(INITIAL_ROUND)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)
  const [previousPlayer, setPreviousPlayer] = useState('')

  const determineNextIndex = () => {
    if (currentIndex == 0 && previousIndex == 0){
      setCurrentIndex(currentIndex + 1)
    }
    else if (currentIndex == 0 && previousIndex == 1){
      setPreviousIndex(0)
    }
    else if (currentIndex == 6 && previousIndex == 6){
      setCurrentIndex(currentIndex - 1)
    }
    else if (currentIndex == 6 && previousIndex == 5){
      setPreviousIndex(6)
    }
    else if (currentIndex < previousIndex){
      setCurrentIndex(currentIndex - 1)
      setPreviousIndex(previousIndex -1)
    }
    else{
      setCurrentIndex(currentIndex + 1)
      setPreviousIndex(previousIndex + 1)
    }
  }

  const findNextPlayer = (team, people) => {
    let playerId = ''
    const randomNum = Math.random()*10
    for (let i = 0; i < people.length; i++){
      const player = people[i]
        if (player.position === 'WR'){
          if (team.wr1 === ''){
            if (team.rb1 === '' && 100 > 7){
              playerId = player.id
              team.wr1 = player.title
            }
            else if (team.rb2 === '' && 100 > 3){
              playerId = player.id
              team.wr1 = player.title
            }
            else if (team.rb1 != '' & team.rb2 != '' && team.flex === '' && 100 > 1){
              playerId = player.id
              team.wr1 = player.title
            }
            else if (team.rb1 != '' && team.rb2 != '' && team.flex != '' && 100 > 1){
              playerId = player.id
              team.wr1 = player.title
            }
          }
          else if (team.wr2 === ''){
            if (team.rb1 === '' && 100 > 7){
              playerId = player.id
              team.wr2 = player.title
            }
            else if (team.rb2 === '' && 100 > 3){
              playerId = player.id
              team.wr2 = player.title
            }
            else if (team.rb1 != '' & team.rb2 != '' && team.flex === '' && 100 > 1){
              playerId = player.id
              team.wr2 = player.title
            }
            else if (team.rb1 != '' && team.rb2 != '' && team.flex != '' && 100 > 1){
              playerId = player.id
              team.wr2 = player.title
            }
          }
          else if (team.flx === ''){
            if (team.rb1 === '' && 100 > 8){
              playerId = player.id
              team.flx = player.title
            }
            else if (team.rb2 === '' && 100 > 5){
              playerId = player.id
              team.flx = player.title
            }
            else if (team.rb1 != '' & team.rb2 != '' && 100 > 1){
              playerId = player.id
              team.flx = player.title
            }
          }
          else if (team.be1 === '' && team.rb1 != '' && team.rb2 != '' && team.qb1 != '' && team.te != '' && 100 > 3){
            playerId = player.id
            team.be1 = player.title
          }
          else if (team.be2 === '' && team.rb1 != '' && team.rb2 != '' && team.qb1 != '' && team.te != '' && 100 > 3){
            playerId = player.id
            team.be2 = player.title
          }
          else if (team.be3 === '' && team.rb1 != '' && team.rb2 != '' && team.qb1 != '' && team.te != '' && 100 > 3){
            playerId = player.id
            team.be3 = player.title
          }
          else if (team.be4 === '' && team.rb1 != '' && team.rb2 != '' && team.qb1 != '' && team.te != '' && 100 > 3){
            playerId = player.id
            team.be4 = player.title
          }
          else if (team.be5 === '' && team.rb1 != '' && team.rb2 != '' && team.qb1 != '' && team.te != '' && 100 > 3){
            playerId = player.id
            team.be5 = player.title
          }
          else if (team.be6 === '' && team.rb1 != '' && team.rb2 != '' && team.qb1 != '' && team.te != '' && 100 > 3){
            playerId = player.id
            team.be6 = player.title
          }
        }
        else if (player.position === 'RB'){
          if (team.rb1 === ''){
            if (team.wr1 === '' && 100 > 2){
              playerId = player.id
              team.rb1 = player.title
            }
            else if (team.wr2 === '' && 100 > 2){
              playerId = player.id
              team.rb1 = player.title
            }
            else if (team.wr1 != '' & team.wr2 != '' && team.flex === '' && 100 > 1){
              playerId = player.id
              team.rb1 = player.title
            }
            else if (team.wr1 != '' && team.wr2 != '' && team.flex != '' && 100 > 1){
              playerId = player.id
              team.rb1 = player.title
            }
          }
          else if (team.rb2 === ''){
            if (team.wr1 === '' && 100 > 7){
              playerId = player.id
              team.rb2 = player.title
            }
            else if (team.wr2 === '' && 100 > 5){
              playerId = player.id
              team.rb2 = player.title
            }
            else if (team.wr1 != '' & team.wr2 != '' && team.flex === '' && 100 > 1){
              playerId = player.id
              team.rb2 = player.title
            }
            else if (team.wr1 != '' && team.wr2 != '' && team.flex != '' && 100 > 1){
              playerId = player.id
              team.rb2 = player.title
            }
          }
          else if (team.flx === ''){
            if (team.wr1 === '' && 100 > 8){
              playerId = player.id
              team.flx = player.title
            }
            else if (team.wr2 === '' && 100 > 5){
              playerId = player.id
              team.flx = player.title
            }
            else if (team.wr1 != '' & team.wr2 != '' && 100 > 1){
              playerId = player.id
              team.flx = player.title
            }
          }
          else if (team.be1 === '' && team.wr1 != '' && team.wr2 != '' && team.qb1 != '' && team.te != ''){
            playerId = player.id
            team.be1 = player.title
          }
          else if (team.be2 === '' && team.wr1 != '' && team.wr2 != '' && team.qb1 != '' && team.te != ''){
            playerId = player.id
            team.be2 = player.title
          }
          else if (team.be3 === '' && team.wr1 != '' && team.wr2 != '' && team.qb1 != '' && team.te != ''){
            playerId = player.id
            team.be3 = player.title
          }
          else if (team.be4 === '' && team.wr1 != '' && team.wr2 != '' && team.qb1 != '' && team.te != ''){
            playerId = player.id
            team.be4 = player.title
          }
          else if (team.be5 === '' && team.wr1 != '' && team.wr2 != '' && team.qb1 != '' && team.te != ''){
            playerId = player.id
            team.be5 = player.title
          }
          else if (team.be6 === '' && team.wr1 != '' && team.wr2 != '' && team.qb1 != '' && team.te != ''){
            playerId = player.id
            team.be6 = player.title
          }
        }
        else if (player.position === 'TE'){
          if (team.te === ''){
            playerId = player.id
            team.te = player.title
          }
          else if (team.flx === ''){
            playerId = player.id
            team.flx = player.title
          }
        }
        else if (player.position === 'QB'){
          if (team.qb1 === ''){
            playerId = player.id
            team.qb1= player.title
          }
        }
        else if (player.position === 'DEF'){
          if (team.def === ''){
            playerId = player.id
            team.def = player.title
          }
        }
        else if (player.position === 'K'){
          if (team.k === ''){
            playerId = player.id
            team.k = player.title
          }
        }

        if (playerId != ''){
          break
        }
    }
    return playerId
  }
  
  useEffect(()=>{
    var currentTime = new Date().getTime();
    console.log(currentIndex)
   while (currentTime + 1000 >= new Date().getTime()) {
   }
    if (currentPick == 0){
    
    }
    else if (currentPick == -1){
      setCurrentPick(1)
    }
    else if (currentRound%2 == 1){
      const userRoundPick = currentRound-1
      if (currentPick != eval(userRoundPick*8)+eval(userPick)){
        const playerIdentity = findNextPlayer(selections[currentIndex], people)
        let updatedArr = []
        for (let i = 0; i < people.length; i++){
          if (people[i].id != playerIdentity){
            updatedArr.push(people[i])
          }
          else{
            setPreviousPlayer(people[i].title)
          }
        }
        setSelections(selections)
        setPeople(updatedArr)
        if ((currentPick)%8 == 0){
          setCurrentRound(currentRound + 1)
        }
        setCurrentPick(currentPick+1)
        determineNextIndex()
      }
    }
    else{
      if (currentPick != ((currentRound*8)-userPick+1)){
        const playerIdentity = findNextPlayer(selections[currentIndex], people)
        console.log(playerIdentity)
        let updatedArr = []
        for (let i = 0; i < people.length; i++){
          if (people[i].id != playerIdentity){
            updatedArr.push(people[i])
          } 
          else{
            setPreviousPlayer(people[i].title)
          }
        }
        setSelections(selections)
        setPeople(updatedArr)
        if ((currentPick)%8 == 0){
          setCurrentRound(currentRound+1)
        }
        setCurrentPick(currentPick+1)
        determineNextIndex()
      }
    }
  })
  
  const handleRoundZero = (userChoice) => {
    setUserPick(userChoice)
    setCurrentPick(-1)
  }

  const findDeletedPerson = (id) => {
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
        setPreviousPlayer(player.title)
        }

    }
      setPeople(updatedArr)
      var currentTime = new Date().getTime();

   while (currentTime + 1000 >= new Date().getTime()) {
   }
      if((currentPick)%8 == 0){
        setCurrentRound(currentRound+1)
      }
      setCurrentPick(currentPick+1);
  }
  
  if (currentPick != 0){
  return (
    <div class="container">
    <div class="row">
    <PeopleList previousPick={previousPlayer} handleZero={handleRoundZero} pick={currentPick} round={currentRound} team={team} findDeletedPerson={findDeletedPerson} people={people}></PeopleList>
    <Team team={team}></Team>
    </div>
    </div>
  );
  }
  else{
    return (<PeopleList handleZero={handleRoundZero} pick={currentPick} round={currentRound} team={team} findDeletedPerson={findDeletedPerson} people={people}></PeopleList>);
  }
}

export default App;
