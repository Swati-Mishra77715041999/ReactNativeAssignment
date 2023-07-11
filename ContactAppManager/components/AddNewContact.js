import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';

const AddNewContact = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState(['123123123']);

  useEffect(() => {
    if (phoneNumbers[phoneNumbers.length - 1].length > 0) {
      setPhoneNumbers((prevState) => [...prevState, '']);
    }
    try {
      if (
        phoneNumbers[phoneNumbers.length - 2].length === 0 &&
        phoneNumbers.length >= 2
      ) {
        setPhoneNumbers((prevState) => {
          const newState = prevState.slice();
          newState.pop();
          return newState;
        });
      }
    } catch {}
  }, [phoneNumbers]);

  const AddNewContact = () => {
    if (!firstName && !lastName || phoneNumbers.length === 1) {
      Alert.alert('Please set correct fields');
      return;
    }
    
    const myPhoneNumbers = phoneNumbers.map((ph) => {
      return { label: 'mobile', number: ph };
    });

    const contactInfo = {
      displayName: `${firstName} ${lastName}`,
      givenName: `${firstName} ${lastName}`,
      phoneNumbers: myPhoneNumbers,
    };

    Contacts.addContact(contactInfo)
      .then(() => navigation.navigate('ContactList'))
      .catch((error) => console.log(error));
  };

  const MobileNumChange = (text, index) => {
    setPhoneNumbers((prevState) => {
      const newState = [...prevState];
      newState[index] = text;
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      {phoneNumbers.map((phoneNumber, index) => (
        <View style={{ ...styles.inputContainer, marginVertical: 0 }} key={index}>
          <TextInput
            style={styles.input}
            placeholder='Phone Number'
            keyboardType='number-pad'
            value={phoneNumber}
            onChangeText={(text) => MobileNumChange(text, index)}
          />
        </View>
      ))}

      <Button title='Save' onPress={AddNewContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor: 'white',
  },
  inputContainer: {
    padding: 10,margin: 10,
  },
  input: {
    borderBottomWidth: 0.5,borderBottomColor: 'gray',padding: 10,
  },
});

export default AddNewContact;