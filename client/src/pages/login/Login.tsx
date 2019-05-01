// Render Prop
import React from 'react';
import { Formik, FormikActions, Form, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from 'antd';

type LoginFormValues = {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("username 항목이 입력되야합니다."),
  password: Yup.string().required("password 항목이 입력되야합니다.")
})

const Login = () => (
  <>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Field 
            name="username"
            render={({ field, form }: FieldProps<LoginFormValues>) => (
              <div>
                  <Input type="text" {...field} placeholder="아이디" />
                  <ErrorMessage name="username"/>
                </div>
            )} />
          <Field 
            name="password"
            render={({ field, form }: FieldProps<LoginFormValues>) => (
              <div>
                  <Input type="password" {...field} placeholder="비밀번호" />
                  <ErrorMessage name="password"/>
               </div>
            )} />
          <Button htmlType="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </>
);

export default Login;