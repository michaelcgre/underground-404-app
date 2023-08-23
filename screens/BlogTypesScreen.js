import { ScrollView } from "react-native-gesture-handler";
import { blogs } from "../features/blogs";
import { Button, Card, Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlogTypesScreen = () => {
  const navigation = useNavigation();

  const featuredBlogs = blogs.filter((blog) => blog.featured);

  const musicReviews = blogs.filter((blog) => blog.blogType === "Music Review");

  const artistSpotlight = blogs.filter(
    (blog) => blog.blogType === "Artist Spotlight"
  );

  const lifestyle = blogs.filter((blog) => blog.blogType === "Lifestyle");

  return (
    <ScrollView>
      <View>
        <Text style={styles.blogType}>Music Reviews</Text>
        {musicReviews.map((blog) => (
          <Card containerStyle={styles.card} key={blog.id}>
            <Card.Image source={blog.blogImage} />
            <Text style={styles.blogTitle}>{blog.title}</Text>
            <Card.Divider />
            <Text style={styles.blogDescription}>{blog.description}</Text>
            <Button
              buttonStyle={styles.readBtn}
              title={"Read More"}
              onPress={() => navigation.navigate("BlogScreen", { id: blog.id })}
            />
          </Card>
        ))}
        <Icon
          name="angle-down"
          type="font-awesome"
          color="#715C83"
          size={70}
          onPress={() =>
            navigation.navigate("BlogType", { blogType: "Music Review" })
          }
        />
      </View>
      <View>
        <Text style={styles.blogType}>Artist Spotlight</Text>
        {artistSpotlight.map((blog) => (
          <Card containerStyle={styles.card} key={blog.id}>
            <Card.Image source={blog.blogImage} />
            <Text style={styles.blogTitle}>{blog.title}</Text>
            <Card.Divider />
            <Text style={styles.blogDescription}>{blog.description}</Text>
            <Button
              buttonStyle={styles.readBtn}
              title={"Read More"}
              onPress={() => navigation.navigate("BlogScreen", { id: blog.id })}
            />
          </Card>
        ))}
        <Icon
          name="angle-down"
          type="font-awesome"
          color="#715C83"
          size={70}
          onPress={() =>
            navigation.navigate("BlogType", { blogType: "Artist Spotlight" })
          }
        />
      </View>
      <View>
        <Text style={styles.blogType}>Lifestyle</Text>
        {lifestyle.map((blog) => (
          <Card containerStyle={styles.card} key={blog.id}>
            <Card.Image source={blog.blogImage} />
            <Text style={styles.blogTitle}>{blog.title}</Text>
            <Card.Divider />
            <Text style={styles.blogDescription}>{blog.description}</Text>
            <Button
              buttonStyle={styles.readBtn}
              title={"Read More"}
              onPress={() => navigation.navigate("BlogScreen", { id: blog.id })}
            />
          </Card>
        ))}
        <Icon
          name="angle-down"
          type="font-awesome"
          color="#715C83"
          size={70}
          onPress={() =>
            navigation.navigate("BlogType", { blogType: "Lifestyle" })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  blogType: {
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
});

export default BlogTypesScreen;
