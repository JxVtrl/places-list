import React from 'react'
import { View, Text } from 'react-native'
import List from '../../components/List/List'
import { places } from '../../data/places.mock'

const Home: React.FC = () => {
    return (
        <View>
            <List items={places}/>
        </View>
    )
}

export default Home
