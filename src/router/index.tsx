import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./webRoutes";
import React from 'react';
import loadable from '@loadable/component';

// import CustomError from "../common/CustomError";

const RootPage = loadable(() => import("../views"));
const HomePage = loadable(() => import("../views/HomePage"));

export const RouterRoutes = () => {
	return (
		<BrowserRouter>
			<ResetPage />
			<Routes>
				<Route path={ROUTES.HOME.route} element={<RootPage />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

const ResetPage = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location]);

	return null;
};