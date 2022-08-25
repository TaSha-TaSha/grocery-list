import { Component } from "react";
import photoThree from './bag.jpg';


export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            clientTipes: '',
            groceryList: []
        }
    }

    onChangeEvent(e) {
        this.setState( {clientTipes: e} )
        console.log(e)
    }

    addItems(input) {
        if (input === '') {
            alert('Please enter an item')
        }
        else {
        let arrayItems = this.state.groceryList;
        arrayItems.push(input);
        this.setState( {groceryList: arrayItems, clientTipes: ''} )
        console.log(arrayItems);
    }
}

    crossedWord(liEach) {
        const li = liEach.target;
        li.classList.toggle('crossed');
    }

    deleteItems() {
        let arrayItems = this.state.groceryList;
        arrayItems.length = 0;
        this.setState( {groceryList: arrayItems} )
    }

    submitEnter(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.submitEnter }>
            <div className='container'>
                <input type='text'
                placeholder='What do you wanna buy?'
                onChange={ (e) => {this.onChangeEvent(e.target.value)}  } 
                value={ this.state.clientTipes } />
            </div>
            <div className='container'>
                <button onClick={ () => this.addItems(this.state.clientTipes) } className='add'>Add</button>
            </div>
            <ul>
                { this.state.groceryList.map( (item, index) => (
                    <li onClick={ this.crossedWord } key={index}>
                        <img src={photoThree} alt='a bag' width='40px' />
                        {item}
                    </li>
                )) }
            </ul>
            <div className='container'>
                <button onClick={ () => this.deleteItems() } className='delete'>Delete</button>
            </div>
            </form>
            </div>
        )
    }
}