export function GetGenderRate(value: number): /* string |  */ Array<string> {
  /* if (value === -1) return "Genderless"; */

  const female = (value / 8) * 100;

  const male = 100 - female;

  return [`♂ ${male}%`, `♀ ${female}%`];
}
