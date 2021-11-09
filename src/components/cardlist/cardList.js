

import { Card } from '../card/card.component'

import './card-list.component.css'

import React, { Component } from 'react'

export class CardList extends Component {
     constructor(props) {
          super(props);
     }

     render() {
          return (
               <div className="card-list">
                    {this.props.monsters.map(monster =>
                         <Card monster={monster} key={monster.id} />
                    )}
               </div>
          )
     }
}
