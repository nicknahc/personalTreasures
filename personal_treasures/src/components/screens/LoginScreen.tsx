import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Auth, Hub } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const LoginScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          navigation.navigate('Profile' as never); // Redirect to the "Profile" screen
        }
      } catch (error) {
        console.log('User is not authenticated');
      }
    };

    checkUser();

    // Listen for authentication events
    const hubListenerCancelToken = Hub.listen('auth', ({ payload }) => {
      const { event } = payload;
      if (event === 'signIn') {
        navigation.navigate('Profile' as never); // Redirect to the "Profile" screen
      } else if (event === 'signOut') {
        // Handle sign out event if needed
      }
    });

    return () => {
      hubListenerCancelToken();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <View style={styles.container}>
              <View style={styles.profileContainer}>
                {/* <Image
              style={styles.profileImage}
              source={{ uri: user.profilePictureUrl }}
            /> */}
                <Text style={styles.username}>{user && user.username}</Text>
                {/* <Text style={styles.bio}>{user && user.bio}</Text> */}
              </View>

              <View style={styles.actionsContainer}>
                <Button title="Sign Out" onPress={signOut} />
              </View>
            </View>
          </main>
        )}
      </Authenticator>
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    textAlign: 'center',
    marginBottom: 20,
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

export default LoginScreen;
