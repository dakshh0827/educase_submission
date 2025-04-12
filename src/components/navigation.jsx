import { HomeIcon, PrevIcon, NextIcon } from '../components/icons'

function Navigation({ currentPage, totalPages, navigateTo }) {
    return (
      <div className="flex justify-between items-center mt-6 pt-4 border-t">
        <button onClick={() => navigateTo(1)} className="text-gray-400 cursor-pointer">
          <HomeIcon />
        </button>
        <div className="flex items-center">
          <button 
            onClick={() => currentPage > 1 ? navigateTo(currentPage - 1) : null}
            disabled={currentPage === 1}
            className="text-gray-400 mr-2 cursor-pointer"
          >
            <PrevIcon />
          </button>
          <span className="text-gray-600 text-sm">{currentPage} of {totalPages}</span>
          <button 
            onClick={() => currentPage < totalPages ? navigateTo(currentPage + 1) : null}
            disabled={currentPage === totalPages}
            className="text-gray-400 ml-2 cursor-pointer"
          >
            <NextIcon />
          </button>
        </div>
      </div>
    );
  }

  export default Navigation