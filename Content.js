import React from 'react'

import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => { // component name,arrow function us




  return (
    <main>
      {(items.length) ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list Is Empty</p>
      )}
    </main>

  )
}

export default Content