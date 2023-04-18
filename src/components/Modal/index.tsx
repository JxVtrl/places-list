import React from 'react'
import { View } from 'react-native'

import * as S from './styles'

interface ModalProps {
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <S.Container>
            <S.Content>{children}</S.Content>
        </S.Container>
    )
}

export default Modal
