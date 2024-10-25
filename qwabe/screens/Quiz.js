import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const Quiz = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/quiz-back.png')} // Main background image
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Quiz</Text>
        
        {/* Semester 1 */}
        <Text style={styles.semesterTitle}>Semester 1</Text>
        <View style={styles.semesterContainer}>
          {/* Module 1 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizBusinessAnalysis')} // Navigate to Business Analysis quiz
          >
            <Text style={styles.moduleTitle}>Business Analysis1A Quiz</Text>
          </TouchableOpacity>

          {/* Module 2 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizDevelopmentSoftware')} // Navigate to Development Software quiz
          >
            <Text style={styles.moduleTitle}>Development Software1A Quiz</Text>
          </TouchableOpacity>

          {/* Module 3 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizInformationSystems')} // Navigate to Information Systems quiz
          >
            <Text style={styles.moduleTitle}>Information Systems1A Quiz</Text>
          </TouchableOpacity>

          {/* Module 4 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizSystemsSoftware')} // Navigate to Systems Software quiz
          >
            <Text style={styles.moduleTitle}>Systems Software1A Quiz</Text>
          </TouchableOpacity>
        </View>

        {/* Semester 2 */}
        <Text style={styles.semesterTitle}>Semester 2</Text>
        <View style={styles.semesterContainer}>
          {/* Module 1 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizBusinessAnalysis')} // Navigate to Business Analysis quiz
          >
            <Text style={styles.moduleTitle}>Business Analysis1B Quiz</Text>
          </TouchableOpacity>

          {/* Module 2 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizDevelopmentSoftware')} // Navigate to Development Software quiz
          >
            <Text style={styles.moduleTitle}>Development Software1B Quiz</Text>
          </TouchableOpacity>

          {/* Module 3 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizInformationSystems')} // Navigate to Information Systems quiz
          >
            <Text style={styles.moduleTitle}>Information Systems1B Quiz</Text>
          </TouchableOpacity>

          {/* Module 4 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('QuizSystemsSoftware')} // Navigate to Systems Software quiz
          >
            <Text style={styles.moduleTitle}>Systems Software1B Quiz</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  semesterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 15,
  },
  semesterContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    padding: 10,
    width: '100%', 
    alignItems: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
    width: '100%',
  },
  quizBox: {
    backgroundColor: 'lightblue',
    borderRadius: 15,
    margin: 10,
    width: '80%', 
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, 
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Quiz;
