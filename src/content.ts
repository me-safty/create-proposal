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
      "This is a blog website built with react, typescript, nextjs, tailwind CSS, and sanity",
  },
  {
    link: "https://saftytube.netlify.app",
    isChecked: true,
    description:
      "This is a youtube clone built with react, typescript, Material UI, and integrated with youtube api v3",
  },
  {
    link: "https://me-safty.github.io/personal-portfolio",
    isChecked: true,
    description: "fully responsive personal portfolio built with html, css, js",
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
  "I saw your requirements, and It seems you are looking for a skilled ( front-end developer ) in ( react, typescript, redux, HTML, and CSS ) to ( do some fixes and add some features to the project ). I am interested in working on your project and I believe I have the skills and expertise to deliver a high-quality product."

export const github =
  "This is my Github profile link: https://github.com/me-safty"

export const whoAmI =
  "I'm Mohamed Elsafty, a front-end developer with 1+ years of experience working on 15+ similar projects. I'm here to help and sure you will like my work. I have experience working with HTML, CSS, TypeScript, React JS, Redux Toolkit, and much more frameworks and libraries."

export const ending =
  "I would love to discuss the project further and address any questions or concerns you may have. I am available for a call or video conference at your convenience. I am eager to learn more about your requirements and how I can contribute to the success of your project. \nI look forward to hearing from you and potentially collaborating on this project."
