import { React, useState, useEffect } from 'react';
import  UserCard  from '../UserCard';
import './index.css'

function SearchBar({ userData }) {

    return (
        <>
            <div className="search-bar-wrapper">
                <input type='text' placeholder="Search for any name, role or email..." className="search-bar" />
            </div>
            <div className="search-results-wrapper">
                {userData && userData.map((el) => <UserCard key={el.id} user={el} />)}
            </div>
        </>
    )
}

export default SearchBar;