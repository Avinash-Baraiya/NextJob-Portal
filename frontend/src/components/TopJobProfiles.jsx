import React from "react";

const TopJobProfiles = () => {
  const profiles = [
    {
      id: 1,
      profile: "Software Development",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      profile: "Web Development",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      profile: "Data Science",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      profile: "Cloud Computing",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      profile: "DevOps",
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
    },
    {
      id: 6,
      profile: "Mobile App Development",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
  ];

  return (
    <section className="services">
      <h3>Top Job Profiles</h3>
      <div className="grid">
        {profiles.map((element) => {
          return (
            <div className="card" key={element.id}>
              <h4>{element.profile}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopJobProfiles;
