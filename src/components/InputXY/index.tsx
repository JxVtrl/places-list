import React from 'react'
import Input from '../Input'

import * as S from './styles'

interface InputXYProps {
    label: string
}

const InputXY: React.FC<InputXYProps> = ({ label }) => {
    return (
        <S.Container>
            <S.LabelContainer>
                <S.Label>{label}</S.Label>
            </S.LabelContainer>
            <S.InputContainer>
                <Input label="X" />
                <Input label="Y" />
            </S.InputContainer>
        </S.Container>
    )
}

export default InputXY
