import React, { useState } from "react";
import HeaderG from "../Components/HeaderG";
import FormField from "../Components/FormField";
import Button from "../Components/Button";

const RecuDeCaisse: React.FC = () => {
  const [formData, setFormData] = useState({
    recu_caisse_num: "",
    date: "",
    methode_paiement: "",
    recu_de: "",
    motif: "",
    montant_chiffre: "",
    montant_lettre: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`, formData);
    if (action === "Supprimer") {
      setFormData({
        recu_caisse_num: "",
        date: "",
        methode_paiement: "",
        recu_de: "",
        motif: "",
        montant_chiffre: "",
        montant_lettre: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-abhaya">
      <HeaderG />
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
        {/* Titre */}
        <h1 className="text-4xl font-bold mb-12 mt-16">REÇUE DE CAISSE</h1>

        {/* Formulaire */}
        <div className="grid grid-cols-2 gap-8 w-full px-8">
          {/* Colonne gauche */}
          <div className="flex flex-col space-y-6">
            <FormField
              label="Reçue de caisse n°"
              name="recu_caisse_num"
              value={formData.recu_caisse_num}
              onChange={handleChange}
            />
            <FormField
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <FormField
              label="Méthode de paiement"
              name="methode_paiement"
              value={formData.methode_paiement}
              onChange={handleChange}
            />
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col space-y-6">
            <FormField
              label="Reçue de"
              name="recu_de"
              value={formData.recu_de}
              onChange={handleChange}
            />
            <FormField
              label="Motif"
              name="motif"
              value={formData.motif}
              onChange={handleChange}
            />
            <FormField
              label="Montant en chiffre"
              name="montant_chiffre"
              value={formData.montant_chiffre}
              onChange={handleChange}
            />
            <FormField
              label="Montant en lettre"
              name="montant_lettre"
              value={formData.montant_lettre}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex space-x-8 mt-16">
          <Button
            label="Envoyer"
            onClick={() => handleAction("Envoyer")}
            variant="primary"
          />
          <Button
            label="Rechercher"
            onClick={() => handleAction("Rechercher")}
            variant="secondary"
          />
          <Button
            label="Supprimer"
            onClick={() => handleAction("Supprimer")}
            variant="secondary"
          />
        </div>
      </main>
    </div>
  );
};

export default RecuDeCaisse;
