import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
  const aboutData = [
    {
        slug: "about-app",
        title: "About the App",
        description1:
        "This App is a sample app for Dojo5",
        description2:
        "Build a small React site that demonstrates integration of a charting library. The data can be fake, but should allow for the user to interact with it in some way.",
        image1:
        ""
    },
    {
        slug: "about-author",
        title: "About the Author",
        description1:
        "This app was developed by Miles Bradley",
        description2:
        "",
        image1:
        <img src="/Miles Bradley Head Shot Small.png" alt="Profile Head Shot" />
    },
  ]

  const { slug } = useParams()
  const aboutContent = aboutData.find(item => item.slug === slug)
  const { title, description1, description2, image1 } = aboutContent

  return (
    <div className="main__content">
        <h1>{title}</h1>
        <p>{description1}</p>
        <p>{description2}</p>
        <br/>
        <p>{image1}</p>
    </div>
  )
}
export default SinglePage