// Utils
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { PageLoader } from "./components/Global/Loaders.styled";
// import Profile from "./components/Profile/Profile";
// import AboutUs from "./components/AboutUs/AboutUs";
// import Recipes from "./components/Recipes/Recipes";
// import RecipyHome from "./components/Recipes/RecipyHome";
// import RecipyDetail from "./components/Recipes/RecipyDetail";
// import BuyMeCoffee from "./components/BuyMeCoffee/BuyMeCoffee";
// import ContactUs from "./components/ContactUs/ContactUs";
import NotFound from "./components/Global/NotFound";

// Lazy Loaders
const LazyHome = lazy(() => import("./components/Home/Home"));

// Router Setup.
export default createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<PageLoader />}>
                <LazyHome />
            </Suspense>
        ),
        errorElement: <NotFound />,
    },
    // {
    //     path: "/profile",
    //     element: <Profile />,
    //     errorElement: <NotFound />,
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
