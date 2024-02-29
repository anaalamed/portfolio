import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import { IoDocumentAttachOutline } from "react-icons/io5";

export const icons = [
  {
    name: "cv",
    tooltip: "My CV",
    link: "https://firebasestorage.googleapis.com/v0/b/ana-levit-portfolio-ts.appspot.com/o/CV-Ana_Levit.pdf?alt=media&token=cd7e0122-6351-424e-a2e6-d8306abccee3",
    iconElement: IoDocumentAttachOutline,
  },
  {
    name: "github",
    tooltip: "My GitHub profile",
    link: "https://github.com/anaalamed",
    iconElement: GrGithub,
  },
  {
    name: "linkedin",
    tooltip: "My LinkedIn profile",
    link: "https://www.linkedin.com/in/ana-levit",
    iconElement: GrLinkedinOption,
  },
];
