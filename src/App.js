import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCarousel from "./components/CustomCarousel";
import ShowMovieDetails from "./pages/ShowMovieDetails";
import MovieListPage from "./pages/MovieListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            path="/movie/now_playing"
            component={() => <MovieListPage type="now_playing" />}
          />
          <Route
            path="/movie/upcoming"
            component={() => <MovieListPage type="upcoming" />}
          />
          <Route
            path="/movie/popular"
            render={(props) => <MovieListPage {...props} type="popular" />}
          />
          <Route exact path="/movie/:id" component={ShowMovieDetails} />

          <Route path="/carousel" component={CustomCarousel} />
          <Route
            exact
            path="/"
            component={() => <MovieListPage type="top_rated" />}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
