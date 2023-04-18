import React from 'react'
import { View } from 'react-native'

import { Avatar as AvatarComp } from 'react-native-paper'

interface AvatarProps {
    source?: string
    alt?: string
}

const Avatar: React.FC<AvatarProps> = ({ source, alt }) => {
    return (
        <View>
            <AvatarComp.Image
                source={{
                    uri: source,
                }}
            />
        </View>
    )
}

export default Avatar
