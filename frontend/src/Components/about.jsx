import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";


const profiles = [
  { id: 1, name: "Mark Maestre", role: "Full Stack Developer", location: "Leader", image: require("../assets/mark.png"), description: "mark is responsible for the backend development of HazWaste, ensuring smooth AI integration." },
  {
    id: 2,
    name: "Franz Baribar",
    role: ["Frontend/Docu"],  
    location: "Member",
    image: require("../assets/franz.jpg"),
    description: "Franz creates intuitive interfaces for HazWaste, improving user experience and navigation while also handling documentation tasks."
  },
  {
    id: 3,
    name: "Kristel Cabalbag",
    role: ["UI/Docu"],
    location: "Member",
    image: require("../assets/kaye.jpg"),
    description: "Kaye develops the frontend design for HazWaste, ensuring users can easily classify waste and access recycling information, and also manages the project's documentation."
  },
  {
    id: 4,
    name: "Theodore Palma",
    role: ["UI/Docu"],  
    location: "Member",
    image: require("../assets/theo.jpg"),
    description: "Theo builds the user interface (UI) for HazWaste, focusing on creating an intuitive and effective experience, while also contributing to the documentation efforts."
  }
  ];

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.projectInfo}>
        <Text style={styles.projectTitle}>HazWaste: AI and SMS-Based Hazardous and Nonhazardous Waste Classification with Facility Mapping System</Text>
        <Text style={styles.projectDescription}>
          HazWaste is an AI-powered waste categorization tool designed to address the global waste management crisis. It classifies waste, tracks performance, and helps users locate recycling centers.
        </Text>
      </View>
      

      <Text style={styles.sectionTitle}>Meet the Team</Text>
      <View style={styles.teamContainer}>
        {profiles.map((profile) => (
          <View key={profile.id} style={styles.card}>
            <Image source={profile.image} style={styles.avatar} />
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>{profile.role}</Text>
            <Text style={styles.location}>{profile.location}</Text>
            <Text style={styles.description}>{profile.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonFollow}><Text style={styles.buttonText}>Follow</Text></TouchableOpacity>
              <TouchableOpacity style={styles.buttonMessage}><Text style={styles.buttonText}>Message</Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  projectInfo: {
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    textAlign: "center",
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#343a40",
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 14,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "Orange",
    textAlign: "center",
  },
  teamContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    margin: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    width: 320,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40",
  },
  role: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 5,
  },
  location: {
    fontSize: 12,
    color: "#6c757d",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  buttonFollow: {
    backgroundColor: "orange",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonMessage: {
    backgroundColor: "#6C757D",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default About;
