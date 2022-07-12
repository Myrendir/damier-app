import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import DetailsCommercial from "../components/Pages/DetailsCommercial";
import DetailsExploitation from "../components/Pages/DetailsExploitation";
import DetailsPurchase from "../components/Pages/DetailsPurchase";
import DetailsEnvironment from "../components/Pages/DetailsEnvironment";
import DetailsHumanRessource from "../components/Pages/DetailsHumanRessource";
import DetailTechnical from "../components/Pages/DetailTechnical";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/detailPurchase"} element={<DetailsPurchase/>}/>
                <Route path={"/detailsEnvironment"} element={<DetailsEnvironment/>}/>
                <Route path={"/detailsExploitation"} element={<DetailsExploitation/>}/>
                <Route path={"/detailsHumanRessource"} element={<DetailsHumanRessource/>}/>
                <Route path={"/detailsCommercial"} element={<DetailsCommercial/>}/>
                <Route path={"/detailTechnical"} element={<DetailTechnical/>}/>               
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;