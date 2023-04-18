import React from 'react'
import {  ScrollView } from 'react-native'
import { Places } from '../../interfaces/Places.types'

import ListItem from '../ListItem/ListItem'

interface ListProps {
  items: Places[]
}

const List: React.FC<ListProps> = ({items}) => {
    return (
        <>
            {items.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default List
