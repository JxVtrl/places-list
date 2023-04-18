import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import List from '../../components/List/List'
import { places } from '../../data/places.mock'
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'

import * as S from './Home.styles'

const Home: React.FC = () => {
    return (
        <S.Container>
            <Header
                rightButton={
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                        }}
                    >
                        <Avatar />
                    </TouchableOpacity>
                }
                title="Lista de lugares"
            />
            <S.Content>
                <List items={places}/>

            </S.Content>
        </S.Container>
    )
}

export default Home
