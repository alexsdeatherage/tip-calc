<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<!-- <div align="center">
  <a href="https://github.com/alexsdeatherage/tip-calc">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Tip Calc</h3>

  <p align="center">
    This is a simple web-based tip calculator that calculates how much a tip for a service should be split based on the tip percentage, and the number of people the total cost will be split over.
    <!-- <br />
    <a href="https://github.com/alexsdeatherage/tip-calc"><strong>Explore the docs »</strong></a>
    <br /> -->
    <br />
    <a href="https://tip-service-calculator.netlify.app/">View Demo</a>
    <!-- <a href="https://github.com/alexsdeatherage/tip-calc/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/alexsdeatherage/tip-calc/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Tip Calculator Home](public/images/Tip-Calc-Home.png)

This is a tip calculator that I made to test out a few different technologies that I haven't used before, like Vite, TailwindCSS, DaisyUI, the agent mode in Github Copilot, and pnpm. The app itself is a static website that's been deployed on Netlify. Users can input an amount of money spend on a service, and set either a custom tip percentage, or click on a button for a pre-determinted percentage amount. You can also add in the amount of people you wish to split the tip over. After clicking calculate, it will tell you how each person will need to pay for the tip.
<!-- 
Here's a blank template to get started. To avoid retyping too much info, do a search and replace with your text editor for the following: `github_username`, `repo-name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`, `project_license` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

The only prerequisite for hosting this app on your own is that you should have pnpm, which for many reasons is a better version of npm. https://pnpm.io/. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/alexsdeatherage/tip-calc.git
   ```
2. Install NPM packages via pnpm
   ```sh
   pnpm install
   ```
3. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin alexsdeatherage/tip-calc
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

![Tip Calculator Example](public/images/Tip-Calc-Example.png)

As seen above, you can set a bill amount, the tip percentage, and the number of people to get the amount need to contribute to the tip from each person. After that's done, you can reset the tip calculator to do the next set of calculations. 





<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/alexsdeatherage/tip-calc/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alexsdeatherage/tip-calc" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@alexsdeatherage.bsky.social](https://bsky.app/profile/alexsdeatherage.bsky.social) - alexsdeatherage@gmail.com

Project Link: [https://github.com/alexsdeatherage/tip-calc](https://github.com/alexsdeatherage/tip-calc)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/alexsdeatherage/tip-calc.svg?style=for-the-badge
[contributors-url]: https://github.com/alexsdeatherage/tip-calc/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/alexsdeatherage/tip-calc.svg?style=for-the-badge
[forks-url]: https://github.com/alexsdeatherage/tip-calc/network/members
[stars-shield]: https://img.shields.io/github/stars/alexsdeatherage/tip-calc.svg?style=for-the-badge
[stars-url]: https://github.com/alexsdeatherage/tip-calc/stargazers
[issues-shield]: https://img.shields.io/github/issues/alexsdeatherage/tip-calc.svg?style=for-the-badge
[issues-url]: https://github.com/alexsdeatherage/tip-calc/issues
[license-shield]: https://img.shields.io/github/license/alexsdeatherage/tip-calc.svg?style=for-the-badge
[license-url]: https://github.com/alexsdeatherage/tip-calc/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alex-deatherage-dev
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
