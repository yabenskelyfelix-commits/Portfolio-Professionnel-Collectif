const express = require("express");
const path = require("path");
const fs = require("fs/promises");

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "dist");
const MESSAGES_FILE = path.join(__dirname, "messages.json");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.use(express.json());
app.use(express.static(DIST_DIR));

function validateContactPayload(body) {
  const errors = [];
  const { nom, email, message } = body || {};

  if (!nom || typeof nom !== "string" || !nom.trim()) {
    errors.push("Le champ 'nom' est requis.");
  }
  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    errors.push("Le champ 'email' est invalide ou manquant.");
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    errors.push("Le champ 'message' est requis.");
  }

  return errors;
}

async function readMessages() {
  try {
    const content = await fs.readFile(MESSAGES_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function appendMessage(entry) {
  const messages = await readMessages();
  messages.push(entry);
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

app.post("/api/contact", async (req, res) => {
  const errors = validateContactPayload(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const { nom, email, message } = req.body;
  const entry = {
    nom: nom.trim(),
    email: email.trim(),
    message: message.trim(),
    date: new Date().toISOString(),
  };

  try {
    await appendMessage(entry);
    return res.status(201).json({
      success: true,
      message: "Message reçu, merci de nous avoir contactés.",
    });
  } catch (error) {
    console.error("Erreur lors de l'écriture du message :", error);
    return res.status(500).json({ success: false, errors: ["Erreur interne du serveur."] });
  }
});

app.use("/api", (req, res) => {
  res.status(404).json({ success: false, errors: ["Route API introuvable."] });
});

// Laisse React Router gérer les routes côté client (SPA) après le build Vite.
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
