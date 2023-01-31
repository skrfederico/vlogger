const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class Index extends React.Component {
  render() {
    const { vlogs } = this.props;

// Sort vlogs by date in descending order
vlogs.sort((a, b) => new Date(a.date) - new Date(b.date));

    class Index extends React.Component {
  render() {
    const { vlogs } = this.props;

    return (
      <Layout>
      <div>
      <Heading>'Hedwig' Vlogs index page</Heading>
          {this.props.vlogs.map((vlog, i) => {
            return (
              <ol className="border-l-2 border-red-600">
              <li key={i}>
    <div className="flex flex-start items-center">
      <div className="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 className="text-gray-800 font-semibold text-xl -mt-2">{vlog.title}</h4>
    </div>
    <div className="ml-6 mb-6 pb-6">
      <a href="#!" className="text-red-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">{vlog.date}</a>
      
      
      {vlog.body.map((line, index) => (
  <p key={index} className="text-gray-700 mt-2 mb-4">{line}</p>
))}

      <Commented>
                {vlog.newContent
                  ? "This class has new content"
                  : "Revision class, no new content"}</Commented>

                  <div className="flex items-start">
                  <div className="pr-2"><form action={`/vlogs/${vlog._id}/edit`} method="GET"> <button input type="submit" className="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">Edit</button></form></div>
                  <div className="pr-2"><form action={`/vlogs/${vlog._id}?_method=DELETE`} method="POST"><button input type="submit" className="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-back active:shadow-lg transition duration-150 ease-in-out">Delete</button></form></div>  
                  </div>
    </div>          
              </li>
              </ol>
            );
          })
          
          }
  
      </div>
      </Layout>
    );
  }
}

module.exports = Index;

    return (
      <Layout>
      <div>
      <Heading>'Hedwig' Vlogs index page</Heading>
          {this.props.vlogs.map((vlog, i) => {
            return (
              <ol className="border-l-2 border-red-600">
              <li key={i}>
    <div className="flex flex-start items-center">
      <div className="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 className="text-gray-800 font-semibold text-xl -mt-2">{vlog.title}</h4>
    </div>
    <div className="ml-6 mb-6 pb-6">
      <a href="#!" className="text-red-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">{vlog.date}</a>
      
      
      {vlog.body.map((line, index) => (
  <p key={index} className="text-gray-700 mt-2 mb-4">{line}</p>
))}

      {/* {vlog.body.map((line, index) => {
       <p key={index} line={line} > </p>
          })} */}

  

      {/* return this.texts[this.index].split(" ").join("<br/>") */}


      <Commented>
                {vlog.newContent
                  ? "This class has new content"
                  : "Revision class, no new content"}</Commented>

                  <div className="flex items-start">
                  <div className="pr-2"><form action={`/vlogs/${vlog._id}/edit`} method="GET"> <button input type="submit" className="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out">Edit</button></form></div>
                  <div className="pr-2"><form action={`/vlogs/${vlog._id}?_method=DELETE`} method="POST"><button input type="submit" className="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-back active:shadow-lg transition duration-150 ease-in-out">Delete</button></form></div>  
                  </div>
    </div>          
              </li>
              </ol>
            );
          })
          
          }
  
      </div>
      </Layout>
    );
  }
}

module.exports = Index;