import React from "react";

//const Dialog = React.lazy(() => import("app_two/Dialog"));
const PageContent = React.lazy(() => import("app_two/Content"));

const Page1 = () => {
    return (
        <div>
            <React.Suspense fallback="Loading Material UI Dialog...">
                <PageContent />
            </React.Suspense>
        </div>
    );
}

export default Page1;
