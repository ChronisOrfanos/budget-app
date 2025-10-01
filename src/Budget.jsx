import React, { useState, useEffect } from "react";

export default function Budget() {
  // States για τα ποσά
  const [myIncome, setMyIncome] = useState(0);
  const [partnerIncome, setPartnerIncome] = useState(0);
  const [fixedExpenses, setFixedExpenses] = useState(0);
  const [supermarket, setSupermarket] = useState(0);
  const [outings, setOutings] = useState(0);

  // URL του online backend server σου
  const SERVER_URL = "https://budget-server-b6un.onrender.com"; // Βάλε το URL που σου έδωσε το Render

  // Φόρτωμα δεδομένων από backend μόλις φορτώσει το component
  useEffect(() => {
    fetch(`${SERVER_URL}/budget`)
      .then(res => res.json())
      .then(data => {
        setMyIncome(data.myIncome);
        setPartnerIncome(data.partnerIncome);
        setFixedExpenses(data.fixedExpenses);
        setSupermarket(data.supermarket);
        setOutings(data.outings);
      })
      .catch(err => console.error("Error fetching budget:", err));
  }, []);

  // Σώζουμε δεδομένα στο backend κάθε φορά που αλλάζουν
  useEffect(() => {
    const timeout = setTimeout(() => { // Μικρό delay για να μην κάνει POST σε κάθε μικρό γράψιμο
      fetch(`${SERVER_URL}/budget`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ myIncome, partnerIncome, fixedExpenses, supermarket, outings })
      }).catch(err => console.error("Error saving budget:", err));
    }, 300);

    return () => clearTimeout(timeout);
  }, [myIncome, partnerIncome, fixedExpenses, supermarket, outings]);

  // Υπολογισμοί
  const totalIncome = Number(myIncome) + Number(partnerIncome);
  const afterFixed = totalIncome - Number(fixedExpenses);
  const remainingForOutings = afterFixed - Number(supermarket);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "500px", margin: "auto" }}>
      <h1>Budget App (Shared)</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>Δικό μου εισόδημα: </label>
        <input type="number" value={myIncome} onChange={e => setMyIncome(e.target.value)} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Σύντροφός μου: </label>
        <input type="number" value={partnerIncome} onChange={e => setPartnerIncome(e.target.value)} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Πάγια: </label>
        <input type="number" value={fixedExpenses} onChange={e => setFixedExpenses(e.target.value)} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Supermarket: </label>
        <input type="number" value={supermarket} onChange={e => setSupermarket(e.target.value)} />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Outings: </label>
        <input type="number" value={outings} onChange={e => setOutings(e.target.value)} />
      </div>

      <hr />

      <p><strong>Σύνολο εισοδημάτων:</strong> {totalIncome} €</p>
      <p><strong>Μετά τα πάγια:</strong> {afterFixed} €</p>
      <p><strong>Μπορείς να ξοδέψεις για έξοδους:</strong> {remainingForOutings} €</p>
    </div>
  );
}
