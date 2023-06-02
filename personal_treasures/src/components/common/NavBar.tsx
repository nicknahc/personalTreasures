import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const Navbar = () => {
  const navigation = useNavigation();

  const handleProfilePress = async () => {
    console.log("Authenticating...");
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        navigation.navigate('Profile' as never); // Navigate to the "Profile" screen
      } else {
        navigation.navigate('Login' as never); // Navigate to the "Login" screen
      }
    } catch (error) {
      console.log('Error checking user authentication:', error);
      navigation.navigate('Login' as never); // Navigate to the "Login" screen
    }
  };


  const handleLogoPress = () => {
    navigation.navigate('Home' as never); // Navigate to the "Home" screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftButtons}>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={handleLogoPress}>
          <Text style={styles.logoText}>Personal Treasures</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightButtons}>
        <TouchableOpacity style={styles.icon} onPress={handleProfilePress}>
          <Ionicons name="person" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  leftButtons: {
    marginRight: 'auto',
  },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  rightButtons: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
});

export default Navbar;
