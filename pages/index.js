import DashboardLayout from "../layouts/dashboard";
import Hero from "../containers/dashboard/hero";
import AnimatedTimeline from "../components/AnimatedTimeline";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);

    return (
        <div>
            <AnimatedTimeline timeline1 = {timeline1}>
                <DashboardLayout>
                    <Hero timeline1 = {timeline1}/>
                </DashboardLayout>
            </AnimatedTimeline>
        </div>
    )
}
