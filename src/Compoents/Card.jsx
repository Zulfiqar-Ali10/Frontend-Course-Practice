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
      imageUrl: "https://www.louisvillecardinal.com/media/2022/11/Depositphotos_122104490_S.jpg",
      title: "Bob Smith",
      description: "Environmental Science student focusing on sustainable energy solutions."
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
      title: "Carol Davis",
      description: "Literature enthusiast exploring the intersection of classic and modern writings."
    },
    {
      imageUrl: "https://thumbs.dreamstime.com/b/female-university-student-gorgeous-indian-portrait-41039145.jpg",
      title: "Davod Bean",
      description: "Aspiring physicist working on quantum computing research projects."
    },
    {
      imageUrl: "https://st2.depositphotos.com/1006611/8886/i/950/depositphotos_88860222-stock-photo-indian-college-student.jpg",
      title: "Frink Lees",
      description: "Business major with a focus on international trade and economics."
    },
    {
      imageUrl: "https://media.istockphoto.com/id/1365601791/photo/shot-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=TqJAlUvSl7Kfcky1LlJcwPYweD1c6awCeZllB_iRgso=",
      title: "Eval Martins",
      description: "Biomedical engineering student developing innovative healthcare technologies."
    }
  ]

  return (
  <>
 
    <div className="container mx-auto px-4 py-10">
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