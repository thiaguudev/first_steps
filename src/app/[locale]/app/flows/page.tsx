import { Button } from "@/components/ui/button";

export default async function FlowsPage() {
  const ReactDOMServer = (await import("react-dom/server")).default;

  const handleOnClick = () => console.log("Click");

  function Welcome() {
    return <Button onClick={handleOnClick}>Welcome button</Button>;
  }

  function Card() {
    return <Welcome />;
  }

  console.log(ReactDOMServer.renderToString(<Card />));
  return <div />;
}
