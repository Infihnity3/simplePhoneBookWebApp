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
        db.collection("phoneBook").add({
          name: this.state.name,
          phoneNo: this.state.phoneNo
        });  
        this.setState({
          name: "",
          phoneNo: ""
        });
      };

      Redirect = () => {
        window.location.href='./';
      }

  render() {
    const lbl = {
      marginLeft: "150px"
    };


    const txtboxName = {
      color: "black",
      backgroundColor: "White",
      padding: "10px",
      margin: "0 0 10px 70px",
      fontFamily: "Arial"
    };

    const txtboxPhoneNo = {
      color: "black",
      backgroundColor: "White",
      padding: "10px",
      margin: "0 0 10px 13px",
      fontFamily: "Arial"
    };

    const background = {
      margin: "300px 0 0 675px"
    };

    const button = {
      backgroundColor: "#008CBA",
      color: "white",
      fontSize: "20px",
      margin: "25px 25px 25px",
      padding: "10px"
    };

    const button1 = {
      backgroundColor: "#008CBA",
      fontSize: "20px",
      margin: "0 25px 0",
      padding: "10px"
    };

    const text = {
      textDecoration: "none",
      color: "white"
    };

    return (
        <div style={background}>
            <h1>Please Enter Your Name and Phone Number</h1>
            <form onSubmit={this.addUser}>
                <label style={lbl}>Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={this.updateInput}
                    value={this.state.name}
                    style={txtboxName}
                />
                <br></br>
                <label style={lbl}>Phone Number: </label>
                <input
                    type="number"
                    name="phoneNo"
                    placeholder="Enter Your Phone Number"
                    onChange={this.updateInput}
                    value={this.state.phoneNo}
                    style={txtboxPhoneNo}
                />
                <br></br>
                
                <button type="submit" style={button1}>
                  <Link to="/" style={text}>Back to View List of Phone Number</Link>
                </button>
                <button type="submit" style={button} onClick={()=>{this.Redirect()}}>Submit</button>
            </form>

        </div>
        );
      }
   }
export default InsertDetails;
