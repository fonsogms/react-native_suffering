import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import data from "../../db.json";
import axios from "axios";
import { News } from "./news.interface";
import NewInfo from "./Article";
const NewsList = ({ navigation }) => {
  const [news, setNews] = useState<News>({
    status: "",
    totalResults: 0,
    articles: [],
  });
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?language=en&apiKey=acc84b54df7c4ad58c45789d979f54bf"
      );
      setNews(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      {news.totalResults ? (
        news.articles.map((elem, index) => {
          return (
            <NewInfo
              navigation={navigation}
              article={elem}
              key={index}
            ></NewInfo>
          );
        })
      ) : (
        <Text>Loading</Text>
      )}
    </ScrollView>
  );
};

export default NewsList;
