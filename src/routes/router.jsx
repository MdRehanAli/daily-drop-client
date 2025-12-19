import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Loading from "../components/Loading/Loading";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/DashBoard/MyParcels/MyParcels";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentSuccess from "../pages/DashBoard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/DashBoard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/DashBoard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/DashBoard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRider from "../pages/DashBoard/AssignRider/AssignRider";
import AssignedDeliveries from "../pages/DashBoard/AssignedDeliveries/AssignedDeliveries";
import RiderRoute from "./RiderRoute";
import CompletedDeliveries from "../pages/DashBoard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/rider',
                element: <PrivateRoute><Rider></Rider></PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/send-parcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/parcel-track/:trackingId',
                Component: ParcelTrack,
            },
            {
                path: '/*',
                Component: Error,
            }
        ],

    },
    {
        path: '/',
        Component: AuthLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels,
            },
            {
                path: 'payment/:parcelId',
                Component: Payment,
            },
            {
                path: 'payment-history',
                Component: PaymentHistory,
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess,
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled,
            },

            // Rider only Routes 
            {
                path: 'assigned-deliveries',
                element: <RiderRoute><AssignedDeliveries></AssignedDeliveries></RiderRoute>
            },
            {
                path: 'completed-deliveries',
                element: <RiderRoute><CompletedDeliveries></CompletedDeliveries></RiderRoute>
            },

            // Admin Only Routes 
            {
                path: 'approve-riders',
                element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
            },
            {
                path: 'assign-riders',
                element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
            },
            {
                path: 'users-management',
                element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
            },
        ]
    }
])

export default router;