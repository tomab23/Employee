
const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>

        <h2 className="mt-10">{import.meta.env.VITE_SUPABASE_KEY}</h2>
    </div>
  )
}

export default HomePage