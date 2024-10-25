import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

const Tests = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/mod-back.png')} // Background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Semester 1 Heading */}
        <Text style={styles.semesterHeading}>First-Semester Tests</Text>
        <View style={styles.grid}>
          {/* Module 1A Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestBusinessAnalysis')}
          >
            <Image source={require('../../assets/bay.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Business Analysis Tests 1A</Text>
          </TouchableOpacity>

          {/* Module 2A Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestDevelopmentSoftware')}
          >
            <Image source={require('../../assets/dev.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Development Software Tests 1A</Text>
          </TouchableOpacity>

          {/* Module 3A Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestInformationSystems')}
          >
            <Image source={require('../../assets/ifs.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Information Systems Tests 1A</Text>
          </TouchableOpacity>

          {/* Module 4A Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestSystemsSoftware')}
          >
            <Image source={require('../../assets/ssw.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Systems Software Tests 1A</Text>
          </TouchableOpacity>
        </View>

        {/* Semester 2 Heading */}
        <Text style={styles.semesterHeading}>Second-Semester Tests</Text>
        <View style={styles.grid}>
          {/* Module 1B Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestBusinessAnalysis')}
          >
            <Image source={require('../../assets/bay.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Business Analysis Tests 1B</Text>
          </TouchableOpacity>

          {/* Module 2B Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestDevelopmentSoftware')}
          >
            <Image source={require('../../assets/dev.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Development Software Tests 1B</Text>
          </TouchableOpacity>

          {/* Module 3B Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestInformationSystems')}
          >
            <Image source={require('../../assets/ifs.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Information Systems Tests 1B</Text>
          </TouchableOpacity>

          {/* Module 4B Test Section */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('TestSystemsSoftware')}
          >
            <Image source={require('../../assets/ssw.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Systems Software Tests 1B</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 15,
    margin: 10,
  },
  semesterHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black', 
    marginVertical: 20,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  moduleBox: {
    backgroundColor: 'lightblue', // Misty rose color
    borderRadius: 20,
    margin: 10,
    width: '90%', // Width adjusted for two boxes per row
    alignItems: 'center',
    padding: 10,
    shadowColor: '#0ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 4, // For Android shadow
    borderWidth: 2,
    borderColor: '#ff4500', // Orange red border for pop
  },
  moduleImage: {
    width: '90%',
    height: 120, // Maintain height for images
    borderRadius: 15,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Tests;
