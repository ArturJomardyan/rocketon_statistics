import {CefFilter} from "@/features/cef-filter-all";
import {CefFilterDashboard} from "@/features/cef-filter-all-dashboard/ui/CefFilterDashboard";

export const FilterSection = () => {

    return (
        <>
            <CefFilter/>
            <CefFilterDashboard/>
        </>
    )
}