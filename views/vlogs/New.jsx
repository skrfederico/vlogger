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
      <div className="bg-gray-300 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full">
      <div>
      <ol className="border-l-2 border-red-600">
      <form action="/vlogs" method="POST">
  <li>
    <div className="flex flex-start items-center">
      <div className="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <Heading>New Vlog</Heading>
    </div>
    <div className="ml-6 mb-6 pb-6">
    <input type="text" name="title" id="title" className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type class' name" required="" />
    <input type="date" name="date" id="date" className="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type date" required="" />
    <div className="">
                        <label htmlFor="description" className="block mt-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                        <textarea id="description" name="body" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-10 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write time reference and topics here..."></textarea>                    
                    </div>
                    <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" name="newContent" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
    <label htmlFor="link-checkbox" className="p-4 text-sm font-medium text-gray-900 dark:text-black">New content?</label>
</div>

      <button type="submit" className="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Post</button>
    </div>
  </li>
    </form>
</ol>
</div>
      </div>
      </Layout>
    );
  }
}

module.exports = New;
