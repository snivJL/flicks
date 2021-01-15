import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowMovieDetails from "./pages/ShowMovieDetails";
import MovieListPage from "./pages/MovieListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/movie/:id" component={ShowMovieDetails} />
        <Route
          path="/movies/upcoming"
          component={(props) => <MovieListPage {...props} type="upcoming" />}
        />
        <Route path="/" component={MovieListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
