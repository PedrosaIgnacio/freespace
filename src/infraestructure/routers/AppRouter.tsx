import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import VisionBoard from "../pages/visionboard";
import PrivateLayout from "../layuts/private-layout";
import { useAuthStore } from "../zustand/auth/useAuthStore";
import Cash from "../pages/cash";
import NewEntryService from "../pages/visionboard/new";
import Register from "../pages/auth/register";
import OtpCode from "../pages/auth/otp-code";
import Verify from "../pages/auth/verify";

export default function AppRouter() {
    const { access } = useAuthStore();
    return (
        <BrowserRouter>
            <Routes>
                {
                    access ?
                        <>
                            <Route path="/visionboard" element={
                                <PrivateLayout>
                                    <VisionBoard />
                                </PrivateLayout>}
                            />
                            <Route path="/visionboard/new" element={
                                <PrivateLayout>
                                    <NewEntryService />
                                </PrivateLayout>}
                            />
                            <Route path="/cash" element={
                                <PrivateLayout>
                                    <Cash />
                                </PrivateLayout>}
                            />
                            <Route path="/*" element={<Navigate to="/visionboard" />} />
                        </>
                        :
                        <>
                            <Route path="/auth/login" element={<Login />} />
                            <Route path="/auth/login/verify" element={<Verify />} />
                            <Route path="/auth/register" element={<Register />} />
                            <Route path="/auth/register/otp" element={<OtpCode />} />
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </>
                }
            </Routes>
        </BrowserRouter>
    )
}