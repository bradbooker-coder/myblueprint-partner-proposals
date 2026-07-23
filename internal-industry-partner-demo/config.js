/* ================================================================
   PARTNER PROPOSAL CONFIG — GENERIC TEMPLATE / INTERNAL DEMO
   This is the only file you should need to edit for a new partner.
   Swap the text, numbers, links, and logo below — index.html,
   styles.css, and app.js read everything from this object.
   ================================================================ */
const CONFIG = {
  // Leave this generic ("Your Organization") for the template/demo.
  // For a real proposal, set it to the partner's actual name.
  partnerName: "Your Organization",

  logos: {
    myBlueprint: { src: "assets/myblueprint-logo.png", alt: "myBlueprint" },
    // Leave partner.src empty ("") to show a placeholder "Your Logo
    // Here" chip instead of an image — useful for the template/demo,
    // or any time you're building a proposal before a partner has
    // sent their logo over. Fill it in with a real path once you
    // have one, e.g. "assets/partner-logo.png".
    partner: { src: "", alt: "Your Organization" },
  },

  hero: {
    label: "Collaboration Proposal",
    headline: "Bringing Awareness for Your Industry\nto the Next Generation",
    subheadline: "1 million+ students are actively planning their futures on myBlueprint right now — most without ever having heard of your industry. This is your chance to change that, at the exact moment they're deciding what comes next.",
    stats: [
      { value: "1M+", label: "Students Active" },
      { value: "300+", label: "School Boards" },
      { value: "7–12", label: "Grades" },
    ],
  },

  opportunity: {
    heading: "You Can't Be What You Can't See",
    paragraphs: [
      "Across almost every growing sector, the same problem shows up: employers need talent, but students don't know the roles exist. That awareness gap starts early, and it compounds — by the time students are choosing a post-secondary path, entire industries have never been on their radar.",
      "Global research backs this up. Half of teens are aiming for one of just ten familiar jobs, while a growing share have no clear direction at all. Among Canadian teens specifically, that uncertainty is widespread and starting young.",
      "myBlueprint reaches over 1 million students in Grades 7–12 across Canada. It's where students plan their courses, explore careers, and make decisions about their future. This is the moment, and the platform, to put your industry on the map.",
    ],
    callout: {
      label: "By the Numbers",
      stats: [
        { value: "50%", label: "of teens are aiming for one of just 10 familiar jobs", tooltip: "From the OECD's The State of Global Teenage Career Preparation report, which found career aspirations among teens are concentrated in a narrow band of highly visible occupations — leaving most industries, including likely yours, largely invisible to students." },
        { value: "40%", label: "of 15-year-old Canadian students are unsure of their career pathway", tooltip: "Also from the OECD's The State of Global Teenage Career Preparation report — a signal of growing uncertainty among Canadian teens specifically, and an opening for industries willing to introduce themselves early." },
      ],
      sources: "Source: OECD, The State of Global Teenage Career Preparation.",
    },
  },

  /* --------------------------------------------------------------
     THE PACKAGE — a single combined section (overview tiles with
     "Learn more / Show less" detail). All three stages describe
     the full journey; which ones are included vs. add-ons is
     handled down in `foundation` / `upgrades`, not here.
     -------------------------------------------------------------- */
  package: {
    eyebrow: "The Partnership",
    heading: "The Industry Awareness Package",
    subheading: "Three stages, working together, to take students from first hearing about your industry to acting on it.",
    intro: "Every standard partnership combines always-on content, a labour-market-driven sponsorship activation, and a national stage — covering awareness, exploration, and activation across a single journey.",
    components: [
      {
        id: "launchpad",
        stage: "Stage 1",
        name: "The Launchpad",
        subtitle: "Awareness",
        tagline: "Short-form video content for maximum reach.",
        timing: "Ongoing",
        color: "blue",
        summary: "Builds general awareness, discovery, and top-of-funnel excitement about careers in your industry. Short-form videos that reach the widest possible student audience.",
        format: "Short-form videos.",
        audience: "The widest possible student audience.",
        valueProp: "Passive discovery that puts your industry in front of students before they've started narrowing down options.",
        partnerEffort: "Low. myBlueprint produces and hosts the content; your organization supplies subject matter input and any existing footage or spokespeople.",
        link: { label: "Explore The Launchpad", url: "https://launchpad.myblueprint.ca/" },
      },
      {
        id: "career-pulse",
        stage: "Stage 2",
        name: "Career Pulse",
        subtitle: "Active Engagement",
        tagline: "An interactive space for students to go deeper.",
        timing: "Ongoing",
        color: "navy",
        summary: "A sponsorship space built around real labour market data. Sector-aligned interactive activities that let students actively engage with career pathways.",
        format: "Interactive platform embedding sector-aligned student activities.",
        audience: "Students, educators, and families exploring what's next.",
        valueProp: "Sponsors can directly integrate their brand by offering prizes or incentivizing student participation within these embedded activities.",
        partnerEffort: "Low to medium. Partners help shape the activity prompts and labour-market framing; myBlueprint handles curriculum alignment, teacher communication, and platform logistics.",
        link: { label: "Explore Career Pulse", url: "https://bradbooker-coder.github.io/CareerPulse/index.html" },
      },
      {
        id: "career-launch",
        stage: "Stage 3",
        name: "Career Launch Conference",
        subtitle: "High-Intent Capstone",
        tagline: "A national stage for careers.",
        timing: "April 2027",
        color: "light-blue",
        summary: "A national stage for careers. Reach a highly targeted, high-intent audience through a virtual career fair with student- and teacher-led interactive content.",
        format: "Virtual career fair.",
        audience: "Highly targeted, high-intent students; promoted and utilized heavily by school boards, leveraging a proven model successful over the last two years.",
        valueProp: "Interactive, short-form video sessions delivered to a captive, high-intent audience — with content led by both students and teachers.",
        partnerEffort: "Medium. Partners prepare interactive session content for the event; myBlueprint manages production, promotion to schools, registration, and post-event packaging.",
        link: { label: "Explore Career Launch", url: "https://gilpages.github.io/career-launch-prototype/" },
      },
    ],
    reasons: [
      "Covers all three stages: awareness, exploration, and activation",
      "Creates an ongoing industry presence on the platform",
      "Moves students from passive discovery to active engagement",
      "Reaches students in targeted areas — Canada-wide or province-specific",
    ],
    engagement: {
      title: "Real Student Engagement, Built In",
      desc: "Across the package, students complete industry-specific activities to learn more about your sector — with credentials, badges, or prize draws available at your discretion as the sponsor.",
    },
  },

  /* --------------------------------------------------------------
     PRICING — a mandatory Core Package (Foundation) plus optional
     à la carte upgrades. Total = foundation.price + sum of selected
     upgrade prices. Upgrade prices always render with a leading
     "+" so it's clear they add to the base, not replace it.
     -------------------------------------------------------------- */
  pricingSection: {
    eyebrow: "Your Investment",
    heading: "Choose Your Package",
    desc: "Every partnership starts with the Core Package below. Add either upgrade — or both — to extend your reach.",
  },

  foundation: {
    label: "The Foundation",
    sublabel: "Mandatory",
    name: "Core Package",
    price: 5000,
    includes: [
      { name: "The Launchpad", desc: "Discovery via short-form video content." },
      { name: "Career Pulse", desc: "Active, anytime engagement featuring sector-specific activities designed for seamless educator integration in the classroom." },
    ],
  },

  upgrades: {
    label: "À La Carte Upgrades",
    sublabel: "Optional",
    intro: "Enhance your Core package by adding one or both of our immersive engagement opportunities.",
    options: [
      {
        id: "incentives",
        name: "Managed Student Incentives",
        price: 3500,
        desc: "Incentivize your Career Pulse participation rates by attaching a dedicated reward pool. Includes a $2,500 direct-to-student micro-grant or prize pool to reward submissions. This upgrade features full end-to-end program administration, submission assessment, and prize fulfillment managed entirely by the myBlueprint team.",
      },
      {
        id: "conference-booth",
        name: "Career Launch Conference Booth",
        price: 3000,
        desc: "Convert awareness into action by connecting directly with high-intent students. Premium virtual booth placement at our April 2027 capstone event. Feature interactive video content and connect with students who have already engaged with your Launchpad and Career Pulse content.",
        note: "2026/2027 availability is currently focused on Ontario regional campaigns.",
      },
    ],
  },

  scope: {
    label: "Activation Scope",
    note: "Pricing is the same either way — this just tells us how to plan promotion and reporting.",
    options: [
      { id: "canada-wide", label: "Canada-Wide" },
      { id: "province-specific", label: "Province-Specific" },
    ],
    default: "canada-wide",
    provinces: [
      { id: "ontario", label: "Ontario" },
      { id: "maritimes", label: "Maritimes" },
      { id: "quebec", label: "Quebec" },
      { id: "mb-sk", label: "MB / SK" },
      { id: "ab-territories", label: "AB / Territories" },
      { id: "bc-yukon", label: "BC / Yukon" },
    ],
  },

  about: {
    eyebrow: "About myBlueprint",
    heading: "Canada's Career/Life Planning Platform",
    description: "myBlueprint is career/life planning software designed to help students make more informed decisions about life after high school. Students research careers, post-secondary pathways, complete assessments to learn more about themselves, create portfolios, and so much more.\n\nUsed in more than 300 school boards, it's the career/life planning tool that students already use, and educators already trust.",
    url: "https://myblueprint.ca/",
    stats: [
      { value: "1M+", label: "Students Active" },
      { value: "300+", label: "School Boards" },
      { value: "7–12", label: "Grades" },
    ],
  },

  nextSteps: {
    heading: "Let's Build This Together",
    description: "Ready to explore how this partnership can bring your industry to the next generation? Let's talk.",
    footerText: "A myBlueprint Partnership Proposal",
  },

  contact: {
    name: "Brad Booker",
    title: "Partner Success Manager, myBlueprint",
    email: "brad.booker@myblueprint.ca",
    schedulingUrl: "https://tidycal.com/bradbooker/chat-with-brad-myblueprint",
  },

  sections: [
    { id: "hero", label: "Home" },
    { id: "opportunity", label: "Opportunity" },
    { id: "package", label: "The Package" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "next-steps", label: "Next Steps" },
  ],
};
