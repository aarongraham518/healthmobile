import {Pressable, View, Text, StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export const IndiCon = ({name, color, size}) => {
    return (
        <Pressable style={styles.iconContainer}>
          <Ionicons name={name} color={color} size={size} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: "#ebf4fe",
        marginRight: 10,
        alignContent: "flex-start",
      },
})