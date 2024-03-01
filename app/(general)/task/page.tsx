import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Task title",
    description: "SEO Description",
     keywords:['turnos','vacunacion']
  };
export default function TaskPage(){
    return (
        <>
            <span className="text-5xl">Task Page</span>
        </>
    )
}

