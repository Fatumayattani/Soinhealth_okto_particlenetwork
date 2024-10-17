import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";
import { Book } from "lucide-react";
import { Heart } from "lucide-react";
import { Clipboard } from "lucide-react";
import { Award } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BookOpen />,
    text: "Tailored Educational Hub",
    description:
      "Access foundational wellness articles for free, unlock premium content with Pro, and get expert webinars with Business access.",
  },
  {
    icon: <Users />,
    text: "Tokenized Community Engagement",
    description:
      "Engage in discussions and earn tokens for participation. Pro users get premium forums, while Business users access VIP forums.",
  },
  {
    icon: <Book />,
    text: "Expert-Led Health Resource Library",
    description:
      "Free users get curated resources, Pro subscribers unlock advanced guides, and Business users receive in-depth research and health plans.",
  },
  {
    icon: <Heart />,
    text: "Personalized Support Groups",
    description:
      "Join free general support groups, engage with certified coaches in Pro groups, or receive expert-led coaching with Business access.",
  },
  {
    icon: <Clipboard />,
    text: "Free Sanitary Towels & Health Talks",
    description:
      "Contribute to community initiatives providing free sanitary towels and reproductive health talks to underprivileged girls in schools.",
  },
  {
    icon: <Award />,
    text: "Health Tokens and Incentives",
    description:
      "Earn health tokens by engaging with content, discussions, or challenges, redeemable for premium features or subscription discounts.",
  },
];

export const checklistItems = [
  {
    title: "Create Your Account",
    description:
      "Sign up for free and set up your personal health profile to receive customized content tailored to your needs.",
  },
  {
    title: "Explore the Educational Hub",
    description:
      "Dive into articles, videos, and resources related to women’s health, with exclusive expert content available for Pro and Business users.",
  },
  {
    title: "Engage with Support Groups",
    description:
      "Join general and specialized support groups to connect with certified health coaches and users facing similar health concerns.",
  },
  {
    title: "Participate in Community Forums",
    description:
      "Share experiences and advice in community forums while earning health tokens that can be redeemed for premium content.",
  },
  {
    title: "Take Part in Wellness Challenges",
    description:
      "Engage in community wellness challenges to promote better health, with rewards in health tokens and access to premium resources.",
  },
  {
    title: "Contribute to Social Impact",
    description:
      "Every subscription helps fund initiatives like providing free sanitary towels to underprivileged girls and reproductive health talks in schools.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Access to foundational wellness articles",
      "Participation in community forums",
      "Join general support groups",
      "Earn health tokens for engagement",
    ],
  },
  {
    title: "Pro",
    price: "$5",
    features: [
      "Access to premium educational content",
      "Exclusive webinars with healthcare professionals",
      "Engage in specialized support groups",
      "Higher token rewards and milestone badges",
    ],
  },
  {
    title: "Business",
    price: "$20",
    features: [
      "All Pro features plus advanced resources",
      "Personalized health consultations",
      "Access to in-depth case studies",
      "Exclusive VIP community discussions",
    ],
  },
];




export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
