import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const Scan = () => {
  const [image, setImage] = useState<string | null>(null);
  const [classification, setClassification] = useState<string>('');
  const [handlingInfo, setHandlingInfo] = useState<string>('');

  // Request Permissions for Camera and Gallery (Mobile Only)
  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      const mediaStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      return cameraStatus.granted && mediaStatus.granted;
    }
    return true; 
  };

 
  const pickImage = async (fromCamera: boolean) => {
    if (Platform.OS === 'web') {
      document.getElementById('fileInput')?.click();
      return;
    }

    const permissionGranted = await getPermission();
    if (!permissionGranted) {
      Alert.alert('Permission Denied', 'You need to grant permission to access the camera and gallery.');
      return;
    }

    let result;
    if (fromCamera) {
      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.canceled && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      setImage(selectedImage);
      classifyImage(selectedImage);
    }
  };

  // Web File Upload Handler
  const handleWebImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileUrl = URL.createObjectURL(file); 
      setImage(fileUrl);
      classifyImage(file);
    }
  };

  // Classify Image (Send to Backend)
  const classifyImage = async (file: File | string) => {
    try {
      const formData = new FormData();

      if (typeof file === 'string') {
        // Mobile - Use URI
        formData.append('image', {
          uri: file,
          name: 'uploaded-image.jpg',
          type: 'image/jpeg',
        } as any);
      } else {
        // Web - Use File Object
        formData.append('image', file);
      }

      const response = await fetch('http://192.168.251.73:4000/api/classify', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.result) {
        setClassification(data.result);
        showHandlingInfo(data.result);
      } else {
        Alert.alert('Error', 'Classification failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during classification. Please try again.');
    }
  };


  const showHandlingInfo = (result: string) => {
    const tips: Record<string, string> = {
      battery: '🔋 Batteries contain toxic chemicals! Drop them off at designated battery recycling centers.',
      plastic: '♻️ Rinse and recycle plastic waste.',
      glass: '🥂 Separate glass by color before recycling.',
      non_hazardous: '✅ Safe to dispose. Consider upcycling.',
    };
    setHandlingInfo(tips[result.toLowerCase()] || 'Unknown waste type.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scan Waste</Text>
      <Text style={styles.subText}>Position the waste within the frame</Text>

      <View style={styles.frameContainer}>
        <View style={styles.frame}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      </View>

      <TouchableOpacity style={styles.scanButton} onPress={() => pickImage(true)}>
        <Ionicons name="camera" size={40} color="#fff" />
        <Text style={styles.buttonText}>Classify Waste</Text>
      </TouchableOpacity>


      {Platform.OS === 'web' && (
        <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleWebImageUpload} />
      )}


      {classification ? <Text style={styles.classification}>{classification}</Text> : null}
      {handlingInfo ? <Text style={styles.handling}>{handlingInfo}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E76F51',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#D72638',
    marginBottom: 20,
  },
  frameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  frame: {
    width: 220,
    height: 220,
    borderWidth: 3,
    borderColor: '#E76F51',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E76F51',
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  classification: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D72638',
    marginTop: 10,
  },
  handling: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Scan;
