import React from 'react'
import { TouchableOpacity } from 'react-native'
import CommunityIcon from '../CommunityIcon'

import * as S from './styles'

interface InputRatingProps {
    onPress: (num: number) => void
    value: number
    type: 'star' | 'heart' | 'currency-usd'
}

const InputRating: React.FC<InputRatingProps> = ({ onPress, value, type }) => {
    const handleChangeRating = (num: number) => {
        onPress(num)
    }

    return (
        <S.InputContainer>
            {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            if (value === item) return handleChangeRating(0)
                            handleChangeRating(item)
                        }}
                    >
                        <CommunityIcon
                            size={30}
                            color={
                                type === 'star'
                                    ? '#FFD700'
                                    : type === 'heart'
                                    ? '#FF0000'
                                    : type === 'currency-usd'
                                    ? item <= value
                                        ? '#00FF00'
                                        : '#9d9d9d'
                                    : '#000000'
                            }
                            icon={
                                item <= value
                                    ? type
                                    : type === 'currency-usd'
                                    ? type + '-off'
                                    : type + '-outline'
                            }
                        />
                    </TouchableOpacity>
                )
            })}
        </S.InputContainer>
    )
}

export default InputRating
