// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#0E2738"
});
const textInline = {
  display: '-webkit-inline-box',
  margin: '5px'
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="#00d8ff" margin="0px auto 80px">
              React
            </Heading>
            <Text caps textColor="tertiary" textFont="primary">a sneak peek...</Text>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Text style={textInline} caps textColor="white" textFont="primary">
                Meet
              </Text>
              <Text style={textInline} caps textColor="#00d8ff" textFont="primary">
                React
              </Text>
            <Text textColor="white" textFont="primary" margin="80px auto 0px">
              Not another JavaScript Framework
            </Text>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Text style={textInline} caps textColor="white" textFont="primary">
                Meet
              </Text>
              <Text style={textInline} caps textColor="#00d8ff" textFont="primary">
                React
              </Text>
            <Text textColor="white" textFont="primary" margin="80px auto 0px">
              But just a library for creating user interfaces
            </Text>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Text style={textInline} caps textColor="white" textFont="primary">
                Meet
              </Text>
              <Text style={textInline} caps textColor="#00d8ff" textFont="primary">
                React
              </Text>
            <Text textColor="white" textFont="primary" margin="80px auto 0px">
              Renders your UI and responds to events
            </Text>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Text style={textInline} caps textColor="white" textFont="primary">
                Meet
              </Text>
              <Text style={textInline} caps textColor="#00d8ff" textFont="primary">
                React
              </Text>

              <Text  margin="80px auto 0px">
              </Text>

            <Text style={textInline} textColor="white" textFont="primary">
              a.k.a. The "v" in
            </Text>
            <Text style={textInline} caps textColor="white" textFont="primary">
              M
            </Text>
            <Text style={textInline} caps textColor="#00d8ff" textFont="primary">
              V
            </Text>
            <Text style={textInline} caps textColor="white" textFont="primary">
              C
            </Text>
          </Slide>


          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="#00d8ff">
                Build Components, Not Templates
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Re-render, don't mutate
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="#00d8ff">
                Fast Virtual DOM
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Text caps textColor="#00d8ff" textFont="primary">
                JSX
              </Text>
              <Text textColor="white" textFont="primary" margin="80px auto 0px">
                Allows you to write JS & XML/HTML
              </Text>
              <Appear fid="5">
                <Text caps  textColor="white" textFont="primary" margin="20px auto 0px">
                  Together!
                </Text>
              </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
            lang="jsx"
            source={require("raw!../assets/deck.example")}
            margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Text style={textInline} textColor="white" textFont="primary" >
                Why
              </Text>
              <Text style={textInline} caps textColor="#00d8ff" textFont="primary">
                JSX
              </Text>
              <Text style={textInline} textColor="white" textFont="primary" >
                ?
              </Text>
              <Appear fid="6">
                <Text style={textInline} caps textColor="white" textFont="primary" margin="80px auto 0px">
                  Everything in React is a component
                </Text>
              </Appear>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Heading style={textInline} textColor="#00d8ff" textFont="primary">
                React
              </Heading>
              <Heading style={textInline} textColor="white" textFont="primary" margin="0px auto 80px">
                has no...
              </Heading>
              <Appear><Text caps textColor="white" textFont="primary" margin="80px auto 20px">controllers</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">directives</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">templates</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">global event listeners</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 40px">models</Text></Appear>
              <Appear style={textInline}><Text  bold  textColor="white" textFont="primary">Just</Text></Appear>
              <Appear style={textInline}><Text  bold  textColor="white" textFont="primary">Components</Text></Appear>
          </Slide>

          {/* <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Heading textColor="white" textFont="primary">
                Shopping Car Component
              </Heading>
              <Image src="../assets/shopping_cart.png"/>
              <Image src={images.kat.replace("/", "")} height="293px"/>
          </Slide> */}
          <Slide transition={["slide"]} notes="Think about all the complexity that comes with our project today. Let's take the date picker for example...">
              <Text  textColor="#00d8ff" textFont="primary" margin="0px auto 80px">
              Components
              </Text>
              <Text textColor="white" textFont="primary">
              are the best
              </Text>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Heading textColor="white" textFont="primary">
                Sepration of
              </Heading>
              <Heading textColor="#00d8ff" textFont="primary">
                Components
              </Heading>
              <Appear><Text caps textColor="white" textFont="primary"  margin="80px auto 20px">composable</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">reusable</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">maintainable</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">testable</Text></Appear>
              <Appear style={textInline}><Text  bold  textColor="white" textFont="primary" margin="0px auto 20px">*IF*</Text></Appear>
              <Appear style={textInline}><Text  bold  textColor="white" textFont="primary" margin="0px auto 20px">Components are truly self-contained</Text></Appear>
          </Slide>

          <Slide transition={["slide"]} notes="Every component has 'state' and 'props'. Props are Immutable. State is mutable. State can also become props. Data only flows one way, so there is one source of truth. Events flow up while Data flows down. ">
              <Text style={textInline} textColor="#00d8ff" textFont="primary">
              Immutable
              </Text>
              <Text style={textInline} textColor="white" textFont="primary">
              Data
              </Text>
              <Text margin="80px auto 0px"></Text>
              <Appear style={textInline}><Text textColor="white" textFont="primary">with</Text></Appear>
              <Appear style={textInline}><Text textColor="#00d8ff" textFont="primary">state</Text></Appear>
              <Appear style={textInline}><Text textColor="white" textFont="primary" >&</Text></Appear>
              <Appear style={textInline}><Text textColor="#00d8ff" textFont="primary" >props</Text></Appear>
          </Slide>

          <Slide transition={["slide"]} notes="This is what makes everything mesh together so well in the view">
              <Text  textColor="#00d8ff" textFont="primary" margin="0px auto 80px">
              Virtual DOM
              </Text>
              <Appear style={textInline} ><Text textColor="white" textFont="primary">makes re-rendering on every change</Text></Appear>
              <Appear style={textInline} ><Text textColor="#00d8ff" textFont="primary">fast</Text></Appear>
          </Slide>

          <Slide transition={["slide"]} notes="React isn't another bulky Framework">
              <Heading style={textInline} textColor="white" textFont="primary">
                On every
              </Heading>
              <Heading style={textInline} textColor="#00d8ff" textFont="primary">
                update
              </Heading>
              <Appear><Text caps textColor="white" textFont="primary"  margin="80px auto 20px">builds a new virtual DOM subtree</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">diffs it with the old one</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">computes the minimal set of DOM mutations and puts them in a queue</Text></Appear>
              <Appear><Text caps textColor="white" textFont="primary" margin="0px auto 20px">and batch executes all updates</Text></Appear>
              {/* <Appear style={textInline}><Text  bold  textColor="white" textFont="primary">*IF*</Text></Appear> */}
              {/* <Appear style={textInline}><Text  bold  textColor="white" textFont="primary">Components are truly self-contained</Text></Appear> */}
          </Slide>

          <Slide transition={["slide"]} notes="This is what makes everything mesh together so well in the view">
              <Text  textColor="#00d8ff" textFont="primary" margin="0px auto 80px">
              Virtual DOM
              </Text>
              <Appear style={textInline} ><Text textColor="white" textFont="primary">is simple</Text></Appear>
              <Appear style={textInline} ><Text textColor="white" textFont="primary">and fast</Text></Appear>
          </Slide>

          <Slide transition={["slide"]} notes="This is what makes everything mesh together so well in the view">
              <Appear style={textInline} ><Text textColor="white" textFont="primary">and</Text></Appear>
              <Appear style={textInline} ><Text textColor="white" textFont="primary">so is</Text></Appear>
              <Appear><Text textColor="#00d8ff" textFont="primary" margin="80px auto 20px">React</Text></Appear>
          </Slide>

          <Slide transition={["slide"]} notes="This is what makes everything mesh together so well in the view">
              <Appear><Heading textColor="white" textFont="primary">Thanks!</Heading></Appear>
          </Slide>

          {/* <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide> */}



          {/* <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide> */}

          {/* <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide> */}

          {/* <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide> */}

          {/* <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide> */}

          {/* <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide> */}

        </Deck>
      </Spectacle>
    );
  }
}
