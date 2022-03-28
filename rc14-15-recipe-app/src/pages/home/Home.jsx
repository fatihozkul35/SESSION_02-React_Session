import {
  HomeImg,
  MainContainer,
  ImgDiv,
  RecipeImage,
  RecipeCard,
  RecipeHeader,
  Button,
} from "./HomeStyles";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";
import homeSvg from "../../assets/home.svg";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState("");
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [selectedMealType, setSelectedMealType] = useState(
    mealType[0].toLowerCase()
  );
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMealType}`;

  const getData = async () => {
    console.log(query);
    if (query) {
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } else {
      console.log("please enter your meal");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        setSelectedMealType={setSelectedMealType}
        mealType={mealType}
      />
      {recipes ? (
        <MainContainer wrap="wrap">
          {recipes.map(({ recipe }, index) => (
            <RecipeCard justify="space-evenly" key={index}>
              <RecipeHeader>{recipe.label}</RecipeHeader>
              <RecipeImage src={recipe.image || defaultImage} />
              <Button onClick={() => navigate("/details", { state: recipe })}>
                View More
              </Button>
            </RecipeCard>
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
