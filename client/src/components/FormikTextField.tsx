import React from "react";
import { FieldProps, ErrorMessage } from "formik";
import styled from "styled-components";
import { Input } from 'antd';

type OwnProps = FieldProps<any>;
const TextField: React.SFC<OwnProps> = ({ field, form }) => (
    <label htmlFor={field.name}>
        <Input type="text" {...field}/>
        <ErrorMessage name={field.name}/>
    </label>
);

export default TextField;