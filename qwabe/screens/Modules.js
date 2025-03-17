import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
// Import the BusinessAnalysis screen
import BusinessAnalysis from './BusinessAnalysis';

const Modules = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/mod-back.png')} // Background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Semester 1 Heading */}
        <Text style={styles.semesterHeading}>First-Semester</Text>
        <View style={styles.grid}>
          {/* Module 1A */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('BusinessAnalysis')} // Navigate to BusinessAnalysis screen
          >
            <Image source={require('../../assets/bay.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Business Analysis1A</Text>
          </TouchableOpacity>

          {/* Module 2A */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('DevelopmentSoftware')} // Navigate to Module 2 detail page
          >
            <Image source={require('../../assets/dev.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Development Software1A</Text>
          </TouchableOpacity>

          {/* Module 3A */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('InformationSystems')} // Navigate to Module 3 detail page
          >
            <Image source={require('../../assets/ifs.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Information Systems1A</Text>
          </TouchableOpacity>

          {/* Module 4A */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('SystemsSoftware')} 
          >
            <Image source={require('../../assets/ssw.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Systems Software1A</Text>
          </TouchableOpacity>
        </View>

        {/* Semester 2 Heading */}
        <Text style={styles.semesterHeading}>Second-Semester</Text>
        <View style={styles.grid}>
          {/* Module 1B */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('BusinessAnalysis')} 
          >
            <Image source={require('../../assets/bay.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Business Analysis1B</Text>
          </TouchableOpacity>

          {/* Module 2B */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('DevelopmentSoftware')} // Navigate to Module 2 detail page
          >
            <Image source={require('../../assets/dev.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Development Software1B</Text>
          </TouchableOpacity>

          {/* Module 3B */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('InformationSystems')} // Navigate to Module 3 detail page
          >
            <Image source={require('../../assets/ifs.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Information Systems1B</Text>
          </TouchableOpacity>

          {/* Module 4B */}
          <TouchableOpacity 
            style={styles.moduleBox} 
            onPress={() => navigation.navigate('SystemsSoftware')} // Navigate to Module 4 detail page
          >
            <Image source={require('../../assets/ssw.png')} style={styles.moduleImage} />
            <Text style={styles.moduleTitle}>Systems Software1B</Text>
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
  },
  semesterHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', 
    marginVertical: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
    width: '100%',
  },
  moduleBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10, // Maintain margin for spacing
    width: '45%', // Width adjusted for two boxes per row
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
  },
  moduleImage: {
    width: '100%',
    height: 100, // Maintain height for images
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', 
    marginTop: 5,
    textAlign: 'center', 
  },
});

export default Modules;
