

const Empty = ({children}) => {
  return (
    <>
    <div className="toast toast-center toast-middle">
  <div className="alert alert-info">
    <span>{children}</span>
  </div>
  </div>
  </>
  )
}

export default Empty