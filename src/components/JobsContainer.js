import React from "react";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/all jobs/allJobsSlice";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector(store => store.allJobs);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllJobs())
  },[]);

  if (isLoading) {
    return (
     <Loading center/>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display...</h2>
      </Wrapper>
    );
  }
  
  return (
    <Wrapper>
      <h5>jobs Info</h5>
      <div className="jobs">
        {jobs.map(job => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;