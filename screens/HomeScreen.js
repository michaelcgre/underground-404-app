import React from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { blogs } from "../features/blogs";
import { Card, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth } = Dimensions.get("window");

const HomeScreen = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);

  const musicReviews = blogs.filter((blog) => blog.blogType === "Music Review");

  const artistSpotlight = blogs.filter(
    (blog) => blog.blogType === "Artist Spotlight"
  );

  const lifestyle = blogs.filter((blog) => blog.blogType === "Lifestyle");

  const TouchableParallaxImage = ({
    source,
    onPress,
    parallaxProps,
    containerStyle,
  }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
        <ParallaxImage
          source={source}
          containerStyle={containerStyle}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation();

  const renderItem = ({ item, index }, parallaxProps) => (
    <View style={{ width: screenWidth - 60, height: 200 }}>
      <TouchableParallaxImage
        source={item.carouselImage}
        containerStyle={{ flex: 1, borderRadius: 8 }}
        parallaxProps={parallaxProps}
        onPress={() => navigation.navigate("BlogScreen", { id: item.id })}
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
    <LinearGradient colors={["#242424", "#F5FEFD"]}>
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
          <Text style={styles.blogType}>Music Reviews</Text>
          {artistSpotlight.map((blog) => (
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
          <Text style={styles.blogType}>Music Reviews</Text>
          {lifestyle.map((blog) => (
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
    </LinearGradient>
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
  iconContainer: {
    alignSelf: "flex-end",
  },
  blogDescription: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
