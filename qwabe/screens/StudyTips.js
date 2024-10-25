import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const StudyTips = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/quiz-back.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Study Tips</Text>
        
        {/* Semester 1 */}
        <Text style={styles.semesterTitle}>Follow These and Get Distinctions</Text>
        <View style={styles.semesterContainer}>
          {/* Module 1 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('TipsBusinessAnalysis')} 
          >
            <Text style={styles.moduleTitle}>Business Analysis Study Tips</Text>
          </TouchableOpacity>

          {/* Module 2 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('TipsDevelopmentSoftware')} 
          >
            <Text style={styles.moduleTitle}>Development Software Study Tips</Text>
          </TouchableOpacity>

          {/* Module 3 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('TipsInformationSystems')} 
          >
            <Text style={styles.moduleTitle}>Information Systems Study Tips</Text>
          </TouchableOpacity>

          {/* Module 4 Quiz Section */}
          <TouchableOpacity 
            style={styles.quizBox} 
            onPress={() => navigation.navigate('TipsSystemsSoftware')} 
          >
            <Text style={styles.moduleTitle}>Systems Software Study Tips</Text>
          </TouchableOpacity>
        </View>

        {/* Quotes Section */}
        <View style={styles.quotesContainer}>
          <Text style={styles.quote}>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</Text>
          <Text style={styles.quote}>"The beautiful thing about learning is that no one can take it away from you." - B.B. King</Text>
          <Text style={styles.quote}>"An investment in knowledge pays the best interest." - Benjamin Franklin</Text>
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
    fontSize: 20,
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
  quizBox: {
    backgroundColor: 'lightblue',
    borderRadius: 15,
    margin: 10,
    width: '100%', // Make it fit the whole screen width
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
  quotesContainer: {
    marginTop: 20,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default StudyTips;
