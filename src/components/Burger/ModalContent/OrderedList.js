import React from 'react';

import ItemList from './ItemList'

const orderedList = (props)=>(
    <ul>
        { 
            Object.keys(props.ingredients)
                .map((igkey)=>(
            <ItemList   key={ igkey }
                        item = { igkey }
                        cant = { props.ingredients[igkey] }
            />
            ))
        }
   </ul>   
)


export default orderedList;