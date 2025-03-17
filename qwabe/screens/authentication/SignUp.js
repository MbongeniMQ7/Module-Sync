import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const SignupPage = ({ navigation }) => {
    const [name, setName] = useState(''); // Capturing user name
    const [email, setEmail] = useState('');
    const [studentNumber, setStudent] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for showing password
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirming password

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Password Mismatch', 'Please ensure that your passwords match.');
            return;
        }

        try {
            // Sign up user with Firebase Authentication
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Success', 'Successfully joined the family!! Enjoy!');

            // Navigate to Dashboard and pass the username and student number as parameters
            navigation.navigate('Dashboard', { username: name, studentNumber });
        } catch (error) {
            const errorMessage = error.message;
            Alert.alert('Sign Up Incomplete', errorMessage);
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/s-back1.png')} // Use the local image from assets
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.appName}>Module-Sync</Text> 
                <Text style={styles.subheading}>Determination is key to distinctions</Text> 
                <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
                <TextInput style={styles.input} placeholder="Student Number" value={studentNumber} onChangeText={setStudent} keyboardType="default" autoCapitalize="none" />
                
                {/* Password Input with Show/Hide Functionality */}
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} // Control visibility with showPassword state
                    />
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'} // Show eye icon based on state
                            size={24}
                            color="#007BFF"
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Confirm Password Input with Show/Hide Functionality */}
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword} // Control visibility with showConfirmPassword state
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(prev => !prev)}>
                        <Ionicons
                            name={showConfirmPassword ? 'eye-off' : 'eye'} // Show eye icon based on state
                            size={24}
                            color="#007BFF"
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Custom Sign Up Button */}
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                    Already have an account? Log in
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 80,
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white', 
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: 'white',
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
    },
    eyeIcon: {
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'black', 
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 0, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2, 
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: 'black', 
        marginTop: 0, 
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default SignupPage;