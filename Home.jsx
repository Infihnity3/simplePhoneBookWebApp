import React from 'react';
import firebase from './firebase';


import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor() {
      super();
      this.ref = firebase.firestore().collection('phoneBook');
      this.unsubscribe = null;
      this.state = {
        phoneBook: []
      };
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const phoneBook = [];
      querySnapshot.forEach((doc) => {
        const { name, phoneNo } = doc.data();
        phoneBook.push({
          key: doc.id,
          doc,
          name,
          phoneNo
        });
      });
      this.setState({
        phoneBook
     });
    }
  
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
  
    render() {

      const background = {
        margin: "100px 0 0 850px"
      };

      const button1 = {
        backgroundColor: "#008CBA",
        fontSize: "20px",
        margin: "25px 0",
        padding: "10px"
      };
  
      const text = {
        textDecoration: "none",
        color: "white"
      };

      return (
        <div style={background}>
            <h1>List of Phone Numbers</h1>
                <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.phoneBook.map(phoneBook =>
                    <tr>
                      <td>{phoneBook.name}</td>
                      <td>{phoneBook.phoneNo}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <button type="submit" style={button1}>
                <Link to="/InsertDetails"  style={text}>Add Contact Details</Link>
              </button>
              
            </div>
      );
    }
  }
  
  export default Home;