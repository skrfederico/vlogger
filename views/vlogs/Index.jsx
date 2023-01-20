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
      <Heading>GA's SE-Flex 'Hedwig' Vlogs index page</Heading>
  
        
          {this.props.vlogs.map((vlog, i) => {
            return (
              <li key={i}>
                <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <a className="text-decoration: underline italic hover:not-italic font-semibold" href={`/vlogs/${vlog.id}`}> Log: {vlog.title} </a> <Text> {" - "}
                {vlog.body}
                {" "}
                <Commented>
                {vlog.newContent
                  ? `It was a good day`
                  : `It was not a good day`}</Commented></Text>
                  {/* <div> <img src={example}/> </div> */}
                  
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
                </div>
              </li>
            );
          })
          
          }
  
      </div>
      </Layout>
    );
  }
}

module.exports = Index;