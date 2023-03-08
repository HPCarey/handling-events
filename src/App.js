import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingList from "./components/RenderingList";

function App() {
  return <div className="App">
    {/* <EventsFunctional />
    <EventsClass /> */}
    {/* <EventBinding /> */}
    {/* <ConditionalRenderingClass />
    <ConditionalRenderingFunctional connected={true}/> */}
    {/* <NestingComponents /> */}
    {/* <MethodsAsPropsParent /> */}
    <RenderingList />
  </div>;
}

export default App;
