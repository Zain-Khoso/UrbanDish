// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { Spinner } from "./components/Loaders/spinner.styled";

const Home = lazy(() => import("./pages/Home/index"));
const AboutUs = lazy(() => import("./pages/AboutUs/index"));
const Menu = lazy(() => import("./pages/Menu/index"));
const ContactUs = lazy(() => import("./pages/ContactUs/index"));
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
