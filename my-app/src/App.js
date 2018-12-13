import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";


class App extends Component {
state = {
  characters
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
