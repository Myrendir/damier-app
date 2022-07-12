import { ReactComponent as Euro } from "../Icon/euros.svg";
import { ReactComponent as Stats } from "../Icon/Icon_ionic-ios-stats.svg";
import { ReactComponent as User } from "../Icon/Icon_awesome-user-alt.svg";
import { ReactComponent as Meca } from "../Icon/Icon_awesome-cogs.svg";
import { ReactComponent as Ticket } from "../Icon/Icon_awesome-ticket-alt.svg";
import { ReactComponent as Feuille } from "../Icon/Icon_awesome-leaf.svg";

export const links = [
  {
    name: "Achat",
    color: "vert",
    icon: <Euro/>,
    dataFace: "show-front",
  },
  {
    name: "Commercial",
    color: "jaune",
    icon: <Stats/>,
    dataFace: "show-back",
  },
  {
    name: "R. Humaines",
    color: "rose",
    icon: <User/>,
    dataFace: "show-right",
  },
  {
    name: "Technique",
    color: "orange",
    icon: <Meca/>,
    dataFace: "show-left",
  },
  {
    name: "Exploitation",
    color: "bleu",
    icon: <Ticket/>,
    dataFace: "show-top",
  },
  {
    name: "Environnement",
    color: "vert",
    icon: <Feuille/>,
    dataFace: "show-bottom",
  },
];