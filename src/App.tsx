import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddTransactionForm from "./components/AddTransactionForm/AddTransactionForm";

function App() {
  return (
    <div className="dark font-weight-medium min-h-screen bg-background text-foreground">
      <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto dark">
        <Card>
          <CardHeader>
            <CardTitle>My Balance</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My Goals</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <AddTransactionForm />
          </CardContent>
        </Card>
        <Card className="self-start">
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
          </CardHeader>
        </Card>
        <Card className="col-span-2 max-h-100 overflow-y-auto overflow-x-hidden custom-scrollbar self-start">
          <CardHeader>
            <CardTitle>My Transactions</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default App;
