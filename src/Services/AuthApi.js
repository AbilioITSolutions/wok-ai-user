

import SJ from "../ASSETS/SJ.svg"
import BR from "../ASSETS/BR.svg"
import RR from "../ASSETS/RR.svg"
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AppleIcon from "@mui/icons-material/Apple";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";




export const appointmentData = {
     breadcrumb: ["Find a Doctor", "Layers Clinic"],
  title: "Book an Appointment",
  subtitle: "Schedule your consultation with our qualified healthcare professionals",
  bookingInfo: {
    icon: "AccessTime", 
    text: "Average booking time: 5 minutes"
  },
  help: {
    icon: "HelpOutline",
    text: "Need help?",
    color: "error"
  }
};

export  const steps = [
  { label: "Select Doctor", subLabel: "Choose your healthcare provider" },
  { label: "Schedule", subLabel: "Select appointment slot" },
  { label: "Patient Info", subLabel: "Confirm your details" },
  { label: "Payment", subLabel: "Choose payment method" },
  { label: "Confirmation", subLabel: "Review and confirm" }
];

export const doctors = [
     {
    id: 1,
    name: "Dr. Sarah Johnson",
    experience: "10 years experience",
    specializations: ["Trichologist", "Hair Restoration", "Cosmetologist"],
    rating: 4.9,
    reviews: 234,
    time: "Available from 9:00 AM - 7:30 PM",
    image: SJ,
    available: true
  },
  {
    id: 2,
    name: "Dr. Rajendher Reddy",
    experience: "14 years experience",
    specializations: ["Trichologist", "Hair Restoration", "Cosmetologist"],
    rating: 4.9,
    reviews: 234,
    time: "Available from 9:00 AM - 7:30 PM",
    image: RR,
    available: true
  },
  {
    id: 3,
    name: "Bharath Reddy",
    experience: "14 years experience",
    specializations: ["Trichologist", "Hair Restoration", "Cosmetologist"],
    rating: 4.9,
    reviews: 234,
    time: "Available from 9:00 AM - 7:30 PM",
    image: BR,
    available: false
  }
];


 export const scheduleData = {
  month: "August",
  days: Array.from({ length: 31 }, (_, i) => i + 1), 
  times: [
    { time: "09:00 AM", disabled: false },
    { time: "09:30 AM", disabled: false },
    { time: "10:00 AM", disabled: false },
    { time: "10:30 AM", disabled: false },
    { time: "11:00 AM", disabled: false },
    { time: "11:30 AM", disabled: true }, 
    { time: "12:00 PM", disabled: false },
    { time: "01:00 PM", disabled: true },
  ],
};


export const paymentMethods = [
  {
    id: "card",
    title: "Credit/Debit Card",
    description: "Pay securely with your card",
    icon: <CreditCardIcon />,
  },
  {
    id: "paypal",
    title: "PayPal",
    description: "Pay with your PayPal account",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    id: "apple",
    title: "Apple Pay",
    description: "Quick payment with Touch ID",
    icon: <AppleIcon />,
  },
  {
    id: "insurance",
    title: "Health Insurance",
    description: "Use your insurance coverage",
    icon: <HealthAndSafetyIcon />,
  },
];

 export const confirmationData = {
  doctor: {
    name: "DR. Sarah Johnson",

    specialty: "Hair Specialist",
    experience: "15 years experience",
    image: SJ, 
  },
  consultation: {
    type: "Offline",
    date: "30/08/2025, Saturday",
    time: "11:00 AM EST",
  },
  patient: {
    name: "John Doe",
    email: "johndoe@gmail.com",
    mobile: "+1 (565) 123-4567",
    symptoms: "-",
    medications: "-",
    allergies: "-",
    history: "-",
  },
  payment: {
    mode: "Credit/Debit Card",
    fee: "₹899.0",
    total: "₹899.0",
  },
  preparation: [
    "Ensure stable internet connection for video calls",
    "Test your camera and microphone beforehand",
    "Prepare a list of current medications",
    "Have your insurance card ready if applicable",
  ],
  cancellationPolicy: `You can cancel or reschedule your appointment up to 24 hours 
before the scheduled time without any charges. Cancellations made less than 24 hours 
in advance may be subject to a cancellation fee of $25. No-shows will be charged the 
full consultation fee.`,
};


