import React from 'react';
import { Route, Link } from 'react-router-dom';
import Subnav from './Subnav';

const Nav = ({data}) => (
    <div className='Nav'>
        {data.map(link => {
            let name = Object.keys(link)[0];
            let linkName = name.toLowerCase();
            let subs = Object.keys(link);
            subs.map(sub => {
                sub = sub.toLowerCase().replace(/\s+/g, '');
                return <Route exact path={`${name}/${sub}`} id={sub}/>
            })
            return <Link to={`/${linkName}`}>{name}</Link>
        })}
        <Subnav data={data} />
    </div>
);

export default Nav;