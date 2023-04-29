import { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/all jobs/allJobsSlice";

const Stats = () => {
  const { isLoading, monthlyApplication } = useSelector(store => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return (
    <>
      <StatsContainer/>
      {monthlyApplication.length > 0 && <ChartsContainer/>}
    </>
  );
};

export default Stats;
