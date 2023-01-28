const React = require("react");
const Layout = require("../components/Layout");
const Heading = require("../components/Heading");
const Text = require("../components/Text");
const Commented = require("../components/Commented");
const Button = require("../components/Button");
const Log = require("../../models/vlogs");


class Show extends React.Component {
  render() {
    const vlog = this.props;
console.log(vlog._id)
    // const query = Log.find({});

    // Alternative syntax
    // const {vlog} = this.props

    return (
      <Layout>
        <Heading> {vlog.title} Show Page </Heading>
        <div className="shadow-[inset_-12px_-8px_40px_#46464620]">
        <Text>
          {vlog.body}
          </Text>
           <Commented>
           {vlog.newContent
            ? "It was a good day"
            : "It was not a good day..."} </Commented>
            <Commented>
            {"-"} {String(vlog.createdAt)}      
            </Commented>
       
        <Button><form action={`/vlogs/${vlog._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE"/>
  </form></Button>
  
                <Button><form action='/vlogs' method="GET">
                  <input type="submit" value="BACK" />
                </form></Button>
                </div>
      </Layout>
    );
  }
}
module.exports = Show;