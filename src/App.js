import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
      characters: [
        {
            name: 'Tom',
            sid: '12345678',
            major: 'SENG',
            year: '1',
        },
        {
            name: 'Sarah',
            sid: '09876543',
            major: 'SBM',
            year: '2',
        }
      ],
    } //state is like a shopping cart, two way data transfer

    //this.state.characters -> retrieve the state
    //this.setState() -> update the state
    removeCharacter = (index) => {
        const { characters } = this.state
        //every character has their own index
        
        //filter creates a new array and preferred method to modify array
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
        //updating(removing) character data that has a certain index
    }
    
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state
      
        return (
            <div className="container">
              <Table characterData={characters} removeCharacter={this.removeCharacter} />
              <Form handleSubmit={this.handleSubmit} />
            </div>
        )//character data -> list, removecharacter -> index를 remove 하게끔 
    }
}


export default App