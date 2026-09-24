import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";
export const Route=createFileRoute("/login")({head:()=>({meta:[{title:"Sign in — Steer"},{name:"description",content:"Secure project execution workspace access."},{property:"og:title",content:"Sign in — Steer"},{property:"og:description",content:"Secure project execution workspace access."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:LoginForm});
