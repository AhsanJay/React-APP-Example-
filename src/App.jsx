import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import AddJobs from "./pages/AddJobs";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";

const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};
const deleteJob = async (job) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};
const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
        loader={jobLoader}
      />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage updateJobSubmit={updateJob} />}
        loader={jobLoader}
      />
      <Route path="/add-job" element={<AddJobs addJobSubmit={addJob} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
