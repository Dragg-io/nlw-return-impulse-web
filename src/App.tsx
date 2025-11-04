import { Widget } from "./components/Widget/Widget";
import WppButton from "./components/WppButton/WppButton";
import logoLeooImage from './assets/leoLogo.png';
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.c360a.salesforce.com/beacon/c360a/a3af887d-712a-4a1a-843a-293d0d65420e/scripts/c360a.min.js";
    document.body.appendChild(script);
 
    return () => {
      // Opcional: remover o script ao sair da página, se necessário
      document.body.removeChild(script);
    };
  }, []);
  return <>
    {/* <WppButton />
    <Widget /> */}
    <img src={logoLeooImage} alt="Logo Leoo" className="w-[300px] max-w-[90%]" />
  </>
}
