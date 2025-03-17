import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TipsBusinessAnalysis = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Business Analysis Study Tips</Text>

      {/* Original Tips */}
      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 1: Understand Key Concepts</Text>
        <Text style={styles.tipText}>
          Focus on core principles, like requirement gathering, stakeholder analysis, and process mapping. 
          Recommended Time: 1-2 hours per day for concept review.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 2: Practice Case Studies</Text>
        <Text style={styles.tipText}>
          Analyze different business case studies to identify problems and solutions. 
          Recommended Time: 3 hours per week.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 3: Use Analytical Tools</Text>
        <Text style={styles.tipText}>
          Familiarize yourself with SWOT, PESTLE, and root cause analysis tools.
          Recommended Time: 2 hours per week, focusing on a tool each session.
        </Text>
      </View>

      {/* Additional Tips */}
      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 4: Create Visual Summaries</Text>
        <Text style={styles.tipText}>
          Use mind maps, flowcharts, and diagrams to connect concepts visually. 
          This aids retention and understanding.
          Recommended Time: 1 hour per module.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 5: Join Study Groups</Text>
        <Text style={styles.tipText}>
          Discuss concepts with peers to reinforce understanding and gain new perspectives. 
          Recommended Time: 1-2 hours per week.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 6: Apply Real-World Scenarios</Text>
        <Text style={styles.tipText}>
          Relate theories to real-world business scenarios or projects to enhance practical understanding.
          Recommended Time: 30 minutes per day for scenario-based reflection.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 7: Regularly Review Notes</Text>
        <Text style={styles.tipText}>
          Reviewing notes daily solidifies retention and keeps concepts fresh.
          Recommended Time: 15 minutes per day.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 8: Practice Past Papers and Mock Exams</Text>
        <Text style={styles.tipText}>
          Familiarize yourself with question formats by completing past papers. 
          Recommended Time: 1-2 hours weekly for each paper.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 9: Set Clear Goals for Each Session</Text>
        <Text style={styles.tipText}>
          Before studying, outline specific goals to stay focused and productive.
          Recommended Time: 5 minutes to plan, before each study session.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 10: Use the Pomodoro Technique</Text>
        <Text style={styles.tipText}>
          Break study time into intervals (25 minutes studying, 5-minute breaks) to maintain focus and prevent burnout.
          Recommended Time: 2 hours, using 4 Pomodoro intervals.
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
    backgroundColor: '#f0f8ff',
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

export default TipsBusinessAnalysis;
