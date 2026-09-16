"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, Mail } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required";
  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message content is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  const mailtoLink = `mailto:saqulainali110@gmail.com?subject=${encodeURIComponent(
    `[AMU BATCH X] ${formData.subject}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  if (submitted) {
    return (
      <div className="ledger-card border border-primary/30 bg-primary-light/40 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-12 w-12 text-primary"
          aria-hidden="true"
        />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Message Prepared Successfully
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm max-w-md mx-auto">
          Thank you for reaching out, {formData.name}. You can send this message directly to the development team inbox via your email client.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={mailtoLink}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-mono-code text-xs font-bold text-white shadow-xs hover:bg-primary-hover transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Open Email Draft to Developer</span>
          </a>
          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
          >
            Send Another Note
          </Button>
        </div>
      </div>
    );
  }

  const fields: { key: keyof FormData; label: string; placeholder: string; type?: string; rows?: number }[] = [
    { key: "name", label: "Your Full Name", placeholder: "e.g. Tariq Khan" },
    { key: "email", label: "University or Personal Email", placeholder: "e.g. student@myamu.ac.in", type: "email" },
    { key: "subject", label: "Subject", placeholder: "e.g. Question regarding Timetable or Notes" },
    { key: "message", label: "Message / Feedback", placeholder: "Share your question, bug report, or contribution...", rows: 5 },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {fields.map(({ key, label, placeholder, type = "text", rows }) => (
        <div key={key}>
          <label
            htmlFor={key}
            className="mb-1 block font-mono-code text-xs font-semibold text-foreground"
          >
            {label}
          </label>
          {rows ? (
            <textarea
              id={key}
              name={key}
              rows={rows}
              placeholder={placeholder}
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
          ) : (
            <input
              id={key}
              name={key}
              type={type}
              placeholder={placeholder}
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
          )}
          {errors[key] && (
            <p id={`${key}-error`} className="mt-1 font-mono-code text-[11px] text-accent-terracotta" role="alert">
              {errors[key]}
            </p>
          )}
        </div>
      ))}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>Submit Message</span>
      </Button>
    </form>
  );
}
