import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Layout = React.lazy(() => import("./pages/Layout/Layout"));

const Login = React.lazy(() => import("./pages/Login/Login"));

const Auth = React.lazy(() => import("./pages/Dashboard/Auth"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));

// dashboard pages
const Main = React.lazy(() => import("./pages/Dashboard/pages/Home/Home"));
const Timetable = React.lazy(() =>
  import("./pages/Dashboard/pages/Timetable/Timetable")
);
const Subjects = React.lazy(() =>
  import("./pages/Dashboard/pages/Subjects/Subjects")
);
const Eduplan = React.lazy(() =>
  import("./pages/Dashboard/pages/Eduplan/Eduplan")
);
const Attendance = React.lazy(() =>
  import("./pages/Dashboard/pages/Attendance/Attendance")
);
const Payment = React.lazy(() =>
  import("./pages/Dashboard/pages/Payment/Payment")
);
const Folders = React.lazy(() =>
  import("./pages/Dashboard/pages/Folders/Folders")
);
const Library = React.lazy(() =>
  import("./pages/Dashboard/pages/Library/Library")
);
const Options = React.lazy(() =>
  import("./pages/Dashboard/pages/Settings/Settings")
);
const Help = React.lazy(() => import("./pages/Dashboard/pages/Help/Help"));

// Timetable tabs
const MainSubjects = React.lazy(() =>
  import("./pages/Dashboard/pages/Timetable/Tabs/MainSubjects/MainSubjects")
);
const AdditionalLessons = React.lazy(() =>
  import(
    "./pages/Dashboard/pages/Timetable/Tabs/AdditionalLessons/AdditionalLessons"
  )
);

// Subjects tabs
const UzbekSubjects = React.lazy(() =>
  import("./pages/Dashboard/pages/Subjects/Tabs/UzbekSubjects/UzbekSubjects")
);
const RussianSubjects = React.lazy(() =>
  import(
    "./pages/Dashboard/pages/Subjects/Tabs/RussianSubjects/RussianSubjects"
  )
);

//Eduplan tabs
const FullTimeEducation = React.lazy(() =>
  import(
    "./pages/Dashboard/pages/Eduplan/Tabs/FullTileEducation/FullTileEducation"
  )
);
const CorrespondenceEducation = React.lazy(() =>
  import(
    "./pages/Dashboard/pages/Eduplan/Tabs/CorrespondenceEducation/CorrespondenceEducation"
  )
);

// Payment tabs
const FirstTimePaymant = React.lazy(() =>
  import(
    "./pages/Dashboard/pages/Payment/Tabs/FirstTimePaymant/FirstTimePaymant"
  )
);
const FullTimePaymant = React.lazy(() =>
  import("./pages/Dashboard/pages/Payment/Tabs/FullTimePaymant/FullTimePaymant")
);
const LastTimePaymant = React.lazy(() =>
  import("./pages/Dashboard/pages/Payment/Tabs/LastTimePaymant/LastTimePaymant")
);

//Library tabs
const MostRead = React.lazy(() =>
  import("./pages/Dashboard/pages/Library/Tabs/MostPopular/MostPopular")
);
const LastRead = React.lazy(() =>
  import("./pages/Dashboard/pages/Library/Tabs/LastRead/LastRead")
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {useRoutes([
          {
            path: "/",
            element: <Layout />,
            children: [
              {
                index: true,
                element: <Home />,
              },
            ],
          },
          {
            path: "/",
            element: <Auth />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                  {
                    index: true,
                    element: <Main />,
                  },
                  {
                    path: "timetable",
                    element: <Timetable />,
                    children: [
                      {
                        index: true,
                        element: <MainSubjects />,
                      },
                      {
                        path: "additionallessons",
                        element: <AdditionalLessons />,
                      },
                    ],
                  },
                  {
                    path: "subjects",
                    element: <Subjects />,
                    children: [
                      {
                        index: true,
                        element: <UzbekSubjects />,
                      },
                      {
                        path: "russiansubjects",
                        element: <RussianSubjects />,
                      },
                    ],
                  },
                  {
                    path: "eduplan",
                    element: <Eduplan />,
                    children: [
                      {
                        index: true,
                        element: <FullTimeEducation />,
                      },
                      {
                        path: "correspondence",
                        element: <CorrespondenceEducation />,
                      },
                    ],
                  },
                  {
                    path: "attendance",
                    element: <Attendance />,
                  },
                  {
                    path: "payment",
                    element: <Payment />,
                    children: [
                      {
                        index: true,
                        element: <FirstTimePaymant />,
                      },
                      {
                        path: "full-time-payment",
                        element: <FullTimePaymant />,
                      },
                      {
                        path: "last-time-payment",
                        element: <LastTimePaymant />,
                      },
                    ],
                  },
                  {
                    path: "folders",
                    element: <Folders />,
                  },
                  {
                    path: "library",
                    element: <Library />,
                    children: [
                      {
                        index: true,
                        element: <MostRead />,
                      },
                      {
                        path: "lastread",
                        element: <LastRead />,
                      },
                    ],
                  },
                  {
                    path: "settings",
                    element: <Options />,
                  },
                  {
                    path: "help",
                    element: <Help />,
                  },
                ],
              },
            ],
          },
          {
            path: "/login",
            element: <Login />,
          },
        ])}
      </Suspense>
    </div>
  );
};

export default React.memo(App);
