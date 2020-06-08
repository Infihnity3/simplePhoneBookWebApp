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
      return (
        <div>
            <h3>List of Phone Numbers</h3>
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
              <Link to="/InsertDetails"> Insert Details</Link>
            </div>
      );
    }
  }
  
  export default Home;