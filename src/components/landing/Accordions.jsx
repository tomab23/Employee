import React from 'react'

const Accordions = () => {
  return (
    <div className="join join-vertical bg-base-100">
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title font-semibold">Pourquoi avoir fais le site ?</div>
      <div className="collapse-content text-sm">J'ai fait le site pour m'entraîner et tester Supabase.</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title font-semibold">Quelles technologies sont utiliser pour le site ?</div>
      <div className="collapse-content text-sm">J'utilise React avec vite, Tailwind, React-router, Lucide pour les icons, I18next pour la traduction et Supabase pour le backend.</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold">Pourquoi utiliser le site ?</div>
      <div className="collapse-content text-sm">Pour gerer vos employés de votre entreprise ou de vos entreprises.</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold">Puis-je changer de thème ?</div>
      <div className="collapse-content text-sm">Vous avez le choix entre différents thème (se trouvent tout en bas de la page) mais l'application est basé sur le thème par default.</div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title font-semibold">L'application est-elle traduite ?</div>
      <div className="collapse-content text-sm">L'application est traduite en français et en anglais, vous pouvez changer la langue en bas de page, à gauche du changement de thème.</div>
    </div>
  </div>
  )
}

export default Accordions