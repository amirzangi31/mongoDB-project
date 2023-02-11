import React, { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Toastify from "@/services/toastify";
import 'react-toastify/dist/ReactToastify.css';
function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalcode: "",
    data: "",
    products: [],
  });
  const router = useRouter();

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.status === "success") {
      Toastify("success", "Customer registered successfully");
      setTimeout(() => {
        router.push("/");
      }, 2500);
    } else if (data.status === "failed") {
      Toastify("error", "Invalidate data");
    }
  };
  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalcode: "",
      data: "",
      products: [],
    });

    router.push("/");
  };

  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm} />

      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>

      </div>
        <ToastContainer />
    </div>
  );
}

export default AddCustomerPage;
