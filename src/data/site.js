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

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
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
    description: "Luxury-first campaign systems that turn attention into qualified residential enquiries.",
    benefits: ["High-intent audience mapping", "Creative testing cadence", "Lead quality optimization"],
  },
  {
    icon: SearchCheck,
    slug: "google-ads",
    title: "Google Ads",
    description: "Search and performance campaigns built around active demand, local catchments, and project urgency.",
    benefits: ["Location-led keywords", "Call and form conversion focus", "Budget efficiency for launches"],
  },
  {
    icon: Sparkles,
    slug: "branding",
    title: "Branding",
    description: "Positioning and premium visual systems that make a project feel credible before the first site visit.",
    benefits: ["Brand story architecture", "Luxury identity direction", "Consistent launch collateral"],
  },
  {
    icon: RadioTower,
    slug: "social-media",
    title: "Social Media",
    description: "Editorial content calendars that keep projects visible, aspirational, and buyer-relevant.",
    benefits: ["Channel-specific planning", "Community storytelling", "Engagement to enquiry journeys"],
  },
  {
    icon: CirclePlay,
    slug: "reels-content",
    title: "Reels / Content",
    description: "Short-form videos, launch films, and visual storytelling tailored for premium real estate buyers.",
    benefits: ["Script-to-shoot planning", "Property lifestyle angles", "Performance-ready edits"],
  },
  {
    icon: LayoutPanelTop,
    slug: "landing-pages",
    title: "Landing Pages",
    description: "Conversion-focused campaign pages with stronger trust signals, faster paths to action, and cleaner UX.",
    benefits: ["Mobile-first structure", "Lead capture UX", "Premium visual hierarchy"],
  },
  {
    icon: PanelsTopLeft,
    slug: "crm-funnels",
    title: "CRM / Funnels",
    description: "Lead routing and nurture workflows that move prospects from first touch to booking-ready conversations.",
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
  eyebrow: "Brand Introduction",
  title: "Lavista is a real estate-focused growth partner with premium creative discipline and performance depth.",
  description:
    "We combine Ahmedabad market understanding, luxury-first visual direction, and conversion-led media execution to help projects look stronger and sell smarter.",
  image:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Lavista brand and strategy discussion in a premium office setting",
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
  title: "Lavista was created to solve the gaps that keep too many real estate campaigns looking active but converting poorly.",
  description:
    "We saw projects spending heavily on branding and ads without the systems needed to build trust or improve buyer quality.",
  paragraphs: [
    "Weak branding made premium projects feel interchangeable. Random lead generation flooded sales teams with enquiries that looked good in reports but lacked seriousness on the ground.",
    "Builders and developers needed more than ads. They needed positioning, better creative, clearer lead qualification, and a structured path from first click to site visit.",
    "Lavista was built around that need: a real estate growth system where brand perception, campaign performance, and conversion quality work together instead of separately.",
  ],
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
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
      { label: "Real Estate Branding", href: "/services" },
      { label: "Meta Ads", href: "/services" },
      { label: "Google Ads", href: "/services" },
      { label: "Content Production", href: "/services" },
      { label: "Lead Generation", href: "/services" },
      { label: "CRM Solutions", href: "/services" },
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

