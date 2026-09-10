export default function Certificates() {

const certificates = [

{
title: "Boston University Hackathon 2024",
tag: "🏆 Winner",
tagColor: "bg-yellow-300 text-black",
description:
"Secured 1st place in the Boston University Hackathon by developing a data-driven solution for business case analysis using advanced analytics techniques.",
image: "/certificates/hackathon.png",
},

{
  title: "AWS Academy Cloud Foundations",
  tag: "AWS Certification",
  tagColor: "bg-green-200",
  description:
  "Completed AWS Academy Cloud Foundations certification, gaining a strong understanding of cloud computing fundamentals including EC2, S3, IAM, and scalable cloud architecture principles.",
  image: "/certificates/aws.png"
},

{
  title: "AI-Powered Text Generation Portal (TextNova)",
  tag: "Open Avenues Foundation - May 2026 · 8 weeks",
  tagColor: "bg-blue-200",
  description:
  "Developed TextNova a GPT-style AI text generation platform using nanoGPT, Flask, and Transformer-based NLP architecture with temperature-controlled generation, Top-k/Top-p sampling, and interactive full-stack web integration, as part of a structured build project led by industry mentor Uttara Ravi",
  image: "/certificates/AItext.png"
},

{
  title: "Personal Finance Tracker (Wallet Wizard)",
  tag: "Open Avenues Foundation - April 2026 · 8 weeks",
  tagColor: "bg-blue-200",
  description:
  "Developed Wallet Wizard a personal finance tracking application as part of a structured build project led by industry mentor Parug Demircioglu",
  image: "/certificates/wallet.png"
},

{
  title: "Data Visualization Virtual Internship",
  tag: "Illinois Tech | GlobalShala",
  tagColor: "bg-red-200",
  description:
  "Completed a 4-week Data Visualization Virtual Internship powered by GlobalShala in collaboration with Illinois Tech, gaining hands-on experience in data analysis, visualization, and data storytelling.",
  image: "/certificates/data_analyst.png"
},

{
  title: "Project Management Virtual Internship",
  tag: "Illinois Tech | GlobalShala",
  tagColor: "bg-red-200",
  description:
  "Completed a 4-week Project Management Virtual Internship powered by GlobalShala in collaboration with Illinois Tech, gaining practical experience in project planning, execution, and team collaboration.",
  image: "/certificates/project_management.png"
},

{
  title: "Cybersecurity: Defensive Hacking Virtual Internship",
  tag: "Illinois Tech | GlobalShala",
  tagColor: "bg-red-200",
  description:
  "Completed a 4-week Cybersecurity: Defensive Hacking Virtual Internship powered by GlobalShala in collaboration with Illinois Tech, gaining hands-on experience in vulnerability analysis and defensive security techniques.",
  image: "/certificates/cybersecurity.png"
}



];

return (

<div>

{/* HEADER */}
<section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-900 to-purple-900 py-10 md:py-12">

  <div className="relative text-center px-6">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
      MY CERTIFICATES
    </h1>

    <p className="text-indigo-200 mt-2 text-sm md:text-base">
      Professional certifications and achievements
    </p>

    <div className="mx-auto mt-4 w-12 h-1 bg-purple-400 rounded-full"></div>

  </div>

</section>


{/* SECTION */}
<div className="bg-[#d8cbb7] py-24">

<section className="max-w-6xl mx-auto px-6">

{certificates.map((cert, index) => (

<div key={index}>

<div className="grid md:grid-cols-2 gap-14 items-center mb-24">

{/* FIRST CERTIFICATE (BLACK FRAME) */}
{index === 0 ? (

<>

{/* IMAGE */}
<div className="bg-white p-3 border-[7px] border-black shadow-2xl">

  <div className="border border-gray-200 p-2">
    <img
      src={cert.image}
      alt={cert.title}
      className="w-full hover:scale-105 transition duration-300"
    />
  </div>

</div>

{/* TEXT */}
<div>

<span className={`${cert.tagColor} text-sm px-4 py-1 rounded-full font-medium`}>
{cert.tag}
</span>

<h2 className="text-4xl font-bold mt-5 mb-4">
{cert.title}
</h2>

<p className="text-gray-800 text-lg leading-relaxed">
{cert.description}
</p>

</div>

</>

) : (

<>
{/* TEXT */}
<div>

<span className={`${cert.tagColor} text-sm px-3 py-1 rounded-full`}>
{cert.tag}
</span>

<h2 className="text-2xl font-semibold mt-4 mb-3">
{cert.title}
</h2>

<p className="text-gray-700 leading-relaxed">
{cert.description}
</p>

</div>

{/* IMAGE */}
<div className="bg-white p-3 border-[7px] border-black shadow-2xl">

<img
  src={cert.image}
  alt={cert.title}
  className="w-full rounded-lg hover:scale-105 transition duration-300"
/>

</div>

</>

)}

</div>

{/* Divider */}
{index !== certificates.length - 1 && (
<hr className="my-16 border-gray-400 opacity-40"/>
)}

</div>

))}

</section>

</div>

</div>

)

}