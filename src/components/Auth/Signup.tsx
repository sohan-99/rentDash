"use client";
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Typography,
  Checkbox,
  ConfigProvider,
} from "antd";
import Image from "next/image";
import React from "react";

const { Title, Text } = Typography;

interface FormValues {
  email: string;
  username: string;
  password: string;
  remember?: boolean;
}

export default function Signin() {
  const onFinish = (values: FormValues) => {
    console.log("Success:", values);
  };

  return (
    <ConfigProvider>
      <Row style={{ minHeight: "100vh" }}>
        {/* Left side - Image */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            padding: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            background: "#fff",
            minWidth: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "130px",
              left: "80px",
              color: "white",
              zIndex: 2,
              maxWidth: "80%",
              wordBreak: "break-word",
              textAlign: "left",
            }}
          >
            <Title
              level={2}
              style={{ color: "white", margin: 0, fontSize: "2rem" }}
            >
              Lorem ipsum is simply
            </Title>
            <Text style={{ color: "white", fontSize: "16px" }}>dummy text</Text>
          </div>
          <Image
            src="/Rectangle 78.svg"
            alt="Signup illustration"
            width={737}
            height={825}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: "30px",
              minWidth: 0,
            }}
          />
        </Col>

        {/* Right side - Form */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            background: "#fff",
            minWidth: 0,
          }}
        >
          <div style={{ width: "100%", maxWidth: "400px", minWidth: 0 }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Title level={3} style={{ margin: 0, color: "#333" }}>
                Welcome to Hermes !
              </Title>
            </div>

            {/* Login/Signup Toggle */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "30px",
                backgroundColor: "rgb(73, 187, 189,0.4)",
                borderRadius: "25px",
                padding: "4px",
                width: "100%",
                maxWidth: "300px",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Button
                type="primary"
                style={{
                  flex: 1,
                  minWidth: "120px",
                  height: "40px",
                  border: "none",
                  borderRadius: "20px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  marginBottom: "6px",
                }}
              >
                Log in
              </Button>
              <Button
                style={{
                  flex: 1,
                  minWidth: "120px",
                  backgroundColor: "rgb(73, 187, 189,1.0)",
                  opacity: 0.8,
                  color: "#fff",
                  height: "40px",
                  border: "none",
                  borderRadius: "20px",
                  marginBottom: "6px",
                }}
              >
                Register
              </Button>
            </div>

            <Text
              style={{
                display: "block",
                marginBottom: "20px",
                color: "#666",
                fontSize: "14px",
              }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>

            <Form
              name="signup"
              onFinish={onFinish}
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input
                  placeholder="Email Address"
                  style={{
                    height: "45px",
                    borderRadius: "40px",
                    border: "1px solid #49BBBD",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="User name"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  placeholder="User name"
                  style={{
                    height: "45px",
                    borderRadius: "40px",
                    border: "1px solid #49BBBD",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  style={{
                    height: "45px",
                    borderRadius: "40px",
                    border: "1px solid #49BBBD",
                  }}
                />
              </Form.Item>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Checkbox style={{ color: "#666" }}>Remember me</Checkbox>
                <a href="#" style={{ color: "#49BBBD", fontSize: "14px" }}>
                  Forgot Password?
                </a>
              </div>

              <Form.Item style={{ textAlign: "right" }}>
                <Button type="primary" style={{ width: 232 }} htmlType="submit">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </ConfigProvider>
  );
}
