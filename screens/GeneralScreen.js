import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NewsCard from "../components/ui/NewsCard";

const newsData = [
    {
      image: require("../assets/news/salad.jpg"),
      category: 'Travel',
      title: 'A Salad a day in the morning, keeps you yawning!',
      author: 'Ikka Damayana',
      time: '15:34',
      comments: 23,
    },    
      {
        image: require("../assets/news/meditate.png"),
        category: 'Mental Health',
        title: 'The Benefits of Daily Meditation for Stress Relief',
        author: 'Jane Smith',
        time: '10:12',
        comments: 34,
      },
      {
        image: require("../assets/news/berry.png"),
        category: 'Nutrition',
        title: 'Top 5 Superfoods to Boost Your Immunity',
        author: 'Mary Johnson',
        time: '12:30',
        comments: 28,
      },
      {
        image: require("../assets/news/sleep.png"),
        category: 'Wellness',
        title: 'How to Improve Your Sleep Quality in 7 Days',
        author: 'Emily Davis',
        time: '22:15',
        comments: 40,
      },
      {
        image: require("../assets/news/fitness.png"),
        category: 'Fitness',
        title: '10 Easy Exercises to Keep You Fit at Home!',
        author: 'John Doe',
        time: '08:45',
        comments: 15,
      },
  ];

const GeneralScreen = () => {
  return <View style={styles.container}>
     <ScrollView>
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          image={news.image}
          category={news.category}
          title={news.title}
          author={news.author}
          time={news.time}
          comments={news.comments}
        />
      ))}
    </ScrollView>
  </View>;
};

export default GeneralScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
  },
});