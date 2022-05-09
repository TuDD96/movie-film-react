import { useEffect, useState } from "react";
import { getMovieHome, getMovieWithSlugCategory } from "../../apis/home";
import { ApiResponse } from "../../apis/home/types";
import { CATEGORY } from "../../constants/constant";
import { Movie } from "../../Models/Movie";
import Storage from "../../utils/storage";
import ExpectedPremiere from "./components/ExpectedPremiere/ExpectedPremiere";
import NewItem from "./components/NewItem/NewItem";
import Slider from "./components/Slider/Slider";
import { MovieOfCategory } from "./types";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const moviesData = Storage.get("moviesData");

    return moviesData ?? [];
  });

  const [movieOfCategory, setMovieOfCategory] = useState<MovieOfCategory[]>(
    () => {
      const newMovieOfCategory: any = [];

      CATEGORY.map((category) => {
        const slug = category.slug;
        newMovieOfCategory[slug] = Storage.get(category.slug);
      });

      return newMovieOfCategory;
    }
  );

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const res: ApiResponse = await getMovieHome({});
    const promises: any = [];

    CATEGORY.map((category) => {
      promises.push(getMovieWithSlugCategory({ slug: category.slug }));
    });
    const operators = await Promise.all(promises!);

    const newMovieOfCategory = [...movieOfCategory];

    operators?.map((operator) => {
      Storage.set(operator.type_list, JSON.stringify(operator.items));

      newMovieOfCategory[operator.type_list] = operator.items;
    });
    setMovieOfCategory(newMovieOfCategory);

    Storage.set("moviesData", JSON.stringify(res.items));

    if (Storage.get("init") !== 1) {
      Storage.set("init", 1);
      window.location.href = "/";
    }

    setMovies(res.items);
  };

  return (
    <>
      <Slider movies={movies} />
      <NewItem movieOfCategory={movieOfCategory} />
      <ExpectedPremiere />
    </>
  );
};

export default Home;
