import { useState, useEffect } from 'react'
import Header from './components/Header'
import Job from './components/Job'
import Filters from './components/Filters'
import { getData, getDataForCategorys } from './utils/fetching'

function App() {
  const [allData, setAllData] = useState([])
  const [dataForCategory, setDataForCategory] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => {
    getData().then(response => setAllData(response))
  }, [])


  useEffect(() => {
    getDataForCategorys(filters[filters.length - 1]).then(response => setDataForCategory(response))
  }, [filters])

  const handleFilter = (filter) => {
    !filters.includes(filter) && setFilters([...filters, filter])
  }

  const handleClearFilters = () => {
    setFilters([])
  }

  const handleRemoveFilter = (filter) => {
    filters.includes(filter) && filters.splice(filters.indexOf(filter), 1)
    setFilters([...filters])
  }

  return (
    <>
      <Header />
      <main className='w-full px-36 py-20 flex flex-col'>
        {filters.length > 0 && <Filters filter={filters} handleRemoveFilter={handleRemoveFilter} handleClearFilters={handleClearFilters} />}
        {dataForCategory.length > 0 ?
          dataForCategory?.map((job) => {
            return <Job key={job.id} data={job} handleFilter={handleFilter} />
          })
          : allData?.map((job) => {
            return <Job key={job.id} data={job} handleFilter={handleFilter} />
          })}
      </main>
    </>
  )
}

export default App
