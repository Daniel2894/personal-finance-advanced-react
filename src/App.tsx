import Card from "./components/Card/Card";

function App() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
      <Card>01</Card>
      <Card>02</Card>
      <Card>03</Card>
      <Card className="self-start">01</Card>
      <Card className="col-span-2 max-h-100 overflow-y-auto overflow-x-hidden custom-scrollbar self-start">
        05
      </Card>
    </div>
  );
}

export default App;
