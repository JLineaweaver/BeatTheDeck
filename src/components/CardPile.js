import React from 'react';
import {connect} from "react-redux";
import {IncrementCardPile} from '../actions';

const CardPile = ({cardPile, IncrementCardPile}) => {
    return (
        <div className="cardPile" onClick={IncrementCardPile}>
            cardPile {cardPile}
        </div>
        )
};

const mapStateToProps = (state) => {
    return {
        cardPile: state.CardPile
    }
}

export default connect(
    mapStateToProps,
    { IncrementCardPile }
)(CardPile)