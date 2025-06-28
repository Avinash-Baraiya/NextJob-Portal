import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [profile, setProfile] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleCityChange = (city) => {
    setCity(city);
    setSelectedCity(city);
  };
  const handleProfileChange = (profile) => {
    setProfile(profile);
    setSelectedProfile(profile);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(city, profile, searchKeyword));
  }, [dispatch, error, city, profile, searchKeyword]);

  const handleSearch = () => {
    dispatch(fetchJobs(city, profile, searchKeyword));
  };

  const cities = [
"All",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Gurgaon",
  "Noida",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
  "Coimbatore",
  "Surat",
  "Kochi",
  ];

  const profilesArray = [
    "All",
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          <div className="search-tab-wrapper">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button onClick={handleSearch}>Find Job</button>
            <FaSearch />
          </div>
          <div className="wrapper">
            <div className="filter-bar">
              <div className="cities">
                <h2>Filter Job By City</h2>
                {cities.map((city, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={city}
                      name="city"
                      value={city}
                      checked={selectedCity === city}
                      onChange={() => handleCityChange(city)}
                    />
                    <label htmlFor={city}>{city}</label>
                  </div>
                ))}
              </div>
              <div className="cities">
                <h2>Filter Job By Profile</h2>
                {profilesArray.map((profile, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={profile}
                      name="profile"
                      value={profile}
                      checked={selectedProfile === profile}
                      onChange={() => handleProfileChange(profile)}
                    />
                    <label htmlFor={profile}>{profile}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="container">
              <div className="mobile-filter">
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Filter By City</option>
                  {cities.map((city, index) => (
                    <option value={city} key={index}>
                      {city}
                    </option>
                  ))}
                </select>
                <select
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                >
                  <option value="">Filter By Profile</option>
                  {profilesArray.map((profile, index) => (
                    <option value={profile} key={index}>
                      {profile}
                    </option>
                  ))}
                </select>
              </div>
              <div className="jobs_container">
                {jobs && jobs.length > 0 ? (
                  jobs.map((element) => {
                    return (
                      <div className="card" key={element._id}>
                        {element.hiringMultipleCandidates === "Yes" ? (
                          <p className="hiring-multiple">
                            Hiring Multiple Candidates
                          </p>
                        ) : (
                          <p className="hiring">Hiring</p>
                        )}
                        <p className="title">{element.title}</p>
                        <p className="company">{element.companyName}</p>
                        <p className="location">{element.location}</p>
                        <p className="salary">
                          <span>Salary:</span> Rs. {element.salary}
                        </p>
                        <p className="profile">
                          <span>Profile:</span> {element.jobProfile}
                        </p>
                        <p className="posted">
                          <span>Posted On:</span>{" "}
                          {element.jobPostedOn.substring(0, 10)}
                        </p>
                        <div className="btn-wrapper">
                          <Link
                            className="btn"
                            to={`/post/application/${element._id}`}
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <img
                    src="./notfound.png"
                    alt="job-not-found"
                    style={{ width: "100%" }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
