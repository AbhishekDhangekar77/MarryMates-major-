import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/RouteConstants";
import Home  from "./Home";
import Services from "./ServicesPage";
import Signup from "./Signup";
import Login from "./Login";
import Venues from "./Venues";
import Vendors from "./Vendors";
import Aboutus from "./AboutUs";
import ClientsFeedback from "./ClientsFeedback";
import ClientSignup from "./ClientSignup";
import VendorSignup from "./VendorSignup";
import Admin from "../admin/Admin";
import AdminVendors from "../admin/AdminVendors";
import AdminVenues from "../admin/AdminVenues";
import AdminBookings from "../admin/AdminBookings";
import AdminClient from "../admin/AdminClients";
import AdminReports from "../admin/AdminReports";
import Gallery from "./Gallery";
import Vendor from "../Vendor/Vendor";
import Vendorprofile from "../Vendor/Vendorprofile";
//import VendorVenues from "../Vendor/Vendor";
import VendorBookings from "../Vendor/VendorBookings";
import VendorServices from "../Vendor/VendorServices";
import VendorBills from "../Vendor/VendorBills";
import Client from "../Client/Client";
import ClientEventDetails from "../Client/ClientEventDetails";
import ClientGuestList from "../Client/ClientGuestList";
import ClientManageBills from "../Client/ClientManageBills";
import ClientDashboard from "../Client/ClientDashboard";
import ClientProfile from "../Client/ClientProfile";
import BookingSummary from "../Client/BookingSummary";
import ClientFeedback  from "../Client/ClientFeedback";

export function AppRouter(){
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}></Route>
            
            <Route path={ROUTES.SERVICES} element={<Services/>}></Route>
            <Route path={ROUTES.SIGNUP} element={<Signup/>}></Route>
            <Route path={ROUTES.CLIENTSIGNUP} element={<ClientSignup/>}></Route>
            <Route path={ROUTES.VENDORSIGNUP} element={<VendorSignup/>}></Route>
            <Route path={ROUTES.LOGIN} element={<Login/>}></Route>
            <Route path={ROUTES.VENDORS} element={<Vendors/>}></Route>
            <Route path={ROUTES.VENUES} element={<Venues/>}></Route>
            <Route path={ROUTES.ABOUTUS} element={<Aboutus/>}></Route>
            <Route path={ROUTES.ClientsFeedback} element={<ClientsFeedback/>}></Route>
            <Route path={ROUTES.ADMIN} element={<Admin />} />
            <Route path={ROUTES.ADMIN_VENDORS} element={<AdminVendors />} />
            <Route path={ROUTES.ADMIN_VENUES} element={<AdminVenues />} />
            <Route path={ROUTES.ADMIN_BOOKINGS} element={<AdminBookings />} />
            <Route path={ROUTES.ADMIN_CLIENTS} element={<AdminClient />} />
            <Route path={ROUTES.ADMIN_REPORTS} element={<AdminReports />} />
            <Route path={ROUTES.GALLERY} element={<Gallery/>}></Route>
            <Route path={ROUTES.VENDOR} element={<Vendor />} />
            <Route path={ROUTES.VENDOR_PROFILE} element={<Vendorprofile />} />
            <Route path={ROUTES.VENDOR_BOOKINGS} element={<VendorBookings />} />
            <Route path={ROUTES.VENDOR_SERVICES} element={<VendorServices />} />
            <Route path={ROUTES.VENDOR_BILLS} element={<VendorBills />} />
            <Route path={ROUTES.CLIENT} element={<Client />} />
            <Route path={ROUTES.CLIENT_EVENT_DETAILS} element={<ClientEventDetails />} />
            <Route path={ROUTES.CLIENT_GUEST_LIST} element={<ClientGuestList />} />
            <Route path={ROUTES.CLIENT_MANAGE_BILLS} element={<ClientManageBills />} />
            <Route path={ROUTES.CLIENT_DASHBOARD} element={<ClientDashboard />} />
            <Route path={ROUTES.CLIENT_PROFILE} element={<ClientProfile />} />
            <Route path={ROUTES.BOOKING_SUMMARY} element={<BookingSummary />} />
            <Route path={ROUTES.CLIENTS_FEEDBACK} element={<ClientsFeedback />} />
           
           
       </Routes> 
    )
}