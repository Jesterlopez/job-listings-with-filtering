export default function Item({ data, handleFilter }) {
  const { company, logo, new: is_new, featured, position, role, level, postedAt, contract, location, languages, tools } = data

  const handleAddFilter = (e) => {
    return handleFilter(e.target.textContent)
  }


  const codeRandom = (Math.random() + 1).toString(36).substring(7)

  return (
    <div className={featured === true ? 'h-40 w-full flex p-7 shadow-xl-custom rounded-md bg-white mb-7 border-l-4 border-teal-custom' : 'h-40 w-full flex p-7 shadow-xl-custom rounded-md bg-white mb-7'}>
      <div className="w-48 h-full mr-2 flex justify-center items-center" >
        <img src={logo} alt="" />
      </div>
      <div className="w-1/2 h-full mr-2">
        <div className="flex w-full">
          <h2 className="text-base font-bold mr-4 text-teal-custom">{company}</h2>
          {is_new && <span className="mr-2 px-2 bg-head-custom rounded-full font-bold text-white text-xs text-center flex items-center">NEW!</span>}
          {featured && <span className="mr-2 px-2 rounded-full font-bold text-white bg-color-very-dark text-xs text-center flex items-center">FEATURED</span>}
        </div>
        <h3 className="font-bold text-xl leading-10 cursor-pointer hover:text-teal-custom">{position}</h3>
        <div className="flex items-center justify-between w-4/5 text-neutral-01">
          <span className="text-sm">
            {postedAt}
          </span>
          <strong className="text-2xl">&#183;</strong>
          <span className="text-sm ">
            {contract}
          </span>
          <strong className="text-2xl">&#183;</strong>
          <span className="text-sm">
            {location}
          </span>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-end">
        <ul className="flex list-none flex-row">
          <li>
            <button onClick={handleAddFilter} className="text-sm text-teal-custom font-bold bg-secundary text-teal-custom p-2 rounded-md mr-4 cursor-pointer hover:text-white hover:bg-head-custom">{role}</button>
          </li>
          <li>
            <button onClick={handleAddFilter} className="text-sm text-teal-custom font-bold bg-secundary text-teal-custom p-2 rounded-md mr-4 cursor-pointer hover:text-white hover:bg-head-custom">{level}</button>
          </li>
          {languages.map((lenguage) => {
            return <li key={`${lenguage}-${codeRandom}`}><button onClick={handleAddFilter} className="text-sm text-teal-custom font-bold bg-secundary text-teal-custom p-2 rounded-md mr-4 cursor-pointer hover:text-white hover:bg-head-custom">{lenguage}</button></li>
          })}
          {
            tools.length > 0 && tools.map(tool => {
              return <li key={`${tool}-${codeRandom}`} ><button onClick={handleAddFilter} className="text-sm text-teal-custom font-bold bg-secundary text-teal-custom p-2 rounded-md mr-4 cursor-pointer hover:text-white hover:bg-head-custom">{tool}</button></li>
            })
          }
        </ul>
      </div>
    </div >
  )
}  