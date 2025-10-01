// Budget.jsx
import React, { useState } from "react";

export default function Budget() {
  // states για τα ποσά
  const [myIncome, setMyIncome] = useState(0);
  const [partnerIncome, setPartnerIncome] = useState(0);
  const [fixedExpenses, setFixedExpenses] = useState(0);
  const [supermarket, setSupermarket] = useState(0);
  const [outings, setOutings] = useState(0);

  // υπολογισμοί
  const totalIncome = Number(myIncome) + Number(partnerIncome);
  const afterFixed = totalIncome - Number(fixedExpenses);
  const remainingForOutings = afterFixed - Number(supermarket);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundImage: "url('https://i.imgur.com/uAxDDbL.png')", // βάζεις εδώ το όνομα της εικόνας σου
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "revert",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "30px" }}>
        Οικονομικό Πρόγραμμα
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Πορτοφόλι */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>💰 Πορτοφόλι</h2>
          <div>
            <label>Δικό μου εισόδημα: </label>
            <input
              type="number"
              value={myIncome}
              onChange={(e) => setMyIncome(e.target.value)}
            />
          </div>
          <div>
            <label>Σύντροφός μου: </label>
            <input
              type="number"
              value={partnerIncome}
              onChange={(e) => setPartnerIncome(e.target.value)}
            />
          </div>
          <p>Σύνολο: {totalIncome} €</p>
        </div>

        {/* Πάγια έξοδα */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>📌 Πάγια Έξοδα</h2>
          <div>
            <label>Πάγια: </label>
            <input
              type="number"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(e.target.value)}
            />
          </div>
          <p>Σύνολο πάγιων: {fixedExpenses} €</p>
        </div>

        {/* Supermarket */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>🛒 Supermarket</h2>
          <div>
            <label>Ξοδεμένα: </label>
            <input
              type="number"
              value={supermarket}
              onChange={(e) => setSupermarket(e.target.value)}
            />
          </div>
          <p>Απομένουν μετά πάγια: {afterFixed} €</p>
        </div>

        {/* Έξοδοι */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>🍹 Έξοδοι</h2>
          <div>
            <label>Ξοδεμένα: </label>
            <input
              type="number"
              value={outings}
              onChange={(e) => setOutings(e.target.value)}
            />
          </div>
          <p>Μπορείς να ξοδέψεις: {remainingForOutings} €</p>
        </div>
      </div>
    </div>
  );
}
