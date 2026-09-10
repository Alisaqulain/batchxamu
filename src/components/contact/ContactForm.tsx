"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2 } from "lucide-react";

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
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message is required";
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
      // Ready for backend integration — no email service configured yet
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-10 w-10 text-emerald-600"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message validated successfully
        </h3>
        <p className="mt-2 text-sm text-muted">
          Your form data passed validation. Backend email integration is not yet
          configured — connect an API route or email service to deliver messages.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const fields: { key: keyof FormData; label: string; type?: string; rows?: number }[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email", type: "email" },
    { key: "subject", label: "Subject" },
    { key: "message", label: "Message", rows: 5 },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {fields.map(({ key, label, type = "text", rows }) => (
        <div key={key}>
          <label
            htmlFor={key}
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
          {rows ? (
            <textarea
              id={key}
              name={key}
              rows={rows}
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
          ) : (
            <input
              id={key}
              name={key}
              type={type}
              value={formData[key]}
              onChange={(e) =>
                setFormData({ ...formData, [key]: e.target.value })
              }
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-invalid={!!errors[key]}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
          )}
          {errors[key] && (
            <p id={`${key}-error`} className="mt-1 text-xs text-red-600" role="alert">
              {errors[key]}
            </p>
          )}
        </div>
      ))}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </Button>

      <p className="text-xs text-muted">
        This form validates input on the frontend. Connect a backend API or
        email service to deliver messages.
      </p>
    </form>
  );
}
