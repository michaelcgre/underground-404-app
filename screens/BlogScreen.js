import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { blogs } from "../features/blogs";
import { COMMENTS } from "../features/comments";
import { Icon } from "react-native-elements";

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <TouchableOpacity
        key={i}
        onPress={() => onRatingChange && onRatingChange(i)}
      >
        <Icon
          type="font-awesome"
          name={i <= rating ? "star" : "star-o"}
          size={24}
          color={i <= rating ? "gold" : "grey"}
        />
      </TouchableOpacity>
    );
  }
  return <View style={styles.rating}>{stars}</View>;
};

const BlogScreen = ({ route }) => {
  const { id } = route.params;
  const blog = blogs.find((blog) => blog.id === Number(id));
  const [comments, setComments] = useState(
    COMMENTS.filter((comment) => comment.blogId === Number(id))
  );
  const [rating, setRating] = useState(0);
  const [commentText, setCommentText] = useState("");

  if (!blog) {
    return <Text>Blog not found</Text>;
  }

  const addComment = () => {
    const newComment = {
      id: comments.length, // or some other unique id
      blogId: Number(id),
      rating: rating,
      text: commentText,
      author: "Guest User", // or whatever user info you have
      date: new Date().toISOString(),
    };

    setComments([...comments, newComment]);
    setRating(0);
    setCommentText("");
  };

  return (
    <ScrollView>
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
          <Text>{blog.author}</Text>
          <Text>{blog.date}</Text>
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
      <View>
        <StarRating
          rating={rating}
          onRatingChange={setRating}
          editable={true}
          onRate={(newRating) => setRating(newRating)}
        />
        <TextInput
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={(text) => setCommentText(text)}
        />
        <TouchableOpacity onPress={addComment}>
          <Text>Add Comment</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Comments:</Text>
        {comments.map((comment, index) => {
          const dateObj = new Date(comment.date);
          const formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          return (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{comment.author}</Text>
              <StarRating rating={comment.rating} />
              <Text>{comment.text}</Text>
              <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                {formattedDate}
              </Text>
            </View>
          );
        })}
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
  rating: {
    flexDirection: "row",
  },
});

export default BlogScreen;
