import React from 'react';

class Card extends React.Component {

  render() {
      return (
          <div className={ 'card color-' + this.props.infos.color}>
              <header>
                <div className="left">    { this.props.infos.top.left } </div>
                <div className="center">  { this.props.infos.top.center } </div>
                <div className="right">   { this.props.infos.top.right } </div>
              </header>
              <content>
                 <h2> { this.props.infos.title }</h2>
                 <p>  { this.props.infos.cardType }</p>
                 <p>  { this.props.infos.description }</p>
                 <h3> { this.props.infos.stat }</h3>
              </content>
                <footer>
                  <div className="left">    { this.props.infos.bottom && this.props.infos.bottom.left } </div>
                  <div className="center">  { this.props.infos.bottom && this.props.infos.bottom.center } </div>
                  <div className="right">   { this.props.infos.bottom && this.props.infos.bottom.right } </div>
                </footer>
          </div>
        )
    }
}


export default Card;
