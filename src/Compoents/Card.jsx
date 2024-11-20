import React from 'react'

const Card = ({ imageUrl, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function Cards() {
  const students = [
    {
      imageUrl: "https://www.euroschoolindia.com/wp-content/uploads/2023/10/Brown-university-admission-jpg.webp",
      title: "Alice Johnson",
      description: "Computer Science major with a passion for AI and machine learning."
    },
    {
      imageUrl: "",
      title: "Bob Smith",
      description: "Environmental Science student focusing on sustainable energy solutions."
    },
    {
      imageUrl: "",
      title: "Carol Davis",
      description: "Literature enthusiast exploring the intersection of classic and modern writings."
    },
    {
      imageUrl: "",
      title: "David Brown",
      description: "Aspiring physicist working on quantum computing research projects."
    },
    {
      imageUrl: "",
      title: "Eva Martinez",
      description: "Business major with a focus on international trade and economics."
    },
    {
      imageUrl: "",
      title: "Frank Lee",
      description: "Biomedical engineering student developing innovative healthcare technologies."
    }
  ]

  return (
  <>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Outstanding Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <Card key={index} {...student} />
        ))}
      </div>
    </div>
  </>
  )
}