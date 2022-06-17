import { Image } from "react-native";

const data = [
  {
    title: "Accédez aux outils",
    body: "Outils de productivité, par les artisans , pour les artisans",
    image: <Image
      source={require("../assets/images/tuto1.png")}
      style={{
        width: 150,
        height: 150,
        margin: "auto"
      }}
    />,
  },
  {
    title: "Gérez vos notes",
    body: "Organise tes idées et ton journal 24/7 pour éviter des oublies ",
    image: <Image
      source={require("../assets/images/tuto2.png")}
      style={{
        width: 150,
        height: 150,
        margin: "auto"
      }}
    />,
  },
  {
    title: "Gérez vos projets",
    body: "Planifie tes actions et sois productif avec éfficacité",
    image: <Image
      source={require("../assets/images/tuto3.png")}
      style={{
        width: 150,
        height: 150,
        margin: "auto"
      }}
    />,
    ending: true
  },
];

export default data;