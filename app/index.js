import React from 'react';
import Home from './screens/Home';
import EStylesheet from 'react-native-extended-stylesheet';




EStylesheet.build ({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#979797',
    $inputText: '#797979',
    
})

export default () => <Home />

