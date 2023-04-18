import React from 'react'
import { View, Text, Image } from 'react-native'
import { Places } from '../../interfaces/Places.types'

import * as S from './ListItem.styles'

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
        <S.Container>
            <S.ImageContainer>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    source={{ uri: image }}
                    alt="Foto do local"
                />
            </S.ImageContainer>
            <S.InfoContainer>
                <S.LeftInfo>
                    <Text>{name}</Text>
                    <Text>{address}</Text>
                </S.LeftInfo>
                <S.RightInfo>
                    <Text>{price}</Text>
                </S.RightInfo>
            </S.InfoContainer>
        </S.Container>
    )
}

export default ListItem
