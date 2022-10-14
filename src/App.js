import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import QuizHub from "./components/QuizHub/QuizHub";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Navigation from "./layouts/Navigation";
import NotFound from "./components/NotFound/NotFound";
import QuizQuestions from "./components/QuizQuestions/QuizQuestions";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation> </Navigation>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home> </Home>,
        },
        {
          path: "/quizhub",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <QuizHub> </QuizHub>,
        },
        {
          path: "/statistic",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics> </Statistics>,
        },
        {
          path: "/blog",
          element: <Blog> </Blog>,
        },
        {
          path: "/question/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <QuizQuestions> </QuizQuestions>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound> </NotFound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
