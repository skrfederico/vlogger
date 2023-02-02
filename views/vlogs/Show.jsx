const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");
const Log = require("../../models/vlogs");


class Show extends React.Component {
  render() {
    const vlog = this.props.vlog;
// console.log(vlog._id)
    // const query = Log.find({});

    // Alternative syntax
    // const {vlog} = this.props

    return (
  <Layout>
        <div className="bg-gray-200 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full">
        <div>
        <ol class="border-l-2 border-red-600">
          <li>
      <div class="flex flex-start items-center">
        <div class="bg-red-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <Heading> {vlog.title} Show Page </Heading>
      </div>
      <div class="ml-6 mb-6 pb-6">
      <p name="title" id="title" className="bg-gray-50"/>{vlog.title}
      <p name="date" id="date" className="bg-gray-50"/>{vlog.date}
      <div className="">
                          <label for="description" className="block mt-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                          <textarea id="description" name="description" rows="6" className="block p-2.5 w-full text-sm text-black bg-gray-100 rounded-lg border focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500">{vlog.body}</textarea>                    
                      </div>
  <Commented>
  {vlog.newContent
    ? "This class has new content"
    : "Revision class, no new content"} </Commented>
    <Commented>
    {"-"} {String(vlog.createdAt)}      
    </Commented>
    <a href="/vlogs"><button type="submit" class="inline-block px-4 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">vlogs</button></a>

      </div>
    </li>
  </ol>
  </div>
        </div>
        </Layout>      
    );
  }
}
module.exports = Show;