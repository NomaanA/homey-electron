// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';

export default class Home extends Component {
  clickHandler() {
    fetch('http://192.168.1.5:3000/relays').then((res) => res.json()).then((data) => {
      console.log(data);
    }).catch(error => {
      console.log(JSON.stringify(error));
    });
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <button onClick={this.clickHandler}>
            Let it Rain 💩
          </button>
        </div>
      </div>
    );
  }
}
