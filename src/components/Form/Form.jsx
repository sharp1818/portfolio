import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Form = () => {
  //Hooks
  const [info, setInfo] = useState({
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInfo({ ...info, [name]: value });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    await axios
      .post("/api/cliente/enviarformulario", info)
      .then(reset())
      .then((res) => {
        console.log("mensaje enviado");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre:</label>
        <input
          {...register("firstname", {
            required: true,
            maxLength: 30,
            pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ]+$/i,
          })}
          type="text"
          name="firstname"
          placeholder="Ingresa tu Nombre"
          onChange={handleChange}
        />
        {errors.firstname && (
          <div>
            {errors.firstname?.type === "required" && (
              <h2>Por favor, ingresa tu nombre</h2>
            )}
            {errors.firstname?.type === "maxLength" && (
              <h2>Se admite 30 letras como máximo</h2>
            )}
            {errors.firstname?.type === "pattern" && (
              <h2>Se admite letras [ a-z ] y [ A-Z ]</h2>
            )}
          </div>
        )}
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            maxLength: 30,
            pattern: /^[0-9+() -._A-Za-z@ÁÉÍÓÚáéíóúñÑ]+$/i,
          })}
          type="text"
          name="email"
          placeholder="Ingresa tu Email"
          onChange={handleChange}
        />
        {errors.email && (
          <div>
            {errors.email?.type === "required" && (
              <h2>Por favor, ingresa tu email</h2>
            )}
            {errors.email?.type === "maxLength" && (
              <h2>Se admite 30 letras como máximo</h2>
            )}
            {errors.email?.type === "pattern" && (
              <h2>Se admite letras [ a-z ] y [ A-Z ]</h2>
            )}
          </div>
        )}
        <label>Celular</label>
        <input
          {...register("phone", {
            required: true,
            maxLength: 15,
            pattern: /^[0-9+() ]+$/i,
          })}
          type="text"
          name="phone"
          placeholder="Ingresa tu Celular"
          onChange={handleChange}
        />
        {errors.phone && (
          <div>
            {errors.phone?.type === "required" && (
              <h2>Por favor, ingresa tu celular</h2>
            )}
            {errors.phone?.type === "maxLength" && (
              <h2>Se admite 15 números como máximo</h2>
            )}
            {errors.phone?.type === "pattern" && (
              <h2>Se admite números [ 0-9 ]</h2>
            )}
          </div>
        )}
        <label>Mensaje:</label>
        <div>
          <textarea
            {...register("message", {
              required: true,
              maxLength: 300,
              pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ,.-_@/()=?¡¿!]+$/i,
            })}
            type="text"
            name="message"
            placeholder="Ingresa tu Mensaje"
            onChange={handleChange}
          />
        </div>
        {errors.message && (
          <div>
            {errors.message?.type === "required" && (
              <h2>Por favor, ingresa tu mensaje</h2>
            )}
            {errors.message?.type === "maxLength" && (
              <h2>Se admite 300 letras como máximo</h2>
            )}
            {errors.message?.type === "pattern" && (
              <h2>Porfavor no utilice caracteres especiales</h2>
            )}
          </div>
        )}
        <button>Enviar Mensaje</button>
      </form>
    </>
  );
};

export default Form;
