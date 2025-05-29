import { Widget } from "./components/Widget/Widget";
import WppButton from "./components/WppButton/WppButton";
import logoLeooImage from './assets/leoLogo.png';
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://addiante--devleoo1.sandbox.my.site.com/ESWBotAddiante1742584171174/assets/js/bootstrap.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      try {
        // @ts-ignore
        window.embeddedservice_bootstrap.settings.language = "pt_BR";
        // @ts-ignore
        window.embeddedservice_bootstrap.init(
          "00DHZ000004qvj3",
          "Bot_Addiante",
          "https://addiante--devleoo1.sandbox.my.site.com/ESWBotAddiante1742584171174",
          {
            scrt2URL: "https://addiante--devleoo1.sandbox.my.salesforce-scrt.com",
          }
        );
      } catch (err) {
        console.error("Erro ao carregar Embedded Messaging:", err);
      }
    };
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
