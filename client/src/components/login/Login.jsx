import React from "react";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.innerBox}>
        <h1 className={style.heading}>Login</h1>
        <InputControl
          label="Correo"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña"
          onChange={(e) =>
            setValues((prev) => ({ ...prev, pass: e.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />
        <div className={style.footer}>
          <b className={style.error}>{errorMsg}</b>
          <button onClick={Iniciar} disabled={submitButtonDisabled}>
            Login
          </button>
          <p>
            Crear cuenta - 
            <span>
              <Link to="/signup"> Registar</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
