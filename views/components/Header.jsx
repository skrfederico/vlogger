const React = require("react");
const Text = require("./Heading");

class Header extends React.Component {
  render() {
    return (
      <nav className="bg-gray-500">
      <div className="container mx-auto py-4 flex justify-between items-center">
           <a href="https://websailors.pro/" className="flex items-center">
         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/General_Assembly_logo.svg/320px-General_Assembly_logo.svg.png" className="h-6 mr-3 sm:h-9" alt="General Assembly Logo"/></a>
        <h1 className="text-2xl font-bold text-gray-50"></h1>
        <div className="flex space-x-10">
          
        <div className="flex items-center space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <a href="https://seirfx-hedwig.herokuapp.com/"className="text-gray-50">Hedwig's Website</a>
          </div>          
          
          
          
          
          <div className="flex items-center space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </span>
            <a href="/vlogs/"className="text-gray-50">Vlogs</a>
          </div>
          
          <div className="flex items-center space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <a href="/vlogs/new" className="text-gray-50">New Vlog</a>
          </div>

          

        
        
        
        </div>
        <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <form action="/vlogs/search" method="GET">
          <input className="outline-none" type="text" placeholder="Search" value="" />
          </form>
          {/* //const search = input.value
const result = Vlog.findAll({body: {exist: {search}}}) */}

        
        
        </div>
      </div>
    </nav>

// <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-blue-700">
//   <div className="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="https://websailors.pro/" className="flex items-center">
//         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/General_Assembly_logo.svg/320px-General_Assembly_logo.svg.png" className="h-6 mr-3 sm:h-9" alt="General Assembly Logo" />
        
//         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-blue">Hedwig</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//       <span className="sr-only">Open main menu</span>
//       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Main page</a>
//         </li>
//         <li>
//           <a href="/vlogs/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vlogs</a>
//         </li>
//         <li>
//           <a href="/vlogs/new" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">New</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

);
  }
}
{/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Food vlog <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="/foodvlog/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Food Log</a>
      </li>
      <li>
        <a href="/foodvlog/new" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">New</a>
      </li>
      <li>
        <a href="https://marlinkm.me/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cook's webpage</a>
      </li>
    </ul>
</div>   */}
module.exports = Header;
