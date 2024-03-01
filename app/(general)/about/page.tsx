import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SEO Title " + (new Date().toString()),
    description: "SEO Description",
     keywords:['omar','programador','armada','bace','informatico']
  };
export default function AboutPage(){
    return (
        <>
            <span className="text-5xl">About Page</span>
        </>
    )
}

