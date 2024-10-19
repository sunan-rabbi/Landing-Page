import App from "@/App";
import About from "@/Page/About";
import Home from "@/Page/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

export default router