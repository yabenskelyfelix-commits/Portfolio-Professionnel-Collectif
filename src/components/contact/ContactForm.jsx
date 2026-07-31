import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import Button from "../ui/Button.jsx";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_FORM = { nom: "", email: "", message: "" };

function validate(form) {
  const errors = {};

  if (!form.nom.trim()) {
    errors.nom = "Le nom est requis.";
  }
  if (!form.email.trim()) {
    errors.email = "Le courriel est requis.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Le format du courriel est invalide.";
  }
  if (!form.message.trim()) {
    errors.message = "Le message est requis.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  }

  return errors;
}

function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("sending");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setServerMessage(data.errors ? data.errors.join(" ") : "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      setServerMessage(data.message);
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setServerMessage("Impossible de contacter le serveur. Veuillez réessayer.");
    }
  }

  const isSending = status === "sending";

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="nom">{t("contact.name")}</label>
        <input
          id="nom"
          name="nom"
          type="text"
          value={form.nom}
          onChange={handleChange}
          aria-invalid={Boolean(errors.nom)}
          aria-describedby={errors.nom ? "nom-error" : undefined}
        />
        {errors.nom && (
          <p className="field-error" id="nom-error">
            {errors.nom}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email">{t("contact.email")}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className="field-error" id="email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="message">{t("contact.message")}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p className="field-error" id="message-error">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSending}>
        {isSending ? t("contact.sending") : t("contact.submit")}
      </Button>

      {status === "success" && (
        <p className="form-status form-status-success" role="status">
          {serverMessage}
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          {serverMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
