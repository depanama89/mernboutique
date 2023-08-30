import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <div className='adminMenu'>
    <div className="list-group">
        <NavLink to="#" class="list-group-item list-group-item-action active" aria-current="true">
            The current link item
        </NavLink>
        <NavLink to="#" className="list-group-item list-group-item-action">Create Category</NavLink>
        <NavLink to="#" className="list-group-item list-group-item-action">Cre