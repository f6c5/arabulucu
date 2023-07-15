"use client";
import React, { useState } from "react";

const Apply = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, tel, city, district, address });
  };
  return (
    <div className="row jc-center">
      <div className="mb-4">
        <p className="text-center">
          Arabuluculuk başvurunuza aşağıdaki formu doldurarak başlayabilirsiniz.
          Arabulucularımız sizinle en kısa sürede iletişime geçicektir.
        </p>
      </div>
      <h2 className="text-center col-sm-12 col-lg-6 border-bottom-2 pb-2 mb-4">
        Başvuru Formu
      </h2>
      <div>
        <form className="row jc-center" onSubmit={handleSubmit}>
          <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
            <div className="input my-2">
              <input
                type="text"
                value={firstName}
                placeholder=" "
                onChange={(e) => setFirstName(e.target.value)}
                style={{ width: "400px" }}
                required
              />
              <label>İsim</label>
            </div>
            <div className="input my-2">
              <input
                type="text"
                value={lastName}
                placeholder=" "
                onChange={(e) => setLastName(e.target.value)}
                style={{ width: "400px" }}
                required
              />
              <label>Soy İsim</label>
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
              <input
                type="tel"
                value={tel}
                placeholder=" "
                onChange={(e) => setTel(e.target.value)}
                style={{ width: "400px" }}
                required
              />
              <label>Telefon</label>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
            <div className="input my-2">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ width: "400px" }}
                required
              >
                <option value="" disabled hidden></option>
                <option value="2">Seçenek 2</option>
                <option value="3">Seçenek 3</option>
              </select>
              <label>Şehir</label>
            </div>
            <div className="input my-2">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                style={{ width: "400px" }}
                required
              >
                <option value="" disabled hidden></option>
                <option value="2">Seçenek 2</option>
                <option value="3">Seçenek 3</option>
              </select>
              <label className="label">İlçe</label>
            </div>
            <div className="input my-2">
              <textarea
                value={address}
                placeholder=" "
                onChange={(e) => setAddress(e.target.value)}
                style={{ width: "400px" }}
                required
              />
              <label>Adres</label>
            </div>
          </div>
          <button
            className="button-outline col-md-12 col-lg-6 mt-4"
            type="submit"
          >
            Başvuruyu Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
