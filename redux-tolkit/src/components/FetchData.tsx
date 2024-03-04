import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

interface Post {
  id: number;
  name: string;
}

interface FormData {
  name: string;
  age: number;
}

const retrievePosts = async (): Promise<Post[]> => {
  console.log("fetching");
  const response = await axios.get("http://localhost:4000/users");
  console.log(response);
  return response.data;
};

const postDataMutation = (postData: FormData): Promise<unknown> => {
    return axios.post("http://localhost:4000/users", postData);
};

const FetchData: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | any>();

  const { data, error, isLoading, refetch } = useQuery<Post[]>(
    "postsData",
    retrievePosts
  );
  console.log("data", data);

  const handleRefresh = () => {
    // Manually trigger a refetch of the data
    console.log("refreshig data");
    refetch();
  };

  const mutation = useMutation((postData: FormData) => postDataMutation(postData), {
    onSuccess: () => {
      refetch(); // Manually trigger a refetch after a successful mutation
    },
  });
  const submitData = () => {
    mutation.mutate({ name, age });
    console.log("Hooks", name, age);
  };

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurread:</div>;
  
  if (mutation.isLoading) {
    return <h1>Submiting...</h1>;
  }

  if (mutation.error) {
    return <h1>Error: {(mutation.error as Error).message}</h1>;
  }

  if (mutation.isSuccess) {
    return <h1>Post Submitted</h1>;
  }

  return (
    <form onSubmit={submitData}>
      <ul>
        <h1>Data</h1>
        {data?.map((post: Post) => (
          <li key={post.id}>{post.name}</li>
        ))}
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
        <button style={{ margin: "20px" }} onClick={retrievePosts}>
          get
        </button>
        <button onClick={handleRefresh}>Refresh</button>
      </ul>
    </form>
  );
};

export default FetchData;
