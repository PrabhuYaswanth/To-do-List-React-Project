//import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import Content from './Content';
import { Footer } from './Footer';
import './index.css';
import { useState } from 'react'
import { Addditem } from './Additem';
import SearchItem from './SearchItem';



function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);
  const [search, setSearch] = useState('');

  const [newItem, setNewItem] = useState('');
  // to add in list parameter (item)
  const addItem = (item) => {
    //to count next id in sequence 
    const id = items.length ? items[items.length - 1].id + 1 : 1
    //privious array items syntax
    const addNewItem = { id, checked: false, item }
    //to join new item in array
    const listItems = [...items, addNewItem]
    //setting new generated list items
    setItems(listItems)
    localStorage.setItem('todo_list', JSON.stringify(listItems))
  }


  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('todo_list', JSON.stringify(listItems))

  }


  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log("Submitted");
    addItem(newItem)
    //add items,after adding make box as empty
    setNewItem(' ')
  }

  return (
    <div className='App'>
      <Header title="Schedule" />
      <Addditem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content  // Parameters
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />

    </div>
  );
}

Header.defaultProps = {
  title: "To Do List"
}
export default App;
