import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import dayjs from "dayjs";
import ReactTooltip from "react-tooltip";
import { GrGithub } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { devices } from "../../../styles/responsive";
import { generateImgTagByIconName } from "../../../data/projectIcons";

interface Repo {
  id: number;
  name: string;
  image_url: string;
  description: string;
  html_url: string;
  pushed_at: string;
  homepage: string;
  topics: [];
}

const Project: React.FC<Repo> = (repo: Repo) => {
  const defaultImgUrl =
    "https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/projectDefaultImg.jpeg?alt=media&token=638845c2-f6e2-49b4-b69b-828a80a3f32a";

  return (
    <ThemeConsumer>
      {(theme) => (
        <Box id={repo.id} className="projectCard">
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
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <Button data-tip="true" data-for="github">
                <GrGithub />
                <ReactTooltip
                  id="github"
                  place="top"
                  effect="solid"
                  backgroundColor={theme.body}
                  textColor={"white"}
                >
                  GitHub
                </ReactTooltip>
              </Button>
            </a>

            {repo.homepage ? (
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                <Button data-tip data-for="website">
                  <CgWebsite />
                  <ReactTooltip
                    id="website"
                    place="top"
                    effect="solid"
                    backgroundColor={theme.body}
                    textColor={"white"}
                  >
                    Website
                  </ReactTooltip>
                </Button>
              </a>
            ) : null}
          </Buttons>
        </Box>
      )}
    </ThemeConsumer>
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

const Button = styled.button`
  background: ${(props) => props.theme.button};
  padding: 0.3rem 3rem 0 3rem;
  border-radius: 1rem;
  cursor: pointer;

  @media ${devices.mobile} {
    padding: 0.2rem 2rem 0 2rem;

    a {
      font-size: 1rem;
    }
  }
`;
