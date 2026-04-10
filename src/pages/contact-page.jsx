import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CheckCircle2, X } from "lucide-react";
import { contactDetails } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.company.trim()) {
    errors.company = "Company or project is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (phoneDigits.length < 10) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Project details are required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please share at least 20 characters.";
  }

  return errors;
}

function SuccessModal({ open, onOpenChange }) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-border bg-card p-6 text-foreground shadow-2xl sm:p-8">
          <DialogPrimitive.Title className="sr-only">Enquiry submitted</DialogPrimitive.Title>
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <div className="flex flex-col items-start gap-5">
            <div className="flex size-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
              <CheckCircle2 className="size-7" />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Enquiry sent successfully.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Thanks for sharing your project details. The Lavista team will review your enquiry and get back to you
                with the next step.
              </p>
            </div>
            <Button type="button" className="w-full sm:w-fit" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function FieldError({ message }) {
  if (!message) return null;

  return <p className="mt-2 text-sm text-[#f1b8b2]">{message}</p>;
}

export function ContactPage() {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) return current;

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateForm(formValues);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSuccessOpen(true);
    setFormValues(initialForm);
  }

  return (
    <div className="pt-32">
      <section className=" py-24">
        <div className="container-shell">
          <Badge>Contact</Badge>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <h1 className="font-serif text-4xl leading-tight text-balance text-surface-light sm:text-6xl">
                Let&apos;s design a sharper growth system for your next project.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-surface-copy)]">
                Share the project stage, city, ticket size, and current funnel challenge. We&apos;ll respond with the
                right next step.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="bg-surface rounded-[24px] p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-accent-foreground">{detail.label}</p>
                    <p className="mt-2 text-lg text-surface-foreground">{detail.value}</p>
                  </div>
                ))}
                <a
                  href="https://maps.app.goo.gl/qD2wM9ZQUZvTM3Gv6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="surface-panel rounded-[34px] p-6 sm:p-8">
              <form className="flex flex-col gap-4" noValidate onSubmit={handleSubmit}>
                <div>
                  <Input
                    name="fullName"
                    placeholder="Full name"
                    value={formValues.fullName}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.fullName)}
                    className={errors.fullName ? "border-[#f1b8b2] focus:border-[#f1b8b2] focus:ring-[#f1b8b2]/30" : ""}
                  />
                  <FieldError message={errors.fullName} />
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder="Company / project"
                    value={formValues.company}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.company)}
                    className={errors.company ? "border-[#f1b8b2] focus:border-[#f1b8b2] focus:ring-[#f1b8b2]/30" : ""}
                  />
                  <FieldError message={errors.company} />
                </div>

                <div>
                  <Input
                    name="email"
                    placeholder="Email address"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={errors.email ? "border-[#f1b8b2] focus:border-[#f1b8b2] focus:ring-[#f1b8b2]/30" : ""}
                  />
                  <FieldError message={errors.email} />
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Phone number"
                    value={formValues.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    className={errors.phone ? "border-[#f1b8b2] focus:border-[#f1b8b2] focus:ring-[#f1b8b2]/30" : ""}
                  />
                  <FieldError message={errors.phone} />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project, target market, and current marketing challenge."
                    value={formValues.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className={errors.message ? "border-[#f1b8b2] focus:border-[#f1b8b2] focus:ring-[#f1b8b2]/30" : ""}
                  />
                  <FieldError message={errors.message} />
                </div>

                <Button type="submit" className="mt-2 w-full sm:w-fit">
                  Send enquiry
                </Button>
              </form>

              <div className="mt-8 overflow-hidden rounded-[28px] border border-border/70">
                <iframe
                  title="Lavista map"
                  src="https://www.google.com/maps?q=Lavista+Estate+and+Imperial&output=embed"
                  className="h-[240px] w-full grayscale sm:h-[280px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SuccessModal open={successOpen} onOpenChange={setSuccessOpen} />
    </div>
  );
}
