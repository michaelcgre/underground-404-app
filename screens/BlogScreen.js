import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { blogs } from "../features/blogs";

const BlogScreen = ({ route }) => {
  const { id } = route.params;
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <Text>Blog not found</Text>;
  }

  return (
    <ScrollView style={{ backgroundColor: "#F5FEFD" }}>
      <View>
        <Image
          source={blog.blogHeader}
          style={{ width: "100%", height: 200 }}
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            color: "#526863",
            paddingVertical: 20,
          }}
        >
          {blog.title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ marginLeft: 15, color: "gray" }}>{blog.author}</Text>
          <Text style={{ marginRight: 15, color: "gray" }}>{blog.date}</Text>
        </View>
        <Text style={styles.paragraph}>{blog.paragraphOne}</Text>
        <Text style={styles.paragraph}>{blog.paragraphTwo}</Text>
        <Text style={styles.paragraph}>{blog.paragraphThree}</Text>
        <Image
          source={blog.extraImage}
          style={{ width: "100%", height: 400, marginVertical: 15 }}
        />
        <Text style={styles.paragraph}>{blog.paragraphFour}</Text>
        <Text style={styles.paragraph}>{blog.paragraphFive}</Text>
        <Text style={styles.paragraph}>{blog.paragraphSix}</Text>
        <Text style={styles.paragraph}>{blog.paragraphSeven}</Text>
        <Text style={styles.paragraph}>{blog.paragraphEight}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 15,
    fontSize: 18,
    marginLeft: 10,
  },
});

export default BlogScreen;
