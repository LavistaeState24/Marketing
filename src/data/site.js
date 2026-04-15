import {
  ArrowUpRight,
  BadgePercent,
  ChartNoAxesCombined,
  CirclePlay,
  Globe,
  Layers3,
  LayoutPanelTop,
  Megaphone,
  MessageSquareQuote,
  PanelsTopLeft,
  RadioTower,
  SearchCheck,
  ShieldCheck,
  UsersRound,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Compass,
  LayoutTemplate,
  Filter,
  Building2,
  Handshake,
  MapPinned,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import {
  AmanImg,
  AnnuImg,
  DevarshImg,
  DeepImg,
  DipikaImg,
  DharaImg,
  HarshImg,
  KhushiImg,
  KrutikaImg,
  MeetImg,
  NitaImg,
  NishaImg,
  PiyushImg,
  VaishaliImg,
} from "@/assets";
import { KrunalImg } from "../assets";


export const siteNavigation = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/real-estate-branding",
    children: [
      { label: "Real Estate Branding", href: "/services/real-estate-branding" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Content Production", href: "/services/content-production" },
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "CRM Solutions", href: "/services/crm-solutions" },
    ],
  },
  { label: "Packages", href: "/packages" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const heroMetrics = [
  { value: "180Cr+", label: "Inventory marketed across premium launches" },
  { value: "4.7x", label: "Average improvement in qualified lead flow" },
  { value: "11 Cities", label: "Campaign intelligence across key markets" },
];

export const services = [
  {
    icon: Megaphone,
    slug: "real-estate-branding",
    title: "Real Estate Branding",
    description: "Premium brand systems that make a project feel credible, aspirational, and sales-ready.",
    benefits: ["Positioning clarity", "Luxury visual direction", "Campaign-ready brand language"],
  },
  {
    icon: Megaphone,
    slug: "meta-ads",
    title: "Meta Ads",
    description: "High-intent social campaigns built around premium audiences, creative testing, and lead quality.",
    benefits: ["Audience segmentation", "Creative testing cadence", "Retargeting for site visits"],
  },
  {
    icon: SearchCheck,
    slug: "google-ads",
    title: "Google Ads",
    description: "Search campaigns that capture active real estate demand across location, price, and intent signals.",
    benefits: ["Location-led keywords", "Call and form conversion focus", "Budget efficiency for launches"],
  },
  {
    icon: CirclePlay,
    slug: "content-production",
    title: "Content Production",
    description: "Premium reels, launch films, walkthroughs, and campaign assets tailored for property buyers.",
    benefits: ["Script-to-shoot planning", "Project storytelling", "Performance-ready edits"],
  },
  {
    icon: UsersRound,
    slug: "lead-generation",
    title: "Lead Generation",
    description: "Lead systems built to reduce weak enquiries and increase serious sales conversations.",
    benefits: ["High-intent audience mapping", "Lead quality optimization", "Site visit push"],
  },
  {
    icon: PanelsTopLeft,
    slug: "crm-solutions",
    title: "CRM Solutions",
    description: "Routing, follow-up, and nurture workflows that help sales teams respond faster and close cleaner.",
    benefits: ["Source attribution clarity", "Automated follow-up logic", "Sales-ready handoff systems"],
  },
];

export const differentiators = [
  {
    icon: Building2,
    title: "Real estate only",
    description: "We work inside the realities of launches, inventory cycles, channel trust, and buyer psychology.",
  },
  {
    icon: Layers3,
    title: "Full funnel thinking",
    description: "Each campaign is built to move leads from awareness to site visit to a stronger closing pipeline.",
  },
  {
    icon: Sparkles,
    title: "Premium creative standard",
    description: "Luxury brands need disciplined art direction, not noisy ad clutter. That standard shapes every asset.",
  },
  {
    icon: MapPinned,
    title: "Local market intelligence",
    description: "Messaging, audiences, and media plans are adapted to the neighborhoods where demand actually converts.",
  },
];

export const stats = [
  { value: 8, suffix: "+", label: "Years shaping premium project launches" },
  { value: 96, suffix: "+", label: "Projects across residential and plotted developments" },
  { value: 18000, suffix: "+", label: "Qualified leads generated for real estate brands" },
  { value: 320, suffix: "+", label: "Campaign experiments run and optimized" },
];

export const portfolioFilters = ["All", "Launch", "Luxury Villas", "Apartments", "Plots"];

export const portfolioProjects = [
  {
    title: "Aurelia Residences",
    category: "Launch",
    location: "Gurugram",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    metrics: "3.9x site visit uplift in 45 days",
    tags: ["High-rise", "Meta + Google", "Launch Film"],
  },
  {
    title: "Westcourt Villas",
    category: "Luxury Villas",
    location: "Goa",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    metrics: "78% of leads converted to assisted viewings",
    tags: ["Luxury", "Branding", "Buyer Nurture"],
  },
  {
    title: "Skylane One",
    category: "Apartments",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    metrics: "2.8x lower CPL from search-led restructuring",
    tags: ["Apartments", "Search", "Landing Pages"],
  },
  {
    title: "Terra Parc",
    category: "Plots",
    location: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    metrics: "11-day sales event filled through funnel automation",
    tags: ["Plots", "CRM", "WhatsApp"],
  },
];

export const processSteps = [
  {
    title: "Strategy",
    description: "Offer definition, market positioning, audience mapping, and channel mix before spend begins.",
  },
  {
    title: "Creative",
    description: "Premium visuals, scripts, landing copy, and ad concepts designed around project intent.",
  },
  {
    title: "Ads",
    description: "Media deployment across Meta and Google with rapid testing and signal-based iteration.",
  },
  {
    title: "Leads",
    description: "Lead capture, qualification logic, CRM routing, and faster response loops with the sales team.",
  },
  {
    title: "Closing",
    description: "Retargeting, remarketing, visit reminders, and conversion reporting tied to business outcomes.",
  },
];

export const testimonials = [
  {
    quote:
      "Lavista gave our launch a level of polish the local market had not seen before. The quality of leads improved within the first two weeks.",
    name: "Arjun Mehta",
    role: "Director, Aurelia Developers",
  },
  {
    quote:
      "Their team understood the difference between generating leads and generating site visits. That shift changed our sales velocity.",
    name: "Ritika Saran",
    role: "Marketing Head, Westcourt Estates",
  },
  {
    quote:
      "The creative system, reporting discipline, and funnel cleanup made our campaign look premium and perform like one.",
    name: "Neeraj Kulkarni",
    role: "Partner, Skylane Realty",
  },
];

export const serviceDetails = [
  {
    title: "Performance Media For Launches",
    description:
      "When inventory moves fast, media strategy has to move faster. We shape Meta and Google systems around the actual launch window, budget sensitivity, and geography.",
    benefits: ["Campaign architecture for scale", "Local market segmentation", "Lead scoring and quality feedback"],
    cta: "Build My Campaign System",
  },
  {
    title: "Luxury Brand Positioning",
    description:
      "Premium projects should feel expensive before a buyer speaks to sales. We align identity, storytelling, and creative language with that expectation.",
    benefits: ["Naming and positioning support", "Visual tone consistency", "Sharper brochure and digital direction"],
    cta: "Refine My Brand Positioning",
  },
  {
    title: "Content, Funnels, And Nurture",
    description:
      "Real estate buyers need trust over time. We connect landing pages, short-form content, and CRM follow-up to reduce leakage after the click.",
    benefits: ["Landing page optimization", "WhatsApp and CRM routing", "Retargeting for site visits"],
    cta: "Improve My Conversion Funnel",
  },
];

export const caseStudies = [
  {
    title: "Launch-to-visit system for a premium tower release",
    summary:
      "We rebuilt the funnel around high-intent micro-markets, shortened form friction, and added a premium creative direction that matched the inventory price point.",
    outcome: "4.1x increase in qualified bookings for assisted site visits.",
  },
  {
    title: "Luxury villa positioning for NRI buyers",
    summary:
      "The project was attracting broad interest but weak conversion. We narrowed the audience, upgraded storytelling, and aligned the funnel with remote buyer concerns.",
    outcome: "Cost per sales-qualified lead reduced by 36% over 60 days.",
  },
  {
    title: "Plotting campaign with faster sales team response",
    summary:
      "We linked campaign source logic with CRM routing and WhatsApp automation, cutting the lag between enquiry and first response.",
    outcome: "Response time dropped from 3 hours to under 20 minutes.",
  },
];

export const aboutValues = [
  {
    icon: ChartNoAxesCombined,
    title: "Growth with discipline",
    text: "We care about CPL, but we care more about what turns into site visits and sales conversations.",
  },
  {
    icon: ShieldCheck,
    title: "Trust as strategy",
    text: "Premium real estate is bought on confidence. Our creative and UX systems are built to create that trust early.",
  },
  {
    icon: Globe,
    title: "Market-aware execution",
    text: "Every city and every catchment behaves differently. Media and messaging are adapted accordingly.",
  },
  {
    icon: UsersRound,
    title: "Sales alignment",
    text: "Marketing without handoff discipline wastes budget. We build around the actual workflow of the sales team.",
  },
];

export const aboutHero = {
  eyebrow: "About Lavista",
  title: "Real estate marketing built to make premium projects easier to trust and easier to choose.",
  description:
    "Lavista helps builders and developers grow through stronger branding, sharper ad systems, and conversion-focused real estate marketing shaped for serious buyer intent.",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
  imageAlt: "Luxury real estate skyline and modern commercial architecture",
};

export const aboutBrandIntro = {
  eyebrow: "Founder Story",
  position:"Deep Thakkar",
  title:
    "Lavista is a real estate-focused growth partner with premium creative discipline and performance depth.",

  description: [
  "“Lavista is not just about running ads or posting content. It is about building trust before the first call and maintaining that trust until the final closing.” — Deep Thakkar, Founder.",

  "We combine deep Ahmedabad market understanding, luxury-first visual direction, and conversion-led media execution to help projects not just look premium, but actually convert into serious buyers. Every campaign we build is designed with one goal — turning attention into site visits and site visits into confident decisions.",
],

  image: DeepImg,
  imageAlt: "Owner of Lavista",
  ownerLabel: "Founder & Growth Strategist",
  ownerName: "Deep Thakkar",

  highlights: [
    {
      title: "Market Context",
      text: "Ahmedabad buyers respond to trust, locality fit, aspiration, and clarity. Our messaging is shaped around those realities.",
    },
    {
      title: "Execution Standard",
      text: "Campaigns are planned with sales alignment, cleaner lead flow, and a premium presentation standard across every touchpoint.",
    },
  ],
};

export const aboutStory = {
  eyebrow: "Our Story",
  position:"Devarsh Thakkar",
  title:
    "Lavista was created to solve the gaps that keep too many real estate campaigns looking active but converting poorly.",

  description:
    "We saw projects spending heavily on branding and ads without the systems needed to build trust or improve buyer quality.",

  paragraphs: [
    "Weak branding made premium projects feel interchangeable. Random lead generation flooded sales teams with enquiries that looked good in reports but lacked seriousness on the ground.",

    "Builders and developers needed more than ads. They needed positioning, better creative, clearer lead qualification, and a structured path from first click to site visit.",

    "Lavista was built around that need: a real estate growth system where brand perception, campaign performance, and conversion quality work together instead of separately.",

    "“From a creator’s perspective, Lavista stands out because it doesn’t treat marketing as noise. Every campaign has clarity, intent, and a premium feel that connects with real buyers, not just views.” — Devarsh Thakkar, Marketing Influencer\n\nLavista works with a clear system: understanding the project, positioning it correctly, building premium visual communication, targeting the right audience, and ensuring that every lead generated has a higher probability of turning into a site visit. It is not about more leads — it is about better buyers.",
  ],

  image: DevarshImg,
  imageAlt: "Real estate campaign planning and team collaboration",
};

export const aboutWorkProcess = [
  {
    icon: Compass,
    title: "Research & Positioning",
    text: "We study project type, buyer profile, micro-market demand, and pricing context before shaping the campaign angle.",
  },
  {
    icon: LayoutTemplate,
    title: "Creative Strategy",
    text: "Brand language, campaign visuals, landing pages, and content systems are aligned to premium buyer expectations.",
  },
  {
    icon: Megaphone,
    title: "Meta & Google Ads",
    text: "We launch disciplined media systems across active demand and discovery channels with faster testing loops.",
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    text: "Forms, routing logic, and follow-up structure are built to reduce noise and improve conversation quality.",
  },
  {
    icon: Building2,
    title: "Site Visit Push",
    text: "Retargeting, reminders, and trust-building content help move buyers from curiosity to scheduled visits.",
  },
  {
    icon: Handshake,
    title: "Closing Support",
    text: "Marketing and sales signals stay connected so campaigns support better follow-through closer to decision time.",
  },
];

export const aboutStrengths = [
  {
    icon: Building2,
    title: "Real estate focused expertise",
    text: "Lavista is built around launches, inventories, site visits, and buyer intent rather than generic agency playbooks.",
  },
  {
    icon: MapPinned,
    title: "Ahmedabad market understanding",
    text: "We understand the local buyer pulse, catchment behavior, premium positioning needs, and project communication style.",
  },
  {
    icon: Sparkles,
    title: "Premium branding approach",
    text: "Creative is designed to build trust, justify value perception, and make a project feel more credible from first contact.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data-driven campaigns",
    text: "We test demand angles, channel mix, and conversion paths with reporting that points back to commercial outcomes.",
  },
  {
    icon: Filter,
    title: "Filtered leads",
    text: "Lead capture is shaped to reduce weak enquiries and improve the quality of conversations reaching the sales team.",
  },
  {
    icon: BadgeCheck,
    title: "Full-funnel growth system",
    text: "From first impression to site visit reminders, every touchpoint is designed as part of one conversion system.",
  },
];

export const aboutMissionVision = [
  {
    title: "Mission",
    description:
      "Build real estate marketing systems that raise trust, improve lead quality, and support better closing outcomes.",
    text: "Our mission is to help builders, developers, and broker teams move beyond scattered campaigns and into a more premium, measurable, and conversion-led growth model.",
  },
  {
    title: "Vision",
    description:
      "Become the most trusted premium real estate marketing partner for growth-minded projects in Gujarat and beyond.",
    text: "We want every serious project launch to feel sharper, more intentional, and more commercially aligned than the category standard currently allows.",
  },
];

export const aboutStats = [
  { value: "8+", label: "Years of real estate marketing experience" },
  { value: "320+", label: "Campaigns launched and optimized" },
  { value: "18K+", label: "Qualified leads generated" },
  { value: "50+", label: "Developers, builders, and broker teams served" },
];

export const aboutCultureBlocks = [
  {
    title: "Strategy",
    text: "Market mapping, project positioning, and launch planning happen with commercial clarity, not guesswork.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Creative",
    text: "Brand decks, campaign art direction, brochures, reels, and landing experiences are built to feel premium and coherent.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Performance",
    text: "Media decisions are made against buyer quality, cost efficiency, and visit intent rather than vanity reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Client Success",
    text: "The team stays close to project realities, sales pressure, and launch timing so execution remains accountable.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

export const teamDepartments = [
  "All",
  "Web Development",
  "Social Media Marketing",
  "Sales",
  // "Telecalling",
  "Video Editor",
  "Graphic Designer",
  "Field Sales Executive",
  "Human Resources",
];

export const teamMembers = [
  {
    name: "Piyush Malviya",
    role: " Sr Digital Marketing Manager",
    department: "Social Media Marketing",
    description: "Plans premium social calendars that keep projects visible and credible.",
    image: PiyushImg,
  },
  {
    name: "Annu Roy",
    role: "Marketing Sales Manager",
    department: "Social Media Marketing",
    description: "Turns brand direction into fast, polished digital buyer journeys.",
    image: AnnuImg,
  },
  
  {
    name: "Khushi Khatri",
    role: " Marketing & Sales Manager",
    department: "Social Media Marketing",
    description: "Turns market insights into social content that feels sharp and useful.",
    image: KhushiImg,
  },
  {
    name: "Dipika Dutta",
    role: "Influencer & Sales",
    department: "Social Media Marketing",
    description: "Turns market insights into social content that feels sharp and useful.",
    image: DipikaImg,
  },
   
  {
    name: "Aman Solanki",
    role: " Sr Mern Stack Developer",
    department: "Web Development",
    description: "Builds conversion-led websites and landing systems for premium launches.",
    image: AmanImg,
  },

  {
    name: "Vaishali Movaliya",
    role: "Web Designer",
    department: "Web Development",
    description: "Keeps qualified leads moving from enquiry to meaningful sales action.",
    image: VaishaliImg,
  },

  {
    name: "Harsh Kirad",
    role: "Graphic Designer",
    department: "Graphic Designer",
    description: "Creates refined campaign visuals, brochures, and project identity assets.",
    image: HarshImg,
  },
  
  // {
  //   name: "Utsav Patel",
  //   role: "Video Editor & Maker",
  //   department: "Video Editor",
  //   description: "Shapes reels, walkthroughs, and launch films with a premium visual pace.",
  //   image: VaishaliImg,
  // },
  {
    name: "Krunal Patel",
    role: " Sr Sales Lead Manager",
    department: "Sales Manager",
    description: "Connects real estate stories with trusted local creator voices.",
    image: KrunalImg,
  },
  {
    name: "Neeta Trivedi",
    role:"Sales HR",
    department: "Human Resources",
    description: "Manages team operations and ensures smooth internal coordination.",
    image: NitaImg,
  },
   {
    name: "Nisha Gajjar",
    role: " Sr Sales Lead Manager",
    department: "Sales",
    description: "Filters enquiries with careful follow-up and buyer-intent checks.",
    image: NishaImg,
  },

  {
    name: "Kruti Vaghasiya",
    role: "Sales Coordinator",
    department: "Sales",
    description: "Supports project visits, ground coordination, and buyer movement.",
    image: KrutikaImg,
  },

  {
    name: "Dhara",
    role: " Sr Telecalling Executive & Sales",
    department: "Tellcalling",
    description: "Maintains response discipline so warm enquiries do not go cold.",
    image: DharaImg,
  },

  {
    name: "Meet Parmar",
    role: " Jr Sales Executive",
    department: "Sales",
    description: "Aligns marketing demand with site-visit-ready sales conversations.",
    image: MeetImg,
  },

  
];

export const servicePages = [
  {
    slug: "real-estate-branding",
    navLabel: "Real Estate Branding",
    eyebrow: "Real Estate Branding",
    title: "Branding that makes premium projects feel trusted before the first site visit.",
    description:
      "We shape the positioning, identity direction, campaign language, and buyer-facing presentation that help builders and developers command stronger attention.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80",
    what:
      "Real estate branding is the strategic foundation of how a project is understood, remembered, and trusted. For Lavista, it is not just logos or brochures; it is the full perception system around a property launch.",
    start:
      "We begin by understanding the project category, buyer profile, pricing logic, micro-market, inventory pressure, and the emotional reason a buyer should believe in the project.",
    process: [
      "Audit the existing brand, competitor set, and local buyer expectations.",
      "Define the positioning, promise, project story, and communication hierarchy.",
      "Create the visual direction for campaign assets, landing pages, brochures, and social content.",
      "Build launch-ready brand messaging for ads, sales teams, and digital touchpoints.",
      "Refine the brand system using buyer feedback, enquiry quality, and campaign response.",
    ],
    provides: [
      "Project positioning framework",
      "Campaign messaging direction",
      "Premium creative art direction",
      "Brochure and landing page copy guidance",
      "Brand consistency system for launch assets",
    ],
    outcome:
      "Your project enters the market with stronger perceived value, clearer buyer trust, and a premium presentation that supports better lead quality.",
  },
  {
    slug: "meta-ads",
    navLabel: "Meta Ads",
    eyebrow: "Meta Ads",
    title: "Meta campaigns built to turn attention into qualified real estate enquiries.",
    description:
      "We create and optimize Meta ad systems for builders, brokers, and developers who need premium reach, sharper filtering, and stronger site-visit movement.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80",
    what:
      "Meta Ads help real estate brands build demand through Facebook and Instagram using audience segmentation, creative testing, retargeting, and conversion-focused lead journeys.",
    start:
      "We begin with the project stage, buyer ticket size, location radius, creative bank, offer strength, and sales team feedback on what counts as a qualified enquiry.",
    process: [
      "Map audience groups by location, income intent, lifestyle signals, and project fit.",
      "Create campaign architecture for awareness, enquiry capture, and retargeting.",
      "Test premium creatives, hooks, formats, and lead form friction.",
      "Track lead quality with sales feedback and source-level performance signals.",
      "Scale winning segments while tightening weak enquiries and wasted spend.",
    ],
    provides: [
      "Meta campaign setup and optimization",
      "Audience and retargeting structure",
      "Creative testing plan",
      "Lead form and landing flow recommendations",
      "Performance reporting tied to lead quality",
    ],
    outcome:
      "You get cleaner campaign learning, stronger lead quality, and better movement from social attention to site visit conversations.",
  },
  {
    slug: "google-ads",
    navLabel: "Google Ads",
    eyebrow: "Google Ads",
    title: "Search-led campaigns for buyers already looking for property options.",
    description:
      "We structure Google Ads around active demand, local search behavior, project category, and high-intent conversion paths.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80",
    what:
      "Google Ads captures active real estate demand from buyers searching by location, property type, price range, developer name, and purchase intent.",
    start:
      "We start by reviewing the project location, competitor terms, buyer search patterns, budget range, landing page quality, and conversion actions.",
    process: [
      "Research high-intent keywords, exclusions, and local search demand.",
      "Build campaigns around project category, location clusters, and buyer urgency.",
      "Create ad copy that filters casual traffic and attracts serious enquiries.",
      "Optimize landing page actions, call tracking, forms, and conversion signals.",
      "Refine bids, search terms, and budgets using quality and visit-readiness feedback.",
    ],
    provides: [
      "Keyword and competitor search research",
      "Search campaign structure",
      "Ad copy and extension planning",
      "Landing page conversion recommendations",
      "Weekly optimization and quality reporting",
    ],
    outcome:
      "Your project captures buyers with active intent and converts more search demand into qualified calls, forms, and site visit opportunities.",
  },
  {
    slug: "content-production",
    navLabel: "Content Production",
    eyebrow: "Content Production",
    title: "Premium property content that makes a project easier to imagine, trust, and enquire about.",
    description:
      "We plan reels, launch films, walkthroughs, location stories, and campaign creatives around real buyer hesitation and aspiration.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80",
    what:
      "Content production turns property features, location value, lifestyle cues, and developer credibility into visual assets that support campaigns and sales conversations.",
    start:
      "We begin with the project story, target buyer, shoot requirements, available property visuals, sales objections, and the formats needed for each channel.",
    process: [
      "Define the content pillars: trust, lifestyle, location, amenities, and urgency.",
      "Plan scripts, shot lists, hooks, captions, and ad-ready formats.",
      "Produce reels, short videos, walkthrough clips, static creatives, and campaign assets.",
      "Adapt each asset for Meta, Google, landing pages, WhatsApp, and sales follow-up.",
      "Review performance signals and refine future content around enquiry quality.",
    ],
    provides: [
      "Creative concepts and scripts",
      "Reels and short-form video assets",
      "Launch campaign creatives",
      "Location and amenity storytelling",
      "Ad-ready formats for multiple platforms",
    ],
    outcome:
      "Your marketing gets a more premium visual language, stronger buyer engagement, and content that supports both advertising and sales follow-up.",
  },
  {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    eyebrow: "Lead Generation",
    title: "Lead generation systems designed for serious enquiries, not just higher volume.",
    description:
      "We build real estate lead systems around buyer intent, qualification, site visit readiness, and cleaner sales handoff.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    what:
      "Lead generation for real estate should connect targeting, creative, landing friction, qualification logic, and sales workflow into one demand system.",
    start:
      "We start by defining what a qualified lead means for your project: budget, location preference, purchase timeline, property type, and ability to visit.",
    process: [
      "Clarify lead quality criteria with the sales team.",
      "Build audience, creative, and channel plans around high-intent segments.",
      "Create conversion paths that filter weak enquiries without hurting volume unnecessarily.",
      "Track lead source, response time, buyer seriousness, and site visit movement.",
      "Optimize campaigns based on quality, not just CPL.",
    ],
    provides: [
      "Lead generation campaign strategy",
      "Qualification-focused forms and flows",
      "Meta and Google demand routing",
      "Lead quality feedback structure",
      "Site visit push and retargeting logic",
    ],
    outcome:
      "Your team receives fewer random enquiries, more serious buyer conversations, and a clearer path from lead capture to booked site visit.",
  },
  {
    slug: "crm-solutions",
    navLabel: "CRM Solutions",
    eyebrow: "CRM Solutions",
    title: "CRM systems that stop good real estate leads from going cold.",
    description:
      "We design lead routing, follow-up, source tracking, and nurture workflows so sales teams can respond faster and convert cleaner.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=80",
    what:
      "CRM solutions connect marketing sources with sales action. They help teams track, prioritize, follow up, and nurture enquiries instead of losing them after the first call attempt.",
    start:
      "We begin by reviewing current lead flow, response time, sales stages, team responsibilities, WhatsApp usage, and where enquiries currently leak.",
    process: [
      "Map the current lead journey from ad source to sales follow-up.",
      "Define pipeline stages, owner rules, priority tags, and source attribution.",
      "Set up routing, reminders, nurture messages, and follow-up sequences.",
      "Connect CRM reporting with campaign quality and sales feedback.",
      "Refine automations based on missed calls, visit status, and closing signals.",
    ],
    provides: [
      "CRM workflow planning",
      "Lead routing and tagging structure",
      "Follow-up and reminder automation",
      "WhatsApp and nurture sequence guidance",
      "Source-to-sales reporting framework",
    ],
    outcome:
      "Your sales team responds faster, tracks every enquiry better, and converts more marketing demand into visits, callbacks, and closing opportunities.",
  },
];

export const pricingPackageGroups = [
  {
    id: "social-media-management",
    title: "Social Media Management Packages",
    description:
      "For builders and developers who need consistent premium visibility, stronger project storytelling, and a polished social presence.",
    plans: [
      {
        duration: "4 Months",
        price: "₹80,000",
        tag: "Starter",
        description:
          "Best for builders who want strong social media presence and consistent brand visibility without running ads.",
        features: [
          "Instagram + Facebook + LinkedIn + GMB handling",
          "12–15 posts per month",
          "Reels-focused content planning",
          "Content calendar support",
          "Daily engagement guidance",
          "Monthly performance report",
          "Project positioning captions",
          "Follower growth improvement",
        ],
        result:
          "Builds a clean and professional brand presence with steady audience growth and better engagement.",
        cta: "Start Social Management",
      },

      {
        duration: "8 Months",
        price: "₹1,50,000",
        tag: "Most Popular",
        featured: true,
        description:
          "Ideal for projects that need consistent growth, stronger engagement, and better long-term visibility.",
        features: [
          "Full management across all 4 platforms",
          "12–15 posts per month",
          "More reels with trending content strategy",
          "Audience interaction strategy",
          "Daily engagement support",
          "Monthly reporting and growth tracking",
          "Content calendar + campaign alignment",
          "Better long-term organic presence",
        ],
        result:
          "Improves engagement, builds stronger audience connection, and creates consistent organic growth.",
        cta: "Choose 8 Month Plan",
      },

      {
        duration: "12 Months",
        price: "₹2,10,000",
        tag: "Long Term",
        description:
          "Perfect for developers focused on long-term branding, authority building, and sustained digital presence.",
        features: [
          "Consistent content and platform handling",
          "Stronger page authority building",
          "Reels + graphics growth strategy",
          "Detailed reporting and optimization",
          "Long-term content positioning",
          "Brand consistency planning",
          "Better trust building with audience",
          "Ideal for long-term organic visibility",
        ],
        result:
          "Creates strong brand trust, authority, and a stable long-term digital presence.",
        cta: "Build Annual Presence",
      },
    ]
  },
  {
    id: "social-media-ads-leads",
    title: "Social Media + Ads Lead Generation Packages",
    description:
      "For real estate teams that need social visibility plus Meta-led lead generation, retargeting, and enquiry quality improvement.",
    plans: [
      {
        duration: "4 Months",
        price: "₹1,40,000",
        tag: "Starter",
        description:
          "Ideal for projects starting lead generation with structured campaigns and high-intent audience targeting.",
        features: [
          "12–15 posts per month",
          "Reels-focused social media planning",
          "Meta Ads setup + targeting",
          "Google Ads search campaign setup",
          "Lead + retargeting campaign funnel",
          "A/B testing support",
          "High-intent audience targeting",
          "Basic GMB optimization + local SEO basics",
        ],
        result:
          "Generates consistent enquiries with structured campaigns and better lead intent.",
        cta: "Start Lead Campaigns",
      },

      {
        duration: "8 Months",
        price: "₹2,60,000",
        tag: "Most Popular",
        featured: true,
        description:
          "Best for developers looking to improve lead quality, optimize funnels, and build a stronger conversion system.",
        features: [
          "Better quality lead optimization",
          "Landing page optimization",
          "Website guidance / setup support",
          "Stronger campaign refinement",
          "Improved retargeting strategy",
          "Website development at 50% cost",
        ],
        result:
          "Improves lead quality, reduces CPL, and creates a more conversion-focused funnel.",
        cta: "Choose Growth Plan",
      },

      {
        duration: "12 Months",
        price: "₹3,80,000",
        tag: "Long Term",
        description:
          "Designed for projects that want long-term scaling, strong funnel systems, and complete growth-focused execution.",
        features: [
          "Everything in lead generation system",
          "Long-term optimization and scaling",
          "Advanced campaign performance tracking",
          "Website development completely free",
          "CRM setup at 50% cost",
          "Full support for growth-focused campaigns",
          "Better lead nurturing and follow-up strategy",
        ],
        result:
          "Builds a scalable lead generation engine with higher conversions and long-term growth.",
        cta: "Scale Lead System",
      },
    ]
  },
  {
    id: "premium-real-estate-system",
    title: "Full Premium Real Estate Marketing",
    description:
      "For premium launches and growth-focused projects that need branding, content, ads, lead systems, and conversion support working together.",
    plans: [
      {
        duration: "4 Months",
        price: "₹2,40,000",
        tag: "Best Value",
        description:
          "Perfect for projects that need a complete marketing foundation with branding, ads, and lead systems working together.",
        features: [
          "Social media handling",
           "160 plus Visit",
          "Premium reels and graphics",
          "Paid ad campaign setup (Meta + Google)",
          "Lead system and campaign management",
          "SEO + GMB support",
          "Basic funnel setup for enquiries",
        ],
        result:
          "Creates a strong marketing base with consistent visibility and structured lead generation.",
        cta: "Start Full System",
      },

      {
        duration: "8 Months",
        price: "₹4,80,000",
        tag: "Most Popular",
        featured: true,
        description:
          "Ideal for developers looking for deeper campaign optimization, stronger content integration, and better conversion flow.",
        features: [
          "Everything in 4 Months Plan",
          "200 plus Visit",
          "Better campaign consistency and optimization",
          "Stronger content + ad integration",
          "Website development at 50% cost",
          "1 professional cinematic video",
          "2 drone shoots (construction + site)",
          "Full execution support by Lavista Imperial",
        ],
        result:
          "Improves campaign performance, strengthens brand positioning, and drives better quality enquiries.",
        cta: "Choose Growth System",
      },

      {
        duration: "12 Months",
        price: "₹7,20,000",
        tag: "Long Term",
        description:
          "Built for developers who want complete dominance across branding, ads, content, and conversion systems.",
        features: [
          "15+ high-quality graphics & reels per month",
          "350 plus Visit",
          "4 professional cinematic videos",
          "4 drone shoots (construction + site)",
          "Complete social media management",
          "Influencer marketing strategy",
          "Meta + Google high-converting campaigns",
          "Filtered lead generation system",
          "Walking client strategy",
          "Complete website SEO + GMB domination",
          "Website free + CRM at 50% cost",
        ],
        result:
          "Builds a full-scale growth engine with high-quality leads, strong brand authority, and maximum conversions.",
        cta: "Scale Full Marketing System",
      },
    ]
  },
];

export const portfolioHero = {
  eyebrow: "Portfolio",
  title: "Portfolio work shaped for premium projects, sharper buyer quality, and stronger site-visit momentum.",
  description:
    "Lavista builds real estate campaign systems that help apartments, villas, plots, commercial assets, and luxury residences look stronger and convert cleaner.",
  image:
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
  imageAlt: "Premium high-rise portfolio showcase",
};

export const portfolioPageFilters = [
  "All",
  "Apartments",
  "Villas",
  "Plots",
  "Commercial",
  "Weekend Homes",
  "Luxury Residences",
];

export const portfolioPageGallery = [
  {
    title: "Skyline Arc",
    type: "Apartments",
    location: "Ahmedabad",
    result: "3.2x stronger qualified enquiry flow in 60 days",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Verdant Courtyard Villas",
    type: "Villas",
    location: "Sanand",
    result: "41% lower cost per site-visit-ready lead",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Terra District",
    type: "Plots",
    location: "Dholera",
    result: "Launch weekend inventory demand filled ahead of schedule",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Axis Trade Square",
    type: "Commercial",
    location: "Prahlad Nagar",
    result: "Premium positioning improved investor enquiry quality",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Aranya Weekend Estates",
    type: "Weekend Homes",
    location: "Thol",
    result: "High-intent leisure buyer campaigns lifted visit bookings by 2.9x",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Aureum Residences",
    type: "Luxury Residences",
    location: "Bodakdev",
    result: "Sharper creative direction improved premium lead quality within 4 weeks",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
  },
];

export const portfolioApproachBlocks = [
  {
    title: "Position the project with market intelligence",
    text: "Each portfolio engagement begins with demand context, pricing psychology, and buyer-fit positioning so the communication lands with more certainty.",
  },
  {
    title: "Build premium campaign language",
    text: "We shape imagery, landing structure, ad narrative, and trust signals to make the property feel credible before the sales team takes over.",
  },
  {
    title: "Push for movement, not vanity metrics",
    text: "Media decisions are measured against enquiry quality, visit intent, and conversion progression rather than report inflation.",
  },
];

export const portfolioPerformanceHighlights = [
  {
    icon: UsersRound,
    value: "18K+",
    label: "Qualified Leads",
  },
  {
    icon: MapPinned,
    value: "4.5K+",
    label: "Site Visits",
  },
  {
    icon: ShieldCheck,
    value: "320+",
    label: "Closures",
  },
  {
    icon: ChartNoAxesCombined,
    value: "4.7x",
    label: "Conversion Growth",
  },
];

export const contactDetails = [
  { label: "Phone", value: "+91 9213684966", link: "tel:+919213684966" },
  { label: "Email", value: "lavistaimperial@gmail.com", link: "mailto:lavistaimperial@gmail.com" },
  { label: "Office", value: "Lavista Estate and Imperial", link: "https://maps.app.goo.gl/qD2wM9ZQUZvTM3Gv6" },
];

export const trustPillars = [
  "Builders",
  "Developers",
  "Brokers",
  "Launch Marketing",
  "Lead Funnels",
  "Site Visit Growth",
];

export const FooterLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Real Estate Branding", href: "/services/real-estate-branding" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Content Production", href: "/services/content-production" },
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "CRM Solutions", href: "/services/crm-solutions" },
    ],
  },
];

export const FooterContact = [
  {
    icon: MapPin,
    value: "Lavista Estate and Imperial",
    link: "https://maps.app.goo.gl/qD2wM9ZQUZvTM3Gv6"
  },
  {
    icon: Phone,
    value: "+919213684966",
    link: "tel:+919213684966",
  },
  {
    icon: Mail,
    value: "lavistaimperial@gmail.com",
    link: "mailto:lavistaimperial@gmail.com",
  },
];

export const FooterSocials = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/lavistamarketing.agency/reels/?hl=en",
  },
  {
    name: "YouTube",
    icon: Youtube,
    link: "https://youtube.com/@lavistaestates?si=o0cqvTIi63W9aCiP",
  },
];

export const ctaButtons = [
  { label: "Book Strategy Call", href: "/contact", icon: ArrowUpRight },
  { label: "View Portfolio", href: "/portfolio" },
];

export const marqueeQuotes = [
  { icon: BadgePercent, text: "Lead quality above vanity metrics" },
  { icon: MessageSquareQuote, text: "Positioning that supports premium pricing" },
  { icon: MapPinned, text: "Local market clarity, not generic media buying" },
];

