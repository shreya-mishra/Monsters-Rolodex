import React,{Component}  from 'react';
import {CardList}from'./components/card-list/card-list.components';
import{SearchBox}from'./components/search-box/search-box.components';
import './App.css';


  class App extends Component{
    constructor(){
      super();
      this.state={  
        monsters:[],
        searchField:'' 
      };
      //this.handleChange=this.handleChange.bind(this);
    }
    

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //.then(users => console.log(users)) 
      .then(users => this.setState({monsters:users}));
    }
    handleChange=e=>
    {
      this.setState({searchField: e.target.value})
    }

    // Whenever set state is called and the properties change then react re renders the function which means that
    //the filteredMonsters function re render again
    // this way we are dynamically update the state 
    
    render(){
      const{ monsters,searchField}=this.state;
      /* this is simpler way to pull the values we can also use ilter value
      const monsters=this.state.monsters;
      const searchField=this.state.searchField;*/
      
      //filtering method
      const filteredMonsters = monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        ) ;   // include return value true or false based on the condition
      return(
        <div className='App'> 
        <h1> Monsters Rolodex </h1>
        
      <SearchBox
      placeholder='search monsters' handleChange={this.handleChange}
      />
        
          <CardList monsters={filteredMonsters}>
          
          </CardList>
          
        </div>
      );
    }

  }
  
export default App;