import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TipsDevelopmentSoftware = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Development Software Study Tips</Text>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 1: Focus on Code Syntax and Structure</Text>
        <Text style={styles.tipText}>
          Understanding syntax, functions, and structure is essential. Spend time mastering language-specific syntax.
          Recommended Time: 1 hour daily for syntax drills.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 2: Practice Hands-On Coding</Text>
        <Text style={styles.tipText}>
          Apply theoretical knowledge by building small projects or completing coding challenges.
          Recommended Time: 2-3 hours per week on coding exercises.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 3: Break Down Problems</Text>
        <Text style={styles.tipText}>
          Develop problem-solving skills by breaking down complex problems into smaller steps.
          Recommended Time: 30 minutes daily on algorithmic thinking.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 4: Use Debugging Tools</Text>
        <Text style={styles.tipText}>
          Familiarize yourself with debugging tools in your IDE to troubleshoot code efficiently.
          Recommended Time: 1 hour per week practicing debugging.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 5: Understand Data Structures and Algorithms</Text>
        <Text style={styles.tipText}>
          Master fundamental data structures (e.g., arrays, lists, stacks) and algorithms for efficient programming.
          Recommended Time: 2 hours per week studying data structures.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 6: Review Documentation Regularly</Text>
        <Text style={styles.tipText}>
          Refer to official documentation to stay up-to-date with libraries and language features.
          Recommended Time: 30 minutes weekly for documentation review.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 7: Collaborate on Code Reviews</Text>
        <Text style={styles.tipText}>
          Code reviews with peers help reinforce learning and identify potential improvements.
          Recommended Time: 1 hour weekly for code reviews.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 8: Master Version Control (Git)</Text>
        <Text style={styles.tipText}>
          Use version control to track code changes and collaborate effectively.
          Recommended Time: 1 hour per week practicing Git commands.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 9: Set Milestones for Projects</Text>
        <Text style={styles.tipText}>
          Divide larger projects into milestones for a manageable workflow.
          Recommended Time: 5 minutes to plan before each session.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 10: Regularly Refactor Your Code</Text>
        <Text style={styles.tipText}>
          Improve code readability and maintainability by refactoring regularly.
          Recommended Time: 1 hour weekly for code refactoring.
        </Text>
      </View>
      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 11: Make sre that you always have your study matrial ready</Text>
        <Text style={styles.tipText}>
          Improve code readability and maintainability by refactoring regularly.
          Recommended Time: 1 hour weekly for code refactoring.
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

export default TipsDevelopmentSoftware;
