import { useState } from "react";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Expiration Date:
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
          />
        </label>

        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Name on Card:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
