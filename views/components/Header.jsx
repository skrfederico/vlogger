const React = require("react");
const Text = require("./Heading");

// import React, { useState } from 'react';


class Header extends React.Component {
  render() {
    return (
      <nav className="bg-gray-500">
      <div className="container mx-auto py-4 flex justify-between items-center">
           <a href="https://generalassemb.ly/" className="flex items-center">
         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/General_Assembly_logo.svg/320px-General_Assembly_logo.svg.png" className="h-6 mr-3 sm:h-9" alt="General Assembly Logo"/></a>
        <h1 className="text-2xl font-bold text-gray-50"></h1>
        <div className="flex space-x-10">
        <div className="flex items-center space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <a href="https://seirfx-hedwig.herokuapp.com/"className="text-gray-50">Hedwig's Website</a>
          </div>          
          <div className="flex items-center space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </span>
            <a href="/vlogs/"className="text-gray-50">Vlogs</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <a href="/vlogs/new" className="text-gray-50">New Vlog</a>
          </div>
        </div>
        <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        {/* search bar   */}
          <form action="/search" method="GET">
          <input className="outline-none" type="text" name="query" placeholder="Search" value=""/>
          </form>
        </div>
      </div>
    </nav>
);
}
}
module.exports = Header;
{/* {const search = input.value} */}
{/* //const search = input.value
const result = Vlog.findAll({body: {exist: {search}}}) */}        
