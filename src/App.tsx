import { Widget } from "./components/Widget/Widget";
import WppButton from "./components/WppButton/WppButton";
import logoLeooImage from './assets/leoLogo.png';

export function App() {
  return <>
    {/* <WppButton />
    <Widget /> */}
    <img src={logoLeooImage} alt="Logo Leoo" className="w-[300px] max-w-[90%]" />
  </>
}
