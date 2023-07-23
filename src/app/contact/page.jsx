"use client";

import { useToast } from "@/components/FcToast/context";
import Link from "next/link";
import React, { useState } from "react";
import { MdLocationPin, MdMailOutline, MdPhone } from "react-icons/md";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, message });
    toast.success({ message: "mesajınız iletildi" });
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="row jc-center">
      <h1 className="border-bottom-2 text-center mb-2 pb-2">Bize Ulaşın</h1>
      <form className="row jc-center border-bottom-2" onSubmit={handleSubmit}>
        <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
          <div className="input my-2">
            <input
              type="text"
              value={fullName}
              placeholder=" "
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: "400px" }}
              required
            />
            <label>Tam İsim</label>
          </div>
          <div className="input my-2">
            <input
              type="email"
              value={email}
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "400px" }}
              required
            />
            <label>Email</label>
          </div>
          <div className="input my-2">
            <textarea
              value={message}
              placeholder=" "
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "400px" }}
              required
            />
            <label>Mesajınız</label>
          </div>
        </div>
        <button
          className="button-outline col-md-12 col-lg-6 mt-2 mb-4"
          type="submit"
        >
          Gönder
        </button>
      </form>
      <div className="col-12 mt-4">
        <Link href="https://goo.gl/maps/xf4ouz3fphSXrZks8" target="blank">
          <p className="fs-1 text-center">
            <MdLocationPin />
            <span className="pl-2">
              Telsiz Mah. 85.sokak Zeytinburnu / İstanbul
            </span>
          </p>
        </Link>
        <Link href="tel:+90-123-456-7890">
          <p className="fs-1 text-center">
            <MdPhone />
            <span className="pl-2">+90 (123) 456-7890</span>
          </p>
        </Link>
        <Link href="mailto:arabulucu@gmail.com">
          <p className="fs-1 text-center">
            <MdMailOutline />
            <span className="pl-2">arabulucu@gmail.com</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
