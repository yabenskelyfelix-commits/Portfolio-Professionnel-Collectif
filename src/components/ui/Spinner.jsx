function Spinner({ label = "Chargement..." }) {
  return (
    <div className="spinner" role="status" aria-live="polite">
      <span className="spinner-circle" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export default Spinner;
