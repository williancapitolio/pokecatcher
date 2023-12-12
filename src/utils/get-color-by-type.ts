const bug = "#8BD674";
const dark = "#6F6E78";
const dragon = "#7383B9";
const electric = "#F2CB55";
const fairy = "#EBA8C3";
const fighting = "#EB4971";
const fire = "#FFA756";
const flying = "#83A2E3";
const ghost = "#8571BE";
const grass = "#8BBE8A";
const ground = "#F78551";
const ice = "#91D8DF";
const normal = "#B5B9C4";
const poison = "#9F6E97";
const psychic = "#FF6568";
const rock = "#D4C294";
const steel = "#4C91B2";
const water = "#58ABF6";
const defaultColor = "#D3D3D3";

export function GetColorByType(type: string) {
  if (type === "bug") return bug;
  else if (type === "dark") return dark;
  else if (type === "dragon") return dragon;
  else if (type === "electric") return electric;
  else if (type === "fairy") return fairy;
  else if (type === "fighting") return fighting;
  else if (type === "fire") return fire;
  else if (type === "flying") return flying;
  else if (type === "ghost") return ghost;
  else if (type === "grass") return grass;
  else if (type === "ground") return ground;
  else if (type === "ice") return ice;
  else if (type === "normal") return normal;
  else if (type === "poison") return poison;
  else if (type === "psychic") return psychic;
  else if (type === "rock") return rock;
  else if (type === "steel") return steel;
  else if (type === "water") return water;
  else return defaultColor;
}
