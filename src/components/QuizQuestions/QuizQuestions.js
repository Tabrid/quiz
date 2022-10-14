import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
const QuizQuestions = () => {
  const data = useLoaderData();
  const questionData = data.data;
  const { logo, name, questions, total } = questionData;

  const [score, setScore] = useState(0);

  const handelClick = (option, correctAnswer) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer!");
      let newScore = score + 1;
      setScore(newScore);
    } else {
      toast.warn("Wrong Answer!");
    }
  };

  return (
    <section>
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <img
            src={logo}
            alt=""
            className="bg-dark rounded-2 m-3"
            height="150"
          />
        </div>{" "}
        <div>
          <h1>
            Quiz topic: <span className="highlight"> {name} </span>{" "}
          </h1>{" "}
          <h4>
            Given Question: <span className="highlight"> {total} </span>{" "}
          </h4>{" "}
        </div>{" "}
      </div>
      <div className="correct-answer text-center border p-3 text-light container rounded">
        <h2> Your Score: {score} </h2>{" "}
      </div>
      <div className="m-5">
        {" "}
        {questions.map((questionData) => (
          <Question
            key={questionData.id}
            questionData={questionData}
            handelClick={handelClick}
          ></Question>
        ))}{" "}
      </div>{" "}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default QuizQuestions;
