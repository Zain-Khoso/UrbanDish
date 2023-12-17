// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { PageLoader } from "./components/Global/Loaders.styled";
// import AboutUs from "./components/AboutUs/AboutUs";
// import Recipes from "./components/Recipes/Recipes";
// import RecipyHome from "./components/Recipes/RecipyHome";
// import RecipyDetail from "./components/Recipes/RecipyDetail";
// import BuyMeCoffee from "./components/BuyMeCoffee/BuyMeCoffee";
// import ContactUs from "./components/ContactUs/ContactUs";

// Lazy Loaders
const LazyHome = lazy(() => import("./components/Home/Home"));
const LazyError = lazy(() =>
    import("./components/Global/Errors/NotFound/NotFound")
);
// const LazyProfile = lazy(() => import("./components/Profile/Profile"));

// Router Setup.
export default createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<PageLoader />}>
                <LazyHome />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<PageLoader />}>
                <LazyError />
            </Suspense>
        ),
    },
    // {
    //     path: "/profile",
    //     element: (
    //         <Suspense fallback={<PageLoader />}>
    //             <LazyProfile />
    //         </Suspense>
    //     ),
    //     errorElement: (
    //         <Suspense fallback={<PageLoader />}>
    //             <LazyError />
    //         </Suspense>
    //     ),
    // },
    // {
    //     path: "/about-us",
    //     element: <AboutUs />,
    //     errorElement: <NotFound />,
    // },
    // {
    //     path: "/recipes",
    //     element: <Recipes />,
    //     errorElement: <NotFound />,
    //     children: [
    //         {
    //             path: "",
    //             element: <RecipyHome />,
    //         },
    //         {
    //             path: ":recipyID",
    //             element: <RecipyDetail />,
    //         },
    //     ],
    // },
    // {
    //     path: "/buy-me-coffee",
    //     element: <BuyMeCoffee />,
    //     errorElement: <NotFound />,
    // },
    // {
    //     path: "/contact-us",
    //     element: <ContactUs />,
    //     errorElement: <NotFound />,
    // },
]);
