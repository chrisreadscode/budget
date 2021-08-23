import Head from "next/head";
import {
  Button,
  Input,
  Header,
  Label,
  Popup,
  Segment,
} from "semantic-ui-react";

export default function Home() {
  const square = { width: 200, height: 200 };

  return (
    <div className="container">
      <Head>
        <title>Budget</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className="title">Welcome to Budget!</h1>

        <br />
        <p className="description">
          Get started by setting a daily amount available to withdraw
          <br />
          near the bottom of the screen
        </p>

        <div>
          <Button
            // color="red"
            icon="add"
            floated="right"
            style={{ position: "relative", right: "125px" }}
          >
            $100 Debt
          </Button>
          {/* <span>Hi</span> */}

          <Popup
            content="Add today's sum to your debt"
            size="big"
            trigger={
              <Button
                circular
                icon="add"
                floated="right"
                style={{ position: "relative", left: "200px" }}
              />
            }
          />
        </div>

        <div>
          <br />
          <Popup
            content="Click to add a recurring +/-"
            size="big"
            trigger={
              <Segment circular inverted style={square}>
                <Header as="h1">
                  $60
                  <Header sub color="green">
                    left today
                  </Header>
                </Header>
              </Segment>
            }
          />
        </div>
        <br />
        <br />
        <div>
          {/* <Segment> */}
          <Button color="green">-/+</Button>
          <Button.Group>
            <Button color="black">1</Button>
            <Button color="black">5</Button>
            <Button color="black">2</Button>
            <Button color="black">50</Button>
            <Button color="black">100</Button>
          </Button.Group>
          {/* </Segment> */}
        </div>
        <br />
        <br />
        <div>
          <Input
            labelPosition="left"
            type="text"
            placeholder="Daily Amount Available"
          >
            <Label>$</Label>
            <input />
          </Input>
          <br />
          <br />
          <Button fluid>Submit</Button>
        </div>

        <br />
        <br />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
