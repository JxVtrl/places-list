import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Input from '../../components/Input'
import Header from '../../components/Header'
import CommunityIcon from '../../components/CommunityIcon'
import Avatar from '../../components/Avatar'

import * as S from './Add.styles'

const Add: React.FC = () => {
    return (
        <S.Container>
            <Header
                leftButton={
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-start',
                        }}
                    >
                        <CommunityIcon icon="arrow-left" />
                    </TouchableOpacity>
                }
                rightButton={
                    <TouchableOpacity
                        style={{
                            alignSelf: 'flex-end',
                        }}
                    >
                        <Avatar />
                    </TouchableOpacity>
                }
                title="Novo local"
            />
            <S.Content>
                <View>
                    <Image
                        source={{
                            uri: '',
                        }}
                        alt="Foto do local"
                    />
                </View>
                <Input placeholder="Nome" label="Nome do local" />
                <Input placeholder="Endereço" label="Endereço" />
                {/* <Input placeholder="Média de preço" label='Preço' /> */}
            </S.Content>
        </S.Container>
    )
}

export default Add
