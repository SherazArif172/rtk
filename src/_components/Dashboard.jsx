import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/slice/DataSlice";

import SideBar from "./SideBar";
import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("state", state);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  if (state.data.isLoading) {
    <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="py-4 bg-gray-300 text-center text-2xl font-bold fixed w-full">
        Dashboad
      </h1>

      <div className="flex ">
        <div className="max-w-80">
          <SideBar />
        </div>

        <div className="mt-24 px-3">
          {id ? (
            <Outlet />
          ) : (
            <div className="flex-grow-1 w-full grid lg:grid-cols-3 gricol  gap-3 mb-7  m h-fit px-5 ">
              {state.data.data.map((item, index) => (
                <Link
                  to={`/dashboard/post/${item.id}`}
                  className="lg:m-0 m-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  key={index}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {item.body}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
