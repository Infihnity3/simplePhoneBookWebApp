import React from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase"; 

class InsertDetails extends React.Component {
    constructor() {
        super();
        this.state = {
         phoneNo: "",
         name: ""
        };
      }

    updateInput = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    }
  
    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const phoneBook = db.collection("phoneBook").add({
          name: this.state.name,
          phoneNo: this.state.phoneNo
        });  
        this.setState({
          name: "",
          phoneNo: ""
        });
      };

    render() {
    return (
        <div>
            <h1>Please Enter Your Name and Phone Number</h1>
            <form onSubmit={this.addUser}>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={this.updateInput}
                    value={this.state.name}
                />
                <br></br>
                <label>Phone Number: </label>
                <input
                    type="number"
                    name="phoneNo"
                    placeholder="Enter Your Phone Number"
                    onChange={this.updateInput}
                    value={this.state.phoneNo}
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
            <Link to="/">List of Phone Number</Link>
        </div>
        );
      }
   }
export default InsertDetails;
