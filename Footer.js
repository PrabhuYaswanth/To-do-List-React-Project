import React from 'react'

export const Footer = ({length}) => {
    const year=new Date();
  return (
  <footer>{length} List {length===1 ? "Item":"Items"}</footer>
    //<footer>Copyright &copy; {year.getFullYear()}</footer>
  )
}
