import React from "react";
import { Route, Routes } from 'react-router-dom';
import withRoot from "./modules/withRoot";
import Privacy from "./pages/Privacy";
import NotFound404 from './404';
import Article from "./pages/Article";

function Articles() {
    return (
        <React.Fragment>
            <Routes>
                <Route path={`privacy`} element={<Privacy />} />
                <Route path={`artisti-del-silenzio`} element={<Article article={"artisti_del_silenzio"} />} />
                <Route path={`pdz-incontra-matteo-righetto`} element={<Article article={"pdz_incontra_matteo_righetto"} />} />
                <Route path={`*`} element={<NotFound404 />} />
            </Routes>
        </React.Fragment>
    )
}

export default withRoot(Articles);