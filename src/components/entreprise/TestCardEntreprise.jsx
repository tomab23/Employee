import ep1 from '../../assets/imgs/ep1.jpg'

const TestCardEntreprise = () => {

    const loading = true;

    

  return (
        <div className="card bg-base-100 image-full w-80 xl:w-96 shadow-sm">
      <figure>
        {!loading ? (
                    <img
          src={ep1}
          alt="entreprise image" />
        ) : (
        <div className="skeleton w-full h-full"></div>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">name</h2>
        <p>test loading img</p>
        <div className="card-actions justify-end">
          <button className="btn cursor-not-allowed btn-neutral">Not click</button>
        </div>
      </div>
    </div>
  )
}

export default TestCardEntreprise