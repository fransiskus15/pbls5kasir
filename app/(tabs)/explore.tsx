// ProfileScreen.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require('@/assets/images/profil.jpeg')} // Replace with actual image source if available
          style={styles.profileImage}
        />
      </View>

      {/* Form Fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Nama Toko</Text>
        <TextInput style={styles.input} defaultValue="Gros Prima" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} defaultValue="grosprima@gmail.com" keyboardType="email-address" />

        <Text style={styles.label}>No Telepon</Text>
        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCode}>🇮🇩</Text>
          <TextInput style={styles.phoneInput} defaultValue="+62 8726-0592-908" keyboardType="phone-pad" />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SIMPAN</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
    position: 'relative',
    marginBottom: 30,

  },
  backButton: {
    fontSize: 18,
    color: '#333',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    left: '50%',
    textAlign: 'center',
    transform: [{ translateX: -25 }], // Adjust based on text width to keep it centered
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  form: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#1ea7fd',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
