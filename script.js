const headerBox = document.querySelector(".header");


window.onscroll = () => {
    var c = window.scrollY/(window.innerHeight*5)*150;
    headerBox.style.backgroundColor = `rgba(${97+c}, ${22+c}, ${189-c})`;

}

import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

Octokit.rest.repos
  .listForOrg({
    org: "octokit",
    type: "public",
  })
  .then(({ data }) => {
    // handle data
    console.log(data);
  });
  