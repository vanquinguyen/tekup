import Header from "./header/Header";
import Item from "./item/Item";
import ItemList from "./item/ItemList";
import { fakeData } from "./item/fakeData";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <ItemList>
        {fakeData.map((item, index) => (
          <Item key={index} props={item}></Item>
        ))}
      </ItemList>
    </div>
  );
}

export default App;
