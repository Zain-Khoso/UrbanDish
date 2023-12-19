// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { Spinner } from "./components/Loaders/spinner.styled";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const NotFound = lazy(() => import("./components/Errors/NotFound/NotFound"));

// Router Setup.
export default createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <Home />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <NotFound />
            </Suspense>
        ),
    },
    {
        path: "/about-us",
        element: (
            <Suspense fallback={<Spinner />}>
                <AboutUs />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <NotFound />
            </Suspense>
        ),
    },
]);
