import React, { Component } from 'react';

class AddPersons extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault(); //Evite de refresh la page à l'ajout


        this.props.onAdd(this.firstnameInput.value, this.lastnameInput.value, this.addressInput.value, this.isActiveInput.value);
        
        this.firstnameInput = '';
        this.lastnameInput ='';
        this.addressInput ='';
        this.isActiveInput ='';

    }

 render() {
   return (
    <form onSubmit={this.onSubmit}>
        <h3>Ajouter une personne</h3>
        <input placeholder="First Name" ref={firstnameInput => this.firstnameInput = firstnameInput} />
        <input placeholder="Last Name" ref={lastnameInput => this.lastnameInput = lastnameInput} />
        <input placeholder="Address" ref={addressInput => this.addressInput = addressInput} />
        <input placeholder="isActive" ref={isActiveInput => this.isActiveInput = isActiveInput}/>
        <button>Ajouter</button>

        <hr />
    </form>
    );
  }
}

export default AddPersons;
