"use client"
import React, { useState } from 'react';
import styles from '../../styles/Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on change
  };

  const validateForm = () => {
    const newErrors: typeof errors = { name: '', email: '', message: '' };
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission (add real API call here)
      setSuccess('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        "Have a Question? Drop us a message, and we'll get back to you"
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className ={styles.label} htmlFor="name">Name</label>
          <input
          className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label className ={styles.label} htmlFor="email">Email</label>
          <input
          className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label className ={styles.label} htmlFor="message">Message</label>
          <textarea
          className={styles.textarea}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
          ></textarea>
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
};

export default Contact;
