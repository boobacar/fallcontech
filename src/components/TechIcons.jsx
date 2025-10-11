import React from "react";
import { GitBranch, FlaskConical } from "lucide-react";

const cdn = (slug) => `https://cdn.simpleicons.org/${slug}`;

const Img = ({ alt, src, className = "h-8 w-8", ...rest }) => (
  <img src={src} alt={alt} className={className} loading="lazy" decoding="async" {...rest} />
);

export const ReactLogo = (props) => (
  <Img alt="React" src={cdn("react")} {...props} />
);

export const TailwindLogo = (props) => (
  <Img alt="Tailwind CSS" src={cdn("tailwindcss")} {...props} />
);

export const NodeLogo = (props) => (
  <Img alt="Node.js" src={cdn("nodedotjs")} {...props} />
);

export const FirebaseLogo = (props) => (
  <Img alt="Firebase" src={cdn("firebase")} {...props} />
);

export const GitLogo = (props) => (
  <Img alt="GitHub" src={cdn("github")} {...props} />
);

export const VercelLogo = (props) => (
  <Img alt="Vercel" src={cdn("vercel")} {...props} />
);

// Non-brand icons for generic concepts
export const CICDLogo = ({ className = "h-8 w-8 text-primary", ...props }) => (
  <GitBranch className={className} {...props} />
);

export const TestingLogo = ({ className = "h-8 w-8 text-primary", ...props }) => (
  <FlaskConical className={className} {...props} />
);
