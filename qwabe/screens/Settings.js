import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PersonalDetails')}>
        <Text style={styles.optionText}>Personal Details</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AccountManagement')}>
        <Text style={styles.optionText}>Account Management</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ChangePassword')}>
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Logout')}>
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEAFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#1E88E5',
  },
});

export default Settings;
