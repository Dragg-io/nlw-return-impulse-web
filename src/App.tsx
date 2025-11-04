import { Widget } from "./components/Widget/Widget";
import WppButton from "./components/WppButton/WppButton";
import logoLeooImage from './assets/leoLogo.png';
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.c360a.salesforce.com/beacon/c360a/a3af887d-712a-4a1a-843a-293d0d65420e/scripts/c360a.min.js";
    script.defer = true;
    script.async = true;
    script.onload = () => {
      try {
        // @ts-ignore
        window.embeddedservice_bootstrap.settings.language = "pt_BR";
        // @ts-ignore
        window.embeddedservice_bootstrap.init(
          "00DHr000003YtPL",
          "Chatbot_Addiante_Site",
          "https://addiante.my.site.com/ESWChatbotAddianteSite1751912911775",
          {
            scrt2URL: "https://addiante.my.salesforce-scrt.com",
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
