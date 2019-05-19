import React from 'react';
import Card from './card.js';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          qty: 3,
          color: "red",
          title: "Card One",
          description: "Lorem Ipsum si meliora dies ut vina poemata redict",
          top: {    left:"1", center:"", right:"❤️❤️❤️"},
          bottom: { left:"", center:"XXX", right:""}
        },
        {
          qty: 5,
          title: "Card Two",
          color: "blue",
          top: {    left:"2", center:"000", right:""},
          bottom: { left:"", center:"🛸🛸", right:""}
        },
        {
          qty: 2,
          title: "Card Three",
          color: "purple",
          top: {    left:"2", center:"000", right:"❤️❤️"},
          bottom: { left:"", center:"🛸", right:""}
        }
      ]
    };
  }

  cardMap() {
        return this.state.cards.map((obj, i) => {
          return this.loopCard(obj, i);
        });
  };

  loopCard(obj, i) {
    var result = [];
      for (var j = 0; j < Number(obj.qty); j++) {
        result.push(<Card infos={obj} key={j} />);
      }
      return result;
  };

  render() {
    return (
      <div className="card-container">
         { this.cardMap() }
      </div>
   );
 }
}

export default CardList;
