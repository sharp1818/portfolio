import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FormContainer,
  LabelBox,
  InputBox,
  TextAreaBox,
  SendButton,
  AlertLabel,
} from "./Form.style";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [t] = useTranslation("global");
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
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-title">{t("contact.contact-me")}</div>
        <LabelBox>{t("contact.name")}:</LabelBox>
        <InputBox
          {...register("firstname", {
            required: true,
            maxLength: 30,
            pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ]+$/i,
          })}
          type="text"
          name="firstname"
          placeholder={t("contact.insert-name")}
          onChange={handleChange}
        />
        {errors.firstname && (
          <div>
            {errors.firstname?.type === "required" && (
              <AlertLabel>{t("contact.please-insert-name")}</AlertLabel>
            )}
            {errors.firstname?.type === "maxLength" && (
              <AlertLabel>Se admite 30 letras como máximo</AlertLabel>
            )}
            {errors.firstname?.type === "pattern" && (
              <AlertLabel>Se admite letras [ a-z ] y [ A-Z ]</AlertLabel>
            )}
          </div>
        )}
        <LabelBox>{t("contact.email")}:</LabelBox>
        <InputBox
          {...register("email", {
            required: true,
            maxLength: 30,
            pattern: /^[0-9+() -._A-Za-z@ÁÉÍÓÚáéíóúñÑ]+$/i,
          })}
          type="text"
          name="email"
          placeholder={t("contact.insert-email")}
          onChange={handleChange}
        />
        {errors.email && (
          <div>
            {errors.email?.type === "required" && (
              <AlertLabel>{t("contact.please-insert-email")}</AlertLabel>
            )}
            {errors.email?.type === "maxLength" && (
              <AlertLabel>Se admite 30 letras como máximo</AlertLabel>
            )}
            {errors.email?.type === "pattern" && (
              <AlertLabel>Se admite letras [ a-z ] y [ A-Z ]</AlertLabel>
            )}
          </div>
        )}
        <LabelBox>{t("contact.phone")}:</LabelBox>
        <InputBox
          {...register("phone", {
            required: true,
            maxLength: 15,
            pattern: /^[0-9+() ]+$/i,
          })}
          type="text"
          name="phone"
          placeholder={t("contact.insert-phone")}
          onChange={handleChange}
        />
        {errors.phone && (
          <div>
            {errors.phone?.type === "required" && (
              <AlertLabel>{t("contact.please-insert-phone")}</AlertLabel>
            )}
            {errors.phone?.type === "maxLength" && (
              <AlertLabel>Se admite 15 números como máximo</AlertLabel>
            )}
            {errors.phone?.type === "pattern" && (
              <AlertLabel>Se admite números [ 0-9 ]</AlertLabel>
            )}
          </div>
        )}
        <LabelBox>{t("contact.message")}:</LabelBox>
        <TextAreaBox>
          <textarea
            {...register("message", {
              required: true,
              maxLength: 300,
              pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ,.-_@/()=?¡¿!]+$/i,
            })}
            type="text"
            name="message"
            placeholder={t("contact.insert-message")}
            onChange={handleChange}
          />
        </TextAreaBox>
        {errors.message && (
          <div>
            {errors.message?.type === "required" && (
              <AlertLabel>{t("contact.please-insert-message")}</AlertLabel>
            )}
            {errors.message?.type === "maxLength" && (
              <AlertLabel>Se admite 300 letras como máximo</AlertLabel>
            )}
            {errors.message?.type === "pattern" && (
              <AlertLabel>Porfavor no utilice caracteres especiales</AlertLabel>
            )}
          </div>
        )}
        <SendButton>{t("contact.send-message")}</SendButton>
      </FormContainer>
    </>
  );
};

export default Form;
