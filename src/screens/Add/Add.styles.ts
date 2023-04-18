import styled from 'styled-components/native'
import tokens from '../../utils/tokens'

export const Container = styled.View`
    flex: 1;
`

export const Content = styled.ScrollView`
flex: 1;

    padding: 20px;
`

export const ImageContainer = styled.View`
    height: 150px;
    border-radius: 12px;
    overflow: hidden;

    margin-bottom: 12px;
`

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 12px;
`

export const LocalImage = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: contain;
    
`

export const NoImage = styled.TouchableOpacity`
    width: 100%;
    height: 100%;

    background-color: ${tokens.colors.background01};
        align-items: center;
        justify-content:center;


`



interface ButtonProps {
    variant: 'primary' | 'secondary'
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    height: 42px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    width: 100px;
    
    /* border: 1px solid #000; */
    border: 1px solid ${props => props.variant === 'primary' ? tokens.colors.background01 : tokens.colors.secondary};
    /* background-color: ${props => props.variant === 'primary' ? '#000' : '#fff'}; */






`
