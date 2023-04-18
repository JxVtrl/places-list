import React, { useEffect, useState } from 'react'
import List from '../../components/List/List'
import Header from '../../components/Header'
import { collection, onSnapshot } from 'firebase/firestore'
import { FIRESTORE_DB } from '../../services/firebase'
import * as S from './Home.styles'
import { Places } from '../../interfaces/Places.types'

const Home: React.FC = () => {
    const [places, setPlaces] = useState<Places[]>([])

    const placesCollection = collection(FIRESTORE_DB, 'places')

    useEffect(() => {
        const subscription = onSnapshot(placesCollection, {
            next: (querySnapshot) => {
                const places: Places[] = []

                querySnapshot.docs.forEach((doc) => {
                    const place = doc.data() as Places
                    places.push(place)
                })

                setPlaces(places)
            },
            error: (error) => {
                console.log(error)
            },
        })

        return () => {
            subscription()
        }
    }, [])

    return (
        <S.Container>
            <Header
                // rightButton={
                //     <TouchableOpacity
                //         style={{
                //             alignSelf: 'flex-end',
                //         }}
                //     >
                //         <Avatar />
                //     </TouchableOpacity>
                // }
                title="Lista de lugares"
            />
            <S.Content>
                <List items={places} />
            </S.Content>
        </S.Container>
    )
}

export default Home
