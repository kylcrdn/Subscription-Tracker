import { useState } from "react";
import SubscriptionCard from "./components/SubscriptionCard";
import "./App.css";

function App() {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      name: "Amazon",
      logo: "A",
      dueDate: "Vence en 7 días",
      price: "€12.00",
      billing: "Mensual",
    },
  ]);

  const handleEdit = (subscription) => {
    console.log("Edit subscription:", subscription);
  };

  const handleDelete = (subscription) => {
    console.log("Delete subscription:", subscription);

    // Optional: actually remove it from state
    setSubscriptions((prev) =>
      prev.filter((item) => item.id !== subscription.id)
    );
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-white text-2xl font-bold mb-6">Mis Suscripciones</h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-3">
          {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.id}
              subscription={subscription}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
