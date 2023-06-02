import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const ProfileScreen = () => {
    const navigation = useNavigation();
  const handleSignOut = async () => {
    console.log('Signing out...');
    try {
      await Auth.signOut();
      navigation.navigate('Login' as never); // Navigate to the "Login" screen

    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.username}>Username</Text>
      </View>

      <View style={styles.actionsContainer}>
        <Button title="Sign Out" onPress={handleSignOut} />

        <View style={styles.listingsContainer}>
          <Text style={styles.sectionTitle}>Items for Sale</Text>
          {/* Render the user's items for sale */}
        </View>

        <View style={styles.purchasesContainer}>
          <Text style={styles.sectionTitle}>Sold Items</Text>
          {/* Render the user's sold items */}
        </View>

        <View style={styles.purchasesContainer}>
          <Text style={styles.sectionTitle}>Purchase History</Text>
          {/* Render the user's purchased items */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionsContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listingsContainer: {
    marginBottom: 20,
  },
  purchasesContainer: {
    marginBottom: 20,
  },
});

export default ProfileScreen;
