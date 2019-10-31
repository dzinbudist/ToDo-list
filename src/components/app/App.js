import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header';
import Modal from '../modalAdd/Modal';
import Main from '../main/Main';
import uuidv4 from 'uuid/v4';

var myTodos = [];
var aDate;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, updated: false };

    if (localStorage.getItem('item') !== null)
      myTodos = JSON.parse(localStorage.getItem('item'));
    let aToday = new Date();
    aToday.setDate(aToday.getDate() + 7);
    aDate = aToday.toJSON().slice(0, 10);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  doAddNew = () => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes();
    let aNewItem = {};
    aNewItem["id"] = uuidv4();
    aNewItem["title"] = document.querySelector('#title').value;
    aNewItem["priority"] = document.querySelector('#priority').value;
    aNewItem["duDate"] = document.querySelector('#duDate').value;
    aNewItem["percents"] = "0%";
    aNewItem["modified"] = date;

    let aStatus = document.querySelector('#status').value;

    aNewItem["status"] = aStatus;

    if (aStatus == "Completed") {
      aNewItem["check"] = "true"
    }
    else {
      aNewItem["check"] = "false"
    }

    myTodos.unshift(aNewItem);

    localStorage.setItem('item', JSON.stringify(myTodos));

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  doRemove = (returning) => {
    myTodos = myTodos.filter(item => item.id !== returning);
    localStorage.setItem('item', JSON.stringify(myTodos));
    this.setState({
      updated: true
    });
    //this.forceUpdate();
  }

  doCheck = (returning, aValue) => {

    for (var i = 0; i < myTodos.length; i++) {

      if (myTodos[i].id == returning) {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes();

        if (aValue == false) {
          myTodos[i].status = "Completed";
          myTodos[i].check = "true";
          myTodos[i].percents = "100%";
          myTodos[i].modified = date;
        }
        else {
          myTodos[i].status = "New";
          myTodos[i].check = "false";
          myTodos[i].percents = "0%";
          myTodos[i].modified = date;
        }
        localStorage.setItem('item', JSON.stringify(myTodos));
        this.setState({
          updated: true
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <button className="btn btn-info" onClick={this.toggleModal}>
            Add New Item
        </button>
        </div>
        <Main aList={myTodos} onClick={this.doRemove} onChange={this.doCheck} update={this.state.updated} />
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          addNew={this.doAddNew}
          date={aDate}>
        </Modal>
      </div>
    );
  }
}

export default App;