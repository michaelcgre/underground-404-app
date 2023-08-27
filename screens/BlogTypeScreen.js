import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { blogs } from "../features/blogs";
import { Card, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const BlogTypeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { blogType } = route.params;
  const [sortOption, setSortOption] = useState("date");

  let blogsToDisplay = blogs.filter((blog) => blog.blogType === blogType);

  blogsToDisplay.sort((a, b) => {
    const dateA = new Date(a.date.split("/").reverse().join("-"));
    const dateB = new Date(b.date.split("/").reverse().join("-"));

    switch (sortOption) {
      case "alphabetical":
        return a.title.localeCompare(b.title);
      case "oldestFirst":
        return dateA - dateB;
      case "date":
      default:
        return dateB - dateA;
    }
  });

  return (
    <LinearGradient colors={["#242424", "#F5FEFD"]} style={styles.gradient}>
      <ScrollView>
        <View style={styles.sortingOptions}>
          <TouchableOpacity onPress={() => setSortOption("date")}>
            <Text style={styles.sortingOptions}>Newest First (Default)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSortOption("oldestFirst")}>
            <Text style={styles.sortingOptions}>Oldest First</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSortOption("alphabetical")}>
            <Text style={styles.sortingOptions}>Alphabetical</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.blogTypeTitle}>{blogType}</Text>
          {blogsToDisplay.map((blog) => (
            <Card containerStyle={styles.card} key={blog.id}>
              <Card.Image source={blog.blogImage} />
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Card.Divider />
              <Text style={styles.blogDescription}>{blog.description}</Text>
              <Icon
                name="arrow-right"
                type="font-awesome"
                color="#715C83"
                size={40}
                containerStyle={styles.iconContainer}
                onPress={() =>
                  navigation.navigate("BlogScreen", { id: blog.id })
                }
              />
            </Card>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  blogTypeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#526863",
    marginVertical: 20,
  },
  card: {
    borderRadius: 8,
    backgroundColor: "#F5FEFD",
  },
  blogTitle: {
    fontSize: 18,
    color: "#526863",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  readBtn: {
    backgroundColor: "#715C83",
  },
  blogDescription: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  sortingOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  iconContainer: {
    alignSelf: "flex-end",
  },
  gradient: {
    flex: 1,
  },
  sortingOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    color: "#715C83",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default BlogTypeScreen;
