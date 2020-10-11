import React, { Component } from 'react';

class Person extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete= this.onDelete.bind(this);
    this.onEdit= this.onEdit.bind(this);
    this.onEditSubmit= this.onEditSubmit.bind(this);

  }

  onDelete() {
    const { onDelete, firstname} = this.props;
    onDelete(firstname);
  }

  onEdit() {
  this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.firstnameInput.value, this.lastnameInput.value, this.addressInput.value, this.isActiveInput.value, this.props.firstname);
    
    this.setState({ isEdit : false});
  }

  render() {
      const {firstname, lastname, address, isActive} = this.props;
   return (
    <div>
      {
        this.state.isEdit
        ? (
            <form onSubmit={this.onEditSubmit}>
        <input placeholder="First Name" ref={firstnameInput => this.firstnameInput = firstnameInput} defaultValue={firstname} />
        <input placeholder="Last Name" ref={lastnameInput => this.lastnameInput = lastnameInput} defaultValue={lastname}/>
        <input placeholder="Address" ref={addressInput => this.addressInput = addressInput} defaultValue={address}/>
        <input placeholder="isActive" ref={isActiveInput => this.isActiveInput = isActiveInput}defaultValue={isActive}/>
        <button>Sauvegarder</button>
            </form>
        )
        : (
          <div>
        <table>
          <caption>Liste des personnes</caption>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Address</th>
          <th>isActive</th>
        </tr>

        <tr>
          <td><span>{firstname}</span></td>
          <td><span>{lastname}</span></td>
          <td><span>{address}</span></td>
          <td><span>{isActive}</span></td>

          <button onClick={this.onEdit}>Edit</button>
        {' |'}
        <button onClick={this.onDelete}>Delete</button>
        {' |'}
        </tr>

        </table>
        </div>
        )
      }
    </div>
    );
  }
}  

export default Person;
