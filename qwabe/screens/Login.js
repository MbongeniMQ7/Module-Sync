const handleLogin = () => {
  navigation.navigate('Dashboard', {
    username: enteredUsername,
    studentNumber: retrievedStudentNumber,
  });
};
