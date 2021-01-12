import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {newItem: '', list: [], counter: 0}
  }

  updateInput = value => {
    this.setState({
      newItem: value
    })
  }

  addItem = () => {
    const newItem = {
      id: this.state.counter++,
      value: this.state.newItem.slice()
    }

    const list = [...this.state.list]
    console.log('list: ', list)
    list.push(newItem)

    this.setState({
      list: list,
      newItem: ''
    })
  }

  deleteItem = id => {
    const list = [...this.state.list]

    const updateList = list.filter(item => item.id !== id)

    this.setState({
      list: updateList
    })
  }

  render() {
    return(
      <div className='container'>
        <div className='todo'>
          <h3 className='todo__title'>todo list</h3>
          <input
            className='todo__field'
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
            placeholder='text here'
            type="text"
          />
          <button
            className={this.state.newItem !== '' ? 'todo__button' : 'todo__button disabled'}
            onClick={() => this.addItem()}
          >Add item</button>

          <ul className='todo-list'>
            {
              this.state.list.map(item => {
                return(
                  <li
                    className='todo-list__item'
                    key={item.id}
                  >
                  <span className="todo-list__item-content">
                    {item.value}
                  </span>
                    <button
                      className='todo-list__item-button'
                      onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
