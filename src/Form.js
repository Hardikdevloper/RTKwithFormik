import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNote } from "./Redux/CounterSlice";
import {formSchema} from "./utils/index"

const Form =() => {  

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
    title:"",
    text:"",
    },
    enableReinitialize: true,
    validationSchema: formSchema,
    onSubmit:  (values) => {               
      const data = {
        title:values.title,
        text:values.text,
      }; 
      dispatch(AddNote(data));         
    },
  });
  const { errors, handleSubmit, touched, values ,handleBlur} = formik;
  console.log(errors,"errors")
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          formik={formik}
          id="title"
          autoComplete="off"
          value={values.title}
          name="title"
          onBlur={handleBlur}
          onChange={(e) => {formik.setFieldValue("title", e.target.value)}}
        />
         <span>{errors.title}</span>
        <label htmlFor="text">Text</label>
        <textarea
        formik={formik}
          id="text"
          value={values.text}
          name="text"
          onBlur={handleBlur}
          onChange={(e) => {formik.setFieldValue("text", e.target.value)}}
        />        
              <span>{errors.text}</span>
        <input type="submit" value="Add Note"  />
      </form>
    </div>
  );
};
export default Form;
