import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
  imports:[CommonModule],
  standalone:true
})
export class FaqsComponent {
  faqs = [
    {
      question: "What are the operating hours of Joyful Juniors International Preschool and Daycare?",
      answer: "We are open from 8:30 AM to 5:30 PM, Monday to Saturday. We also offer flexible timing options, including our 'Drop and Shop' service for parents who need care on an hourly basis.",
      open: false,
    },
    {
      question: "What age group does Joyful Juniors cater to?",
      answer: "We welcome children from 6 months to 6 years of age. Our programs are tailored to each stage of early childhood development.",
      open: false,
    },
    {
      question: "What safety measures are in place for children?",
      answer: "Safety is our top priority. Our facility is equipped with CCTV surveillance, fully air-conditioned rooms, and secure access for parents. We also maintain a low child-to-teacher ratio to ensure personalized attention.",
      open: false,
    },
    {
      question: "Do you provide meals for the children?",
      answer: "Yes, we provide nutritious meals and snacks throughout the day, carefully planned to meet the dietary needs of growing children. We also accommodate special dietary requirements upon request.",
      open: false,
    },
    {
      question: "What is the curriculum used at Joyful Juniors?",
      answer: "Our curriculum is a blend of play-based learning and structured activities designed to nurture creativity, cognitive development, and social skills. We incorporate elements from international early childhood education systems.",
      open: false,
    },
    {
      question: "Is there an option for part-time enrollment?",
      answer: "Yes, we offer flexible enrollment options, including part-time and hourly care, to suit the diverse needs of parents and children.",
      open: false,
    },
    {
      question: "How do I register my child for Joyful Juniors?",
      answer: "You can visit our facility to get a tour and complete the registration process in person.",
      open: false,
    },
    {
      question: "Can I monitor my child during the day?",
      answer: "Yes, we provide parents with real-time access to CCTV footage of their child’s classroom, allowing you to stay connected throughout the day.",
      open: false,
    },
    {
      question: "Do you offer any extracurricular activities?",
      answer: "Yes, we offer a range of extracurricular activities, including music, art, dance, and physical education, designed to stimulate your child's physical and creative development.",
      open: false,
    },
    {
      question: "What is the teacher-to-child ratio?",
      answer: "Our teacher-to-child ratio is 1:10, ensuring that every child receives individualized care and attention.",
      open: false,
    },
    {
      question: "What is the fee structure?",
      answer: "Our fee structure varies based on the program and hours of enrollment. Please contact us directly for detailed information or visit the Fee Structure section of our website.",
      open: false,
    },
    {
      question: "Is there a trial period for new children?",
      answer: "Yes, we offer a trial period to help new children acclimate to our environment. This allows parents to evaluate if our daycare suits their child's needs.",
      open: false,
    },
    {
      question: "Do you provide transportation services?",
      answer: "Yes, we offer safe and reliable transportation services to and from our daycare for an additional fee.",
      open: false,
    },
    {
      question: "What if my child has special needs?",
      answer: "We believe in inclusive education and strive to provide the best care for children with special needs. Please reach out to us to discuss how we can accommodate your child.",
      open: false,
    },
    {
      question: "What is the 'Drop and Shop' service?",
      answer: "Our 'Drop and Shop' service allows parents to drop off their children for short-term care, while they run errands or shop. This service is available for an hourly fee.",
      open: false,
    },
    {
      question: "What is the Kreedo Curriculum and how is it implemented at Joyful Juniors International Preschool and Daycare?",
      answer: "The Kreedo Curriculum is a play-based, Montessori-inspired educational system that focuses on holistic development through experiential learning. At Joyful Juniors, we implement the Kreedo approach by providing hands-on learning materials that engage children in activities designed to foster critical thinking, problem-solving, creativity, and independence.",
      open: false,
    },
  ];
  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
