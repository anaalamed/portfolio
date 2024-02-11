import React from "react";

const getIconByName = (name) => {
  switch (name) {
    case "html":
      return "https://img.icons8.com/color/48/000000/html-5.png";
    case "css":
      return "https://img.icons8.com/color/48/000000/css3.png";
    case "js":
    case "javascript":
      return "https://img.icons8.com/color/48/000000/javascript--v1.png";
    case "typescript":
      return "https://img.icons8.com/color/48/000000/typescript.png";
    case "react":
      return "https://img.icons8.com/color/48/000000/react-native.png";
    case "react-native":
      return "https://img.icons8.com/color/48/000000/react-native.png";
    case "redux":
      return "https://img.icons8.com/color/48/000000/redux.png";
    case "nodejs":
      return "https://img.icons8.com/fluency/48/000000/node-js.png";
    case "firebase":
      return "https://img.icons8.com/color/48/000000/firebase.png";
    case "canvas":
      return "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/40/000000/external-paint-canvas-university-vitaliy-gorbachev-blue-vitaly-gorbachev.png";
    case "mongodb":
      return "https://img.icons8.com/color/48/000000/mongodb.png";
    case "heroku":
      return "https://img.icons8.com/color/48/000000/heroku.png";
    case "gatsby":
      return "https://img.icons8.com/?size=512&id=wuXkMKKeb6hi&format=png";
    case "sass":
      return "https://img.icons8.com/color/48/000000/sass.png";
    case "graphql":
      return "https://img.icons8.com/color/48/000000/graphql.png";
    case "apollo":
      return "https://img.icons8.com/color/48/000000/apollo.png";
    case "vue":
      return "https://img.icons8.com/color/48/000000/vue-js.png";
    case "emailjs":
      return "https://img.icons8.com/external-others-colourcreatype/64/000000/external-email-creatype-user-interface-filled-outline-others-colourcreatype-2.png";
    case "google-search-console":
      return "https://img.icons8.com/color/48/000000/google-web-search--v1.png";
    case "airtable":
      return "https://img.icons8.com/ios-filled/48/000000/airtable.png";
    case "java":
      return "https://img.icons8.com/?size=512&id=lTKW3iI3wIT0&format=png";
    case "springboot":
      return "https://img.icons8.com/color/48/000000/spring-logo.png";
    case "mysql":
      return "https://img.icons8.com/color/48/000000/mysql.png";
    case "golang":
      return "https://img.icons8.com/color/48/000000/golang.png";
    case "unity":
      return "https://img.icons8.com/?size=256&id=55O6KKA9CyIA&format=png";
    case "csharp":
    case "c#":
      return "https://img.icons8.com/?size=256&id=Fycm8TUhWmFU&format=png";
  }
};

export const generateImgTagByIconName = (name) => {
  const src = getIconByName(name);

  if (src === undefined) {
    return;
  }

  return React.createElement(
    "img",
    {
      src: src,
      class: "topics",
      // alt: name,
    },
    null
  );
};
