import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { BrowserRouter, Routes, Route } from "react-router";

import "./style/index.css"
import ROUTES from "./routes"
import MainLayout from "./layouts/MainLayout";

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            
            {ROUTES.map((route, index) => {
              const Layout = route.layout || MainLayout
              return <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
            })}

          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
