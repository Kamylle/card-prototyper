import React from 'react';
import Card from './card.js';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          qty: 3,
          color: "green",
          layout: "resource",
          title: "Card One",
          cardType: "Type 1",
          stat: "+2 ❌",
          top: { left:"1", center:"", right:"❤️❤️❤️"}
        },
        {
          qty: 5,
          color: "blue",
          layout: "unit",
          title: "Card Two",
          cardType: "Type 2",
          stat: "4 🦄",
          description: "Lorem Ipsum si meliora dies ut vina poemata redict",
          top: { left:"2", center:"000", right:""}
        },
        {
          qty: 2,
          color: "pink",
          layout: "unit",
          title: "Card Two",
          cardType: "Type 2",
          stat: "4 🦄",
          description: "Lorem Ipsum si meliora dies ut vina poemata redict",
          top: { left:"2", center:"000", right:""}
        },
        {
          qty: 2,
          color: "red",
          layout: "special",
          title: "Card Three",
          cardType: "Type 3",
          stat: "5 ❤️",
          description: "Lorem Ipsum si meliora dies ut vina poemata redict",
          top: { left:"2", center:"000", right:"❤️❤️"},
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
