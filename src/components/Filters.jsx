import { useRef, useState, useEffect } from "react"

export default function Filters({ filter, handleClearFilters, handleRemoveFilter }) {
  const [filters, setFilters] = useState([])
  const containerFilter = useRef(null)

  useEffect(() => {
    setFilters(filter)
  }, [filter]);


  const handleClearAllFilters = () => {
    return handleClearFilters([])
  }

  const handleFilter = (e) => {
    handleRemoveFilter(e.target.parentElement.firstChild.textContent)
  }

  const addFilter = (elements) => {
    if (elements?.length > 0) {
      return elements.map(element => {
        return <div key={element + Math.random()} className="bg-color-secundary md:mb-2 md:mt-2 text-teal-custom mr-5 font-bold flex items-center rounded-lg" >
          <strong className="mx-2 text-lg py-2 text md:text-sm">{element}</strong>
          <button onClick={handleFilter} className='bg-[url("/images/icon-remove.svg")] bg-no-repeat bg-center bg w-10 h-full bg-color-very-dark flex items-center justify-center rounded-r-lg'></button>
        </div>
      })
    }
  }

  return (
    <div className="flex p-6 w-full h-24 md:h-auto mt-neg-32 md:mb-20 mb-12 justify-between rounded-lg bg-white shadow-xl-custom items-center">
      <div ref={containerFilter} className="flex md:flex-wrap">
        {addFilter(filters)}
      </div>
      <div className="text-teal-custom float-right">
        {filters?.length > 0 &&
          <button onClick={handleClearAllFilters} className="text-xl underline font-bold md:text-sm">
            Clear
          </button>
        }
      </div>
    </div>
  )
}