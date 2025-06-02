const Logo = ({ className = '' }) => {
  return (
    <div className={`font-serif text-2xl font-bold ${className}`}>
      <span className="text-gold">Gold</span>smith
    </div>
  )
}

export default Logo