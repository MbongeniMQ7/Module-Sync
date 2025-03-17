import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TipsInformationSystems = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Information Systems Study Tips</Text>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 1: Understand the Basics of Information Flow</Text>
        <Text style={styles.tipText}>
          Focus on how information is collected, stored, processed, and communicated in systems. 
          Recommended Time: 1 hour per week on basics.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 2: Familiarize Yourself with System Development Life Cycle (SDLC)</Text>
        <Text style={styles.tipText}>
          Study the stages of SDLC, including planning, analysis, design, and implementation.
          Recommended Time: 30 minutes daily reviewing SDLC concepts.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 3: Master Database Concepts</Text>
        <Text style={styles.tipText}>
          Understand database structures, relational models, and basic SQL queries.
          Recommended Time: 1.5 hours weekly on databases and SQL.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 4: Explore Data Security Principles</Text>
        <Text style={styles.tipText}>
          Familiarize yourself with data confidentiality, integrity, and availability in IS.
          Recommended Time: 1 hour per week on security principles.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 5: Study Emerging Trends in IS</Text>
        <Text style={styles.tipText}>
          Keep up with trends like AI, Big Data, and IoT in information systems.
          Recommended Time: 30 minutes weekly on research and articles.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 6: Practice Problem-Solving with Case Studies</Text>
        <Text style={styles.tipText}>
          Analyze real-world scenarios to understand how IS concepts apply practically.
          Recommended Time: 1 hour per week on case studies.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 7: Use Visual Aids for System Mapping</Text>
        <Text style={styles.tipText}>
          Create flowcharts and diagrams to visualize system components and interactions.
          Recommended Time: 45 minutes weekly creating visual aids.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 8: Review Software Tools for Information Management</Text>
        <Text style={styles.tipText}>
          Explore tools like Microsoft Access or database management software to practice data handling.
          Recommended Time: 1 hour weekly on practical tool exercises.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 9: Engage in Group Discussions and Study Sessions</Text>
        <Text style={styles.tipText}>
          Collaborate with peers to clarify concepts and discuss case studies.
          Recommended Time: 1 hour weekly in group study.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 10: Regularly Review Key Terms and Definitions</Text>
        <Text style={styles.tipText}>
          Familiarize yourself with IS terminology to improve understanding and retention.
          Recommended Time: 15 minutes daily on flashcards or quizzes.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
  tipContainer: {
    backgroundColor: '#e6f7ff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tipText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
});

export default TipsInformationSystems;
