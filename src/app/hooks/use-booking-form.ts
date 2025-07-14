import { useState } from "react";
import { FormBook } from "@/interfaces/interface-form";
import { validateForm } from "@/utils/validation-form";

export default function useBookingForm(onSubmit: (data: FormBook) => void) {
  const [formData, setFormData] = useState<FormBook>({
    name: "",
    phone: "",
    type: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateForm(formData);
    if (error) {
      alert(error);
      return;
    }

    onSubmit(formData);
  };


  return { formData, handleChange, handleSubmit };
}
