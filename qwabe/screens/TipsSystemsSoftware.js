import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TipsSystemsSoftware = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Systems Software Study Tips</Text>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 1: Master Operating System Fundamentals</Text>
        <Text style={styles.tipText}>
          Understand the core functions of operating systems, including memory management, process scheduling, and I/O operations.
          Recommended Time: 1 hour per week.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 2: Get Comfortable with Command Line Interfaces (CLI)</Text>
        <Text style={styles.tipText}>
          Familiarize yourself with basic commands on systems like Linux or Windows CLI for practical system navigation.
          Recommended Time: 30 minutes daily practicing commands.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 3: Learn System Security and Permissions</Text>
        <Text style={styles.tipText}>
          Study file permissions, user roles, and system security measures essential to protecting resources.
          Recommended Time: 1 hour per week on security concepts.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 4: Understand System Software Design Principles</Text>
        <Text style={styles.tipText}>
          Learn the basics of system architecture and how software interacts with hardware components.
          Recommended Time: 1.5 hours weekly on design principles.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 5: Study File Systems and Storage Management</Text>
        <Text style={styles.tipText}>
          Know how files are organized, stored, and retrieved in different types of file systems.
          Recommended Time: 1 hour weekly reviewing file systems.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 6: Practice with Virtualization and Containers</Text>
        <Text style={styles.tipText}>
          Experiment with virtualization tools like VirtualBox and containerization with Docker to understand isolated environments.
          Recommended Time: 2 hours monthly on practical exercises.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 7: Explore System Performance Monitoring Tools</Text>
        <Text style={styles.tipText}>
          Use tools to monitor system resources, such as CPU usage, memory, and disk activity.
          Recommended Time: 30 minutes weekly exploring tools.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 8: Understand Networking Basics for System Communication</Text>
        <Text style={styles.tipText}>
          Learn about TCP/IP, protocols, and how different systems communicate over networks.
          Recommended Time: 1 hour per week on networking basics.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 9: Review System Software Maintenance Practices</Text>
        <Text style={styles.tipText}>
          Learn the best practices for maintaining and updating systems software to ensure stability and security.
          Recommended Time: 45 minutes weekly on maintenance practices.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>Tip 10: Work on Mini Projects to Apply Concepts</Text>
        <Text style={styles.tipText}>
          Apply your knowledge by creating mini-projects or simulations, such as a mock operating system scheduler.
          Recommended Time: 2 hours monthly on projects.
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

export default TipsSystemsSoftware;
