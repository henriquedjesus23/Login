import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useNavigation } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import styles from "./styles";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: "center" }}>Login</Text>
      <View>
        <TextInput
          placeholder="email"
          style={{
            width: 300,
            padding: 10,
            height: 60,
            backgroundColor: "#ddd",
            marginTop: 19,
            borderRadius: 5,
          }}
        />
        <TextInput
          placeholder="senha"
          style={{
            width: 300,
            padding: 10,
            height: 60,
            backgroundColor: "#ddd",
            marginTop: 6,
            borderRadius: 5,
          }}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Proxima pagina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
