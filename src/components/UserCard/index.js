import { React, useState, useEffect } from 'react';
import { flName, randomColor } from '../../utils/helpers';
import './index.css'


function UserCard({ user }) {
    const { id, name, email, role } = user;

    return (
        <div className="user-card-wrapper">
            <div className="user-card-functions">
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
            </div>
            <div className="f-l-name" style={{ background: randomColor() }}>
                {flName(name)}
            </div>
            <div className='full-name'>{name}</div>
            <div className='role'>{role}</div>
            <div className='email'>{email}</div>
        </div>
    )
}

export default UserCard;