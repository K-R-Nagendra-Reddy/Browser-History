import './index.css'

const SingleBrowserItem = props => {
  const {details, deleteDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  console.log(id)

  const DeleteHistoryItem = () => {
    deleteDelete(id)
  }

  return (
    <div>
      <li className="list-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-title-domain-delete">
          <div className="logo-title-domain">
            <img src={logoUrl} className="logo" alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <button
            data-testid="delete"
            onClick={DeleteHistoryItem}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-image"
            />
          </button>
        </div>
      </li>
    </div>
  )
}
export default SingleBrowserItem
