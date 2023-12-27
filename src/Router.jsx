// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { Spinner } from "./components/Loaders/spinner.styled";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Menu = lazy(() => import("./pages/Menu"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./components/Errors/NotFound"));

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
    {
        path: "/menu",
        element: (
            <Suspense fallback={<Spinner />}>
                <Menu />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <NotFound />
            </Suspense>
        ),
    },
    {
        path: "/contact-us",
        element: (
            <Suspense fallback={<Spinner />}>
                <ContactUs />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <NotFound />
            </Suspense>
        ),
    },
]);
