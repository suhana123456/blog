import React from 'react';
import Link from 'next/link';
import blogData from '@/blogs/blogs';
import Image from 'next/image';
export default function Navbar() {
  return (
 <>
 <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem" , fontWeight: "bold", marginBottom: "0.5rem" , color: "#1d3557" }}> Our All Blog Posts</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {blogData.map((blog) => (
          <div
            key={blog.id}
            style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
          >
            
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{blog.title}</h2>
              <p style={{ color: "#555", fontSize: "0.9rem", marginBottom: "0.5rem" }}>{blog.excerpt}</p>
              <p style={{ color: "#888", fontSize: "0.8rem", marginBottom: "1rem" }}>
                
              </p>
              <Link href={`/details/${blog.id}`}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#1d3557",
                    color: "#f1faee",
                    borderRadius: "4px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Read More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
 </>
  );
}
