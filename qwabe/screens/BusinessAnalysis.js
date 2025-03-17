import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';

const BusinessAnalysis = () => {
  return (
    <ImageBackground
      source={require('../../assets/mod-back.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Business Analysis 1A</Text>
        
        <Image source={require('../../assets/bay.png')} style={styles.image} />
        
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.text}>
          Business Analysis 1A introduces the fundamental concepts and techniques used in business analysis. 
          This course covers the role of a business analyst, the skills required, and the methodologies used 
          to analyze business needs and propose solutions.
        </Text>
        
        <Text style={styles.sectionTitle}>Course Objectives</Text>
        <Text style={styles.text}>
          - Understand the role and responsibilities of a business analyst.
          - Learn various business analysis techniques and methodologies.
          - Develop skills to gather, document, and analyze business requirements.
          - Gain knowledge of tools and software used in business analysis.
        </Text>
        
        <Text style={styles.sectionTitle}>Topics Covered</Text>
        <Text style={styles.text}>
          - Introduction to Business Analysis
          - Requirements Gathering and Documentation
          - Process Modeling and Improvement
          - Data Analysis and Reporting
          - Solution Assessment and Validation
        </Text>
        
        <Text style={styles.sectionTitle}>Resources</Text>
        <Text style={styles.text}>
          - Textbook: "Business Analysis for Dummies" by Kupe Kupersmith
          - Online Resources: Business Analysis Body of Knowledge (BABOK)
          - Software: Microsoft Visio, JIRA, Trello
        </Text>
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
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A148C',
    marginVertical: 15,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    marginBottom: 15,
  },
});

export default BusinessAnalysis;
