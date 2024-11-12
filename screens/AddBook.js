import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { colors, globalStyles } from '../styles';

export default function AddBook({ navigation }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [rating, setRating] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  const handleAddBook = async () => {
    if (name && author && summary && rating) {
      try {
        await addDoc(collection(db, 'books'), {
          name,
          author,
          summary,
          rating: parseFloat(rating),
          coverUrl,
        });
        Alert.alert('Success', 'Book added successfully');
        navigation.goBack();
      } catch (error) {
        console.error('Error adding book: ', error);
        Alert.alert('Error', 'Could not add book');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add a New Book</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Book Name"
      />
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Author"
      />
      <TextInput
        style={styles.input}
        value={summary}
        onChangeText={setSummary}
        placeholder="Summary"
        multiline
      />
      <TextInput
        style={styles.input}
        value={rating}
        onChangeText={setRating}
        placeholder="Rating (e.g., 4.5)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={coverUrl}
        onChangeText={setCoverUrl}
        placeholder="Cover Image URL"
      />
      <TouchableOpacity style={[globalStyles.button, globalStyles.shadow]} onPress={handleAddBook}>
        <Text style={globalStyles.buttonText}>Add Book</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 15,
  },
});
