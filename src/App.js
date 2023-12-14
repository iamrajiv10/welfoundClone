
import './App.css';
import { Route, Routes } from "react-router-dom";
import Landing from './Landing/Pages/Recruiter/OverviewRec';
import PageNotFound from './Landing/Pages/PageNotFound';
import OverviewRec from './Landing/Pages/Recruiter/OverviewRec';
import OverviewCan from './Landing/Pages/Candidate/OverviewCan';
import SignUp from './Landing/Pages/SignUp';
import Home from './Landing/Pages/home';
import SignUpCan from './Landing/Pages/Candidate/SignCan';
import SignUpRec from './Landing/Pages/Recruiter/SignRec';
import LogRec from './Landing/Pages/Recruiter/LogRec';
import LogCan from './Landing/Pages/Candidate/LogCan';
import VerticalNav from './Profiles/Candidates/Component/Nav';
import CHome from './Profiles/Candidates/Pages/CHome';
import CProfile from './Profiles/Candidates/Pages/CProfile';
import CApplied from './Profiles/Candidates/Pages/CApplied';
import CJob from './Profiles/Candidates/Pages/CJob';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<OverviewRec />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/overviewCan" element={<OverviewCan />} />
      <Route path="/signUpCan" element={<SignUpCan />} />
      <Route path="/signUpRec" element={<SignUpRec />} />
      <Route path="/loginRec" element={<LogRec />} />
      <Route path="/loginCan" element={<LogCan />} />
      <Route path="/canHome" element={<CHome />} />
      <Route path="/canProfile" element={<CProfile />} />
      <Route path="/canJob" element={<CJob />} />
      <Route path="/canApplied" element={<CApplied />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<Landing />} />


    </Routes>
    </>
  );
}

export default App;
