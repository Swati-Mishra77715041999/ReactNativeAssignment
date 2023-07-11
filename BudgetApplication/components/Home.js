import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Show Home Screen list here</Text>
            <Button title='Go To Budget Entry' onPress={() => navigation.navigate('BudgetEntry')}/>
        </View>
    );
}

export default Home;
