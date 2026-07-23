/* ================================================================
   PARTNER PROPOSAL CONFIG
   This is the only file you should need to edit for a new partner.
   Swap the text, numbers, links, and logo URLs below — index.html,
   styles.css, and app.js read everything from this object.
   ================================================================ */
const CONFIG = {
  partnerName: "Women in Nuclear Canada",

  logos: {
    // Both files live in /assets — see the note in README.md for how
    // to swap these when reusing this template for a new partner.
    myBlueprint: { src: "assets/myblueprint-logo.png", alt: "myBlueprint" },
    partner: { src: "assets/win-canada-logo.png", alt: "Women in Nuclear Canada" },
  },

  hero: {
    label: "Collaboration Proposal",
    headline: "Bringing Nuclear Careers\nto the Next Generation",
    subheadline: "1 million+ students are planning their futures on myBlueprint right now. This is your chance to make sure nuclear is part of that plan.",
    stats: [
      { value: "1M+", label: "Students Active" },
      { value: "300+", label: "School Boards" },
      { value: "7–12", label: "Grades" },
    ],
  },

  opportunity: {
    heading: "You Can't Be What You Can't See",
    paragraphs: [
      "Canada's nuclear industry is entering its largest growth phase in a generation. New builds, refurbishments, and SMR development are creating thousands of roles, but the pipeline of future talent isn't keeping pace.",
      "Most students don't know nuclear careers exist. They can't picture themselves in roles they've never seen. The awareness gap starts early, and it compounds, especially for young women.",
      "myBlueprint reaches over 1 million students in Grades 7–12 across Canada. It's where students plan their courses, explore careers, and make decisions about their future. This is the moment, and the platform, to put nuclear on the map.",
    ],
    callout: {
      label: "By the Numbers",
      stats: [
        { value: "8,400+", label: "new workers needed per year", tooltip: "This figure (specifically 8,407) comes from “Staffing the Nuclear Renaissance,” a workforce modeling report by McMaster University's Nuclear Safety & Design Analysis Lab with BuildForce Canada. It represents the peak annual hiring requirement under the Canada-Wide expansion scenario and refers to “flow” rather than “stock.”" },
        { value: "15,700", label: "job openings from retirements alone by 2028" },
      ],
      sources: "Sources: McMaster University / BuildForce Canada; Electricity Human Resources Canada (EHRC)",
    },
  },

  /* --------------------------------------------------------------
     THE PACKAGE — a single combined section (overview tiles with
     "Learn more / Show less" detail) replacing the old separate
     "how it works" + "recommendation" sections. All three
     components below are the standard, fixed package — there's no
     toggling components on/off anymore. Pricing/scope options live
     further down in `pricingOptions` and `scope`.
     -------------------------------------------------------------- */
  package: {
    eyebrow: "The Partnership",
    heading: "The Nuclear Awareness Package",
    subheading: "Three stages, working together, to take students from first hearing about nuclear careers to acting on them.",
    intro: "Every standard partnership combines always-on content, a labour-market-driven sponsorship activation, and a national stage — covering awareness, exploration, and activation in a single package.",
    components: [
      {
        id: "launchpad",
        stage: "Stage 1",
        name: "The Launchpad",
        subtitle: "Awareness",
        tagline: "Short-form video content for maximum reach.",
        timing: "Year-round",
        color: "blue",
        summary: "Builds general awareness, passive discovery, and top-of-funnel excitement about nuclear careers — reaching the widest possible student audience.",
        format: "Short-form videos.",
        audience: "Wide student audience (maximum eyeballs).",
        valueProp: "Builds general awareness, passive discovery, and top-of-funnel excitement about your specific sector.",
        partnerEffort: "Low. myBlueprint produces and hosts the content; your organization supplies subject matter input and any existing footage or spokespeople.",
        link: { label: "Explore The Launchpad", url: "https://launchpad.myblueprint.ca/" },
      },
      {
        id: "career-pulse",
        stage: "Stage 2",
        name: "Career Pulse",
        subtitle: "Active Engagement",
        tagline: "An interactive space for students to go deeper.",
        timing: "Ongoing activation",
        color: "navy",
        summary: "A sponsorship space built around real labour market data — interactive activities that let students actively engage with nuclear career pathways, not just watch.",
        format: "Interactive platform embedding student activities within in-demand sectors.",
        audience: "Students, educators, and families looking for \u201cwhat's new and incoming.\u201d",
        valueProp: "Sponsors can directly integrate their brand by offering prizes or incentivizing student participation within these embedded activities.",
        partnerEffort: "Low to medium. Partners help shape the activity prompts and labour-market framing; myBlueprint handles curriculum alignment, teacher communication, and platform logistics.",
        link: { label: "Explore Career Pulse", url: "https://bradbooker-coder.github.io/CareerPulse/index.html" },
      },
      {
        id: "career-launch",
        stage: "Stage 3",
        name: "Career Launch Conference",
        subtitle: "High-Intent Capstone",
        tagline: "A national virtual conference every April.",
        timing: "April 2027",
        color: "light-blue",
        summary: "A national stage for nuclear careers — reach a highly targeted, high-intent audience via a model school boards already trust.",
        format: "Virtual conference culminating in April.",
        audience: "Highly targeted; promoted and utilized heavily by school boards, leveraging a proven model successful over the last two years.",
        valueProp: "Industry representatives provide interactive, short-form video sessions to a captive, high-intent audience.",
        partnerEffort: "Low to medium. Partners prepare and deliver a session; myBlueprint manages production, promotion to schools, registration, and post-event content packaging.",
        link: { label: "Explore Career Launch", url: "https://gilpages.github.io/career-launch-prototype/" },
      },
    ],
    reasons: [
      "Covers all three stages: awareness, exploration, and activation",
      "Creates a year-round nuclear presence on the platform",
      "Moves students from passive discovery to active engagement",
      "Reaches students nationally across Canada",
    ],
    engagement: {
      title: "Real Student Engagement, Built In",
      desc: "Across the package, students complete industry-specific activities to learn more about nuclear careers — with credentials, badges, or prize draws available at your discretion as the sponsor.",
    },
  },

  /* --------------------------------------------------------------
     PRICING — flat package, two incentive tiers. No per-component
     toggles or per-region pricing anymore.
     -------------------------------------------------------------- */
  pricingSection: {
    eyebrow: "Your Investment",
    heading: "Choose Your Package",
    desc: "Every option includes all three components above. Choose whether student incentives are included, and whether your activation runs Canada-wide or in a specific province.",
  },
  pricingOptions: [
    {
      id: "with-incentives",
      label: "With Student Incentives",
      price: 7500,
      note: "$2,500 of this is directed to student micro-grants and prizes, which reward standout Career Pulse submissions and drive participation.",
      recommended: true,
    },
    {
      id: "no-incentives",
      label: "Without Student Incentives",
      price: 5000,
      note: "The full three-component package, without a dedicated student micro-grant pool.",
      recommended: false,
    },
  ],
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
    description: "Ready to explore how this collaboration can bring nuclear careers to the next generation? Let's talk.",
    footerText: "Prepared for Women in Nuclear | February 2026",
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
