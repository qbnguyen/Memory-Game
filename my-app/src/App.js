import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

function shuffleCharacters(array){
  for (let i = array.length -1; i>0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
state = {
  characters,
  currentScores:0,
  topScore:0,
  clicked:[]
};

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    
  } else {
    this.handleReset();
  }
};

handleIncrement = ()=> {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    rightWrong: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ rightWrong: "You win!" });
  }
  this.handleShuffle();
 };

handleReset = ()=>{
 this.setState({
  currentScore: 0,
  topScore: this.state.topScore,
  rightWrong: "Oh no!",
  clicked: []
 })
 this.handleShuffle();
 };

 handleShuffle = () => {
  let shuffledCharacters = shuffleCharacters(characters);
  this.setState({ characters: shuffledCharacters });
};

render() {
  return (
    <Wrapper>
      <Title>Memory Game</Title>
      {this.state.characters.map(character => (
        
        <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          

        />
      ))}
      
    </Wrapper>
  );
}
}

// function App() {
//   return (
//     <Wrapper>
//       <h1 className="title">Friends List</h1>
//       <FriendCard
//         image={friends[0].image}
//       />
//       <FriendCard
//         image={friends[1].image}
//       />
//       <FriendCard
//         image={friends[2].image}
//       />
//     </Wrapper>
//   );
// }

export default App;
