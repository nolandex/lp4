type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "pro",
        title: "Pro",
        desc: "Unlock advanced features for enhanced content and strategy",
        monthlyPrice: 10,
        yearlyPrice: 120,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Advanced AI content generation",
            "10 social media integrations",
            "Priority email support",
            "10 project limit",
            "Enhanced analytics & insights",
            "Pro model image generation",
            "Team collaboration tools",
            "Custom branding options"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large organizations and agencies",
        monthlyPrice: 15,
        yearlyPrice: 180,
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited AI content generation",
            "All social media integrations",
            "Dedicated account manager",
            "Unlimited projects",
            "Custom analytics & reporting",
            "Enterprise-grade security",
            "Free updates",
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
