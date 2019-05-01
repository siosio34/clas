import React from 'react';
import { Formik, FormikActions, Form, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from 'antd';

import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f2f2;
`

const LoginCard = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 300px;
  flex-direction: row;
  background: #ffffff;
`

type LoginFormValues = {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("username 항목이 입력되야합니다."),
  password: Yup.string().required("password 항목이 입력되야합니다.")
})

const Login = () => (
  <LoginContainer>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
        actions.setSubmitting(false);
      }}
    >
      {() => (
      <LoginCard>
        <Form>
          <Field 
            name="username"
            render={({ field, form }: FieldProps<LoginFormValues>) => (
              <>
                  <label>아이디</label>
                  <Input type="text" {...field} placeholder="아이디를 입력해주세요" />
                   <ErrorMessage name="username">
            {(msg /** this is the same as the above */) => (
              <div>{msg}</div>
            )}
          </ErrorMessage>
                </>
            )} />
          <Field 
            name="password"
            render={({ field, form }: FieldProps<LoginFormValues>) => (
              <>
                  <label>비밀번호</label>
                  <Input type="password" {...field} placeholder="비밀번호를 입력해주세요" />
                   <ErrorMessage name="password">
            {(msg /** this is the same as the above */) => (
              <div>{msg}</div>
            )}
          </ErrorMessage>
               </>
            )} />
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            로그인하기
          </Button>
        </Form>
        </LoginCard>
      )}
    </Formik>
  </LoginContainer>

);

export default Login;