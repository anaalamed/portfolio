export interface Theme {
  topBar: string;
  hero: string;
  body: string;
  button: string;
}

export const lightTheme: Theme = {
  topBar: "#003d4d",
  hero: "#007a99",
  body: "#ff9999",
  button: "#ff6666",
};

export const darkTheme: Theme = {
  topBar: "#00001a",
  hero: "#000033",
  body: "#600080",
  button: "#39004d",
};
