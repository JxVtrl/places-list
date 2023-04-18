import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Header from '../../components/Header'
import CommunityIcon from '../../components/CommunityIcon'
import Avatar from '../../components/Avatar'

import * as S from './Add.styles'
import { addDoc, collection } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../services/firebase'
import { Places } from '../../interfaces/Places.types'
import InputRating from '../../components/InputRating'
import InputXY from '../../components/InputXY'

const Add: React.FC = () => {
    const [place, setPlace] = React.useState<Places>({
        name: '',
        address: '',
        price: 0,
        image: '',
        categories: [],
        coordinates: {
            latitude: 0,
            longitude: 0,
        },
        rating: 0,
    })

    const placesCollection = collection(FIRESTORE_DB, 'places')

    const addPlace = () => {
        if (place.name === '') return
        if (place.address === '') return
        if (place.image === '') return
        addDoc(placesCollection, place)
    }

    const resetState = () => {
        setPlace({
            name: '',
            address: '',
            price: 0,
            image: '',
            categories: [],
            coordinates: {
                latitude: 0,
                longitude: 0,
            },
            rating: 0,
        })
    }

    return (
        <S.Container>
            <Header
                leftButton={
                    <S.Button variant="secondary" onPress={resetState}>
                        <Text>Limpar</Text>
                    </S.Button>
                }
                rightButton={
                    <S.Button variant="primary" onPress={addPlace}>
                        <Text>Salvar</Text>
                    </S.Button>
                }
                title="Novo local"
            />
            <S.Content>
                <S.ImageContainer>
                    {place.image !== '' ? (
                        <S.LocalImage
                            source={{
                                uri: place.image,
                            }}
                            alt="Foto do local"
                        />
                    ) : (
                        <S.NoImage>
                            <Text>Sem Imagem</Text>
                            <Text>Clique aqui para pesquisar</Text>
                        </S.NoImage>
                    )}
                </S.ImageContainer>
                <S.RatingContainer>
                    <InputRating
                        onPress={(num: number) => {
                            setPlace({ ...place, rating: num })
                        }}
                        value={place.rating}
                        type="star"
                    />
                    <InputRating
                        onPress={(num: number) => {
                            setPlace({ ...place, price: num })
                        }}
                        value={place.price}
                        type="currency-usd"
                    />
                </S.RatingContainer>

                <Input
                    placeholder="Nome"
                    label="Nome do local"
                    value={place.name}
                    onChange={(e) => {
                        setPlace({ ...place, name: e.nativeEvent.text })
                    }}
                />
                <Input
                    placeholder="Endereço"
                    label="Endereço"
                    value={place.address}
                    onChange={(e) => {
                        setPlace({ ...place, address: e.nativeEvent.text })
                    }}
                />
                {/* <Input
                    placeholder="Categorias"
                    label="Categorias"
                    onChange={(e) => {
                        setPlace({ ...place, categories: e.nativeEvent.text })
                    }}
                /> */}
            </S.Content>
        </S.Container>
    )
}

export default Add
