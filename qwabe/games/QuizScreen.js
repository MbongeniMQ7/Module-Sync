import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import { questions } from './Questions';

const lightColors = [
  '#FFCCCB', // Light Red
  '#FFE4B5', // Light Khaki
  '#ADD8E6', // Light Blue
  '#90EE90', // Light Green
  '#FFB6C1', // Light Pink
  '#E0FFFF', // Light Cyan
  '#FFFACD', // Lemon Chiffon
  '#FFDAB9', // Peach Puff
];// array of colors

const getRandomLightColor = () => {
  return lightColors[Math.floor(Math.random() * lightColors.length)];
};// function to get random color

const QuizScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(120);
  const [showMessage, setShowMessage] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [progress] = useState(new Animated.Value(0));
  const [questionHistory, setQuestionHistory] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#e0f7fa');
  const [shakeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (timer > 0 && !showResult) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setShowResult(true);
    }
  }, [timer, showResult]);

  const shake = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 2 }
    ).start();
  };

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }

    setQuestionHistory(prev => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        userAnswer: answer,
        correctAnswer: questions[currentQuestion].correctAnswer,
        isCorrect: isCorrect,
      },
    ]);

    const nextQuestion = currentQuestion + 1;
    setBackgroundColor(getRandomLightColor());
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      Animated.timing(progress, {
        toValue: nextQuestion,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      setShowResult(true);
      if (score > questions.length / 2) {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
      }
      if (score > 15) {
        shake();
      }
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setTimer(180);
    setShowMessage(false);
    setAnswerStatus(null);
    setSelectedAnswer(null);
    setQuestionHistory([]);
    progress.setValue(0);
    setBackgroundColor('#e0f7fa');
    shakeAnimation.setValue(0);
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => {
      const label = String.fromCharCode(65 + index);
      return (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleAnswerPress(option)}
        >
          <Text style={styles.optionText}>{`${label}. ${option}`}</Text>
          {answerStatus && selectedAnswer === option && (
            <Text style={styles.feedbackText}>
              {answerStatus === 'correct' ? '✔️' : '❌'}
            </Text>
          )}
        </TouchableOpacity>
      );
    });
  };

  useEffect(() => {
    let colorInterval;
    if (showResult) {
      colorInterval = setInterval(() => {
        setBackgroundColor(getRandomLightColor());
      }, 4000);
    }
    return () => clearInterval(colorInterval);
  }, [showResult]);

  if (showResult) {
    return (
      <View style={[styles.resultContainer, { backgroundColor }]}>
        <Text style={styles.resultText}>Quiz Completed!</Text>
        <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
        {score > questions.length / 2 && <Text style={styles.motivationalMessage}>Keep up the great work!</Text>}
        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </TouchableOpacity>
        <ScrollView style={styles.historyContainer}>
          {questionHistory.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <Text style={item.isCorrect ? styles.correctText : styles.incorrectText}>
                Q: {item.question}
              </Text>
              <Text style={styles.answerText}>Your Answer: {item.userAnswer}</Text>
              {!item.isCorrect && <Text style={styles.correctAnswerText}>Correct Answer: {item.correctAnswer}</Text>}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {showMessage && <Text style={styles.messageText}>You rock!</Text>}
      <Text style={styles.timerText}>Time Left: {timer}s</Text>
      <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
      {renderOptions()}
      <Text style={styles.scoreText}>Score: {score}</Text>
      <Text style={styles.questionCountText}>Question {currentQuestion + 1} of {questions.length}</Text>
      <Animated.View style={[styles.progressBar, { width: `${(currentQuestion / questions.length) * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '80%',
  },
  optionText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  scoreText: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  questionCountText: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginTop: 10,
  },
  timerText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 39,
  },
  restartButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  messageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    position: 'absolute',
    top: '10%',
    textAlign: 'center',
    width: '100%',
  },
  motivationalMessage: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  historyContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width: '90%',
  },
  historyItem: {
    marginBottom: 10,
  },
  correctText: {
    color: 'green',
  },
  incorrectText: {
    color: 'red',
  },
  answerText: {
    fontSize: 16,
    color: 'black',
  },
  correctAnswerText: {
    color: 'blue',
  },
  progressBar: {
    height: 5,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default QuizScreen;
