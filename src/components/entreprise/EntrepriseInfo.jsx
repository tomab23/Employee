

const EntrepriseInfo = () => {
  return (
    <div className="card card-border bg-base-300 w-full">
    <div className="card-body">
      <h2 className="card-title">Entreprise info</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <button className="btn btn-outline btn-primary btn-sm w-fit self-end" onClick={() => alert("modif info")}>Modifier</button>
    </div>

  </div>
  )
}

export default EntrepriseInfo