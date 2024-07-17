import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IndiCon } from "../Individualcon/IndiCon";

const appData = [
  {
    name: "people",
    specialty: "General",
  },
  {
    name: "eye",
    specialty: "Ophth...",
  },
  {
    name: "nutrition",
    specialty: "Nutrition",
  },
  {
    name: "logo-electron",
    specialty: "Neuro.",
  },
  {
    name: "happy-outline",
    specialty: "Pediatric",
  },
  {
    name: "radio",
    specialty: "Radio...",
  },
  {
    name: "happy",
    specialty: "Dental",
  },
  {
    name: "ellipsis-horizontal-circle-sharp",
    specialty: "More",
  },
];
export const DoctorNav = () => {
  return (
    <View style={styles.container}>
      {appData.map((data, index) => (
        <View key={index} style={styles.navContainer}>
          <IndiCon name={data.name} color={"#2786f2"} size={28} />
          <Text style={styles.specialtyText}>{data.specialty}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20",
    justifyContent: "space-between",
    marginTop: 26,
    marginBottom: 10,
  },
  navContainer: {},
  specialtyText: {
    marginTop: 15,
    fontWeight: "500",
    fontSize: 16,
  },
});
