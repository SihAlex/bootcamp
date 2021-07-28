import { OrdersContextProvider } from "./components/store/orders-context";
import Header from "./components/Layout/Header";
import InfoCard from "./components/Layout/InfoCard";
import MealsList from "./components/MealsList/MealsList";

function App() {
  return (
    <OrdersContextProvider>
      <Header />
      <InfoCard />
      <MealsList />
    </OrdersContextProvider>
  );
}

export default App;
