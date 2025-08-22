import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// generates after dev/build commands
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree, basepath: import.meta.env.BASE_URL });

// for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    );
}
