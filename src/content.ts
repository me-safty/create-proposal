export interface PortfolioLink {
  link: string
  isChecked: boolean
  description: string
}

export const portfolioLinks = [
  {
    link: "https://safty-blog.vercel.app",
    isChecked: true,
    description:
      "This is a blog website built with React, Typescript, Nextjs, NextAuth, Tailwind CSS, and Sanity",
  },
  {
    link: "https://saftytube.netlify.app",
    isChecked: true,
    description:
      "This is a youtube clone built with React, Typescript, Material UI, and integrated with youtube api v3",
  },
  {
    link: "https://universe-dawn.com",
    isChecked: true,
    description:
      "This is a landing page built with React, Typescript, SASS, Arwes Framework and Storybook",
  },
  {
    link: "https://me-safty.github.io/personal-portfolio",
    isChecked: true,
    description:
      "fully responsive personal portfolio built with HTML, CSS, Javascript",
  },
  {
    link: "https://me-safty.github.io/bootstrap-temp-1",
    isChecked: true,
    description:
      "fully responsive landing page built with HTML, CSS, Bootstrap 5",
  },
] as PortfolioLink[]

export interface ClientReview {
  name: string
  review: string
  isChecked: boolean
}

export const clientReviews = [
  {
    name: "Jake",
    isChecked: true,
    review:
      "Mohamed is professional and great to work with. Excellent communication and the project was delivered quickly to a high standard. He answered all of my questions and was very helpful. I will definitely work with him again!",
  },
  {
    name: "Shri",
    review:
      "He is a humble and responsible individual who produces clean and impressive work.",
    isChecked: true,
  },
] as ClientReview[]

export const intro =
  "I saw your requirements, and It seems you are looking for a skilled front-end developer in react, typescript, redux, HTML, and CSS to do some fixes and add some features to the project. I am interested in working on your project and I believe I have the skills and expertise to deliver a high-quality product."

export const github =
  "This is my Github profile link: https://github.com/me-safty"

export const whoAmI =
  "I'm Mohamed Elsafty, a front-end developer with 1+ years of experience working on 15+ similar projects. I'm here to help and sure you will like my work. I have experience working with HTML, CSS, TypeScript, React JS, Redux Toolkit, and much more frameworks and libraries."

export const ending =
  "I would love to discuss the project further and address any questions or concerns you may have. I am available for a call or video conference at your convenience. I am eager to learn more about your requirements and how I can contribute to the success of your project. \nI look forward to hearing from you and potentially collaborating on this project."

export const respon = `I'll provide you with a completely responsive website from the largest
screen size down to 320px "the smallest screen width".`

export const long = "I can complete it in no longer than five days or earlier."

export const discount =
  "I accept a low price because this is the first time I have worked with you, where I strive to obtain a good review and provide the best possible service to the Client at the lowest possible cost."

export const testTask =
  "I am willing to provide a free, 2-3 hour test task for you to assess my abilities before making a hiring decision."
