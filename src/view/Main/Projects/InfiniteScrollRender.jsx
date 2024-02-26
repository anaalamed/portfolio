import React, { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import 'antd/dist/antd.min.css';
import styled from "styled-components";
import Project from './ProjectCard';

const InfiniteScrollRender = ({ repos }) => {
  const numProjectsToLoad = 3;
  const [currentRepos, setCurrentRepos] = useState(repos.slice(0, numProjectsToLoad));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      repos.splice(0, numProjectsToLoad);
      setCurrentRepos(currentRepos.concat(repos.slice(0, numProjectsToLoad)))
    }, 1500);

    if (repos.length < numProjectsToLoad) {
      setHasMore(false);
    }
  };

  return (
    <Box
      dataLength={currentRepos.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p >Yay! You have seen it all</p>}
    >
      {currentRepos?.map(repo => (
        <Project key={repo.id} repo={repo} ></Project>
      ))}
    </Box>
  );
};
export default InfiniteScrollRender;

const Box = styled(InfiniteScroll)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    p {
      text-align: center;
      font-weight: bold;
    }
`