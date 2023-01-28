const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

//const iconUrl = `someConstantText.${myObject.icon.suffix}`;
//const example = `https://img.pokemondb.net/artwork/large/.${vlog.title}.jpg`

class Index extends React.Component {
  render() {
    const { vlogs } = this.props;
    //const example = `https://img.pokemondb.net/artwork/large/.${vlog.title}.jpg`

    return (
      <Layout>
      <div>
      <Heading>'Hedwig' Vlogs index page</Heading>
  
        
          {this.props.vlogs.map((vlog, i) => {
            return (
              <ol class="border-l-2 border-red-600">
              <li key={i}>
    <div class="flex flex-start items-center">
      <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 class="text-gray-800 font-semibold text-xl -mt-2">{vlog.title}</h4>
    </div>
    <div class="ml-6 mb-6 pb-6">
      <a href="#!" class="text-red-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">4 February, 2022</a>
      <p class="text-gray-700 mt-2 mb-4">{vlog.body}</p>      
                  <div className="flex items-start">
                  <div class="pr-4"><form action={`/vlogs/${vlog._id}/edit`} method="GET"> <button input type="submit" class="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button></form></div>
                  <div class="pr-4"><form action={`/vlogs/${vlog._id}?_method=DELETE`} method="POST"></form><button input type="submit" class="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button></div>  
                  </div>
    </div>
    <div class="flex flex-start items-center">
      <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <h4 class="text-gray-800 font-semibold text-xl -mt-2">Title of section 1</h4>
    </div>
    <div class="ml-6 mb-6 pb-6">
      <a href="#!" class="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">4 February, 2022</a>
      <p class="text-gray-700 mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
    </div>

                
                {/* <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <a className="text-decoration: underline italic hover:not-italic font-semibold" href={`/vlogs/${vlog.id}`}> Log: {vlog.title} </a> <Text> {" - "}
                {vlog.body}
                {" "}
                <Commented>
                {vlog.newContent
                  ? `It was a good day`
                  : `It was not a good day`}</Commented></Text>                  
                <Button><form action={`/vlogs/${vlog._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form></Button>
                <Button>                
                <form
                  action={`/vlogs/${vlog._id}?_method=DELETE`}
                  method="POST">
                  <input type="submit" value="DELETE" />
                </form></Button>
                <br></br>
                <br></br>
                </div> */}
              
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