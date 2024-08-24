import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./style";
import { VirtualizedList } from "react-native";

export default function HomeScreen() {
  return (
    //<VirtualizedList></VirtualizedList>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.slide}>
          <Text>Slide</Text>
        </View>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Text>Card1</Text>
          </View>
          <View style={styles.card}>
            <Text>Card2</Text>
          </View>
          <View style={styles.card}>
            <Text>Card3</Text>
          </View>
          <View style={styles.card}>
            <Text>Card4</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
