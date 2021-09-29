import React from "react";
import Card from "../components/cardComponent";

const data = [
	{
		id: 1,
		title:
			"Maecenas laoree efficiture sagittis aliquam eleifend nisl.",
		date: "Posted 7 MArch, 2020",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
	},
	{
		id: 1,
		title:
			"Maecenas laoree efficiture sagittis aliquam eleifend nisl.",
		date: "Posted 7 MArch, 2020",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
	},
];

const Blog = () => {
  return (
    <div className="flex md:mx-12 my-40">
      <div></div>
      <div className="lg:flex">
        {data.map((item) => {
          return (
            <Card class title={item.title} date={item.date} body={item.body} />
          );
        })}
      </div>
    </div>
  );
};



export default Blog;
