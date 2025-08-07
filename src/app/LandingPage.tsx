/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#2DC6C6",
        position: "relative",
        fontFamily: "Inter, sans-serif",
        clipPath: "ellipse(100% 90% at 50% 0%)",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "32px 48px 0 48px",
        }}
      >
        {/* logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{
              height: "43px",
              // width: "150px",
            }}
            src="/Polygon 2.svg"
            alt=""
          />
          <img
            style={{
              height: "33px",
              width: "40px", // <-- typo here
              margin: "0 0 0 -28px",
            }}
            src="/TOTC.svg"
            alt=""
          />
        </div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "full",
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
        <div style={{ display: "flex", gap: 16 }}>
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
              color: "#FFFFFF",
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
      </header>
      {/* Hero Section */}
      {/* Student Image - right bottom, clipped to ellipse, show more image */}
      <img
        src="/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1 (1).svg"
        alt="Student"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: 500,
          objectFit: "contain",
          zIndex: 2,
          pointerEvents: "none",
          marginRight: "100px",
          marginBottom: 0,
        }}
      />
    </div>
  );
}
