import React, { useState } from "react";
import { View, TextInput, ScrollView, Text, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { blogs } from "../features/blogs";
import { LinearGradient } from "expo-linear-gradient";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = searchQuery
    ? blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search for blogs..."
      />
      <LinearGradient
        colors={["#242424", "#F5FEFD"]}
        style={{ flex: 1, paddingTop: 20 }}
      >
        <ScrollView>
          {searchQuery && filteredBlogs.length === 0 ? (
            <Text style={styles.notFoundText}>Not found</Text>
          ) : (
            filteredBlogs.map((blog) => (
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
            ))
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  notFoundText: {
    textAlign: "center",
    fontSize: 18,
    margin: 20,
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
});

export default SearchScreen;
