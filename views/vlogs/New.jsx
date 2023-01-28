const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");

class New extends React.Component {
  render() {
    return (
      <Layout>
      <div>
      <Heading>New Vlog entry</Heading>
      <ol class="border-l-2 border-blue-600">
      <form action="/vlogs" method="POST">
  <li>
    <div class="flex flex-start items-center">
      <div class="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
    <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type class' name" required="" />
    </div>
    <div class="ml-6 mb-6 pb-6">
    <input type="text" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type date" required="" />
    <div className="sm:col-span-2">
                        <label for="description" className="block mt-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                        <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write time reference and topics here..."></textarea>                    
                    </div>
      <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
    </div>
  </li>
      
      
      
      
      
      
      
      {/* <ol class="border-l-2 border-red-600">
      
      <div class="flex flex-start items-center">
      <div>
                        <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class' name</label>
                        <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type class' name" required="" />
                    </div>  
      
      <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2">Description</div>
      <input type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type description" required="" />
    </div> */}
    
    {/* <div class="ml-6 mb-6 pb-6">
      <a href="#!" class="text-red-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">4 February, 2022</a>
      <p class="text-gray-700 mt-2 mb-4">{vlog.body}</p>      
                  <div className="flex items-start">
                  <div class="pr-4"><form action={`/vlogs/${vlog._id}/edit`} method="GET"> <button input type="submit" class="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button></form></div>
                  <div class="pr-4"><form action={`/vlogs/${vlog._id}?_method=DELETE`} method="POST"></form><button input type="submit" class="inline-block px-8 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button></div>  
                  </div>
    </div> */}
    </form>
</ol>

        {/* NOTE: action will be the route, method will be the HTTP verb */}
       {/* <div className="bg-cyan-50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <form action="/vlogs" method="POST">
          <Text>
          Class Name: <input type="text" name="title" />
          <br /> */}
          {/* Content: <input className="w-96" type="text" name="body" /> */}
          {/* <div className="sm:col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea id="description" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write summary of the conversation here"></textarea>                    
                    </div>
          <br />
          <Commented>
          Does this class have new content?: <input type="checkbox" name="newContent"/>
          </Commented>
          <br />
          </Text>
          <Button><input type="submit" name="" value="Create Vlog" /></Button>
        </form>
      </div> */}
      </div>
      </Layout>
    );
  }
}

module.exports = New;
