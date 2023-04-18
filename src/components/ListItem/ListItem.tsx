import React from 'react'
import { View, Text } from 'react-native'
import { Places } from '../../interfaces/Places.types'

interface ListItemProps {
    item: Places
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const {
        address,
        categories,
        coordinates,
        image,
        name,
        price,
        rating,
        reviews,
    } = item

    return (
        <View>
            <Text>{name}</Text>
            <Text>{address}</Text>
        </View>
    )
}

export default ListItem
