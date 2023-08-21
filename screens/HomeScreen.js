import React from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { blogs } from "../features/blogs";
import { Button, Card } from "react-native-elements";
import WebView from "react-native-webview";

const { width: screenWidth } = Dimensions.get("window");

const HomeScreen = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  const musicReviews = blogs.filter((blog) => blog.blogType === "Music Review");

  const artistSpotlight = blogs.filter(
    (blog) => blog.blogType === "Artist Spotlight"
  );

  const lifestyle = blogs.filter((blog) => blog.blogType === "Lifestyle");

  const spotifyURL =
    "https://open.spotify.com/artist/3Ps6le7tj5BdNtdnfNgTU4?si=ul8PXBsFTW-ZDlB0sPa8lA";

  const renderItem = ({ item, index }, parallaxProps) => (
    <View style={{ width: screenWidth - 60, height: 200 }}>
      <ParallaxImage
        source={item.carouselImage}
        containerStyle={{ flex: 1, borderRadius: 8 }}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text
        style={{
          fontSize: 18,
          color: "#715C83",
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {item.title}
      </Text>
    </View>
  );

  return (
    <>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              color: "#526863",
              paddingVertical: 20,
            }}
          >
            Beyond the Mainstream
          </Text>
          <Carousel
            sliderWidth={screenWidth}
            sliderHeight={300}
            itemWidth={screenWidth - 60}
            data={featuredBlogs}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>
        <View>
          <Text style={styles.blogType}>Music Reviews</Text>
          {musicReviews.map((blog) => (
            <Card containerStyle={styles.card} key={blog.id}>
              <Card.Image source={blog.blogImage} />
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Card.Divider />
              <Text>{blog.description}</Text>
              <Button style={styles.readBtn} title={"Read More"} />
            </Card>
          ))}
        </View>
        <View>
          <Text style={styles.blogType}>Music Reviews</Text>
          {artistSpotlight.map((blog) => (
            <Card containerStyle={styles.card} key={blog.id}>
              <Card.Image source={blog.blogImage} />
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Card.Divider />
              <Text>{blog.description}</Text>
              <Button style={styles.readBtn} title={"Read More"} />
            </Card>
          ))}
        </View>
        <View>
          <Text style={styles.blogType}>Music Reviews</Text>
          {lifestyle.map((blog) => (
            <Card containerStyle={styles.card} key={blog.id}>
              <Card.Image source={blog.blogImage} />
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Card.Divider />
              <Text>{blog.description}</Text>
              <Button style={styles.readBtn} title={"Read More"} />
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
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
});

export default HomeScreen;
