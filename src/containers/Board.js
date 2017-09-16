import React, { Component } from 'react';
import CardPile from '../components/CardPile.js';

class Board extends Component {
    render() {
        return (
            <div id="Board">
                <div className="topRow">
                    <CardPile />
                    <CardPile />
                    <CardPile />
                </div>
                <div className="middleRow">
                    <CardPile />
                    <CardPile />
                    <CardPile />
                </div>
                <div className="bottomRow">
                    <CardPile />
                    <CardPile />
                    <CardPile />
                </div>
            </div>
        );
    }
}

export default Board;