import ContactForm from "../components/contact/ContactForm.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

function Contact() {
  const { t } = useLanguage();

  return (
    <section>
      <h1>{t("contact.title")}</h1>
      <ContactForm />
    </section>
  );
}

export default Contact;
