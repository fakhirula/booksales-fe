import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Dashboard from "./pages/admin"
import AdminLayout from "./layouts/admin"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<PublicLayout />}>
              <Route index element={<Home />} />
            </Route>
                        
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Dashboard />} />
            </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
