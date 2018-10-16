import React from 'react';
import { Link } from 'react-router-dom';

const Subnav = ({data}) => (
    <div className='Subnav'>
        {Object.values(data).map((item, i) => {
            let navName = Object.keys(item)[0].toLowerCase()
            let subs = Object.values(item)
            return subs.map(sub => {
                return sub.map(link => {
                    let linkPath = link.toLowerCase().replace(/\s+/g, '');
                    return <Link to={`/${navName}/${linkPath}`}>{link}</Link>
                })
            })
        })}
        {/* {data.map(link => {
            console.log('link',link)
            let subs = Object.values(link);
            console.log('subs', subs)
            return subs.map(sub => {
                console.log('sub',sub)
                return sub.map(link => {
                    console.log('link',link)
                    return <Link to={`/${link}`}>{link}</Link>
                })
            })
        })} */}
    </div>
);

export default Subnav;