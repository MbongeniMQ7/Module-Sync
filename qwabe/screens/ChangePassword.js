import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Change Password</Text>
      {/* Add change password form here */}
    </View>
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
});

export default ChangePassword;
