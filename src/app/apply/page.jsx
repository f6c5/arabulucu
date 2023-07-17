"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const steps = [
  {
    id: 1,
    title: "Kişisel Bilgiler",
    description:
      "Sizinle daha iyi bir iletişim kurabilmemiz için lütfen aşağıdaki formu doldurun",
  },
  {
    id: 2,
    title: "Karşı tarafın bilgileri",
    description:
      "Karşı taraf ile iletişim kurabilmemiz için lütfen aşağıdaki formu doldurun",
  },
  {
    id: 3,
    title: "detaylı bilgi",
    description:
      "Arabuluculuğa başvurma nedeninizi ve arabuluculuk için istediğiniz koşullarınızı yazın",
  },
];

const Apply = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);

  const [step1Data, setStep1Data] = useState({
    firstName: "ferhat",
    lastName: "çiçek",
    email: "cicekf256@gmail.com",
    tel: "5059983940",
    city: "1",
    district: "2",
    address: "Telisz mah.",
  });

  const [step2Data, setStep2Data] = useState({
    firstName: "aaaa",
    lastName: "bbbb",
    email: "asfsfa@gmail.com",
    tel: "1234567890",
    city: "1",
    district: "2",
    address: "ankara",
  });

  const [step3Data, setStep3Data] = useState({
    reason: "",
    conditions: "",
  });

  const handleNext = (e) => {
    e.preventDefault();

    if (activeStep.id < steps.length) {
      setActiveStep(steps[activeStep.id]);
      console.log("sonraki");
    } else {
      setActiveStep(steps[0]);
      console.log(step1Data, step2Data, step3Data);
      toast.success("Başarılı", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handlePrev = () => {
    setActiveStep(steps[activeStep.id - 2]);
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
        <div className="stepper">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`step ${
                step.id < activeStep.id
                  ? "completed"
                  : step.id === activeStep.id
                  ? "active"
                  : ""
              }`}
            >
              {step.id}
            </div>
          ))}
        </div>
        <h3 className="text-center mt-4 mb-4">{activeStep.title}</h3>
        <p className="text-center mt-4 mb-4">{activeStep.description}</p>
      </div>
      <div>
        {activeStep.id === 1 ? (
          <Step1
            step1Data={step1Data}
            setStep1Data={setStep1Data}
            handleNext={handleNext}
          />
        ) : activeStep.id === 2 ? (
          <Step2
            step2Data={step2Data}
            setStep2Data={setStep2Data}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        ) : (
          activeStep.id === 3 && (
            <Step3
              step3Data={step3Data}
              setStep3Data={setStep3Data}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          )
        )}
      </div>
    </div>
  );
};

const Step1 = ({ step1Data, setStep1Data, handleNext }) => {
  return (
    <form className="row jc-center" onSubmit={handleNext}>
      <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
        <div className="input my-2">
          <input
            type="text"
            value={step1Data.firstName}
            placeholder=" "
            onChange={(e) =>
              setStep1Data({ ...step1Data, firstName: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>İsim</label>
        </div>
        <div className="input my-2">
          <input
            type="text"
            value={step1Data.lastName}
            placeholder=" "
            onChange={(e) =>
              setStep1Data({ ...step1Data, lastName: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Soy İsim</label>
        </div>
        <div className="input my-2">
          <input
            type="email"
            value={step1Data.email}
            placeholder=" "
            onChange={(e) =>
              setStep1Data({ ...step1Data, email: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Email</label>
        </div>
        <div className="input my-2">
          <input
            type="tel"
            value={step1Data.tel}
            placeholder=" "
            onChange={(e) =>
              setStep1Data({ ...step1Data, tel: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Telefon</label>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
        <div className="input my-2">
          <select
            value={step1Data.city}
            onChange={(e) =>
              setStep1Data({ ...step1Data, city: e.target.value })
            }
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
            value={step1Data.district}
            onChange={(e) =>
              setStep1Data({ ...step1Data, district: e.target.value })
            }
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
            value={step1Data.address}
            placeholder=" "
            onChange={(e) =>
              setStep1Data({ ...step1Data, address: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Adres</label>
        </div>
      </div>
      <button className="button-outline col-md-12 col-lg-6 mt-4" type="submit">
        Sonraki
      </button>
    </form>
  );
};

const Step2 = ({ step2Data, setStep2Data, handlePrev, handleNext }) => {
  return (
    <form className="row jc-center" onSubmit={handleNext}>
      <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
        <div className="input my-2">
          <input
            type="text"
            value={step2Data.firstName}
            placeholder=" "
            onChange={(e) =>
              setStep2Data({ ...step2Data, firstName: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>İsim</label>
        </div>
        <div className="input my-2">
          <input
            type="text"
            value={step2Data.lastName}
            placeholder=" "
            onChange={(e) =>
              setStep2Data({ ...step2Data, lastName: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Soy İsim</label>
        </div>
        <div className="input my-2">
          <input
            type="email"
            value={step2Data.email}
            placeholder=" "
            onChange={(e) =>
              setStep2Data({ ...step2Data, email: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Email</label>
        </div>
        <div className="input my-2">
          <input
            type="tel"
            value={step2Data.tel}
            placeholder=" "
            onChange={(e) =>
              setStep2Data({ ...step2Data, tel: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Telefon</label>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
        <div className="input my-2">
          <select
            value={step2Data.city}
            onChange={(e) =>
              setStep2Data({ ...step2Data, city: e.target.value })
            }
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
            value={step2Data.district}
            onChange={(e) =>
              setStep2Data({ ...step2Data, district: e.target.value })
            }
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
            value={step2Data.address}
            placeholder=" "
            onChange={(e) =>
              setStep2Data({ ...step2Data, address: e.target.value })
            }
            style={{ width: "400px" }}
            required
          />
          <label>Adres</label>
        </div>
      </div>
      <button
        className="button-outline col-md-12 col-lg-4 mt-4"
        type="button"
        onClick={handlePrev}
      >
        Önceki
      </button>
      <button className="button-outline col-md-12 col-lg-4 mt-4" type="submit">
        Sonraki
      </button>
    </form>
  );
};

const Step3 = ({ step3Data, setStep3Data, handlePrev, handleNext }) => {
  return (
    <form className="row jc-center" onSubmit={handleNext}>
      <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
        <div className="input my-2">
          <textarea
            value={step3Data.reason}
            placeholder=" "
            onChange={(e) =>
              setStep3Data({ ...step3Data, reason: e.target.value })
            }
            style={{ width: "400px", height: "200px" }}
            required
          />
          <label>Neden</label>
        </div>
      </div>
      <div className="col-md-12 col-lg-6 d-flex jc-center flex-wrap">
        <div className="input my-2">
          <textarea
            value={step3Data.conditions}
            placeholder=" "
            onChange={(e) =>
              setStep3Data({ ...step3Data, conditions: e.target.value })
            }
            style={{ width: "400px", height: "200px" }}
            required
          />
          <label>Şartlar</label>
        </div>
      </div>
      <button
        className="button-outline col-md-12 col-lg-4 mt-4"
        type="button"
        onClick={handlePrev}
      >
        Önceki
      </button>
      <button
        className="button-outline-success col-md-12 col-lg-4 mt-4"
        type="submit"
      >
        Başvuruyu Gönder
      </button>
    </form>
  );
};

export default Apply;
