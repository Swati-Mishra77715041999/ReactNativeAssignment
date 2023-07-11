import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const BudgetList = ({ navigation }) => {

    const cartData=useSelector((state)=>state.reducer)
    console.log("Redux Data",cartData);

    const[cartItems, setCartItems]=useState([])

    useEffect(()=>{
        setCartItems(cartData)
    },[cartData])
    
    var actualSum = 0
    cartItems.forEach(obj => {
        actualSum += Number(obj.actual_amount)
    })
   
    var plannedSum = 0
    cartItems.forEach(obj => {
        plannedSum += Number(obj.planned_amount)
    })

    let saving = (plannedSum) - (actualSum)
    let savingBalance=saving.toFixed(2)

    return (
        <View style={styles.container}>  
            <View style={styles.card}>
                <TouchableOpacity>
                    <Text style={styles.heading}>Budget Entry Listing</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.upperTab}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Category </Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Planned </Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Actual </Text>
            </View>
            <View>
                <FlatList
                    data={cartItems}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.box1}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {item.category} </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> ₹ {item.planned_amount} </Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> ₹ {item.actual_amount} </Text>
                        </View>
                    }
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{fontWeight: 'bold'}}>Amount:</Text>
                <Text style={{fontWeight: 'bold'}}>₹{plannedSum}</Text>
                <Text style={{fontWeight: 'bold'}}>₹{actualSum}</Text>
            </View>

            <View style={styles.headingresult}>
                <Text >  </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, padding: 10, color: '#24292f' }}> Planned Total: ₹{plannedSum}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, padding: 10 }}> Actual Total: ₹{actualSum}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop:10, color:'green'}}> Saving Balance: ₹ {savingBalance}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,backgroundColor: 'white'
    },
    card: {
        backgroundColor: '#24292f',borderColor: 'red',borderRadius: 0,flexDirection: 'row',justifyContent: 'center',width: '100%', 
    },
    heading: {
        fontSize: 21,fontWeight: '800',margin: 13,color:'white'
    },
    box1: {
        margin: 10,borderRadius: 10,borderBottomWidth: 0.8,borderBottomColor: 'black',padding: 13,backgroundColor: 'whitesmoke',flexDirection: 'row',justifyContent: 'space-around',
    },
    headingresult: {
        borderTopWidth: 2,marginTop: 30,margin: 10,padding: 10,
    },
    upperTab: {
        borderRadius: 10,padding: 1,marginTop: 30,flexDirection: 'row',justifyContent: 'space-around'
    }
})
export default BudgetList;