import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';
import { addToArray } from './redux/action';

const AddBudget = ({ navigation }) => {
  const budgetCategoryData = [
    { label: 'Investments', value: 'Investments' },
    { label: 'MutualFund', value: 'MutualFund' },
    { label: 'FixedDeposits', value: 'FixedDeposits' },
    { label: 'Entertainment', value: 'Entertainment' },
    { label: 'BasicNeed', value: 'BasicNeed' },
    { label: 'Loan', value: 'Loan' },
    { label: 'Others', value: 'Others' },
  ];

  const [formData, setFormData] = useState({
    itemValue: null,plannedAmount: '',actualAmount: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const addToArrayAndNavigate = () => {
    const inputData = {
      id: Math.floor(Math.random() * 100),
      category: formData.itemValue,
      planned_amount: formData.plannedAmount,
      actual_amount: formData.actualAmount,
    };
    dispatch(addToArray(inputData));
    clearForm();
    navigation.navigate('BudgetList');
  };

  const clearForm = () => {
    setFormData({
      itemValue: null,plannedAmount: '',actualAmount: '',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity>
          <Text style={styles.heading}>Budget Entry</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../images/budget.jpg')} style={styles.imageIcon} />
      <View style={styles.inputContainer}>
        <Text style={styles.txt}>Select Items</Text>
        <Dropdown
          style={styles.input}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={budgetCategoryData}
          search
          maxHeight={250}
          labelField="label"
          valueField="value"
          value={formData.itemValue}
          placeholder="select"
          searchPlaceholder="Search..."
          onChange={(item) => handleInputChange('itemValue', item.value)}
        />

        <Text style={styles.txt}>Planned Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Planned - Amount"
          keyboardType="number-pad"
          value={formData.plannedAmount}
          onChangeText={(text) => handleInputChange('plannedAmount', text)}
          clearButtonMode="always"
        />

        <Text style={styles.txt}>Actual Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Actual-Amount"
          keyboardType="number-pad"
          value={formData.actualAmount}
          onChangeText={(text) => handleInputChange('actualAmount', text)}
          clearButtonMode="always"
        />
      </View>
      <View style={styles.btn}>
        <Button title="Save" color="#24292f" onPress={addToArrayAndNavigate} />
        <Button title="Clear" color="#24292f" onPress={clearForm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor: 'whitesmoke',
  },
  inputContainer: {
    padding: 15,margin: 10,
  },
  input: {
    borderBottomWidth: 0.8,borderBottomColor: '#24292f',padding: 5,marginBottom: 10,
  },
  txt: {
    fontSize: 25,paddingTop: 10,alignSelf: 'flex-start',
  },
  btn: {
    marginTop: 28,flexDirection: 'row',justifyContent: 'space-around',borderRadius: 10,
  },
  imageIcon: {
    resizeMode: 'center',width: 400,height: 250,borderRadius: 200 / 2,alignSelf: 'center',
  },
  card: {
    backgroundColor: '#24292f',borderRadius: 0,flexDirection: 'row',justifyContent: 'center',width: '100%',
  },
  heading: {
    fontSize: 32,fontWeight: '800',margin: 13,color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});

export default AddBudget;