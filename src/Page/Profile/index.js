import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Olá, sou o Henrique</Text>
      </View>
    </View>
  );
}

export default ProfileScreen;
