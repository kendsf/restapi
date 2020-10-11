import React, { Component } from 'react';
import Person from './Person';
import AddPersons from './AddPersons';
import './App.css';

const persons = [
  {
    firstname :'Bob',
    lastname : 'Dan',
    address :'25 Rue JP',
    isActive : 'Yes'
  }
];


localStorage.setItem('persons' ,JSON.stringify(persons));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: JSON.parse(localStorage.getItem('persons'))  
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete =this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  } 
      componentWillMount() {
        const persons = this.getPersons();
    this.setState({persons});
  }

  getPersons(){
      return this.state.persons;
      
  }
  
  onAdd(firstname, lastname, address, isActive) {
      const persons = this.getPersons();

      persons.push({
        firstname, 
        lastname,
        address,
        isActive
      });

      this.setState({persons});

  }
  
  onDelete(firstname) {  
        const persons= this.getPersons();
        const filteredPersons = persons.filter(persons => {
        return persons.firstname !== firstname;
      });

    //console.log(filteredPersons);

    this.setState({ persons : filteredPersons});
  }

onEditSubmit(firstname, lastname, address, isActive, originalName) {
  let persons = this.getPersons();


  persons = persons.map(persos => {
    if (persons.firstname === originalName) {
      persons.firstname = firstname;
      persons.lastname = lastname;
      persons.address= address;
      persons.isActive = isActive;
    }

    return persons;
  });

  this.setState ({persons});
}

  render() {
   return (
      <div className="App">
        <h1>Gestion des personnes</h1>


        <AddPersons
          onAdd={this.onAdd}


        />
        {
          this.state.persons.map(persons =>{
            return (
              <Person
              key={persons.name}
              {...persons}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
