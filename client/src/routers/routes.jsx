import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../page/NotFound";
import TasksForm from "../page/TasksForm";
import TasksPage from "../page/TasksPage";
import Signup from "../components/signup/Signup";
import { auth } from "../firebase";
import Login from "../components/login/Login";

const MyRoutes = () => {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<TasksPage  />} />
      <Route path="/new" element={<TasksForm />} />
      <Route path="/edit/:id" element={<TasksForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
