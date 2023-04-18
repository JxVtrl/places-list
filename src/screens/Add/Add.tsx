import React, { useState, useEffect } from 'react'
import { Text, ScrollView } from 'react-native'

import Input from '../../components/Input'
import Header from '../../components/Header'

import * as S from './Add.styles'
import { addDoc, collection } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../services/firebase'
import { Places } from '../../interfaces/Places.types'
import InputRating from '../../components/InputRating'
import Modal from '../../components/Modal'

const Add: React.FC = ({ navigation }: any) => {
    const [modalOpened, setModalOpened] = useState(false)
    const [images, setImages] = useState<any[]>([])
    const [place, setPlace] = useState<Places>({
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
        if (place.image === '') return
        addDoc(placesCollection, place)
        resetState()
        navigation.navigate('Home')
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

    const searchImage = async () => {
        const url =
            `https://api.unsplash.com/search/photos?query=${place.name}&per_page=20&client_id=` +
            'Wyh1ny600skbLG9nws2b25v4_CU1539lZQ17nxOe6aM'

        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setImages(data.results)
                setModalOpened(true)
            })
    }

    const handleImage = (image: string) => {
        setPlace({ ...place, image })
        setModalOpened(false)
        setImages([])
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
                <S.ImageContainer
                    radius
                    onPress={() => place.name && searchImage()}
                >
                    {place.image !== '' ? (
                        <S.LocalImage
                            source={{
                                uri: place.image,
                            }}
                            alt="Foto do local"
                        />
                    ) : (
                        <S.NoImage>
                            <Text
                                style={{
                                    marginBottom: 8,
                                }}
                            >
                                Sem Imagem
                            </Text>
                            {place.name ? (
                                <>
                                    <Text>Clique aqui para pesquisar:</Text>
                                    <Text>{place.name}</Text>
                                </>
                            ) : (
                                <Text>Adicione um nome para pesquisar</Text>
                            )}
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
                    onChange={(e: any) => {
                        setPlace({ ...place, name: e.nativeEvent.text })
                    }}
                />
                <Input
                    placeholder="Endereço"
                    label="Endereço"
                    value={place.address}
                    onChange={(e: any) => {
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

            {modalOpened && (
                <Modal>
                    <ScrollView>
                        {images.map((image) => {
                            return (
                                <S.ImageContainer
                                    radius={false}
                                    onPress={() =>
                                        handleImage(image.urls.small)
                                    }
                                    key={image.id}
                                >
                                    <S.Image
                                        source={{
                                            uri: image.urls.small,
                                        }}
                                        alt="Foto do local"
                                    />
                                </S.ImageContainer>
                            )
                        })}
                    </ScrollView>
                </Modal>
            )}
        </S.Container>
    )
}

export default Add
