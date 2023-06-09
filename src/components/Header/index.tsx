import React from 'react'
import { Text } from 'react-native'

import * as S from './styles'

interface HeaderProps {
    leftButton?: React.ReactNode
    title?: string
    rightButton?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ leftButton, title, rightButton }) => {
    return (
        <S.Container>
            <S.HeaderItem>{leftButton}</S.HeaderItem>
            {title && <Text>{title}</Text>}
            <S.HeaderItem>{rightButton}</S.HeaderItem>
        </S.Container>
    )
}

export default Header
