'use client';
import { Col, Row, Form, Input, Button, Typography, Checkbox, ConfigProvider } from "antd";
import Image from "next/image";
import React from "react";

const { Title, Text } = Typography;

interface FormValues {
  username: string;
  password: string;
  remember?: boolean;
}

export default function Signup  (){
  const onFinish = (values: FormValues) => {
    console.log("Success:", values);
  };

  return (
    <ConfigProvider>

      <Row style={{ minHeight: "100vh" }}>
        {/* Left side - Image */}
        <Col
          span={12}
          style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "50px",
            color: "white",
          }}
        >
          <Title level={2} style={{ color: "white", margin: 0 }}>
            Lorem ipsum is simply
          </Title>
          <Text style={{ color: "white", fontSize: "16px" }}>dummy text</Text>
        </div>
        {/* You can replace this with your actual image */}
        <Image
          src="/Rectangle 77.svg"
          alt="Signup illustration"
          width={400}
          height={300}
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
          }}
        />
      </Col>

      {/* Right side - Form */}
      <Col
        span={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title level={3} style={{ margin: 0, color: "#333" }}>
              Welcome to Hermes !
            </Title>
          </div>

          {/* Login/Signup Toggle */}
          <div
            style={{
              display: "flex",
              marginBottom: "30px",
              backgroundColor: "#f0f0f0",
              borderRadius: "25px",
              padding: "4px",
            }}
          >
            <Button
              type="primary"
              style={{
                flex: 1,
                height: "40px",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "#49BBBD",
                boxShadow: "none",
              }}
            >
              Login
            </Button>
            <Button
              style={{
                flex: 1,
                height: "40px",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "transparent",
                color: "#666",
              }}
            >
              Sign up
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
                  borderRadius: "8px",
                  border: "1px solid #d9d9d9",
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
                  borderRadius: "8px",
                  border: "1px solid #d9d9d9",
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

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "45px",
                  backgroundColor: "#49BBBD",
                  borderColor: "#49BBBD",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
    </ConfigProvider>
  );
};


