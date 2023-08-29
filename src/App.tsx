import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

import { useState } from "react";
import ListPosts from "./contexts/ListPosts";

interface Issue {
  id: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  number: number;
}

export function App() {
  const [myState, setMyState] = useState<Issue[]>([]);

  return (
    <ListPosts.Provider value={{ myState, setMyState }}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ListPosts.Provider>
  );
}
