import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
} from "react-native-chart-kit";


const MedicalChecks = () => {
  const screenWidth = Dimensions.get("window").width;

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        strokeWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const pieData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#00FF00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const progressData = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.4, 0.6, 0.8],
  };

  const chartConfig = {
    backgroundColor: "#000000",
    backgroundGradientFrom: "#1a1a1a",
    backgroundGradientTo: "#333333",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#00ffff",
    },
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Simple Line Chart</Text>
        <LineChart
          data={lineData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chartStyle}
        />

        <Text style={styles.header}>Simple Bar Chart</Text>
        <BarChart
          data={barData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          style={styles.chartStyle}
        />

        <Text style={styles.header}>Simple Pie Chart</Text>
        <PieChart
          data={pieData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chartStyle}
        />

        <Text style={styles.header}>Simple Progress Chart</Text>
        <ProgressChart
          data={progressData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          style={styles.chartStyle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#00ffff",
    textShadowColor: "rgba(0, 255, 255, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#00ffff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default MedicalChecks;
