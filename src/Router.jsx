// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { Spinner } from "./components/Loaders/spinner.styled";
import { ErrorPage } from "./components/Errors";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

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
                <ErrorPage />
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
                <ErrorPage />
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
                <ErrorPage />
            </Suspense>
        ),
    },
    {
        path: "/cart",
        element: (
            <Suspense fallback={<Spinner />}>
                <Cart />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<Spinner />}>
                <ErrorPage />
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
                <ErrorPage />
            </Suspense>
        ),
    },
]);
