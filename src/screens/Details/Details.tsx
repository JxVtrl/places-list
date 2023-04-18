import React from 'react'
import { View, Text, Button } from 'react-native'

// import { Container } from './styles';

interface DetailsProps {
    navigation: any
}

const Details: React.FC<DetailsProps> = ({ navigation }) => {
    return (
        <View>
            <Text>Details</Text>
            <Button
                title="Go to General"
                onPress={() => navigation.push('General')}
            />
        </View>
    )
}

export default Details
