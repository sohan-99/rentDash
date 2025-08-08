/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { MailOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { CalendarOutlined } from "@ant-design/icons";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200); // default desktop width

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  return (
    <div style={{ overflow: "hidden", background: "#FFFFFF" }}>
      <div
        style={{
          minHeight: "100vh",
          background: "#2DC6C6",
          position: "relative",
          fontFamily: "Inter, sans-serif",
          clipPath: windowWidth > 768 ? "ellipse(100% 90% at 50% 0%)" : "none",
          paddingBottom: windowWidth <= 768 ? "40px" : "0",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:
              windowWidth > 768 ? "32px 48px 0 48px" : "16px 20px 0 20px",
            flexWrap: "wrap",
          }}
        >
          {/* logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                height: windowWidth > 768 ? "43px" : "35px",
              }}
              src="/Polygon 2.svg"
              alt=""
            />
            <img
              style={{
                height: windowWidth > 768 ? "33px" : "25px",
                width: windowWidth > 768 ? "40px" : "32px",
                margin: "0 0 0 -28px",
              }}
              src="/TOTC.svg"
              alt=""
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: windowWidth > 768 ? "flex" : "none",
              gap: 40,
            }}
          >
            <a
              style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
              href="#"
            >
              Home
            </a>
            <a
              style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
              href="#"
            >
              Courses
            </a>
            <a
              style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
              href="#"
            >
              Careers
            </a>
            <a
              style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
              href="#"
            >
              Blog
            </a>
            <a
              style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}
              href="#"
            >
              About Us
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div
            style={{
              display: windowWidth > 768 ? "flex" : "none",
              gap: 16,
            }}
          >
            <button
              style={{
                background: "#fff",
                color: "#5B5B5B",
                border: "none",
                borderRadius: 20,
                padding: "8px 32px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              style={{
                background: "rgb(255 255 255 /0.8)",
                color: "#5B5B5B",
                border: "none",
                borderRadius: 20,
                padding: "8px 32px",
                fontWeight: 600,
                fontSize: 16,
                cursor: "pointer",
                opacity: 1,
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: windowWidth <= 768 ? "flex" : "none",
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: 24,
              cursor: "pointer",
              padding: 8,
            }}
          >
            {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && windowWidth <= 768 && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#2DC6C6",
              padding: "80px 20px 20px",
              zIndex: 20,
              overflowY: "auto",
            }}
          >
            <nav style={{ marginBottom: 30 }}>
              {["Home", "Courses", "Careers", "Blog", "About Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: "block",
                      color: "#fff",
                      fontWeight: 500,
                      textDecoration: "none",
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      fontSize: 18,
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                style={{
                  background: "#fff",
                  color: "#5B5B5B",
                  border: "none",
                  borderRadius: 25,
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  flex: 1,
                }}
              >
                Login
              </button>
              <button
                style={{
                  background: "rgb(255 255 255 /0.8)",
                  color: "#5B5B5B",
                  border: "none",
                  borderRadius: 25,
                  padding: "12px 24px",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  flex: 1,
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
        {/* Hero Section */}
        {/* Student Image - responsive positioning */}
        <img
          src="/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1 (1).svg"
          alt="Student"
          style={{
            position: "absolute",
            right: windowWidth > 1024 ? 100 : windowWidth > 768 ? 20 : 10,
            bottom: 0,
            height: windowWidth > 1024 ? 500 : windowWidth > 768 ? 400 : 300,
            objectFit: "contain",
            zIndex: 2,
            pointerEvents: "none",
            display: windowWidth < 480 ? "none" : "block",
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: windowWidth > 768 ? "absolute" : "relative",
            top: windowWidth > 768 ? 120 : 20,
            left: windowWidth > 768 ? 60 : 0,
            zIndex: 3,
            maxWidth: windowWidth > 768 ? 500 : "100%",
            padding: windowWidth <= 768 ? "20px" : "0",
          }}
        >
          <h1
            style={{
              fontSize:
                windowWidth > 1024
                  ? 40
                  : windowWidth > 768
                  ? 32
                  : windowWidth > 480
                  ? 28
                  : 24,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 16,
              lineHeight: 1.2,
              textAlign: windowWidth <= 768 ? "left" : "left",
            }}
          >
            <span style={{ color: "#FFB800" }}>Studying</span> Online is now
            {windowWidth > 480 && <br />}
            much easier
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: windowWidth > 768 ? 18 : 16,
              marginBottom: 32,
              lineHeight: 1.5,
              maxWidth: windowWidth <= 768 ? "100%" : "100%",
              textAlign: windowWidth <= 768 ? "left" : "left",
            }}
          >
            TOTC is an interesting platform that will teach
            {windowWidth > 480 && <br />}
            you in more an interactive way
          </p>
          <div
            style={{
              display: "flex",
              alignItems: windowWidth < 480 ? "stretch" : "center",
              gap: windowWidth > 768 ? 24 : 16,
              flexDirection: windowWidth < 480 ? "column" : "row",
              width: "100%",
            }}
          >
            <button
              style={{
                background: "#fff",
                color: "#2DC6C6",
                border: "none",
                borderRadius: 30,
                padding: windowWidth > 768 ? "16px 32px" : "14px 24px",
                fontWeight: 600,
                fontSize: windowWidth > 768 ? 18 : 16,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                width: windowWidth < 480 ? "100%" : "auto",
                minHeight: 48,
              }}
            >
              Join for free
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                width: windowWidth < 480 ? "100%" : "auto",
                justifyContent: windowWidth < 480 ? "center" : "flex-start",
                minHeight: 48,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  width: windowWidth > 768 ? 48 : 40,
                  height: windowWidth > 768 ? 48 : 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: windowWidth > 768 ? 24 : 20,
                    color: "#2DC6C6",
                  }}
                >
                  &#9654;
                </span>
              </div>
              <span
                style={{
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: windowWidth > 768 ? 16 : 14,
                  whiteSpace: windowWidth < 480 ? "nowrap" : "normal",
                }}
              >
                Watch how it works
              </span>
            </div>
          </div>
        </div>

        {/* Floating Cards - responsive positioning */}
        {/* 250k Assisted Student */}
        <div
          style={{
            position: windowWidth > 768 ? "absolute" : "relative",
            top: windowWidth > 1024 ? 260 : windowWidth > 768 ? 220 : "auto",
            left: windowWidth > 1024 ? 720 : windowWidth > 768 ? 500 : 0,
            background: "#fff",
            borderRadius: 16,
            padding: windowWidth > 768 ? "16px 16px" : "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            zIndex: 4,
            margin: windowWidth <= 768 ? "20px 20px" : "0",
            maxWidth: windowWidth <= 768 ? "calc(100% - 40px)" : "auto",
            minHeight: windowWidth <= 768 ? "60px" : "auto",
          }}
        >
          <CalendarOutlined
            style={{
              fontSize: windowWidth > 768 ? 20 : 18,
              color: "#2DC6C6",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontWeight: 700,
              color: "#2DC6C6",
              fontSize: windowWidth > 768 ? 20 : 18,
              flexShrink: 0,
            }}
          >
            250k
          </span>
          <span
            style={{
              color: "#5B5B5B",
              fontWeight: 500,
              fontSize: windowWidth > 768 ? 16 : 14,
            }}
          >
            Assisted Student
          </span>
        </div>

        {/* Congratulations Card */}
        <div
          style={{
            position: windowWidth > 768 ? "absolute" : "relative",
            top: windowWidth > 1024 ? 320 : windowWidth > 768 ? 280 : "auto",
            left: windowWidth > 1024 ? 1100 : windowWidth > 768 ? 600 : 0,
            background: "#fff",
            borderRadius: 16,
            padding: windowWidth > 768 ? "8px 16px" : "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            zIndex: 4,
            margin: windowWidth <= 768 ? "20px 20px" : "0",
            maxWidth: windowWidth <= 768 ? "calc(100% - 40px)" : "auto",
            minHeight: windowWidth <= 768 ? "60px" : "auto",
          }}
        >
          <MailOutlined
            style={{
              fontSize: windowWidth > 768 ? 18 : 16,
              color: "#FFB800",
              flexShrink: 0,
            }}
          />
          <div>
            <span
              style={{
                fontWeight: 700,
                color: "#2DC6C6",
                fontSize: windowWidth > 768 ? 18 : 16,
                display: "block",
                lineHeight: 1.2,
              }}
            >
              Congratulations
            </span>
            <span
              style={{
                color: "#5B5B5B",
                fontWeight: 500,
                fontSize: windowWidth > 768 ? 14 : 12,
                lineHeight: 1.2,
              }}
            >
              Your admission completed
            </span>
          </div>
        </div>

        {/* User Experience Class Card */}
        <div
          style={{
            position: windowWidth > 768 ? "absolute" : "relative",
            top: windowWidth > 1024 ? 380 : windowWidth > 768 ? 340 : "auto",
            left: windowWidth > 1024 ? 740 : windowWidth > 768 ? 450 : 0,
            background: "#fff",
            borderRadius: 16,
            padding: windowWidth > 768 ? "8px 16px" : "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            display: "flex",
            alignItems: "center",
            gap: 12,
            zIndex: 4,
            flexDirection: "column",
            minWidth: windowWidth > 768 ? 220 : "auto",
            margin: windowWidth <= 768 ? "20px 20px 40px" : "0",
            maxWidth: windowWidth <= 768 ? "calc(100% - 40px)" : "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
            }}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              style={{
                width: windowWidth > 768 ? 32 : 28,
                height: windowWidth > 768 ? 32 : 28,
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <span
                style={{
                  fontWeight: 700,
                  color: "#2DC6C6",
                  fontSize: windowWidth > 768 ? 18 : 16,
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                User Experience Class
              </span>
              <span
                style={{
                  color: "#5B5B5B",
                  fontWeight: 500,
                  fontSize: windowWidth > 768 ? 14 : 12,
                  lineHeight: 1.2,
                }}
              >
                Today at 12.00 PM
              </span>
            </div>
          </div>
          <button
            style={{
              background: "#F72585",
              color: "#fff",
              border: "none",
              borderRadius: 20,
              padding: windowWidth > 768 ? "10px 0" : "12px 0",
              fontWeight: 600,
              fontSize: windowWidth > 768 ? 16 : 14,
              cursor: "pointer",
              width: windowWidth <= 768 ? "100%" : "70%",
              marginTop: 12,
              minHeight: 40,
            }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
