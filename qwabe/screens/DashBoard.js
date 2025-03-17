import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';

const Dashboard = ({ route, navigation }) => {
  const { username, studentNumber } = route.params;

  return (
    <ImageBackground
      source={require('../../assets/mod-back.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hi, {username}!</Text>
          <Text style={styles.studentNumberText}>Student Number: {studentNumber}</Text>
          <Text style={styles.questionText}>What would you like to do today?</Text>
        </View>

        <TouchableOpacity 
          style={styles.section} 
          onPress={() => navigation.navigate('Modules')}
        >
          <Image style={styles.sectionImage} source={require('../../assets/f-back1.png')} />
          <Text style={styles.sectionTitle}>Modules</Text>
          <Text style={styles.sectionDescription}>Access learning modules and lessons.</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.section} 
          onPress={() => navigation.navigate('Quiz')}
        >
          <Image style={styles.sectionImage} source={require('../../assets/quiz.png')} />
          <Text style={styles.sectionTitle}>Quiz</Text>
          <Text style={styles.sectionDescription}>Test your knowledge with quizzes.</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.section} 
          onPress={() => navigation.navigate('Tests')}
        >
          <Image style={styles.sectionImage} source={require('../../assets/tests.png')} />
          <Text style={styles.sectionTitle}>Tests</Text>
          <Text style={styles.sectionDescription}>Complete tests and assessments.</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.section} 
          onPress={() => navigation.navigate('StudyTips')}
        >
          <Image style={styles.sectionImage} source={require('../../assets/tips.png')} />
          <Text style={styles.sectionTitle}>Tips</Text>
          <Text style={styles.sectionDescription}>Helpful study and learning tips.</Text>
        </TouchableOpacity>

        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
            <Text style={styles.navText}>TimeTable</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Help')}>
            <Text style={styles.navText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.navText}>Settings</Text>
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
    flex: 1,
    backgroundColor: 'rgba(240, 240, 245, 0.8)', 
  },
  header: {
    padding: 20,
    backgroundColor: '#ECEAFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  studentNumberText: {
    fontSize: 16,
    color: '#4A148C',
  },
  questionText: {
    fontSize: 16,
    color: '#4A148C',
  },
  section: {
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 15,
    overflow: 'hidden',
  },
  sectionImage: {
    height: 150,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    color: '#1E88E5',
    backgroundColor: 'lightblue',
  },
  sectionDescription: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 14,
    color: 'black',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#ECEAFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navText: {
    color: '#4A148C',
    fontWeight: 'bold',
  }
});

export default Dashboard;