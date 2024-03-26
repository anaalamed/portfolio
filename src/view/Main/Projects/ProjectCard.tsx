import React from "react";
import dayjs from "dayjs";
import { GrGithub } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { devices } from "../../../styles/responsive";
import { generateImgTagByIconName } from "../../../data/projectIcons";
import { Repo } from "../../../data/generateProjectsData";
import IconButton, { IconData } from "./IconButton";
import styled from "styled-components";

const Project: React.FC<{ repo: Repo }> = ({ repo }) => {
  const defaultImgUrl =
    "https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/projectDefaultImg.jpeg?alt=media&token=638845c2-f6e2-49b4-b69b-828a80a3f32a";

  let websiteYoutubeButton: IconData | undefined;
  if (repo.homepage) {
    if (repo.homepage.includes("youtube")) {
      websiteYoutubeButton = {
        link: repo.homepage,
        name: "Youtube",
        iconElement: FaYoutube,
      };
    } else {
      websiteYoutubeButton = {
        link: repo.homepage,
        name: "WebSite",
        iconElement: CgWebsite,
      };
    }
  }

  return (
    <Box id={"repo_".concat(String(repo.id))} className="projectCard">
      <h1>
        {(repo.name.charAt(0).toUpperCase() + repo.name.slice(1)).replace(
          /[- _]/g,
          " "
        )}
      </h1>
      <Image>
        <img src={repo.image_url || defaultImgUrl} alt="projectImg" />
      </Image>

      <p className="description">{repo.description}</p>

      <p>{repo.topics?.map((topic) => generateImgTagByIconName(topic))}</p>

      <p>last updated: {dayjs(repo.pushed_at).format("DD/MM/YY")}</p>

      <Buttons>
        <IconButton
          iconData={{
            link: repo.html_url,
            name: "GitHub",
            iconElement: GrGithub,
          }}
        />

        {websiteYoutubeButton !== undefined ? (
          <IconButton iconData={websiteYoutubeButton} />
        ) : null}
      </Buttons>
    </Box>
  );
};
export default Project;

const Image = styled.div`
  overflow: hidden;
  width: 14rem;
  height: 8rem;
  position: relative;
  border-radius: 10rem;
  margin-bottom: 0.5rem;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: 1s;
  }
`;

const Box = styled.div`
  background: ${(props) => props.theme.topBar};
  width: 20rem;
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  min-height: 23rem;
  border-bottom: 5px solid ${(props) => props.theme.topBar};

  p {
    text-align: center;
    font-size: 1rem;
  }

  .description {
    flex-grow: 1;
    display: flex;
    /* align-items: center; */
  }

  .topics {
    width: 35px;

    :hover {
      transform: scale(1.2);
    }
  }

  &:hover {
    border-bottom: 5px solid white;
  }

  &:hover ${Image} img {
    border: 2px solid;
    border-color: ${(props) => props.theme.button};
    transition: 1s;
    transform: scale(1.1);
  }

  @media ${devices.tablet} {
    margin: 1rem;
  }

  @media ${devices.mobile} {
    width: 16rem;

    .topics {
      width: 30px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  a {
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media ${devices.mobile} {
    a {
      font-size: 1rem;
    }
  }
`;
