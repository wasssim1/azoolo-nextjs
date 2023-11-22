import clsx from 'clsx'
import { MdClose } from 'react-icons/md'

const SearchOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={clsx('search-overlay', activeStatus && 'active')}>
      {/*=======  close icon  =======*/}
      <button
        className="search-overlay__close-icon"
        onClick={() => {
          getActiveStatus(false)
          document.querySelector('body').classList.remove('overflow-hidden')
        }}
      >
        <MdClose />
      </button>
      {/*=======  End of close icon  =======*/}
      {/*=======  search overlay content  =======*/}
      <div className="search-overlay__content">
        <form className="space-mb--20">
          <input type="search" placeholder="Recherche..." />
        </form>
        <div className="search-overlay__hint">
          # Appuyez sur Entrée pour lancer la recherche
        </div>
      </div>
      {/*=======  End of search overlay content  =======*/}
    </div>
  )
}

export default SearchOverlay
