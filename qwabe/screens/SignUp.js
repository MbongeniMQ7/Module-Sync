const handleSignUp = () => {
  navigation.navigate('Dashboard', {
    username: enteredUsername,
    studentNumber: enteredStudentNumber,
  });
};
